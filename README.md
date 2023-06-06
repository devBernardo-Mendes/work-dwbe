# work-dwbe 

O aplicativo é uma API desenvolvida usando Node.js, Express.js e Sequelize ORM para fornecer endpoints CRUD para 5 entidades de negócios diferentes. O objetivo do aplicativo é fornecer uma interface para gerenciamento de usuários, produtos, pedidos, endereços e avaliações.

Através da API é possível criar, ler, atualizar e deletar registros em cada uma dessas entidades. Por exemplo, você pode criar um novo usuário com nome, e-mail, senha e idade, ou atualizar informações sobre um produto existente, como nome, descrição e preço.

As entidades modeladas na aplicação são:

Usuário: Representa um usuário com nome, e-mail, senha e idade.
Produto: Representa o produto com nome, descrição e preço.
Pedido: Representa um pedido de um ou mais produtos.
Endereço: Representa o endereço do usuário.
Avaliação: Representa a classificação do produto pelo usuário.
Abaixo está um diagrama simplificado de modelo de entidade-relacionamento (ER) para o aplicativo:


                  |     Usuário  |
                  +--------------+
                  | id           |
                  | nome         |
                  | email        |
                  | senha        |
                  | idade        |
                  +--------------+
                        |
                        |
                        |
                 +------------+
                 |   Endereço |
                 +------------+
                 | id         |
                 | rua        |
                 | numero     |
                 | cidade     |
                 | estado     |
                 | usuario_id |
                 +------------+
                        |
                        |
                        |
                 +-----------+
                 |   Pedido  |
                 +-----------+
                 | id        |
                 | usuario_id
                 | produto_id|
                 +-----------+
                        |
              +------------------+
              |      Produto     |
              +------------------+
              | id               |
              | nome             |
              | descricao        |
              | preco            |
              +------------------+
                        |
                        |
                        |
              +-----------------+
              |    Avaliação    |
              +-----------------+
              | id              |
              | nota            |
              | comentario      |
              | usuario_id      |
              | produto_id      |
              +-----------------+
