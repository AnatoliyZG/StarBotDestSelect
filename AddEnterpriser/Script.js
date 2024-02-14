<script src="https://telegram.org/js/telegram-web-app.js"></script>

let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.show();

tg.MainButton.onClick(sendData);

function sendData() {
    tg.sendData("AuthFailed");
}