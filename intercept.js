function getRequest(details) {

    if (details.method=="POST")

        if (whatIsIt(details.requestBody))
            try {
                var postedString = decodeURIComponent(String.fromCharCode.apply(null,
                    new Uint8Array(details.requestBody.raw[0].bytes)));
            }
            catch(e){
                // console.log(e);
                // some unknown type not included in whatIsIt();

                return;
            }

            if (postedString != undefined && postedString[0]=='{') {

                console.log(postedString);
                console.log(details);

                // get response
                // details.onreadystatechange = function() {
                //
                //     // if (details.readyState == 4 && details.status == 200) {
                //     //     var response = details.responseType;
                //     //     console.log(response);
                //     // }
                // }
                // if (details.readyState == 4 && details.status == 200) {
                //     var response = details.responseType;
                //     console.log("RESPONSE is: " + response);
                // }
            }

}

function whatIsIt(object) {
    var stringConstructor = "test".constructor;
    var arrayConstructor = [].constructor;
    var objectConstructor = ({}).constructor;


    if (Array.isArray(object)){
        return false
    }
    if (object === null) {
        return false;
    }
    if (typeof object === 'undefined') {
        return false;
    }
    if (object.constructor === stringConstructor) {
        return false;
    }
    if (object.constructor === arrayConstructor) {
        return false;
    }
    if (object!=null && object.constructor === objectConstructor) {
        return true;
    }
    {
        return false;
    }


}


chrome.webRequest.onBeforeRequest.addListener(
    getRequest,
    {urls: ["<all_urls>"]},
    ['requestBody']
);