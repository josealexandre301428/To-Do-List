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
    let buttons = document.getElementById('lista-tarefas');
        buttons.addEventListener('click', (event)=> {
        const lista = document.querySelectorAll('.itens');
          lista.forEach(element => {
          element.style.backgroundColor = 'white';
        });
        event.target.style.backgroundColor = "rgb(128 , 128 , 128)";
        });
    
  }
    
  selectItem();
  createList();
}