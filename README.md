# Sobre
O sistema é desenvolvido em Angular 2. Bootstrap.

Ele tem como função acessar a API Books da Google. Buscar livros, e possibilitar o usuário a curtir os livros que ele gosta.

# Estrutura

Listagem:
Esse objeto/pagina listam os livros que foram encontrados na API da Google.

Livro:
Este é o objeto que é instanciado para cada livro encontrado.
Ele que mantem os dados do objeto.

LivroService:
Aqui esta concentrado todas as funções de busca de livros. 
Preferi centralizar esse tipo de funções, para caso seja necessário trocar ou arrumar a string de conexão com a Google, isso seja realizado em apenas um lugar.

LivroDetalhe:
Ao clicar na capa do livro na listagem. O usuário é direcionado para essa pagina/objeto.
Ela mostra mais detalhes sobre o livro selecionado, assim como o usuário pode curtir o livro.

Painel:
Ele gera os painéis que englobam as capas na listagem.

Botão:
Um teste em automatizar as funções dos botões. Como acionar alertas, avisos. Função a ser utilizada futuramente.

# Próximos passos
Desenvolver o backend para possibilitar logins. 
Retirar a gravação dos curtis do local storage e adicionar a um banco de dados.
Possibilitar os usuários gerar resenhas e dar notas para livros.
Compartilhar quais livros a pessoa gostou.
Adicionar o teste integrado.
Adicionar deploy continuo usando Trevis CI.
Pagina com todos o livros que a pessoal curtiu.

# Obs
É um site criado para teste.
Iriei usar para aprender e testar novas funcionalidades com o Angular 2. Aceito sugestões de melhorias.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


