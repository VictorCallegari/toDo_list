const toDo = new Map();

// Função para criar uma tarefa
function adicionarTarefa(id, titulo, tarefa) {
    if (toDo.has(id)) {
        return "ID de tarefa existente!";
    }

    const data = new Date().toLocaleDateString(); // data atual
    const tarefas = {
        id: id,
        titulo: titulo,
        tarefa: tarefa,
        data: data,
    };

    toDo.set(id, tarefas);
    return "Tarefa adicionada com sucesso!";
}

console.log(adicionarTarefa("001", "Arrumar o quarto", "Arrumar o quarto e organizar os livros"));
console.log(adicionarTarefa("002", "Fazer a janta", "Fazer a janta para minha família"));
console.log(adicionarTarefa("003", "Fazer o trabalho da Ada", "Fazer um To Do List"));
console.log(adicionarTarefa("003", "Passear com o Cachorro ", "Levar o cachorro para passear"));



// Função para deletar uma tarefa
const deletarTarefa = (id) =>  toDo.delete(id) ? "Tarefa deletada com sucesso!" : "Erro ao deletar tarefa";

const deletarPorID = "002";
const resultado = deletarTarefa(deletarPorID);
console.log(resultado);


// Função para editar tarefa salva
function editarTarefa(id, novaTarefa) {
    const tarefaEditada = toDo.get(id);

    if (tarefaEditada) {
        tarefaEditada.tarefa = novaTarefa;
        console.log("Tarefa editada com sucesso!");
        return tarefaEditada; // Retornar a tarefa editada
    }

    console.log("Tarefa não encontrada");
}

const idParaEditar = "003";
const novaDescricao = "Trabalho da ADA realizado!";
const tarefaEditada = editarTarefa(idParaEditar, novaDescricao);



    
// Imprimir a lista atualizada
function imprimirListaToDO() {
    let lista = "";

    for (const [id, tarefas] of toDo.entries()) {
         lista += `ID: ${id} - Titulo: ${tarefas.titulo} - Tarefa: ${tarefas.tarefa}\n`;
    }

    return lista;
}

const listaCompleta = imprimirListaToDO();
console.log(listaCompleta);



// Função para verificar uma tarefa pelo ID
function verificarTarefa(id) {
    if (toDo.has(id)) {
        const tarefas = toDo.get(id);
        return `Titulo: ${tarefas.titulo} - Tarefa: ${tarefas.tarefa} - Data: ${tarefas.data}`;
    }
    return "Tarefa não encontrada";
}

const verificarporID = "003";
const verificacao = verificarTarefa(verificarporID);
console.log(verificacao);


//Função para criar lista de atividades realizadas.

