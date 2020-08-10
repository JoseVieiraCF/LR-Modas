const { app, BrowserWindow, Notification,Menu } = require('electron')

function createWindow () {
  // create a window
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  

  // load the index file
  win.loadFile('index.html')

  //win.webContents.openDevTools()
}

// This method will be called when Electron has finished
app.whenReady().then(createWindow)

// Quit when all windows are closed.
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



  

