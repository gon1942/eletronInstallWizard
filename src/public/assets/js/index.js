// const moment = require('moment');
const {
	ipcRenderer
} = require('electron');
const {
	BrowserWindow
} = require('electron')
const path = require('path');
const unirest = require('unirest');

$modal = $(".modal");

// # step 1. install file version check  ====================================
// 폴더 생성 및 프로그램 설치 진행에 필요한 jq, curl 등 설치
// install_program_version_chkeck();

function install_program_version_chkeck() {
	$modal.show();
	popupOpen();
	$(".layerpop__container").text("프로그램 설치를 위한 버전 확인 중 입니다. 잠시만 기다려주세요.!!");

	ipcRenderer.send('install_program_version_chkeck');
}


ipcRenderer.on('install_program_version_chkeckResult', (event, isChkVal) => {

	if (isChkVal == 'Y') {
		// 초기 폴더 생성후 관리 프로그램 설치에 필요한 툴 설치 완료.
		console.log("초기 폴더 생성후 관리 프로그램 설치에 필요한 툴 설치 완료.");
		$modal.hide();
		$("#loadingInfoText").text("");

	} else if (isChkVal == 'N001') {
		//fail make folder 
		fn_alert("프로그램 버전 확인중 오류가 발견되었습니다. 관리자에게 문의 바랍니다. \n Error Code :: [N001]");
		return false;
	} else if (isChkVal == 'N004') {
		// fail get Agent Server Info 
		fn_alert("프로그램 서버 정보 셋팅 오류. 관리자에게 문의 바랍니다. \n Error Code :: [N004]");
		return false;
	} else if (isChkVal == 'U999') {
		console.log("U999====")
		// 설치 프로그램 업데이트 필요..
		$modal.show();
		popupOpen();
		$(".layerpop__container").text("설치 프로그램의 버전이 낮아 업그레이드를 진행합니다.... 잠시만 기다려주세요.!!");
		ipcRenderer.send('install_program_update');
		return false;
	} else if (isChkVal == 'U001') {
		fn_alert("설치 프로그램 업그레이드가 \n 완료되었습니다. 재실행해 주세요..");
		$modal.show();
		$("#loadingInfoText").text("서버 관리 프로그램.. 업그레이드가 완료되었습니다. 재실행해 주세요..!!");
		return false;
	} else if (isChkVal == 'U002') {
		fn_alert("설치 프로그램 업그레이드 중 오류가 발생했습니다. \n 관리자에게 문의 바랍니다.\n Error Code :: [U002]");
		return false;
	} else if (isChkVal == "YDONE") {	//	 프로그램 설치 완료 후 재실행 했을경우 
		document.title = "𝓗𝓪𝓶𝓸𝓷𝓲𝔃𝓮";
		$modal.hide();
		$("#loadingInfoText").text("");

		$("#hmInstallIng").hide();

		$("#hmInstalled").show();
		$("#hmInstalledBody").show();


	} else if (isChkVal == "FREEDONE") {
		document.title = "𝓗𝓪𝓶𝓸𝓷𝓲𝔃𝓮";
		$modal.hide();
		$("#loadingInfoText").text("");

		$("#hmInstallIng").hide();
		$("#hmInstallIngBody").hide();

		$("#hmInstalled").show();
		$("#hmFreeDoneBody").show();
	}

});


// # step 2. autheky chekc ===================================
var doubleSubmitFlag = false;
const installBtn = document.getElementById('install');
installBtn.addEventListener('click', function (event) {
	if (!doubleSubmitFlag) {

		doubleSubmitFlag = false;
		ipcRenderer.send('hamonizeInstall');

	} else {
		doubleSubmitFlag = true;
		return false;
	}

});



//	alert 
function fn_alert(arg) {
	const Dialogs = require('dialogs');
	const dialogs = Dialogs()

	dialogs.alert(arg, () => {
		$(".banner-text").css({
			"z-index": "1000000000"
		});
	});
}

const nowRebootBtn = document.getElementById('nowReboot');
nowRebootBtn.addEventListener('click', function (event) {
	ipcRenderer.send('rebootProc');
});
