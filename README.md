# Gestão Rural - Plataforma de Administração Rural

Este é o repositório de Um sistema de Gestão Rural, uma aplicação projetada para facilitar a administração de propriedades rurais. A solução permite gerenciar informações relacionadas à produção agrícola, controle financeiro, inventário de equipamentos, entre outras funcionalidades que otimizam a produtividade e reduzem o desperdício no campo.

Sobre o Projeto

Inicialmente desenvolvida em uma linguagem diferente, a aplicação está sendo migrada para Python com o framework Django. O objetivo dessa migração é garantir maior flexibilidade, eficiência e manutenção mais fácil, aproveitando o ecossistema robusto e ativo de ferramentas e bibliotecas de Python.

Principais Funcionalidades

Gestão Financeira: Controle de receitas, despesas e relatórios de balanços.

Inventário: Registro e acompanhamento de máquinas, equipamentos e insumos.

Planejamento Agrícola: Cadastro de safra, monitoramento de produtividade e histórico de colheitas.

Relatórios Personalizáveis: Geração de relatórios detalhados para tomada de decisão baseada em dados.

Estrutura do Projeto

A migracão para Python e Django segue uma estrutura modular que permite manutenção e expansão fáceis:

Core: Configuração principal e gestão de usuários.

Financeiro: Módulo para gestão de transações monetárias.

Produção: Funcionalidades voltadas ao gerenciamento de safras e produtividade.

Relatórios: Ferramentas para criação e visualização de relatórios.

Tecnologias Utilizadas

Back-End:

- Python 3.10+

- Django 4.x

- PostgreSQL como banco de dados principal

Front-End:

- Bootstrap para interface responsiva

- HTML5, CSS3 e JavaScript

Outros:

- Docker para conteinerização e implementação facilitada

- Git para controle de versão

Como Contribuir

Estamos abertos a contribuções! Se você deseja participar do desenvolvimento, siga os passos abaixo:

Faça um fork do repositório.

Clone seu repositório localmente:

`git clone https://github.com/sua-conta/gestao-rural.git`

Crie um branch para sua contribuição:

`git checkout -b minha-feature`

Implemente sua alteração e envie um pull request.

Rodando o Projeto Localmente

Clone o repositório:

`git clone https://github.com/sua-conta/gestao-rural.git`

Instale as dependências:

`pip install -r requirements.txt`

Configure as variáveis de ambiente com os detalhes do banco de dados.

Execute as migrações do banco:

`python manage.py migrate`

Inicie o servidor:

`python manage.py runserver`

Acesse a aplicação no navegador pelo http://localhost:8000.

Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais detalhes.
