// Função para renderizar os produtos na tela do cliente
function renderizarProdutosCliente() {
    const listaProdutosCliente = document.getElementById('produtos-cliente-lista');
    listaProdutosCliente.innerHTML = ''; // Limpa os produtos da tela antes de renderizar

    // Busca os produtos no localStorage, se existirem
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    // Loop para exibir produtos disponíveis
    produtos.forEach(produto => {
        if (produto.disponivel) {  // Verifica se o produto está disponível
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('card-produto');  // Usando o estilo de card definido no CSS

            // Exibe opções de cor e GB, se houver
            const coresDisponiveis = produto.opcoes.cores.length ? produto.opcoes.cores : ['Sem cores disponíveis'];
            const gbsDisponiveis = produto.opcoes.gbs.length ? produto.opcoes.gbs : ['Sem opções de GB disponíveis'];

            // Criação dos elementos de seleção para cor e GB
            const selectCor = coresDisponiveis.length > 1 ? ` 
                <label for="cor-${produto.id}">Escolha a cor:</label>
                <select id="cor-${produto.id}">
                    ${coresDisponiveis.map(cor => `<option value="${cor}">${cor}</option>`).join('')}
                </select>
            ` : '';

            const selectGB = gbsDisponiveis.length > 1 ? `
                <label for="gb-${produto.id}">Escolha a capacidade (GB):</label>
                <select id="gb-${produto.id}">
                    ${gbsDisponiveis.map(gb => `<option value="${gb}">${gb} GB</option>`).join('')}
                </select>
            ` : '';

            // Estrutura HTML para o produto
            produtoDiv.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
                <h3>${produto.nome}</h3>
                <p><strong>Descrição: </strong>${produto.descricao}</p>
                <p><strong>R$</strong>${produto.preco}</p>
                <p><strong>Cores:</strong> ${coresDisponiveis.join(', ')}</p>
                <p><strong>GB:</strong> ${gbsDisponiveis.join(', ')}</p>

                ${selectCor}
                ${selectGB}

                <button onclick="entrarEmContato(${produto.id})">Entrar em contato</button>
            `;

            // Adiciona o card de produto à lista
            listaProdutosCliente.appendChild(produtoDiv);
        }
    });
}

// Função para redirecionar para o WhatsApp com as informações do produto
function entrarEmContato(produtoId) {
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const produto = produtos.find(p => p.id === produtoId);
    
    if (produto) {
        // Pega as opções de cor e GB selecionadas
        const corSelecionada = document.getElementById(`cor-${produtoId}`) ? document.getElementById(`cor-${produtoId}`).value : 'Não especificada';
        
        // Verifica se o produto tem apenas uma opção de GB, e se sim, seleciona essa opção automaticamente
        let gbSelecionado = 'Não especificado';
        if (produto.opcoes.gbs.length === 1) {
            gbSelecionado = produto.opcoes.gbs[0]; // Se há apenas uma opção de GB, seleciona automaticamente
        } else {
            gbSelecionado = document.getElementById(`gb-${produtoId}`) ? document.getElementById(`gb-${produtoId}`).value : 'Não especificado';
        }

        // Constrói a mensagem para o WhatsApp
        const mensagem = `Olá, gostaria de saber mais sobre o produto: ${produto.nome}. Descrição: ${produto.descricao}. Preço: ${produto.preco}. Cor selecionada: ${corSelecionada}. Capacidade selecionada: ${gbSelecionado} GB.`;

        // Envia a mensagem para o WhatsApp com os dados selecionados
        window.open(`https://wa.me/+5582999506483?text=${encodeURIComponent(mensagem)}`, '_blank');
    }
}

// Chama a função para renderizar os produtos quando a página carregar
window.onload = renderizarProdutosCliente;
