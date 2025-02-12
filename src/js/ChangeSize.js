const improveSize = () => {
    const element = document.getElementById('pdf');
    if (element != null) {
        const style = getComputedStyle(element);
        element.style.fontSize = (parseFloat(style.fontSize) / 16) + (0.4) + "em";
    }
}

const diminishSize = () => {
    const element = document.getElementById('pdf');
    if (element != null) {
        const style = getComputedStyle(element);
        element.style.fontSize = (parseFloat(style.fontSize) / 16) - (0.4) + "em";
    }
}

const ChangeSize = () => {
    return <div style={{'display':'flex','margin': '0.5em'}}>
        <p style={{'color':'black'}}>Changer la taille du texte</p>
        <button aria-label="Diminuer la taille du texte" onClick={diminishSize}>-</button>
        <button aria-label="Augmenter la taille du texte" onClick={improveSize}>+</button>
    </div>
}

export default ChangeSize;