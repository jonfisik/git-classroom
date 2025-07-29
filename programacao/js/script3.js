// Jonatan Paschoal - 21 de julho de 2025

// Array
let tarefas = []

function adicionarTarefa() {
			// recebe o valor do input do usuário 
			const inputTarefa = document.getElementById('inputTarefa')
			// console.log(nome_variavel) usado para testaro input
			let tarefa = inputTarefa.value.trim()
			
			const mensagem = document.getElementById('mensagem')

			 // SE o valor do input for vazio ENTAO mostre uma mensagem de erro. 
 			 if (tarefa == '') {
 				// Mostre msn de erro!
 				let mensagemErro = 'Digite uma tarefa para adicioná-la a sua lista!'
 				mensagem.textContent = mensagemErro
 			} else {
 				// mensagem para tarefa adicionada 
	 			let mensagemSucesso = 'Tarefa adicionada com sucesso!'
				mensagem.textContent = mensagemSucesso;
				tarefas.push(tarefa)
				renderizarTarefas()
 			}
			// limpa o input do usuário
 			inputTarefa.value = ''
}

function renderizarTarefas() {
			// cria novo item (li) e insere na lista (ul)
			const listaTarefas = document.getElementById("listaTarefas")
 			
			listaTarefas.innerHTML = ""

			for (let i = 0; i < tarefas.length; i++){ // i++ >>> i = i +1
				let novaTarefa = document.createElement('li')
 				novaTarefa.textContent = tarefas[i]

 				let botaoRemover = document.createElement('button')
 				botaoRemover.className = 'remover'
 				botaoRemover.textContent = 'Remover'
 				botaoRemover.onclick = () => removerTarefa (i)

 				let botaoEditar = document.createElement('button')
 				botaoEditar.className = 'editar'
 				botaoEditar.textContent = 'Editarr'
 				botaoEditar.onclick = () => editarTarefa (i)

 				novaTarefa.appendChild(botaoRemover)
 				novaTarefa.appendChild(botaoEditar)
 				listaTarefas.appendChild(novaTarefa)
		}	
}

function removerTarefa(i) {
	tarefas.splice(i, 1)
	renderizarTarefas()
}

function editarTarefa(i) {
	let tarefaEditada = prompt('Edite a tarefa: ')
	if (tarefaEditada.trim() !== '') {
		tarefas[i] = tarefaEditada
		renderizarTarefas()
	}
}

function limparLista() {
	tarefas.length = 0
	renderizarTarefas()
	mensagem.textContent = 'Lista de tarefas limpa com sucesso!'
}