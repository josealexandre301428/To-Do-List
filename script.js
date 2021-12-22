window.onload = function(){
  //cria itens de lista a partir do input e button
  function createList(){
    let btn = document.querySelector("#criar-tarefa");
    let lista = document.querySelector("#lista-tarefas");
    btn.addEventListener('click', function(){
      let captura = document.getElementById('texto-tarefa');
      let valor = captura.value;
      let row = document.createElement('li');
      row.className = "itens";
      row.innerText = valor;
      lista.appendChild(row);
      captura.value = "";
    });
  }

  //adiciona cor de funo ao item clicado de lista

  function selectItem(){
    let itens = document.getElementById('lista-tarefas');
      itens.addEventListener('click', (event)=> {
        /*let item = document.querySelectorAll(".itens");*/
       
          event.target.className = "fundoSelecao";
        });
      
      }
  selectItem();
  createList();
}