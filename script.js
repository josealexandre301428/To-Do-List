window.onload = function(){
  //cria itens de lista a partir do input e button
  function createList(){
    let btn = document.querySelector("#criar-tarefa");
    let lista = document.querySelector("#lista-tarefas");
    btn.addEventListener('click', function(){
      let captura = document.getElementById('texto-tarefa');
      let valor = captura.value;
      let row = document.createElement('li');
      row.innerText = valor;
      lista.appendChild(row);
      captura.value = "";
    });
  }

  createList();
}