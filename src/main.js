const electron = require('electron');
const {
	shell
} = require('electron');
const {
	app,
	BrowserWindow,
	globalShortcut
} = require("electron");
const {
	ipcMain
} = require('electron')
const timestamp = require('time-stamp');
const path = require('path');
const lineReader = require('line-reader');
const fs = require('fs');
const windowStateKeeper = require('electron-window-state');
const request = require('request');
const open = require('open');
const unirest = require('unirest');

const si = require('systeminformation');
const osModule = require("os");
const sudo = require('sudo-prompt');
const options = {
	name: 'Hamonikr'
};

// require('events').EventEmitter.prototype._maxListeners = 100;
const electronLocalshortcut = require('electron-localshortcut');

const baseurl = "https://console.hamonize.com";
const osType = require('os');

let mainWindow, settingWindow;



function createWindow() {

	mainWindow = new BrowserWindow({
		icon: 'icons/png/emb2.png',
		skipTaskbar: false,
		'width': 530,
		'height': 215,
		frame: false,
		alwaysOnTop: true,
		resizable: true,
		transparent: true,
		show: true,
		webPreferences: {
			defaultEncoding: 'utf8',
			defaultFontFamily: 'cursive',
			focusable: true,
			webviewTag: true,
			contextIsolation: false,
			nodeIntegration: true,
			nodeIntegrationInWorker: true,
			nodeIntegrationInSubFrames: true
		}
	});

	mainWindow.loadURL('file://' + __dirname + '/public/index.html');
	mainWindow.setMenu(null);
	mainWindow.setMenuBarVisibility(false);


	mainWindow.on('closed', function () {
		mainWindow = null;
	});

	mainWindow.webContents.on('did-finish-load', () => {
		mainWindow.show();
	});
	mainWindow.once('ready-to-show', () => {
		mainWindow.show()
	})


	electronLocalshortcut.register(mainWindow, 'F12', () => {
		// log.info('F12 is pressed')
		mainWindow.webContents.toggleDevTools()
	});

}

app.on('ready', () => {
	// setTimeout(createWindow, 500);
	setTimeout(function() {
        createWindow();
    }, 10);
});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow();
	}
});


ipcMain.on('shutdown', (event, path) => {
	console.log("main....shutdown");
	exec("gnome-session-quit --no-prompt", (error, stdout, stderr) => {
		if (error) {
			return;
		}
	});

});


//========================================================================
// # STEP 1. Init Hamonize 
//========================================================================

ipcMain.on('hamonizeInstall', async (event, domain) => {
	console.log("sta1111111111111111111111111111111111111111111111111")
	hamonizeInstall_Action(event, domain);
});
const hamonizeInstall_Action = async (event, domain) => {
	try {
		let userId = await execShellCommand("cat /etc/passwd | grep 1000 | awk -F':' '{print $1}' ");
		console.log("####################userId#########333" + userId);

		let hamonizeProgramInstallProcResult = await hamonizeProgramInstallProc(domain, userId);
		console.log("hamonizeProgramInstall_Result:::::::::::::::::::::::::::::" + hamonizeProgramInstallProcResult);


		if (hamonizeProgramInstallProcResult == 'Y') {
			event.sender.send('hamonizeProgramInstall_Result', hamonizeProgramInstallProcResult);
		} else {

			const machineIdSync = require('node-machine-id').machineIdSync;
			let machindid = machineIdSync({
				original: true
			});

			unirest.post(baseurl + '/hmsvc/pcInfoReset')
				.header('content-type', 'application/json')
				.send({
					events: [{
						uuid: machindid,
						errortype: hamonizeProgramInstallProcResult.trim(),
						domain: domain.trim()

					}]
				})
				.end(function (response) {
					console.log("response.body===========++" + JSON.stringify(response.body));
					event.sender.send('hamonizeProgramInstall_Result', hamonizeProgramInstallProcResult);
				});

		}

	} catch (err) {
		console.log("hamonizeProgramInstall_Action Error---" + err);
		return Object.assign(err);
	}
}

var fileToTail = "/tmp/backup.log";
ipcMain.on('files-tail', (event, domain) => {
        const Tail = require('tail-file');
        const mytail = new Tail(fileToTail, line => {
                console.log(line);
                event.sender.send('files-tail-val', line);
        });
});

