const { app, BrowserWindow, Menu, dialog } = require('electron');
const path = require('path');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Use absolute path to avoid path issues in packaged app
  mainWindow.loadFile(path.join(__dirname, 'signin.html'));

  // Open DevTools (you can comment this out after debugging)
  mainWindow.webContents.openDevTools();

  // Top Menu
  const menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
          label: 'Back to Main Page',
          accelerator: 'CmdOrCtrl+B',
          click: () => {
            mainWindow.loadFile(path.join(__dirname, 'home.html'));
          }
        },
        { role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectAll' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About',
          click: () => {
            dialog.showMessageBox({
              type: 'info',
              title: 'About This App',
              message: 'This is a custom Electron app.\nCreated with Electron!',
              buttons: ['OK']
            });
          }
        }
      ]
    }
  ]);

  Menu.setApplicationMenu(menu);

  // Context Menu
  const contextMenu = Menu.buildFromTemplate([
    { role: 'cut' ,accelerator: 'CmdOrCtrl+X', },
    { role: 'copy' },
    { role: 'paste' },
    { type: 'separator' },
    {
      label: 'Back to Main Page',
      click: () => {
        mainWindow.loadFile(path.join(__dirname, 'home.html'));
      }
    },
    { type: 'separator' },
    { role: 'reload' }
  ]);

  // Ensure the context menu triggers
  mainWindow.webContents.on('context-menu', (event, params) => {
    console.log('Context menu triggered at:', params.x, params.y); // Debug log
    contextMenu.popup({
      window: mainWindow,
      x: params.x,
      y: params.y
    });
  });
}

app.whenReady().then(createWindow);

// macOS behavior
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});