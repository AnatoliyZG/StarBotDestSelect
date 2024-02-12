const datalist = document.getElementById('suggestions');
var options = '';
fetch('https://anatoliyzg.github.io/StarBotDestSelect/data.txt')
  .then(response => response.text())
  .then(data => {
    const items = data.split('\n');
    items.forEach(item => {
        options += '<option value="'+item+'" />';
    });
    datalist.innerHTML=options;
  });