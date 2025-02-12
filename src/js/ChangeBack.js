const changeColor = () => {
    const element = document.getElementById('pdf');
    if (element != null) {
        element.style.backgroundColor = document.getElementById("back").value;
    }
}

const ChangeBack = () => {
    return <form><label style={{'color':'black'}} htmlFor="back">Changer la couleur du fond</label>
    <select onChange={changeColor} id="back" style={{'margin': '0.5em'}}>
      <option value="white">Blanc</option>
      <option value="black">Noir</option>
      <option value="red">Rouge</option>
      <option value="blue">Bleu</option>
      <option value="yellow">Jaune</option>
      <option value="green">Vert</option>
      </select></form>
}

export default ChangeBack;