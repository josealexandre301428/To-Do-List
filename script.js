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

  //requisito 9 = Pontos importantes sobre este requisito:

//* Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

//* Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.

function completed(){
  let buttons = document.getElementById('lista-tarefas');
        buttons.addEventListener('dblclick', (event)=> {
       
          if(event.target.className === 'itens'){
            event.target.className = "itens completed";
          }else if(event.target.className === 'itens completed'){
            event.target.className = "itens";
          }
        }); 
}

// Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista
function apaga(){
  let botao = document.getElementById('apaga-tudo');
    botao.addEventListener('click', function(){
      const quadro = document.querySelector('#lista-tarefas');
      quadro.innerText = "";
      
    });
}
  apaga();
  selectItem();
  createList();
  completed();
}