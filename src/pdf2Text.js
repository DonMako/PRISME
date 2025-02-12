// const functionId = 'pdf-to-text';
// const inputs = {
//   ai_model: 'pytesseract',
//   ai_modelName: 'Google\'s Tessaeract OCR',
//   private: false
// }

const runAITask = (functionId, inputs) => {
return new Promise(async (resolve, reject) => {
    try {
    const taskId = await createTask(functionId, inputs);
    if (taskId?.length <= 0) {
        console.error('Failed to create task: No task ID returned from create.');
        reject('Failed to create task: No task ID created');
        return;
    }
    await pollTaskStatus(
        taskId,
        (data) => {
            console.log('Task completed with output:', JSON.stringify(data.output));
            console.log('Cost of task dollars:', data.costOfTaskDollars);
            resolve(data);
        },
        (error) => {
            console.error('Task failed:', error);
            reject(error);
        }
    );
    } catch (error) {
        console.error('Error creating task:', error);
        reject(error);
    }
});
};

const createTask = async (functionId, inputs) => {
try {
    const response = await fetch('https://spyce.ai/api/create-task', {
    method: 'POST',
    headers: {"Content-Type":"application/json","Authorization":"Bearer null"},
    body: JSON.stringify({
        inputs: inputs,
        functionId: functionId,
    }),
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || 'Failed to create task');
    }
    return data;
} catch (error) {
    console.error('Network error:', error);
    throw new Error('Network error occurred while creating task');
}
};

const pollTaskStatus = async (taskId, onComplete, onFail, maxRetries = 10000, interval = 2000) => {
let retries = 0;
const poll = async () => {
    try {
    const response = await fetch(`https://spyce.ai/api/task-status?taskId=${taskId}`, {
        headers: {"Content-Type":"application/json","Authorization":"Bearer null"}
    });
    
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch task status');
    }

    if (!['completed', 'error'].includes(data?.status)) {
        if (retries >= maxRetries) {
            onFail(new Error('Maximum polling retries reached'));
            return;
        }
        retries++;
        setTimeout(poll, interval);
    } else {
        if (data.status === 'error') {
            onFail(data);
        } else {
            onComplete(data);
        }
    }
    } catch (error) {
        onFail(error);
    }
};

await poll();
};

export default runAITask;

// runAITask(functionId, inputs).then((task) => {
//     console.log("Task completed:", JSON.stringify(task))
//   })
//   .catch((error) => {
//     console.error("Error running AI task:", error);
//   });