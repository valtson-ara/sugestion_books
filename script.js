document.addEventListener('DOMContentLoaded', function() {
    const bookSuggestions = [
        { title: "Percy Jackson", image: "/images/percy_jackson.jpg" },
        { title: "A Vida Invisível de Addie LaRue", image: "/images/addie_larue.jpg" },
        { title: "Os Sete Maridos de Evelyn Hugo", image: "/images/evelyn_hugo.jpg" },
        { title: "Harry Potter", image: "/images/harry_potter.jpg" },
        { title: "Senhor dos Anéis", image: "/images/senhor_aneis.jpg" },
        { title: "Os Dois Morrem no Final", image: "/images/dois_morrem.jpg" },
        { title: "Verity", image: "/images/verity.jpg" },
        { title: "Canção dos Ossos", image: "/images/cancao_ossos.jpg" },
        { title: "It: A Coisa", image: "/images/it_coisa.jpg" },
        { title: "Memórias Póstumas de Brás Cubas", image: "/images/bras_cubas.jpg" },
        { title: "Salvar o Fogo", image: "/images/salvar_fogo.jpg" },
        { title: "Torto Arado", image: "/images/torto_arado.jpg" },
        { title: "Six of Crows", image: "/images/six_of_crows.jpg" },
        { title: "As Crônicas de Nárnia", image: "/images/cronicas_narnia.jpg" },
        { title: "Auto da Barca do Inferno", image: "/images/barca_inferno.jpg" },
        { title: "Dom Casmurro", image: "/images/dom_casmurro.jpg" },
        { title: "Duna", image: "/images/duna.jpg" },
        { title: "Deuses Americanos", image: "/images/deuses_americanos.jpg" },
        { title: "O Estrangeiro", image: "/images/o_estrangeiro.jpg" },
        { title: "Os Miseráveis", image: "/images/os_miseraveis.jpg" },
        { title: "A Culpa é das Estrelas", image: "/images/culpa_estrelas.jpg" },
        { title: "O Amor Não é Óbvio", image: "/images/amor_nao_obvio.jpg" },
        { title: "Carmilla", image: "/images/carmilla.jpg" },
        { title: "A Canção de Aquiles", image: "/images/cancao_aquiles.jpg" },
        { title: "A Biblioteca da Meia-Noite", image: "/images/biblioteca_meia_noite.jpg" },
        { title: "O Circo da Noite", image: "/images/circo_noite.jpg" },
        { title: "O Mar sem Estrelas", image: "/images/mar_sem_estrelas.jpg" }
    ];

    const app = document.getElementById('app');
    let suggestion = '';
    let submitted = false;

    function render() {
        const randomBook = bookSuggestions[Math.floor(Math.random() * bookSuggestions.length)];
        
        if (!submitted) {
            app.innerHTML = `
                <div class="p-6 w-full max-w-md text-center bg-white rounded-lg shadow-md">
                    <h1 class="text-xl font-bold">Livros transformam mentes</h1>
                    <p class="text-gray-600">Deixe uma dica de leitura e descubra novos universos!</p>
                    <input
                        class="mt-4 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Digite sua sugestão de leitura..."
                        value="${suggestion}"
                        oninput="document.dispatchEvent(new CustomEvent('inputChange', { detail: this.value }))"
                    />
                    <button
                        class="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                        onclick="document.dispatchEvent(new Event('submitClick'))"
                        ${!suggestion.trim() ? 'disabled' : ''}
                    >
                        Enviar
                    </button>
                </div>
            `;
        } else {
            app.innerHTML = `
                <div class="p-6 w-full max-w-md text-center bg-white rounded-lg shadow-md">
                    <h1 class="text-xl font-bold">Obrigada pela dica!</h1>
                    <p class="text-gray-600">Essa é a nossa sugestão pra você...</p>
                    <div class="mt-4 p-4 border rounded-lg">
                        <p class="font-semibold">${randomBook.title}</p>
                        <img src="${randomBook.image}" alt="${randomBook.title}" class="book-image" onerror="this.style.display='none'" />
                    </div>
                    <p class="mt-4 text-gray-500">Aracaju - SE</p>
                    <div class="mt-6 text-left">
                        <h2 class="text-lg font-bold">Sugestão de leitura:</h2>
                        <ul class="list-disc list-inside text-gray-700">
                            <li>${randomBook.title}</li>
                        </ul>
                    </div>
                </div>
            `;
        }
    }

    // Event listeners
    document.addEventListener('inputChange', function(e) {
        suggestion = e.detail;
        const button = document.querySelector('button');
        if (button) {
            button.disabled = !suggestion.trim();
        }
    });
    
    document.addEventListener('submitClick', function() {
        if (suggestion.trim()) {
            submitted = true;
            render();
        }
    });

    // Initial render
    render();
});
