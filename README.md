# Descrição do Projeto
Este é um projeto simples de To-Do List implementado em JavaScript, utilizando Map, objetos e arrays para gerenciar as tarefas. O objetivo é fornecer uma base sólida para a futura integração com a DOM (Document Object Model) usando HTML e CSS.

# Funcionalidades
1. **Adicionar Tarefas**: A função `adicionarTarefa` permite adicionar novas tarefas à lista, utilizando um ID exclusivo para cada tarefa.

2. **Deletar Tarefa**: A função `deletarTarefa` permite remover uma tarefa da lista com base no seu ID.

3. **Editar Tarefa**: A função `editarTarefa` possibilita a edição da descrição de uma tarefa existente, identificada pelo seu ID.

4. **Imprimir Lista Atualizada**: A função `imprimirListaToDO` cria uma representação legível da lista atualizada de tarefas.

5. **Verificar Tarefa por ID**: A função `verificarTarefa` permite verificar os detalhes de uma tarefa específica com base no seu ID.

# Utilização de Map, Objetos e Arrays
- Map: Utilizado para armazenar as tarefas, onde a chave é o ID da tarefa e o valor é um objeto representando a tarefa.

- Objetos: Cada tarefa é representada como um objeto com propriedades como `id`, `titulo`, `tarefa`, e `data`.

- Arrays: Utilizados para armazenar a ordem das tarefas e facilitar a iteração.

# Como Contribuir
Sinta-se à vontade para contribuir com o desenvolvimento deste projeto. Se encontrar bugs, problemas de usabilidade ou tiver sugestões de novas funcionalidades, por favor, abra uma _issue_ ou envie um _pull request_.

# Como Testar Localmente
Clone o repositório para o seu computador:

1. `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
2. Abra o arquivo index.html em seu navegador.
3. Interaja com a aplicação To-Do List por meio do console.

# Melhorias Sugeridas

1. Manuseio de Erros na Adição de Tarefas:
  - Utilize exceções (throw) para indicar erros mais claramente.
    
2. Utilizando toLocaleDateString no Formato Internacional:
  - Adapte a função para um formato consistente, se necessário.
    
3. Melhoria na Exibição da Lista:
  - Adicione quebras de linha para melhorar a legibilidade da lista.
    
4. Exibição de Tarefa Editada:
  - Logue a tarefa diretamente após a edição para melhorar a visibilidade.
    
# Licença
Este projeto está licenciado sob a Licença MIT. Sinta-se à vontade para usá-lo e modificá-lo conforme suas necessidades.
