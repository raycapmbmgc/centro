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
        imagem: 'imagens/iphone13.png',
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
        imagem: 'imagens/iphone14.png',
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
        imagem: 'imagens/iphone14pro.png',
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
        imagem: 'imagens/iphone14pro.png',
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
        imagem: 'imagens/iphone15pro.png',
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
        imagem: 'imagens/iphone15pro.png',
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


// 🔄 Carrega produtos salvos no localStorage (se existirem)
if (localStorage.getItem('produtos')) {
    produtos = JSON.parse(localStorage.getItem('produtos'));
}

function salvarProdutosNoStorage() {
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

function verificarAcessoAdmin() {
    if (!localStorage.getItem('adminLogado')) {
        window.location.href = 'login.html';
    }
}

function renderizarProdutosAdmin() {
    const lista = document.getElementById('produtos-admin-lista');
    lista.innerHTML = '';

    produtos.forEach(produto => {
        const div = document.createElement('div');
        div.classList.add('produto');

        div.innerHTML = `
            <div>
                <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
                <h3>${produto.nome}</h3>
                <p><strong>Status:</strong> ${produto.disponivel ? 'Disponível' : 'Indisponível'}</p>
                <p><strong>Descrição:</strong> ${produto.descricao || 'Não definida'}</p>
                <p><strong>Preço:</strong> ${produto.preco || 'Não definido'}</p>
                <p><strong>Cores:</strong> ${produto.opcoes.cores.length ? produto.opcoes.cores.join(', ') : 'Não definido'}</p>
                <p><strong>GBs:</strong> ${produto.opcoes.gbs.length ? produto.opcoes.gbs.join(', ') : 'Não definido'}</p>
            </div>

            <button onclick="toggleFormulario(${produto.id})">Atualizar</button>

            <form id="form-${produto.id}" class="form-produto" style="display: none;" onsubmit="atualizarProduto(event, ${produto.id})">
                <label>Descrição:</label>
                <input type="text" name="descricao" value="${produto.descricao || ''}" required>

                <label>Preço:</label>
                <input type="text" name="preco" value="${produto.preco || ''}" required>

                <label>Cores (separadas por vírgula):</label>
                <input type="text" name="cores" value="${produto.opcoes.cores.join(', ')}">

                <label>GBs (separados por vírgula):</label>
                <input type="text" name="gbs" value="${produto.opcoes.gbs.join(', ')}">

                <button type="submit">Salvar Alterações</button>
            </form>

            <button onclick="toggleDisponibilidade(${produto.id})">
                ${produto.disponivel ? 'Ocultar Produto (Cliente)' : 'Mostrar Produto (Cliente)'}
            </button>
        `;

        lista.appendChild(div);
    });
}

function toggleFormulario(produtoId) {
    const form = document.getElementById(`form-${produtoId}`);
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function atualizarProduto(event, produtoId) {
    event.preventDefault();

    const form = event.target;
    const produto = produtos.find(p => p.id === produtoId);

    produto.descricao = form.descricao.value;
    produto.preco = form.preco.value;

    const coresInput = form.cores.value.trim();
    produto.opcoes.cores = coresInput ? coresInput.split(',').map(c => c.trim()) : [];

    const gbsInput = form.gbs.value.trim();
    produto.opcoes.gbs = gbsInput ? gbsInput.split(',').map(g => parseInt(g.trim())) : [];

    salvarProdutosNoStorage();
    renderizarProdutosAdmin();
}

function toggleDisponibilidade(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    produto.disponivel = !produto.disponivel;
    salvarProdutosNoStorage();
    renderizarProdutosAdmin();
}

function logout() {
    localStorage.removeItem('adminLogado');
    window.location.href = 'index.html';
}

// Verifica se estamos na página do admin
if (document.location.pathname.includes('admin.html')) {
    verificarAcessoAdmin();
    renderizarProdutosAdmin();
}
