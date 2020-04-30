const app = document.getElementById('root');

var request = new XMLHttpRequest();
request.withCredentials = true;
request.open("GET", "https://centralusdtpilot10.epicorsaas.com/saas608Pilot/api/v2/odata/97024/BaqSvc/CR8_OpenAP/Data?api-key=hIBLAtTHSTaxXfwNqWrZJ2ORU10bEIM31tQr5slQPNkEG");
request.onload = function () {

  // Begin accessing JSON data here
  var datum = JSON.parse(this.response);
 
  if (request.status >= 200 && request.status < 400) {
    datum.value.forEach(rma => {
        const outer = document.createElement('div');
        outer.setAttribute('class', 'col-sm-6');
  
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        
        const header = document.createElement('div')
        header.setAttribute('class','card-header');
        header.textContent = `${rma.Vendor_Name}`
        
        const h1 = document.createElement('h5');
        h1.textContent = `VendorID ${rma.Vendor_VendorID}`;
        h1.setAttribute('class', 'card-title')
  
        const cb = document.createElement('div');
        cb.setAttribute('class', 'card-body');
  
        const p = document.createElement('p');
        p.setAttribute('class', 'card-text');
  
        const p2 = document.createElement('p');
        p2.setAttribute('class', 'card-text');

        const p3 = document.createElement('p');
        p3.setAttribute('class', 'card-text');

      var str1 = `Invoice Number: ${rma.APInvHed_InvoiceNum}`;
      var str2 = `Invoice Amount: ${rma.APInvHed_InvoiceAmt}`;
      var str3 = `Invoice Date: ${rma.APInvHed_InvoiceDate}`;
      p.textContent = str1;
      p2.textContent = str2;
      p3.textContent = str3;
      app.appendChild(outer);           
      outer.appendChild(card)
      card.appendChild(header)
      card.appendChild(cb);
      cb.appendChild(h1);
      cb.appendChild(p);
      cb.appendChild(p2);
      cb.appendChild(p3);

    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
request.setRequestHeader("Content-Type", "text/json")
request.setRequestHeader("Accept", "application/json");
//request.setRequestHeader("X-API-Key", "hIBLAtTHSTaxXfwNqWrZJ2ORU10bEIM31tQr5slQPNkEG");
request.setRequestHeader("Authorization", "Basic YWlvdHQ6QiZLMW5zdGFsbA==");
var pre = "{  \n   \"whereClauseRMADtl\": \"\",  \n   \"pageSize\": 0,  \n   \"absolutePage\": 0  \n }";

request.send(pre);