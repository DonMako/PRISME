const changeSerif = () => {
    const element = document.getElementById('pdf');
    if (element != null) {
        element.style.fontFamily = "serif";
    }
}

const changeMonospace = () => {
    const element = document.getElementById('pdf');
    if (element != null) {
        element.style.fontFamily = "monospace";
    }
}

const changeCursive = () => {
    const element = document.getElementById('pdf');
    if (element != null) {
        element.style.fontFamily = "cursive";
    }
}

const ChangePolice = () => {
    return <div id="police">
        <p id="choix">Choix de la police du texte</p>
        <button aria-label="Mettre la police Serif" onClick={changeSerif} style={{'font-family':'serif'}}>A</button>
        <button aria-label="Mettre la police Monospace" onClick={changeMonospace} style={{'font-family':'monospace'}}>A</button>
        <button aria-label="Mettre la police Cursive" onClick={changeCursive} style={{'font-family':'cursive'}}>A</button>
    </div>
}

export default ChangePolice;