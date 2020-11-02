const fs = require('fs-extra');
const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;

class Robot {
	constructor() {
		this._task = null;
		this._browserInitialized = false;
	}

	get window() {return this._window;}
	set window(win) {this._window = win;}

	get mainWindow() {return this._mainWindow}
	set mainWindow(mainWin) {this._mainWindow = mainWin}



	//
	// PRIVATE FUNCTIONS
	//

	_initBrowser(url) {
		if (this._browserInitialized == true)
			return;

	    // Window initialization
	    this.window = new BrowserWindow({
	    	width: 1000,
	    	height: 1000,
	    	alwaysOnTop: true,
	        closable: true,
	        minimizable: false,
	        resizable: true,
	        webPreferences: { 
	        	nodeIntegration: false,
	        	preload: __dirname + '/../utils/renderer.js'
    		} 
    	})

	    // this.window.webContents.openDevTools();

	    this.window.loadURL(url);

  		this.window.webContents.on('did-navigate', function (event, url, httpResponseCode, httpStatusText) {
    		
    		console.log(url);
    		console.log(httpResponseCode);
    	});

	}


	_end() {

		// Destroy window to reset current page and session
		if (this.window) {
			this.window.destroy()
			this._browserInitialized = false;
		}

	}

	//
	// PUBLIC FUNCTIONS
	//

	run(url) {


		// Init working browser
		this._initBrowser(url);

	}

	stop() {
		this._end();
	}
}

module.exports = Robot;