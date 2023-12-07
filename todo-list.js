let tarefas = [];
let tarefa;
let listaTarefas;

function adicionarTarefa(){

    //RECUPERAR A TAREFA DIGITADA PELO USUÁRIO
    tarefa = "<tr><td>" + document.querySelector('#tarefa').Value
    + "</td><td><button class='btn btn-danger'>EXCLUIR</button></td></tr>";

    //ADICIONAR A TAREFA AO ARRAY DE TAREFAS 
    tarefas.push(tarefa);
    console.log(tarefas);
    listaTarefas();

}

function listarTarefas(){

    tarefas.forEach(
        function(itemTarefa){
            listaTarefas += itemTarefa;

        }


    );

    document.querySelector('#listaTarefas').innerHTML = listaTarefas;
    listaTarefas = ''

}

function excluirTarefa(){

    tarefas.shift();
    console.log(tarefas);
    listarTarefas();




}