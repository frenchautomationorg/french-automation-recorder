const { app, BrowserWindow } = require('electron')
const fs = require('fs');
const Recorder = require('./app/recorder');
const recorder = new Recorder();

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    icon: './assets/img/new_logo_newmips.png'
  })


  mainWindow.loadFile('./html/index.html')

  // mainWindow.webContents.openDevTools();


  recorder.mainWindow = mainWindow;


  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      // mainWindow = null;
  });



}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
const { ipcMain } = require('electron')

ipcMain.on('synchronous-message', (event, arg) => {
    if (arg == null)
        return;

    if (arg.method == 'get') {
        recorder.run(arg.page);
    }
    else if (arg.method == 'post') {
        
    }

    event.returnValue = 'success'
});


// Program builder

ipcMain.on('clickEvent', function(event, data) {
  console.log(data);
});

ipcMain.on('changeEvent', function(event, data) {
  console.log(data);
});

ipcMain.on('submitEvent', function(event, data) {
  console.log(data);
});