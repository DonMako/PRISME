const changeColor = () => {
    const element = document.getElementById('pdf');
    if (element != null) {
        element.style.color = document.getElementById("front").value;
    }
}

const ChangeFront = () => {
    return <form><label style={{'color':'black'}} htmlFor="front">Changer la couleur du texte</label>
    <select onChange={changeColor} id="front" style={{'margin': '0.5em'}}>
      <option value="black">Noir</option>
      <option value="white">Blanc</option>
      <option value="red">Rouge</option>
      <option value="blue">Bleu</option>
      <option value="yellow">Jaune</option>
      <option value="green">Vert</option>
    </select></form>
}

export default ChangeFront;