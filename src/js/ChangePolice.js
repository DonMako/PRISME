const changeToOpenDyslexic = () => {
    const element = document.getElementById('pdf');
    if (element != null) {
        element.toggleCass("active");
    }
}

const ChangePolice = () => {
    return <button aria-label="Mettre la police Cursive" onClick={changeToOpenDyslexic} style={{'font-family':'OpenDyslexic'}}>A</button>
}

export default ChangePolice;