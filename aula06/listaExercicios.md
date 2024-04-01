# Exercicios

## 1. Cite duas vantagens da utilização de sistemas de versionamento de código.
1. Documentação e registo de código: Utilizando sistemas de versionamento, é possível documentar todas as alterações feitas no código, incluindo quem fez essas mudanças e quando foram feitas. Além disso, o versionamento permite recuperar versões anteriores do código, o que é crucial para a manutenção e o rastreamento de alterações ao longo do tempo.
2. Trabalho em equipe: versionamento de código permite um trabalho em equipe mais organizado, onde várias pessoas podem trabalhar simultaneamente no projeto. Com recursos como ramificação (branching), diferentes membros da equipe podem trabalhar em diferentes funcionalidades ou correções sem interferir no trabalho uns dos outros. As alterações são mescladas de forma transparente, promovendo a colaboração eficaz e a coesão do código.
- Outros: Facilitar a solução de conflitos.

## 2. Explique a diferença entre Git e GitHub?
Git é o sistema de versionamento de código. GitHub é uma plataforma web que hospeda repositórios Git.
Exemplos de outras plataformas web: Bitbucket, Gitlab. O uso do gitlab é mais para empresas que querem ter mais controles de seus códigos, e não querem deixar os códigos na web.

## 3. Quais as três principais linguagens utilizadas na construção de documentos da Web e quais são suas principais aplicações/funcionalidades?
- HTML: É uma linguagem de marcação em texto, utilizada para definir a estrutura e o conteúdo dos documentos web.
- CSS: É uma linguagem de estilização, utilizada para aplicar estilo aos documentos web. Ou seja, ela controla a apresentação visual, definindo o layout, cores e outros aspectos visuais.
- JavaScript: É uma linguagem de programação, utilizada para aplicar comportamento dinâmico aos documentos web, geração de conteúdo, comunicação e manipulação dos elementos em “tempo de execução”.

## 4. Qual é a diferença entre os conceitos de tag, elemento e atributo, no contexto do HTML?
- Tag: É o componente da linguagem que é identificado pelos símbolos de maior “>” e menor “>”. Ele indica o tipo do elemento e o define.
- Elemento: É o componente do documento web, constituído pelo conjunto formado por uma tag, texto marcado (conteúdo) e seus atributos. Que forma o componente visível e funcional de uma página web.
- Atributo: São os parâmetros que definem características do elemento.

## 5 Desenvolva um documento HTML **mínimo** que contenha um parágrafo com a frase “Estou por aqui”, tenha o título “minha página” e use a codificação de caracteres **utf-8**.
```html
<!DOCTYPE html>
<html>
    <head>
        <title>minha página</title>
        <meta charset="utf-8">
    </head>
    <body>
        <p>Estou por aqui</p>
    </body>
</html>
```
Não precisa do `<!doctype html>`

## 6 O que é uma “pilha de protocolos”, no contexto da internet?
É a organização lógica dos protocolos de comunicação em todos os níveis de abstrações da camada TCP/IP, para a camada de aplicação, de transporte, de rede, de enlace e o físico. Com a premissa de que a camada de baixo presta um serviço para os protocolos de camada superior.

## 7 Quais são os principais protocolos da **camada de transporte** da internet e qual a principal diferença entre eles?
São o TCP e o UDP.

- TCP: é um protocolo confiável, ou seja, ele garante a entrega sem erros dos dados. Ele possui um mecanismo de retransmissão de pacotes perdidos e deteção de erros. Com ele é possível fazer um controle de fluxo e de congestionamento. É muito utilizado em aplicações que não se pode haver perda de dados, como transferência de arquivos e navegação web.
- UDP: é um protocolo não confiável, ou seja, ele não garante a entrega dos dados, nem a ordem em que são entregues. Ele não oferece nenhum controle de fluxo, nem de congestionamento. Ele é mais leve e rápido que o TCP, devido a falta do mecanismo que o TCP tem. É muito utilizado em aplicações que exige uma comunicação mais rápida e tolerante a perdas, como streaming de áudio e de vídeo, jogos online e transmissões ao vivo.

A principal diferença é a confiabilidade do protocolo, em que um garante que os dados vão ser entregue e o outro não.

## 8 Quais as principais características da arquitetura cliente-servidor e como ela se diferencia de aplicações peer-to-peer?

As principais caracteristicas da arquitetura cliente-servidor são:

- Centralização: É uma arquitetura centralizada, isso é, há um ou mais servidores centralizados, que atendem a múltiplos clientes. Então nessa arquitetura dois host cliente nunca se comunica entre si. Esses servidores sempre estão ligados (no ar) e possuem um endereço IP permanente.
- Gerenciamento simples: O gerenciamento ocorre todo nos servidores, ou seja, um lugar conhecido. O servidor controla o acesso aos recursos, garantido segurança e integridade dos dados.
- Separação de papeis: Os sistemas são divididos em dois tipos de entidades, clientes que solicita serviços e recursos e o servidor que oferece esses serviços.

As aplicações peer-to-peer se diferencia nessas 3 caracteristicas:

- Descentralizado: Ela não é uma arquitetura centralizada, isso é, não há nenhum host único que atendem a múltiplos servidores, o que ocorre é uma comunicação direta entre dois hosts cliente. Cada host, nessa arquitetura, funciona como cliente e servidor ao mesmo tempo, então o endereço IP pode mudar e pode acontecer de um certo servidor não está ligado.
- Gerenciamento complexo: O gerenciamento é mais complicado, pois não há um ponto único para monitorar tudo.
- Papel único: Cada host nessa rede se chama peer, pois podem solicitar e fornecer recursos diretamente a outros pares.

## 9 O que é um processo, no contexto do desenvolvimento de aplicações de internet, e como eles são identificados para efeitos de comunicação?

São os programas que estão em execução (instâncias) em um host (nó da rede). A comunicação varia dependendo do contexto:

- Dentro do mesmo host: Nesse caso a comunicação é definida pelo SO.
- Entre hosts diferentes: Nesse caso a comunicação ocorre pela internet, através de troca de mensagem, em que os processos são identificados por meio de endereços de IP e números de porta. Sendo o endereço IP que identifica o dispositivo e o número da porta que especifica o processo que irá receber.

Host é nó de rede são a mesma coisa!

## 10 Explique o que é SSL, no contexto da

SSL é um camada de segurança para os protocolo de transporte, pode-se dizer que ele está em uma cada de aplicação, que estabelece uma conexão criptografada entre um cliente e um servidor na internet. Ele além de encriptar, garante a integridade de dados e faz a autenticação do destinatário.

## 11 Em um documento **html**, quantos são os *filhos* do nó raiz? Há limite para o número de *descendentes* do nó raiz? Justifique sua resposta

O nó da raiz há 2 filhos, que são o `<head>` e o `<body>`. Os filhos do nó raiz as tags que são abertas logo abaixo da tag `<html>`, e os descendentes são todas as outras tags são abertas dentro do `<head>` e `<body>`.

## 12 Ao construir documentos **html**, é recomendado que usemos marcação que forneça significado (semântica) para os componentes do documento. Sendo assim, cite ao menos 5 tipos de elementos de marcação ou organização de conteúdo, além de 5 tipos de elementos de marcação semântica, explicando o significado de todos eles.
- Elementos de marcação ou organização de conteúdo
1. `<h1>-<h6>`: usado para marcar títulos e subtítulos dos documentos.
2. `<span>`: é um container genérico inline, usado para agrupar elementos para estilizar em conjunto, normalmente é usado para pequenas partes de texto dentro de um parágrafo.
3. `<div>`: é um container genérico usado para controlar o fluxo do conteúdo, e agrupar uma certa quantidade de elementos. É comumente usado para aplicar estilo CSS e organizar o layout da página.
4. `<header>`: Define o cabeçalho de um documento ou de uma seção. Geralmente contém elementos de navegação, logotipos, títulos e outros elementos relacionados ao cabeçalho.
5. `<footer>`: Define o rodapé de um documento ou de uma seção. Normalmente contém informações de copyright, links para páginas relacionadas e outros elementos de finalização.
- Elementos de marcação semântica
1. `<em>`: usado para indicar ao documento que aquele elemento deve receber ênfase.
2. `<strong>`: usado para indicar ao documento que aquele elemento tem uma grande importância.
3. `<del>`: usado para indicar ao documento que aquele elemento foi apagado do documento.
4. `<ins>`: usado para indicar ao documento que aquele elemento foi demarcado.
5. `<a>`: usado para indicar que o elemento é um hyperlink.

## 13 Qual elemento é utilizado para que um documento **html** capture informações dos usuários?

O formulário `<form>`.

## 14 Qual elemento é utilizado para permitir a navegação entre diferentes documentos **html**?

O elemento `<a href=”a”></a>`

## 15 Enumere ao menos cinco elementos utilizados em formulários **html** explicando sua
- `<input>`: É usado para criar campos de entrada em um formulário.
- `<select>`: É usado para criar menus suspensos (drop-down) em um formulário, permitindo a definição de diversas opções em que o usuário pode escolher uma.
- `<button>`: usado para criar elemento interativo para o usuário, em que pode ser ativado por teclado, dedo ou um comando de voz.
- `<textarea>`: É usado para criar uma área de texto de várias linhas em um formulário. É útil para permitir que os usuários insiram texto mais longo, como comentários, mensagens ou feedback.
- `<label>`: é usado para associar um rótulo a um elemento de formulário.

## 16 Explique o que são e para que são utilizados os seguintes atributos **html:**
    1. class
    2. id
    3. name
    4. hidden
    5. style
    6. title
1. a) class="": É um atributo usado para especificar quais classes (um ou mais) o elemento HTML pertence. E com ele é possível aplicar estilo CSS a esses elementos especificados. Mais, por fim, ele é apenas um conjunto.
2. b) id="": é um atributo usado para atribuir um identificado único a um elemento HTML. É usado para referenciar elementos específicos em CSS ou JavaScript. Cada identificador deve ser exclusivo dentro do documento.
3. c) name="": É mais usado em formulário. É um atributo que fornece um nome para um elemento HTML, para que posteriormente esse elemento possa ser referenciado em algum script do lado do servidor.
4. d) hidden: é um atributo usado para ocultar o elemento do usuário.
5. e) style="": é um atributo usado para aplicar estilização CSS diretamente no HTML, sem a necessidade de criar um arquivo CSS separado.
6. f) title="": é um atributo que é usado para fornecer um texto explicativo (tooltip), que é exibido quando o usuário passa o cursor sobre o elemento. É útil para fornecer informações adicionais sobre o elemento, como uma descrição breve.

## 17 O que seria “*degradação graciosa*”, também conhecida com *“degradação elegante”*?

É um princípio do desenvolvimento web, que faz com que as páginas da web funcionem corretamente em uma variedade de navegadores e dispositivos, mesmo que nem todas as funcionalidades estejam disponíveis. Tudo é feito, para que o código seja executado, mesmo que haja erros nele código. Isso se refere também a questão da evolução da tecnologia, a degradação graciosa faz com que um aparelho que não possua as novas tecnologias, consiga rodar o código. O objetivo da degradação elegante é garantir que uma página web seja acessível e utilizável por todos os usuários.

- Resposta do professor: Princípio que baliza a capacidade da tecnologia da web de abrir mão de elementos e manter a coreência e o sentido dos documentos. Isso viabiliza o funcionamento da tecnologia em dispositiovs de diferentes capacidades e a torna resiliente.

## 18 Diferencie e caracterize os conceitos de regra, seletor e declaração no contexto do

- Regra: É o conjunto completo, em que é constituído pelo seletor e um conjunto de declarações.
Exemplo:
```css
h1{
    declaracao1;
    declaracao2;
    declaracao3;
    …
}
```

- Seletor: É o nome do elemento html no começo da regra, em que indica qual elemento vai ser assumir aquelas declarações. Ele pode especificar o elemento HTML específico, uma classe, um identificador, um atributo ou uma combinação desses.
Exemplo:
```css
h1, .classe, #id, …
```

- Declaração: é uma propriedade (chave da linguagem) de estilo associada a um valor (par chave-valor). É o que define como os elementos selecionados pelo seletor devem ser estilizados.
Ex:
```css
color: red;
font-size: 16px;
```

## 19 Diferencie os conceitos de “seletor de classe” e “seletor de id”, no contexto do CSS, fornecendo exemplos de cada um
- Seletor de classe: é um seletor usado para selecionar elementos com uma determinada classe. Ele é precedido por um ponto “.”. Ele permite aplicar o mesmo estilo a múltiplos elementos sem a necessidade de repetir código.

Exemplo:
```html
<style>
    .destaque {
        color: red;
        font-weight: bold;
    }
</style>

<p class="destaque">Este texto está em destaque. </p>
<p>Este texto não está em destaque. </p>
```

- Seletor de id: é um seletor usado para selecionar um único elemento com um id específico. Ele é indicado com um hashtag (‘#’). Ele é útil para aplicar estilização a elementos individuais que necessitam de um estilo específico e que não irá se repetir.

Exemplo:
```html
<style>
    #cabecalho {
        background-color: #f0f0f0;
        padding: 10px;
    }
</style>
<div id="cabecalho">
    <h1>Meu Site</h1>
</div>
```

## 20 No contexto do **CSS Box Model**, explique os conceitos margin, border e padding

Esse três conceito se refere ao comportamento dos elementos no espaço ao redor dos conteúdos e dos próprios elementos.

- “margin”: É o espaço externo de um elemento. Ele define a distância desse espaço.

Exemplo:
```
margin: 10px;
```

- “border”: É a linha que circunda o elemento e da sua área de preenchimento. É possível atribuir valores como estilo, largura e cor para a visualização dessa borda.

Exemplo:

```css
border: 1px solid #000;
```

- “padding”: É o espaço entre o conteúdo de um elemento e sua borda. Ela define a distância desse espaço.

Exemplo:
```css
padding: 10px;
```

## 21 Explique e dê exemplos funcionais de utilização das propriedades de posicionamento: **static**, **relative**, **absolute** e **fixed**.

Eles são usados para controlar o posicionamento e o layout dos elementos HTML.

- static: é posicionamento padrão do html, em que o elemento segue o fluxo normal do documento, seguindo a ordem em que aparecem no código.

Exemplo funciona:
```html
<div style="width: 100px; height: 100px; background-color: red; border: 1px solid #000;">
    Elemento com posicionamento estático
</div>
<div style="width: 100px; height: 100px; background-color: red; border: 1px solid #000;">
    Elemento com posicionamento estático
</div>
```
Nessa situação, os dois elementos irão aparecer um encima do outro.

- relative: O posicionamento relativo permite mover um elemento de sua posição original, sem afetar o layout dos outros elementos ao redor. Nesse caso eu posso atribuir as propriedades “top”, “left”, “right” e “bottom”, em que são usadas para especificar a posição relativa do elemento em relação à sua posição original.

Exemplo funcional:
```html
<div style="width: 100px; height: 100px; background-color: red; border: 1px solid #000;">
    Elemento com posicionamento estático
</div>

<div style="position: relative; left: 20px; top: 10px; width: 100px; height: 100px; background-color: blue; border: 1px solid #000;">
    Elemento com posicionamento relativo
</div>
```

Nessa situação, os dois elementos irão aparecer um encima do outro.

- absolute: O posicionamento absoluto remove o elemento do fluxo normal do documento e o posiciona em relação ao primeiro elemento pai que não tenha posicionamento estático. As propriedades top, right, bottom e left são usadas para especificar a posição absoluta do elemento em relação ao seu contêiner pai posicionado.

Exemplo funcional:
```html
<div style="position: relative; width: 200px; height: 200px; background-color: lightgray;">
    <div style="position: absolute; top: 50px; left: 50px; width: 100px; height: 100px; background-color: green; border: 1px solid #000;">
        Elemento com posicionamento absoluto
    </div>
</div>
```
Nessa situação, os dois elementos irão aparecer um encima do outro.

- fixed: O posicionamento fixo posiciona o elemento em relação à janela do navegador, independentemente do scroll.

Exemplo funcional:
```html
<div style="position: fixed; top: 20px; right: 20px; width: 100px; height: 50px; background-color: orange;">
    Elemento com posicionamento fixo
</div>
```

Nessa situação, os dois elementos irão aparecer um encima do outro.

## 22 Como são definidos os blocos de comando no JavaScript?

Bloco é todo o código que fica entre as chaves “{}”

## 23 Quais as diferenças entre as  de variáveis em JavaScript usando **let**, **var** e **const**?

Todos são declarações de variáveis em JavaScript, mas com algumas diferenças:

- “let”: é usado para declarar uma variável local dentro de um bloco. Ela limita o seu escopo ao bloco em que está contida.
- “var”: é usado para declarar uma variável global independentemente do bloco em que esteja. Isso significa que ela pode ser acessada de qualquer lugar.
- “const”: é usado para declarar uma variável constante dentro de um bloco. Ela se limita dentro do escopo do bloco em que foi declarada. Mas, possui um valor fixo, ou seja, o valor atribuído não pode ser alterado.

O uso do “var” não é encorajado, pois o “let” e o “const” são mais previsíveis e seguros.