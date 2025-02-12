const cacher = () => {
    const element = document.getElementById('pdf');
     if (element != null) {
        const images = element.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            images.item(i).style.display = 'none';
        }
    }      
}

const afficher = () => {
    const element = document.getElementById('pdf');
     if (element != null) {
        const images = element.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            images.item(i).style.display = '';
        }
    }
}

const ChangeImages = () => {
    return <div style={{'margin': '0.5em'}}>
    <button onClick={afficher}>Afficher les images</button>
    <button onClick={cacher}>Masquer les images</button>
    </div>
}

export default ChangeImages;