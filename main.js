const {app, BrowserWindow} = require('electron');
const windowStateKeeper = require('electron-window-state');
const path = require('path');
const url = require('url');
require('electron-reload')(__dirname);

// Global reference of the window object
let mainWindow;

function createWindow () {
  let winState = windowStateKeeper({
    defaultWidth: 600,
    defaultHeight: 400
  });

  mainWindow = new BrowserWindow({
    width: winState.width,
    height: winState.height,
    minWidth: 600,
    minHeight: 400,
    x: winState.x,
    y: winState.y,
    show: false,
    frame: true
  });

  winState.manage(mainWindow);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Load the 'webpage' that describes the content of our window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'public', 'index.html'),
    protocol: 'file',
    slashes: true
  }));

  // Emitted when the window is closed
  mainWindow.on('closed', () => {
    // Dereference the window object, if you had multi windows you should store it in a windows array
    mainWindow = null;
  });
}

// Called when electron has finished initialisation
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  // On Mac it is more common for an app to stay active in the bg when not closed explicitly
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Interestingly this only runs on Macs, when an app is resurrected from the bg
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// Get/Set the number of notifications displayed in the OS dock, if any
app.setBadgeCount(app.getBadgeCount() + 1);
