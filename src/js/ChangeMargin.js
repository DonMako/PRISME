const improveMargin = () => {
    const element = document.getElementById('pdf');
    if (element != null) {
        const style = getComputedStyle(element);
        element.style.lineHeight = (parseFloat(style.lineHeight) / 16) + (0.4) + "em";
    }
}

const diminishMargin = () => {
    const element = document.getElementById('pdf');
    if (element != null) {
        const style = getComputedStyle(element);
        element.style.lineHeight = (parseFloat(style.lineHeight) / 16) - (0.4) + "em";
    }
}

const ChangeMargin = () => {
    return <div style={{'display':'flex','margin': '0.5em'}}>
        <p style={{'color':'black'}}>Changer l'interlignage</p>
        <button aria-label="Diminuer la marge" onClick={diminishMargin}>-</button>
        <button aria-label="Augmenter la marge" onClick={improveMargin}>+</button>
    </div>
}

export default ChangeMargin;