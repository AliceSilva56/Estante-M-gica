# 📚 Estante Mágica ✨

"Toda história merece um lugar mágico."

O Estante Mágica é um aplicativo web completo e intuitivo para organizar sua biblioteca pessoal, sejam livros físicos, e-books ou até mesmo seus próprios manuscritos. Com uma interface elegante e funcionalidades robustas, ele oferece uma solução pessoal e segura para amantes da leitura e autores.

## 🚀 Sobre o Projeto

O **Estante Mágica** nasceu da necessidade de uma solução verdadeiramente pessoal para organizar coleções de livros. Criado por desenvolvedores apaixonados por literatura, o projeto visa transformar a forma como você gerencia suas obras, oferecendo total controle sobre seus dados e a capacidade de funcionar perfeitamente offline.

### Funcionalidades Principais:

* **Homepage (`index.html`):**
    * Carrossel de destaque com mensagens impactantes sobre o propósito do aplicativo: "Toda História Merece um Lugar Mágico", "Seus Livros, Suas Regras", e "Acesso Total Offline".
    * Seção de "Principais Funcionalidades" com cards dedicados a: Biblioteca Pessoal, Manuscritos Próprios, Lista de Desejos, Progresso de Leitura, Organização Inteligente e Segurança Total.
    * Chamada para Ação (CTA) convidando o usuário a baixar o aplicativo ou visualizar a demonstração.
    * Rodapé completo com informações de contato e redes sociais.

* **Página "Sobre Nós" (`sobre.html`):**
    * Apresentação da história do Estante Mágica e sua missão.
    * Destaques de estatísticas: mais de 50K usuários ativos, 1M+ livros catalogados e 99% de satisfação.
    * Detalhes sobre o "Desenvolvimento Cuidadoso" e os princípios de design (interface intuitiva, funciona 100% offline, dados seguros).
    * Seção "Missão e Valores" abordando: Nossa Missão, Privacidade Total e Comunidade.
    * "Nossos Serviços" detalhando: Catalogação Inteligente, Gestão de Manuscritos, Estatísticas Detalhadas e Sincronização Segura.
    * "Nossa Equipe" com cards para cada membro (Ana Silva - CEO & Fundadora, Carlos Santos - CTO & Co-fundador, Marina Costa - Head of Design), incluindo mini-bios e a opção de reproduzir um áudio introdutório para cada um.

* **Página de Demonstração (`indexdemo.html`):**
    * Simulação de uma tela de aplicativo móvel com um "phone-container".
    * **Header:** Título do aplicativo e botão para adicionar novo livro.
    * **Main Content (com abas):**
        * **Início (`homeScreen`):** Citação inspiradora, cards de estatísticas (Lendo, Lidos, Quero Ler, Escrevendo) e seção de livros recentes.
        * **Minha Biblioteca (`libraryScreen`):** Cabeçalho da biblioteca com filtros por status (Todos, Lendo, Lidos, Quero Ler, Escrevendo).
        * **Buscar (`searchScreen`):** Barra de pesquisa com estado inicial de "Digite para buscar".
        * **Perfil (`profileScreen`):** Avatar, nome de usuário, estatísticas do perfil (Total de Livros, Páginas Hoje, Dias Lendo) e opções de personalização/configuração.
    * **Bottom Navigation:** Navegação entre as telas (Início, Biblioteca, Buscar, Perfil).
    * **Modal "Adicionar Livro":** Formulário pop-up para inserir dados de um novo livro (Título, Autor, Status, Páginas, Notas).

## ✨ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica das páginas web.
* **CSS3:** Estilização personalizada (`styles.css`, `stylesdemo.css`) para o design moderno e responsivo.
* **Bootstrap 5.3:** Framework CSS para layout responsivo, componentes e sistema de grid.
* **Font Awesome 6.0.0 / 6.4.0:** Biblioteca de ícones para elementos visuais.
* **JavaScript:**
    * Lógica para a navegação das telas na demo (`indexdemo.html`).
    * Controle do modal "Adicionar Livro" na demo.
    * Funcionalidade de play/pause para os áudios da equipe na página "Sobre Nós".
    * (Potencialmente) Lógica para carregar e filtrar livros dinamicamente na demo (assumindo a existência de `scriptdemo.js`).

## ⚙️ Como Rodar o Projeto

Para visualizar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório** (ou baixe os arquivos diretamente):
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd estante-magica
    ```
3.  **Abra os arquivos HTML no seu navegador:**
    * Abra `index.html` para a página inicial.
    * Abra `sobre.html` para a página "Sobre Nós".
    * Abra `indexdemo.html` para a demonstração interativa do aplicativo.

    Alternativamente, você pode usar uma extensão de "Live Server" em seu editor de código (como o VS Code) para ter recarregamento automático e simular um ambiente de servidor web.

## 📂 Estrutura de Pastas

├── audios/
│   ├── ana.mp3
│   ├── carlos.mp3
│   └── marina.mp3
├── img/
│   ├── Ana Silva.png
│   ├── Biblioteca Pessoa.png
│   ├── Carlos Santos.png
│   ├── Equipe.png
│   ├── Lista de Desejos.png
│   ├── logo.png
│   ├── Manuscritos Próprios.png
│   ├── Marina Costa.png
│   ├── Nossa História.png
│   ├── Organização Inteligente.png
│   ├── Progresso de Leitura.png
│   └── Segurança Total.png
├── index.html
├── indexdemo.html
├── scriptdemo.js
├── sobre.html
└── styles.css
└── stylesdemo.css


## 📞 Contato

Para mais informações sobre o Neon Code Café ou dúvidas sobre o projeto, entre em contato:

* **Email:** alicepinheiro016@gmail.com

## 📝 Licença

Este projeto é de propriedade da Estante Mágica. Todos os direitos reservados.

---

Feito com ❤️ por `[Alice Pinheiro da Silva]`