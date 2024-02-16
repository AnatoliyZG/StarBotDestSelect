const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const ip = urlParams.get('ip');
const id = urlParams.get('id');
const sha = urlParams.get('sha');

if (ip == null) {
    send(id, sha);
} else {
    send(id, sha, 'http://' + ip +':4447/bot/');
}


