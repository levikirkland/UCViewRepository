const app = document.getElementById('root');

var request = new XMLHttpRequest();
request.withCredentials = true;
request.open("GET", "https://gccdtpilot00.epicorsaas.com/SaaS1002Pilot/api/v2/odata/14864/BaqSvc/CR8_REST_SysRptLst/Data?api-key=LWNLXuwgZbuxIdjqNGuOFBAUhGFgfaweKQZYJBVNzS0Kp");
request.onload = function () {
    
const p = document.createElement('p');
p.setAttribute('class', 'card-text');

var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    
    var obj = document.createElement('object');
    obj.style.width = '100%';
    obj.style.height = '842pt';
    obj.type = 'application/pdf';
    obj.data = 'data:application/pdf;base64,' + data['value'][0]['SysRptLst_RptData'];
    document.body.appendChild(obj);

  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
request.responsetype = 'blob';
request.overrideMimeType('text/plain; charset=x-user-defined');
request.setRequestHeader("Content-Type", "text/json")
request.setRequestHeader("Accept", "application/json");
request.setRequestHeader("X-API-Key", "LWNLXuwgZbuxIdjqNGuOFBAUhGFgfaweKQZYJBVNzS0Kp");
request.setRequestHeader("Authorization", "Basic YWlvdHQ6Q3Izc2NlbmQ=");
var pre = "{  \n   \"whereClauseRMADtl\": \"\",  \n   \"pageSize\": 0,  \n   \"absolutePage\": 0  \n }";

request.send(pre);

function atou(b64) {
    return decodeURIComponent(escape(atob(b64)));
  }