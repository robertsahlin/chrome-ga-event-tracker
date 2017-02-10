var requestFilter = {
    urls: [ "<all_urls>"]
};

extraInfoSpec = ['requestHeaders'];
  
// Chrome will call your listener function in response to every HTTP request

handler = function( details ) {
    if(details.url.indexOf('google-analytics.com/collect') > -1 ) {
        var idx = details.url.indexOf("?");
        var querystring = idx > -1 ? details.url.substr(idx,details.url.length) : "?";
        var url = 'https://<local-endpoint>/a';
        var beacon = document.createElement("img");
        if( beacon.onerror )
          { beacon.onerror = function(){}; }
        if( beacon.onload )
          { beacon.onload  = function(){}; }
        beacon.src = url + '.gif' + querystring;
    }
};

chrome.webRequest.onBeforeSendHeaders.addListener( handler, requestFilter, extraInfoSpec );
