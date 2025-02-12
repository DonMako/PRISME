const eclaircir = () => {
    const element = document.getElementById('pdf');
    if (element != null) {
        element.style.border = "2px solid black";
    }
    let body  = document.getElementsByTagName('body')[0];
    body.style.color = "black";
    body.style.backgroundColor = "white";
}

const assombrir = () => {
    const element = document.getElementById('pdf');
    if (element != null) {
        element.style.border = "2px solid white";
    }
    let body  = document.getElementsByTagName('body')[0];
    body.style.color = "white";
    body.style.backgroundColor = "black";
}

const ChangeMode = () => {
    return <div id="modes">
    <button onClick={eclaircir}>Mode clair</button>
    <button onClick={assombrir}>Mode sombre</button>
    </div>
}

export default ChangeMode;