import { ipcRenderer } from "electron"
const{ipcRenderer} = require('electron');

const sendMessageToMain = () =>{
    console.log("hola");
    ipcRenderer.send('message:hello', 'hello from the renderer!')
}