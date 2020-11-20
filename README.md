# states-cities-the-brazil
Selects de estados e cidades do Brasil populados dinamicamente.

## Ferramentas utilizadas

* HTML.
* SASS/CSS.
* Javascript/ES6.
* NodeJS v10.16.3 - Para rodar as tasks do Gulp.
* Gulp - Para automatizar as tarefas, tais como, converter o SASS para CSS e gerar o arquivo minificado, converter o script de ES6 para ES5 e gerar o arquivo minificado.
* Babel - Transpila o script para um formato aceito por todos os navegadores.

## Tasks do Gulp

* sassDev - Converte o SASS para CSS.
* sassProd - Gera o arquivo CSS minificado.
* jsProd - Converte o script para um formato aceito por todos os navegadores utilizando o Babel e gera o arquivo minificado.
* watch - Monitora alterações nos arquivos e executa as tasks automaticamente.

Todos os arquivos de assets (css, js, scss e json), estão dentro do diretório assets, assim como o arquivo JSON que o script consome para popular os selects.

Para rodar o projeto é necessário ter o NodeJS instalado, caso não tenha, [clique aqui](https://nodejs.org/en/) e faça do download da versão de acordo com o seu sistema operacional.

Após efetuar o download do NodeJS, faça o clone do repositório, (caso não tenha o GIT instalado, [clique aqui](https://git-scm.com/downloads)) no seu terminal, execute o comando abaixo.

`git clone https://github.com/rsoliveira87/states-cities-the-brazil.git && cd states-cities-the-brazil`

Dentro da pasta states-cities-the-brazil, execute o comando abaixo para instalar as dependências do Node.

`npm install`

Depois execute a task default do Gulp para gerar os arquivos CSS e JS.

`npx gulp`

Para rodar as outras tasks.

```
npx gulp sassProd
npx gulp sassProd
npx gulp jsProd
npx gulp watch
```

Para visualizar o projeto, execute no terminal o comando `npx live-server` e o `index.html` será aberto automaticamente no seu navegador padrão no endereço `http://127.0.0.1:8080/`.