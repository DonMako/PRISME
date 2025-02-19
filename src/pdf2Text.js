const Optiic = require('optiic');
const optiic = new Optiic({apiKey: 'your_api_key'});
// You can supply a remote url
optiic.process({
url: 'https://optiic.dev/assets/images/samples/we-love-optiic.png'
})
.then(result => console.log(result))
// You can also supply a local image file
optiic.process({
image: 'path/to/image.png'
})
.then(result => console.log(result))