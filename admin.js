// Dados de exemplo de produtos com imagens locais e opções de cor e GB
let produtos = [
    {
        id: 1,
        nome: 'iphone xr',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphonexr.jpg',
        opcoes: {
            cores: ['Preto', 'Branco', 'Azul'],
            gbs: [64, 128, 256]
        }
    },
    {
        id: 2,
        nome: 'Iphone 11',
        descricao: '',
        preco: '',
        disponivel: false,
        imagem: 'imagens/iphone11.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 3,
        nome: 'iphone 11 pro max',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/ipphone11pro.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 4,
        nome: 'iphone 12',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphone12.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 5,
        nome: 'iphone 12 pro',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphone12pro.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 6,
        nome: 'iphone 12 pro max',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphone12pro.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 7,
        nome: 'iphone 13',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphone13.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 8,
        nome: 'iphone 13 pro',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphone13pro.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 9,
        nome: 'iphone 13 pro max',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphone13promax.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 10,
        nome: 'iphone 14 ',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphone14.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 11,
        nome: 'iphone 14 pro',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphone14promax.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 12,
        nome: 'iphone 14 pro max',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphone14promax.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 13,
        nome: 'iphone 15',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphone15.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 14,
        nome: 'iphone 15 pro',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphone15pro.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 15,
        nome: 'iphone 15 pro max',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphone15pro.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 16,
        nome: 'iphone 16',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphone16.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    },
    {
        id: 17,
        nome: 'iphone 16 pro',
        descricao: '',
        preco: '',
        disponivel: true,
        imagem: 'imagens/iphonepro.jpg',
        opcoes: {
            cores: [],
            gbs: []
        }
    }
    
];

// Função para salvar os produtos no localStorage
function salvarProdutosNoStorage() {
    localStorage.setItem('produtos', JSON.stringify(produtos));  // Salva os produtos no localStorage
}

// Função para verificar se o administrador está logado
function verificarAcessoAdmin() {
    if (!localStorage.getItem('adminLogado')) {
        window.location.href = 'login.html';  // Redireciona para o login se não estiver logado
    }
}

// Função para renderizar os produtos na tela do administrador
function renderizarProdutosAdmin() {
    const listaProdutosAdmin = document.getElementById('produtos-admin-lista');
    listaProdutosAdmin.innerHTML = ''; // Limpa os produtos da tela antes de renderizar

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = `
            <div>
                <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
                <h3>${produto.nome}</h3>
                <p><strong>Status:</strong> ${produto.disponivel ? 'Disponível' : 'Indisponível'}</p>
            </div>

            <!-- Botão para editar a descrição e o preço -->
            <button onclick="editarDescricaoPreco(${produto.id})">Editar Descrição e Preço</button>

            <!-- Botão para editar as cores e GBs -->
            <button onclick="editarCorGB(${produto.id})">Editar Cores e GBs</button>

            <!-- Mostrar Descrição, Preço, Cores e GBs apenas se definido -->
            <div id="produto-${produto.id}-info" style="display: ${produto.disponivel ? 'block' : 'none'};">
                <p><strong>Descrição:</strong> ${produto.descricao || 'Não definida'}</p>
                <p><strong>Preço:</strong> ${produto.preco || 'Não definido'}</p>
                <p><strong>Cores Disponíveis:</strong> ${produto.opcoes.cores.length > 0 ? produto.opcoes.cores.join(', ') : 'Não definido'}</p>
                <p><strong>GBs Disponíveis:</strong> ${produto.opcoes.gbs.length > 0 ? produto.opcoes.gbs.join(', ') : 'Não definido'}</p>
            </div>

            <!-- Botão para alternar a visibilidade do produto -->
            <button onclick="toggleDisponibilidade(${produto.id})">
                ${produto.disponivel ? 'Ocultar Produto' : 'Mostrar Produto'}
            </button>
        `;
        listaProdutosAdmin.appendChild(produtoDiv);
    });
}

// Função para alternar a disponibilidade do produto
function toggleDisponibilidade(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    produto.disponivel = !produto.disponivel;  // Alterna a disponibilidade

    // Atualiza a exibição do produto
    const infoDiv = document.getElementById(`produto-${produto.id}-info`);
    const toggleButton = infoDiv.nextElementSibling;  // Encontra o botão de visibilidade

    if (produto.disponivel) {
        infoDiv.style.display = 'block';  // Mostra as informações
        toggleButton.innerHTML = 'Ocultar Produto';  // Atualiza o texto do botão
    } else {
        infoDiv.style.display = 'none';  // Esconde as informações
        toggleButton.innerHTML = 'Mostrar Produto';  // Atualiza o texto do botão
    }

    salvarProdutosNoStorage();  // Salva as alterações no localStorage
    renderizarProdutosAdmin();  // Re-renderiza os produtos no painel administrativo
}

// Função para editar a descrição e o preço do produto
function editarDescricaoPreco(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    
    const novaDescricao = prompt('Digite a nova descrição:', produto.descricao);
    const novoPreco = prompt('Digite o novo preço:', produto.preco);

    if (novaDescricao && novoPreco) {
        produto.descricao = novaDescricao;
        produto.preco = novoPreco;
        salvarProdutosNoStorage();
        renderizarProdutosAdmin(); // Re-renderiza os produtos
    }

    // Mostrar as informações editadas após a alteração
    document.getElementById(`produto-${produto.id}-info`).style.display = 'block';
}

// Função para editar as opções de cor e GB do produto
function editarCorGB(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    
    // Editar cores
    const novasCores = prompt('Digite as novas cores separadas por vírgula (ex: Preto, Branco, Azul):');
    if (novasCores) {
        produto.opcoes.cores = novasCores.split(',').map(cor => cor.trim());
    }
    
    // Editar GBs
    const novosGBs = prompt('Digite as novas opções de GB separadas por vírgula (ex: 64, 128, 256):');
    if (novosGBs) {
        produto.opcoes.gbs = novosGBs.split(',').map(gb => parseInt(gb.trim()));
    }

    salvarProdutosNoStorage();
    renderizarProdutosAdmin(); // Re-renderiza os produtos

    // Mostrar as informações editadas após a alteração
    document.getElementById(`produto-${produto.id}-info`).style.display = 'block';
}

// Verificar se estamos na página do administrador
if (document.location.pathname.includes('admin.html')) {
    verificarAcessoAdmin();  // Verifica se o admin está logado
    renderizarProdutosAdmin();  // Renderiza os produtos administrativos
}