import React, { ReactElement } from 'react';

const cacher = function(): void {
    const element = document.getElementById('pdf');
    if (element != null) {
        const images = element.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            images.item(i).style.display = 'none';
        }
    }
}

const afficher = function(): void {
    const element = document.getElementById('pdf');
    if (element != null) {
        const images = element.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            images.item(i).style.display = '';
        }
    }
}

const ChangeImages = function(): ReactElement {
    return <div id="boutonsImages">
        <button onClick={afficher}>Afficher les images</button>
        <button onClick={cacher}>Masquer les images</button>
    </div>
}

export default ChangeImages;