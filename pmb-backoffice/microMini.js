const fs = require('fs');
const {ipcRenderer} = require('electron');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
var miniMicro = "";

async function Imicro() {
    const files = await imagemin(['images/*.{jpg,png}'], {
		destination: 'build/images',
		plugins: [
			imageminJpegtran(),
			imageminPngquant({
				quality: [0.6, 0.8]
			})
		]
	});

	console.log(files);
	//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
    miniMicro = "micro";
    sendMessageToMain();
}

async function Imini() {
    const files = await imagemin(['images/*.{jpg,png}'], {
		destination: 'build/images',
		plugins: [
			imageminJpegtran(),
			imageminPngquant({
				quality: [0.6, 0.8]
			})
		]
	});
    miniMicro = "mini";
	console.log(files);

	//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
    sendMessageToMain();
}

const microMini = () => {
    const files = fs.readdirSync('./icons/png');
    console.log(files);
    const path = './icons/png/16x16.png'

try {
    for (let i = 0; i < files.length; i++) {
        const path = './icons/png/'+files[i]
        if (miniMicro == "mini") {
            if (files[i] != "256x256.png") {
                fs.unlinkSync(path)
            }
        }

        if (miniMicro == "micro") {
            if (files[i] != "32x32.png") {
                fs.unlinkSync(path)
            }
        }
    }

  //file removed
} catch(err) {
  console.error(err)
}
    console.log("Fin del progama")

}


const sendMessageToMain = () => {
    console.log('Clicked');
    ipcRenderer.send('message:hello', 'Hello from the renderer')
    var exec = require('child_process').exec;

var cmd = exec("npm run icon", function(err, stdout, stderr) {
  if (err) {
  }
  console.log(stdout);
  microMini();
});

dir.on('exit', function (code) {
});

}


