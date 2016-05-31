var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
    var mainWindow = new BrowserWindow({
        width: 1024,
        height: 768
    });
    mainWindow.loadURL(`file://${__dirname}/windows/main/main.html`);

    mainWindow.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
