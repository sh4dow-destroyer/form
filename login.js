// define uma função para carregar os dados do arquivo JSON
function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'dados.json', true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}

// define uma função para verificar o login
function verifyLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  loadJSON(function(data) {
    var found = false;
    for (var i = 0; i < data.length; i++) {
      if (data[i].username === username && data[i].password === password) {
        found = true;
        break;
      }
    }
    if (found) {
      alert("Login bem-sucedido!");
      // redireciona para a página inicial após o login bem-sucedido
      window.location.replace("index.html");
    } else {
      alert("Usuário ou senha incorretos. Por favor, tente novamente.");
    }
  });
}

// adiciona um ouvinte de eventos para o botão de login
document.getElementById("login-btn").addEventListener("click", verifyLogin);
