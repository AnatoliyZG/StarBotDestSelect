<script src="https://telegram.org/js/telegram-web-app.js"></script>

let tg = window.Telegram.WebApp;

var MainButton = WebApp.MainButton;
var BackButton = WebApp.BackButton;

MainButton.show();
BackButton.show();

MainButton.onClick(function() {
    WebApp.showAlert("Хорошо, ты нажал на главную кнопку.");
  });
  WebApp.onEvent('mainButtonClicked', function() {
    /* also */
  });
  
  BackButton.onClick(function() {
    WebApp.showAlert("Нет пути назад!");
    
    BackButton.hide();
  });
  WebApp.onEvent('backButtonClicked', function() {
    /* also */
  });