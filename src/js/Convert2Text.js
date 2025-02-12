const convert = () => {
    fetch("https://v2.convertapi.com/convert/pdf/to/txt",
    {
        method: "POST",
        body: JSON.stringify
        ({
          userId: 1,
          title: "Demo Todo Data",
          completed: false,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
    .then((response) => response.json());
}

const Convert2Text = () => {
    return <button onClick={convert}>Convertir le PDF en texte</button>
}

export default Convert2Text;