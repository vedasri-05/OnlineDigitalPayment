// // preload.js
// const { contextBridge, ipcRenderer } = require('electron');

// contextBridge.exposeInMainWorld('electronAPI', {
//     checkEmail: (email) => ipcRenderer.invoke('check-email', email),
//     registerUser: (user) => ipcRenderer.invoke('register-user', user)
// });