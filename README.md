# Hamonize-Connector

### Hamonize-Connector?

하모나이즈 커넥터는 원격지에서 다수의 PC를 관리하는데 필요한 기능들을 설치해주는 프로그램입니다


<br>

###  Usage

#### 1. Hamonize-Center API Url 정보 수정.

Hamonize-Connector는 
Hamonize-Center에서 등록된 원격지 컴퓨터들의 정보를 받아오기위해 Hamonize-Center 서버 API통신을 하고있습니다. 

```
main.js의 baseurl 정보와 ./shell/setServerInfo.sh의 CenterUrl정보를 수정합니다. 

* main.js
const baseurl = "<Hamonize Center Url>";

* setServerInfo.sh
CENTERURL="http://<Hamonize Center Url>/hmsvc/commInfoData"
```
<br>

#### 2. Vpn Client 
Hamonize는 원격지의 컴퓨터 접근을위해 Vpn Ip를 이용하고 있습니다. 

```
cd Hamonize-connector/shell
vi ./vpnInstall.sh 파일 수정

 - SERVER1="<VPN Server IP>"
 - SERVERPORT="<VPN Server Port>"
    
```

#### 3. Hamonize-Connetor는 원격지의 컴퓨터를 관리하는데 필요한 실행 프로그램들을 일괄적으로 프로그램을 설치합니다. 

```

- 디바이스 관리를 위한 Udev 
- Vpn 통신을 위한 OpenVPN 
- 원격지 컴퓨터의 모니터링 도구 Collectd 
- 원격지 접속을 내역을 위한 서비스
- 프로그램 허용및 차단을 위한 Hamonize-Process-Mngr.service
- 원격지 컴퓨터 관리를 위한 Hamonize-Agent 

```


<br>

### Install 

src/ 위치에서 
```
git clone 
cd ./hamonize-connector

npm install
npm start 
```


### Build
hamonize-connector/ 위치에서
```
dpkg-buildpackage -T clean

dpkg-buildpackage -b -us -uc -ui

```
### Contributors

<table>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/jullee96>
            <img src=https://avatars.githubusercontent.com/u/66409676?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=julie lee/>
            <br />
            <sub style="font-size:100px"><b>julie lee</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/yeji0407>
            <img src=https://avatars.githubusercontent.com/u/55476302?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=yeji0407/>
            <br />
            <sub style="font-size:100px"><b>yeji0407</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/gon1942>
            <img src=https://avatars.githubusercontent.com/u/31919227?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=ryan/>
            <br />
            <sub style="font-size:100px"><b>ryan</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/igothere>
            <img src=https://avatars.githubusercontent.com/u/51899018?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Eden/>
            <br />
            <sub style="font-size:100px"><b>Eden</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/chaeya>
            <img src=https://avatars.githubusercontent.com/u/405502?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Kevin Kim/>
            <br />
            <sub style="font-size:100px"><b>Kevin Kim</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/1942kg>
            <img src=https://avatars.githubusercontent.com/u/24218451?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=1942kg/>
            <br />
            <sub style="font-size:100px"><b>1942kg</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/leemgs>
            <img src=https://avatars.githubusercontent.com/u/82404?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Geunsik Lim/>
            <br />
            <sub style="font-size:100px"><b>Geunsik Lim</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/pichecker>
            <img src=https://avatars.githubusercontent.com/u/93516744?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=pichecker/>
            <br />
            <sub style="font-size:100px"><b>pichecker</b></sub>
        </a>
    </td>
</tr>
<tr>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/suyun1017>
            <img src=https://avatars.githubusercontent.com/u/93955272?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=suyun1017/>
            <br />
            <sub style="font-size:100px"><b>suyun1017</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/leerosep>
            <img src=https://avatars.githubusercontent.com/u/93893152?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=rosep/>
            <br />
            <sub style="font-size:100px"><b>rosep</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/khs7516>
            <img src=https://avatars.githubusercontent.com/u/35002528?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=khs7516/>
            <br />
            <sub style="font-size:100px"><b>khs7516</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/yeji980407>
            <img src=https://avatars.githubusercontent.com/u/84702382?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=yeji980407/>
            <br />
            <sub style="font-size:100px"><b>yeji980407</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/bdh1993>
            <img src=https://avatars.githubusercontent.com/u/58254473?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=JamesBae/>
            <br />
            <sub style="font-size:100px"><b>JamesBae</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/hjoon0510>
            <img src=https://avatars.githubusercontent.com/u/34376749?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=Lim Hyunjoon/>
            <br />
            <sub style="font-size:100px"><b>Lim Hyunjoon</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/choonsik2>
            <img src=https://avatars.githubusercontent.com/u/62954933?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=choonsik/>
            <br />
            <sub style="font-size:100px"><b>choonsik</b></sub>
        </a>
    </td>
    <td align="center" style="word-wrap: break-word; width: 150.0; height: 150.0">
        <a href=https://github.com/bigmoment>
            <img src=https://avatars.githubusercontent.com/u/25470869?v=4 width="100;"  style="border-radius:50%;align-items:center;justify-content:center;overflow:hidden;padding-top:10px" alt=saam3/>
            <br />
            <sub style="font-size:100px"><b>saam3</b></sub>
        </a>
    </td>
</tr>
</table>

### 참여하기
* #### :sparkles: [issues](https://github.com/hamonikr/hamonize/issues)

*  Code Style
   * Hamonize-Connector는 Electron + Shell Script 사용
    - Linux Coding Style은 해당 [여기](https://www.kernel.org/doc/html/latest/process/coding-style.html) 를 참조하시기 바랍니다.
    - electronjs는 Prettier Module를 사용
    - 사용방법 :  
      1. npm i -D prettier 
      2. Package.json에 추가 아래의 내용추가 <br><br>
      ```
      {
          ...
          "scripts": {
              "prettier": "prettier --write '**/*.{ts,js,css,html}'"
          }
          ...
      }
      ```
      3. npm run prettier

    
