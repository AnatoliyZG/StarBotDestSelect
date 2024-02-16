const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

var ip = urlParams.get('ip');
const id = urlParams.get('id');
const sha = urlParams.get('sha');

if (ip == null) {
    ip = 'http://176.99.110.196:4447/bot/';
} else {
    ip = 'http://' + ip + ':4447/bot/';
}

function send(code) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', ip, false);

    xhr.setRequestHeader('code', code);
    xhr.setRequestHeader('id', id);
    xhr.setRequestHeader('sha', sha);

    xhr.onload = function () {
        console.log(xhr.responseText);
    };

    xhr.send();
}
