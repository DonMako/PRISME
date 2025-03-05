const improveWidth = () => {
    const element = document.getElementById('pdf');
    if (element != null) {
        const style = getComputedStyle(element);
        element.style.marginLeft = (parseFloat(style.marginLeft) / 16) + (0.4) + "em";
        element.style.marginRight = (parseFloat(style.marginRight) / 16) + (0.4) + "em";
    }
}

const diminishWidth = () => {
    const element = document.getElementById('pdf');
    if (element != null) {
        const style = getComputedStyle(element);
        element.style.marginLeft = (parseFloat(style.marginLeft) / 16) - (0.4) + "em";
        element.style.marginRight = (parseFloat(style.marginRight) / 16) - (0.4) + "em";
    }
}

const ChangeWidth = () => {
    return <div id="boutonsLargeur">
        <p>Changer la largeur du PDF</p>
        <button aria-label="Diminuer la largeur du PDF" onClick={diminishWidth}>-</button>
        <button aria-label="Augmenter la largeur du PDF" onClick={improveWidth}>+</button>
    </div>
}

export default ChangeWidth;
