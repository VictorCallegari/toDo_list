document.addEventListener('DOMContentLoaded', function () { //script seja executado após o carregamento completo da DOM
    const toDo = new Map(); //Foi utilizado o Map() para uso de estudo pode utilizar objetos

    //Função para adicionar a tarefa
    function adicionarTarefa() { 
        //constantes para capturar os elementos de input
        const inputId = document.getElementById('inputId');
        const inputTitulo = document.getElementById('inputTitulo');
        const inputData = document.getElementById('inputData');
        const inputTarefa = document.getElementById('inputTarefa');

        const id = inputId.value;

        if (toDo.has(id)) { //retonra um booleano e informa se a tarefa existe
            alert("ID de tarefa existente!");
            return;
        }

        const data = new Date().toLocaleDateString(); //captura a data atual
        //captura os valores contidos nos inputs de adicionar tarefa
        const tarefas = {
            id: id,
            titulo: inputTitulo.value,
            tarefa: inputTarefa.value,
            data: inputData.value || data, // caso não seja informado uma data ele adiciona a data atual
        };

        // forma de adicionar as informações em um Map()
        toDo.set(id, tarefas);
        alert("Tarefa adicionada com sucesso!");

        inputId.value = "";
        inputTitulo.value = "";
        inputData.value = "";
        inputTarefa.value = "";

        imprimirListanaDom();
    }

    //Função para imprimir as informações que foram adicionadas na tela DOM
    function imprimirListanaDom() {
        const elementoTarefa = document.createElement('div');
        elementoTarefa.classList.add('areaDeTarefas');
        //array criado com cores para futuramente estilizar cada quadro de tarefa
        const coresBackgroung = ["#a5e1e9", "#d5ed89", "#c4bdf3", "#fce8a5", "#ffc296"];

        const listaTarefas = document.getElementById('listaTarefas');
        //zerando a lista de tarefas
        listaTarefas.innerHTML = "";
    
        //utilizando o for of e o entries para rodar todo o map e recuperar os iteraveis
        for (const [id, tarefas] of toDo.entries()) {

            //para cada vez que a função for chamada irá adicionar uma cor aleatória do array criado
            const corback = coresBackgroung[Math.floor(Math.random() * coresBackgroung.length)];
            
            //criação de elemento que irá receber as informações contidas no adicionar tarefas
            const elementoTarefa = document.createElement('div');
            elementoTarefa.innerHTML = `
                <div id="areaDeTarefas" style="background-color: ${corback};">
                    <h3 id="headerTarefas">
                        <p> ${id} - Título: ${tarefas.titulo} - Data: ${tarefas.data}  </p> 
                    </h3>
                    <ul id="descricaoTarefa">
                        <li>Tarefa: ${tarefas.tarefa} </li>
                    </ul>
                    <section id="listaBTN">
                        <button id="tarefaConcluida_${id}" class="btnTarefaConcluida">Tarefa concluída</button>
                        <button id="editarTarefa_${id}" class="btnTarefaEditar">Editar</button>
                        <button id="excluirTarefa_${id}" class="btnTarefaEcluir">Excluir</button>
                    </section> 
                </div>   
                <hr>`;
    
            listaTarefas.appendChild(elementoTarefa);
    
            const botaoConcluir = document.getElementById(`tarefaConcluida_${id}`);
            botaoConcluir.addEventListener('click', () => {
                // futuramente adicionar área com lista de tarefas concluídas
            });
            
            //função para editar a tarefa criada baseada no id
            const botaoEditar = document.getElementById(`editarTarefa_${id}`);
            botaoEditar.addEventListener('click', () => {
                document.getElementById('formEditarTarefa').style.display = 'block'; //torna o formulario de edição visível
    
                const editInputId = document.getElementById('editInputId');
                const editInputTitulo = document.getElementById('editInputTitulo');
                const editInputData = document.getElementById('editInputData');
                const editInputTarefa = document.getElementById('editInputTarefa');
    
                editInputId.value = id;
                editInputTitulo.value = tarefas.titulo;
                editInputData.value = tarefas.data;
                editInputTarefa.value = tarefas.tarefa;
            });
    
            //Formulário para excluir tarefa criada ao clicar no botão
            const botaoExcluir = document.getElementById(`excluirTarefa_${id}`);
            botaoExcluir.addEventListener('click', () => {
                const resultado = deletarTarefa(id);
                console.log(resultado);
                imprimirListanaDom();
            });
        }
    }
    

    //funcão de excluir tarefa
    function deletarTarefa(id) {
        if (toDo.has(id)) { //retorna booleano se a tabela existir então irá deletar
            toDo.delete(id);
            return true;
        } else {
            return false;
        }
    }

    //Função para procurar a tarefa baseado no ID
    function procurarTarefa(id) {
        const listaTarefas = document.getElementById('listaTarefas');

        // Limpando as informações da lista antes de exibir a busca
        listaTarefas.innerHTML = "";

        if (toDo.has(id)) {
            const tarefas = toDo.get(id);

            const elementoTarefa = document.createElement('div'); //criação do elemento baseado na id encontrada
            elementoTarefa.innerHTML = `
                <div id="areaDeTarefas">
                    <h3 id="headerTarefas">
                        <p> ${id} - Título: ${tarefas.titulo} - Data: ${tarefas.data}  </p> 
                    </h3>
                    <ul id="descricaoTarefa">
                        <li>Tarefa: ${tarefas.tarefa} </li>
                    </ul>
                    <section id="listaBTN">
                        <button id="tarefaConcluida_${id}">Tarefa concluída</button>
                        <button id="editarTarefa_${id}">Editar</button>
                        <button id="excluirTarefa_${id}">Excluir</button>
                    </section>
                </div>        
                <hr>`;

            listaTarefas.appendChild(elementoTarefa);
            return true;
        } else {
            alert("Nenhum ID encontrado");
            imprimirListanaDom();
            return false;
        }
    }

    //Função para editar tarefa apresentando informações que foram salvas. Para evitar conflitos o id fica como readonly
    function editarTarefa(id, titulo, data, tarefa) {
        if (toDo.has(id)) {
            toDo.get(id).titulo = titulo;
            toDo.get(id).data = data;
            toDo.get(id).tarefa = tarefa;
            alert(`Tarefa com ID ${id} editada com sucesso!`);
        }
    }

    //torna a tela de adicionar tarefas escondida
    document.getElementById('formAdicionarTarefa').style.display = 'none';

    //ao clicar no botão de adicionar tarefas ela aparece novamente
    const botaoAdicionarTarefa = document.getElementById('adicionarTarefa');
    botaoAdicionarTarefa.addEventListener('click', () => {
        document.getElementById('formAdicionarTarefa').style.display = 'block';
    });

    //ao clicar no enviar tarefas ele chama a função de adicionar o que esta salvo no input
    const botaoSalvar = document.getElementById('enviarTarefa');
    botaoSalvar.addEventListener('click', (event) => {
        event.preventDefault();
        adicionarTarefa();
        document.getElementById('formAdicionarTarefa').style.display = 'none'; //esconde a tela novamente
    });

    //eventos parecidos como o de adicionar tarefas porem agora para editar as tarefas
    document.getElementById('formEditarTarefa').style.display = 'none';

    const btnSalvarEdicao = document.getElementById('salvarEdicao');
    btnSalvarEdicao.addEventListener('click', (event) => {
        event.preventDefault();

        const editId = document.getElementById('editInputId').value;
        const editTitulo = document.getElementById('editInputTitulo').value;
        const editData = document.getElementById('editInputData').value;
        const editTarefa = document.getElementById('editInputTarefa').value;

        editarTarefa(editId, editTitulo, editData, editTarefa);

        document.getElementById('formEditarTarefa').style.display = 'none';
        imprimirListanaDom();
    });

    // referência ao botão "Procurar"
    const botaoProcurar = document.getElementById('procurar');

    // event listener para o botão "Procurar"
    botaoProcurar.addEventListener('click', function() {
        const idParaProcurar = document.getElementById('procurarPorID').value;

        // Verifica se o campo de busca não está vazio
        if (idParaProcurar.trim() !== "") {
            // Chama a função procurarTarefa com o ID fornecido
            if (!procurarTarefa(idParaProcurar)) {
                alert("Nenhum ID encontrado");
                imprimirListanaDom();
            }
        } else {
            alert("Por favor, insira um ID para procurar.");
        }
    });

});

