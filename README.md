# 🚗 GP Motors

## 👥 Autores

- Gabriel Galvão e Gregory Pereira Frey

## 📌 Tema escolhido

**Concessionária de veículos**

## 📖 Apresentação do tema

A **GP Motors** é uma concessionária de veículos criada com o objetivo de oferecer aos clientes uma experiência simples, moderna e prática na busca por um novo carro.

O projeto apresenta uma página inicial com destaque para a concessionária, uma área dedicada aos veículos disponíveis, informações sobre a empresa e uma página de contato. A proposta é facilitar o acesso às principais informações e permitir que o cliente conheça os veículos e entre em contato com a loja de maneira rápida.

Na página de **Veículos**, o cliente pode visualizar alguns dos modelos disponíveis na concessionária, acompanhando informações básicas sobre cada automóvel. Com o JavaScript, é possível **buscar um veículo pelo nome**, **filtrar por preço máximo** e marcar o interesse em um carro. O site guarda o último veículo de interesse e mostra esse aviso quando o cliente volta à página, com a opção de limpar a escolha.

A página **Sobre Nós** apresenta um pouco da história da GP Motors, sua missão, visão e valores, mostrando os princípios que orientam o atendimento aos clientes.

Também foi criada uma área de **Contato**, reunindo diferentes formas de comunicação com a concessionária, como telefone, e-mail e redes sociais.

Além disso, a página "Sobre Nós" conta com um formulário para que os clientes possam enviar opiniões, sugestões, elogios ou reclamações. O formulário é **validado com JavaScript**: se algum campo estiver incorreto, o site mostra uma mensagem de erro e marca o campo com borda vermelha. Depois de enviado, o nome e o e-mail ficam guardados no navegador para já virem preenchidos na próxima visita. Dessa forma, a GP Motors busca utilizar o feedback dos clientes para identificar pontos que podem ser melhorados.

O site foi desenvolvido pensando em uma navegação simples e intuitiva, utilizando elementos visuais relacionados ao setor automotivo, mantendo o foco nos veículos e nas informações importantes para o cliente.

## 🖥️ Estrutura do projeto

O site é composto pelas seguintes páginas:

- **Início:** apresentação da GP Motors e destaque da concessionária.
- **Veículos:** exibição dos veículos disponíveis, com busca por nome, filtro de preço e interesse salvo.
- **Sobre Nós:** história, missão, visão e valores da empresa, e formulário de opinião com validação.
- **Contato:** principais formas de comunicação com a concessionária.

Arquivos do projeto:

- `Trabalho.html`, `veiculos.html`, `sobre.html` e `contato.html`: páginas do site.
- `style.css`: estilos de todas as páginas.
- `script.js`: JavaScript usado nas páginas Veículos e Sobre.
- Imagens do site (logo, fundos e fotos dos veículos).

## ⚙️ Funcionalidades em JavaScript

O arquivo `script.js` é usado nas páginas **Veículos** e **Sobre**. Cada função só executa quando encontra os elementos da página em que está.

**Página Veículos**

- **Busca:** a cada letra digitada, mostra apenas os veículos cujo nome contém o texto. Se nenhum for encontrado, aparece o aviso "Nenhum veículo encontrado".
- **Filtro de preço:** mostra só os veículos até o preço máximo escolhido, em conjunto com a busca.
- **Tenho interesse:** ao clicar no botão, o nome do veículo é salvo no LocalStorage.
- **Último veículo de interesse:** ao voltar para a página, o aviso é mostrado, e o botão **Limpar escolha** apaga o dado salvo.

**Página Sobre**

- **Validação do formulário:** confere nome (mínimo de 3 letras), e-mail, assunto e mensagem (mínimo de 10 caracteres). Mostra o primeiro erro encontrado e marca o campo com borda vermelha.
- **Confirmação:** quando tudo está correto, mostra uma mensagem de agradecimento.
- **Dados lembrados:** nome e e-mail são salvos no LocalStorage e preenchidos automaticamente na próxima visita. A mensagem não é guardada.

**Conceitos aplicados:** variáveis (`const` e `let`), estruturas de decisão (`if`, `else if`, `else`), funções e callbacks, laço `forEach`, manipulação do DOM, eventos (`input`, `change`, `click` e `submit`) e LocalStorage (`setItem`, `getItem` e `removeItem`).

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## ▶️ Como executar

Não é necessário instalar nada. Basta abrir o arquivo `Trabalho.html` em um navegador (como o Edge ou o Chrome) e navegar pelo menu. Para ver os dados guardados pelo LocalStorage, aperte **F12** e abra **Aplicativo › Armazenamento local**.

## 🎯 Objetivo do projeto

O objetivo do projeto é desenvolver um site institucional simples para uma concessionária de veículos, aplicando conceitos de **HTML, CSS e JavaScript**, organização de páginas, navegação entre arquivos, estilização de elementos, interação com o usuário e armazenamento de dados no navegador.

O projeto também busca proporcionar uma experiência agradável ao usuário, apresentando as informações da concessionária de forma clara e organizada.
