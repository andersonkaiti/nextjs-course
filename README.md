# O que é o Next.js

O Next.js é um framework baseado em React.js para a construção de aplicações web full-stack.

## React.js:

- Construir aplicações apenas com React não é viável para criar um ambiente completo e pronto para produção.
- O React.js é uma biblioteca para construção de interfaces de usuário, sendo responsável apenas pela camada visual da aplicação.
- Isso significa que é necessário tomar decisões acerca de outros recursos como roteamento, busca de dados, entre outros.

## Next.js:

- É um framework que utiliza o React.js para construção de interfaces de usuário.
- Ele fornece recursos adicionais que permitem construir uma aplicação pronta para produção.
- Esses recursos incluem roteamento, renderização otimizada, busca de dados, empacotamento, compilação, entre outros.
- Não é necessário instalar pacotes adicionais mais, pois o Next.js fornece tudo integrado.

# Por que aprender Next.js?

O Next.js simplifica o processo de construção de aplicações web prontas para produção, oferecendo:

1. `Routing` - Roteamento baseado no sistema de arquivos.
2. `API Routes` - Permite construir componentes do front-end e APIs do back-end na mesma aplicação.
3. `Renderização` - Suporte a Server Side Components e Client Side Components.
4. `Data fetching` - Fornece suporte nativo ao async e await nos componentes React.js.
5. `Styling` - Flexível com diferentes estilos, suportando css.modules, TailwindCSS e CSSinJS.
6. `Otimização` - Otimizações para imagens, fontes e scripts, aprimorando o Core Web Vitals e experiência geral do usuário.
7. `Build otimizado` - Sistema de build eficiente para desenvolvimento e produção..

O Next.js requer o Node.js na versão 18.18 ou superior.

# Criar projeto Next.js

Para criar um projeto Next.js vazio, basta executar o seguinte comando no terminal e responder às perguntas:

```bash
npx create-next-app@latest --empty
```

Para iniciar o `servidor de desenvolvimento` na porta 3000 do `localhost`, basta executar o seguinte comando:

```bash
npm run dev
```

# Estrutura do Projeto

## Arquivos

- `package.json` - Onde todas as dependências e scripts ficam, como o react, o react-dom e o next. Dependendo das escolhas feitas durante a configuração do projeto, também incluirá o TypeScript com os seus tipos, o TailwindCSS com o PostCSS e os pacotes do ESLint.

A seção de scripts contém:

- `dev` - Modo de desenvolvimento.
- `build` - Build de produção.
- `start` - Inicia o servidor de produção.
- `lint` - Configura o ESLint nativo do Next.js.

Arquivos de configuração:

- `next.config.ts` - Configuração do Next.js.
- `ts.config.json` - Configuração do TypeScript.
- `eslint.config.mjs` - Configuração do Eslint.
- `tailwind.config.ts e postcss.config.mjs` - Configurações do TailwindCSS.
- `package-lock.json` - Assegura a instalação consistente das dependências.
- `next-env.d.ts` - Contém as declarações de TypeScript para o Next.js.

## Pastas

- `/.next` - Criada ao executar os scripts de `dev` ou `build`, e é onde a aplicação é servida.
- `/node_modules` - Contém todas as dependências instaladas.
- `/public` - Contém todos os assets estáticos como imagens ou SVGs.
- `/src` - Contém o código-fonte e, dentro dela está a pasta app/, que é o App Router.
- `/app` - Contém o globals.css, para estilos globais, o layout.tsx, para elementos de UI compartilhados através das páginas e o page.tsx, que é o conteúdo inicial, que se encaixa na propriedade children do layout.tsx.

### Como tudo funciona junto?

Ao executar o comando npm run dev, a execução começa pelo arquivo package.json, move-se para o layout.tsx, renderiza o componente layout raiz. Para a URL, localhost:3000, ele procura o componente em page.tsx, que é renderizado pelo renderizado pelo layout.

# React Server Components (RSC)

React Server Components são uma nova arquitetura introduzida pelo time do React.js e que foi rapidamente adotada pelo Next.js.

Ela introduz uma nova abordagem para criar componentes React.js dividindo-os em dois diferentes tipos.

- Server Components.
- Client Components.

# Server Components

Por padrão, o `Next.js trata todos os componentes como Server Components`.

Server Components podem executar operações no `lado do servidor`, como ler arquivos ou buscar dados diretamente de um banco de dados. Em contrapartida, eles `não` podem conter `React Hooks` ou lidar com `interações de usuário`.

# Client Components

Para criar um `Client Component`, é necessário adicionar a `diretiva "use client"` no `topo` do arquivo do componente.

Enquanto os `Client Components não` podem executar operações no `lado do servidor`, como ler arquivos, eles `podem` utilizar `React Hooks` para lidar com interações do usuário.

Client Components são os componentes React tradicionais das versões anteriores do React.js.

# Roteamento

O Next.js tem um `sistema de roteamento baseado no sistema de arquivos`, em que as URLs acessáveis pelo navegador são determinadas em como as pastas e arquivos são organizadas.

Nem todo arquivos se torna uma rota, pois é necessário seguir algumas convenções.

## Convenções de Roteamento

1. Todas as rotas devem ficar dentro da `pasta app/`.
2. Arquivos de rota devem ser chamados ou de `page.js` ou `page.tsx`.
3. Cada pasta representa um segmento do caminho da URL.

Quando essas convenções são seguidas, o arquivo automaticamente se torna disponível como uma rota, o arquivo page.tsx automaticamente mapeia as URL do site. Além disso, o Next.js cria automaticamente o arquivo layout.tsx.

As rotas diretamente ligadas ao nome das suas pastas dentro de uma pasta app/.

- / -> app/page.tsx
- /about -> about/page.tsx
- /profile -> profile/page.tsx

```
└───app
    ├───about
    │   └───page.tsx
    └───profile
        └───page.tsx
```

## Rotas Aninhadas

Para criar rotas aninhadas, basta criar uma pasta dentro de outra pasta, com ambas seguindos as convenções de roteamento para serem rotas válidas.

- /blog/first -> blog/first/page.tsx
- /blog/second -> blog/second/page.tsx

```
└───blog
    ├───first
    │   └───page.tsx
    └───second
        └───page.tsx

```

## Rotas Dinâmicas

Em muitas situações, utilizar caminhos predefinidos não é prático. Para esses casos, o Next.js oferece suporte a rotas dinâmicas, permitindo maior flexibilidade.

Para criar uma rota dinâmica, basta envolver o nome da pasta com colchetes ([ ]). Isso indica ao Next.js que o segmento da URL é dinâmico e pode assumir diferentes valores.

Para obter o valor dinâmico, é necessário utilizar a `propriedade params` que o componente recebe. Essa propriedade é uma Promise que resolve para um objeto contendo os segmentos dinâmicos como pares chave-valor. Para lidar com a Promise, é possível async e await e acessar os segmentos dinâmicos:

```
└───products
    └───[productId]
        └───page.tsx
```

```tsx
export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return <h1>Details about product {productId}</h1>;
}
```

## Rotas Dinâmicas Aninhadas

Em aplicações reais, existem cenários em que é necessário lidar com múltiplos segmentos dinâmicos nas rotas. Para isso, no componente da rota aninhada, é possível receber a propriedade params que conterá todos os segmentos em um único objeto:

```
└───products
    └───[productId]
        │───page.tsx
        └───[reviewId]
            └───page.tsx
```

```tsx
export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
}
```

## Capturar todos os segmentos

Caso uma rota tenha uma subrota dinâmica, que também possui outra subrota dinâmica, basta criar mais um nível de pasta aninhada.

No entanto, é possível lidar com todos os segmentos de rota em apenas um arquivo. Para isso, o Next.js oferece uma convenção especial no nome da pasta: basta utilizar colchetes com três pontos `([...nome])`, ou seja, o operador spread, seguido de um nome, e adicionar um page.tsx. Dessa forma, mesmo que haja um aninhamento de segmentos de rota, todas eles serão capturados no mesmo componente.

No entanto, para tornar a captura dos segmentos opcional, basta adicionar um par extra de colchetes no nome da pasta `([[...nome]])`. Isso faz com que a rota sem subrota também seja acessível.

Para acessar o segmentos de rota, basta desestruturar a `propriedade params`, que será uma Promise que se resolve em um `array de strings`, e lidar com ela:

```
└───docs
    └───[[...slug]]
        └───page.tsx
```

```tsx
export default async function Docs({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }

  return <h1>Docs home page</h1>;
}
```

## Página não encontrada

Para criar um componente personalizado para a `página "não encontrado"`, basta criar um arquivo com o nome `not-found.tsx`. Esse nome deve ser exatamente not-found.tsx, pois é uma convenção do Next.js:

```tsx
export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Could not find requested resources</p>
    </div>
  );
}
```

Esse componente será chamado automaticamente quando alguma rota não for encontrada, mas é possível chamá-lo programaticamente utilizando a função `notFound` do `"next/navigation"`:

```tsx
export default async function ProductReview() {
  notFound();
}
```

Também é possível criar arquivos `not-found.tsx específicos` para a rota. Então, quando a `função notFound` for chamada, o Next.js utilizará o componente NotFound mais específico que encontrar.

Além disso, o `componente NotFound não aceita propriedades`. Portanto, para exibir mensagens com base nos parâmetros das rotas, é necessário utilizar o `hook usePathname()`. Esse hook obtém a `URL`, permitindo dividi-la em um array e selecionar o segmento para exibi-lo:

```
└───products
    └───[productId]
        └───reviews
            └───[reviewId]
                ├───not-found.tsx
                └───page.tsx
```

```tsx
"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  return (
    <div>
      <h2>
        Review {reviewId} not found for {productId}
      </h2>
    </div>
  );
}
```

## Colocação de Arquivos

Embora o Next.js forneça algumas convenções, ele também é bem flexível na forma como os arquivos e pastas são estruturados: uma rota só se torna publicamente acessável ao adicionar um arquivo page.js ou page.tsx.

O navegador apenas recebe o que é retornado pelo arquivo `page.tsx`, e o componente precisa ser exportado com `export default`. Então é possível incluir arquivos de projeto (como componentes, hooks, utilitários, entre outros) dentro de segmentos de rotas na `pasta app/` sem que elas se tornam rotas.

```
└───dashboard
    ├───line-chart.tsx -> not-found
    └───page.tsx
```

- A o componente do arquivo `not-found.tsx` mais específico é exibido caso a page.tsx não seja adicionada ainda.

## Rotas Privadas

Para tornar uma rota privada, basta adicionar um `underscore (_)` no começo do nome da pasta. Dessa forma, as pastas e todas as suas subpastas são excluídas do roteamento. Isso indica ao Next.js para não incluir esses arquivos no sistema de roteamento.

```
└───_lib
    └───page.tsx
```

Pastas privadas são úteis para:

- Separar a lógica de UI da lógica de roteamento.
- Organizar os arquivos internos do projeto de forma consistente.
- Facilita o agrupamentoo de arquivos relacionados.
- Previne potenciais conflitos de nomes com futuras convenções de nomeação do Next.js.

Se for necessário incluir um underscore na URL, é recomendado utilizar `%5F (sua versão URL-encoded)`, para evitar problemas com roteamento e codificação.

## Grupos de Rotas

Grupos de rotas permitem organizar as rotas e arquivos do projeto de forma lógica, sem impactar na estrutura da URL.

Essa é a única forma de compartilhar layouts entre rotas sem afetar a URL.

Para que rotas relacionadas não fiquem espalhadas pela pasta app/, basta agrupá-las adicionando-as em uma pasta e envolver o nome da pasta entre parênteses. Isso indica ao Next.js que a pasta é apenas uma ferramenta de organização, excluindo-a do caminho da URL.

```
└───(auth)
    ├───forgot-password
    │   └───page.tsx
    ├───login
    │   └───page.tsx
    └───register
        └───page.tsx
```

Nesse caso, as URLs serão:

- /forgot-password
- /login
- /register

A pasta (auth) organiza as rotas, mas não interfere na estrutura final da URL.

## Layout

Enquanto os componentes presentes nos arquivos page.tsx são componentes de UI específicos da rota, um layout é uma estrutura de UI entre múltiplas páginas dentro da aplicação. Geralmente ele inclui uma estrutura consistente, como um cabeçalho e um rodapé, que aparecem em todas as páginas.

## Como criar Layouts

Para criar um layout, basta exportar um componente React padrão (export default) de um arquivo layout.js ou layout.tsx.

Esse componente receberá a propriedade children que o Next.js vai popular com o conteúdo da aplicação.

`Importante:` Todo componente de layout precisa da propriedade children, pois ela definirá onde o conteúdo da página será renderizado.

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
```

É possível aninhar layouts, criando um layout dentro de outro. Nesse caso, o layout da subpasta substituirá a propriedade children pelo conteúdo correspondente, permitindo uma estrutura flexível e organizada.

## Múltiplos Layouts Raiz

Deveria haver apenas um layout raiz na pasta.

- Uso do grupo de rotas.
- Permite organizar a estrutura do projeto sem afetar a URL.
- Também permite aplicar layour de forma seletiva a partes específicas da aplicação.

É essencial que o RootLayout não exista mais na pasta app/ mais.

```
├───(auth)
│   ├───login
│   └───register
└───(marketing)
    ├───customers
    └───revenue
```

## Metadado de Roteamento

A API Metadata no Next.js é um recurso poderoso para definir metadados para cada página, garantindo que o conteúdo seja apresentado corretamente quando é compartilhado ou indexado por motores de busca.

O App Router fornece duas maneiras de lidar com metadados em arquivos `layout.tsx` ou `page.tsx`.

1. Exportar um `objeto estático` de metadados.
2. Exportar uma `função generateMetadata` dinâmica.

## Regras dos Metadados

Tanto o `layout.tsx` quanto o `page.tsx` podem exportar metadados. No caso dos layouts, os metadados são aplicados a todas as páginas que o compartilham, enquanto metadados de página são específicos para a página em questão.

Os metadados seguem uma hierarquia de baixo para cima, começando pelo nível raiz. Quando existem metadados em múltiplos lugares ao longo de uma rota, eles se fundem, e os metadados da página sobrescrevem metadados do layout para as propriedades correspondentes.

## Metadados Estáticos

Para definir metadados estáticos, é necessário exportar um `objeto metadata` da seguinte forma:

```tsx
export const metadata = {
  title: "About Codevolution",
};
```

## Metadados Dinâmicos

Metadados dinâmicos são úteis, quando os metadados dependem de informações dinâmicas, como parâmetros de rota, dados externos ou metadados definidos em segmentos pais.

Para isso utilizá-los, é necessário exportar uma função com o nome `generateMetadata`, que será `assíncrona`. Ela receberá propriedades, como o objeto params, e seu retorno será uma Promise do tipo Metadata. Dentro dessa função, é necessário retornar um `objeto de metadados`:

```tsx
type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId: id } = await params;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};
```

## Uso de Metadados em Client Components

Não é possível utilizar o objeto estático de metadados e a função generateMetadata em um mesmo segmento e nem em um Client Component.

Então, para utilizar metadados em um Client Component, é preciso `mantê-los em um Server Component`. As funcionalidades Client Side podem ser extraídas em um componente separado e o `Client Component pode ser utilizado dentro do Server Component`.

```tsx
import Counter from "./counter";

export const metadata = {
  title: "Counter",
};

export default function CounterPage() {
  return <Counter />;
}
```

```tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-center">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-black dark:text-white dark:hover:border-gray-600 dark:hover:bg-neutral-900 dark:focus:ring-neutral-800"
      >
        Increment
      </button>
    </div>
  );
}
```

## Títulos Metadados

O campo `title` nos metadados define o título da aplicação e pode ser tanto uma string como um objeto. Além disso, para garantir suporte com TypeScript, é recomendado importar o tipo Metadata.

Ao utilizar a abordagem de objeto, existem 3 opções:

- `template` - Permite adicionar prefixos consistentes ou sufixos ao título. Essa propriedade é aplicada nas rotas filhas, substituindo o %s no template pelo título da rota filha.
- `default` - Aceita como valor um valor reserva para qualquer rota filha que não especifica o seu próprio título:

```tsx
export const metadata: Metadata = {
  title: {
    default: "Next.js Tutorial - Codevolution",
    template: "%s | Codevolution",
  },
  description: "Generated by Next.js",
};
```

- `absolute` - Utilizado para remover o título da rota filha do padrão do template da rota pai:

```tsx
export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};
```

## Componente Link

Em vez de acessar a rota diretamente pela URL, os usuário podem navegar por meio de links e são redirecionados após realizar certas ações.

Para navegação no lado do cliente, o Next.js fornece o componente `<Link>`. O componente `<Link>` é uma extensão do elemento HTML `<a>` e é a principal maneira da navegar entre rotas no Next.js.

Para utilizá-lo, é necessário importá-lo de `"next/link"` e inserir um conteúdo entre as tags do component, além de definir a propriedade `href`, que conterá a rota de redirecionamento.

Além disso, é possível utilizar links dinâmicos utilizando template literals e envolvendo-os entre chaves.

```tsx
<Link href={`/products/${productId}`}></Link>
```

Inclusive, o componente aceita a propriedade replace. Quando definida, ela sobrescreve o atual histórico de rotas em vez de adicionar um novo.

## Links ativos

A `estilização de links` é essencial para o usuário entender em qual da aplicação ele está. Para adicioná-la, basta utilizar o `hook usePathname`, que retorna o `caminho da atual URL` atual. A partir dela, é possível verificar qual é a rota ativa comparando o caminho atual com os segmentos de rotas.

```tsx
const pathname = usePathname();

const isActive =
  pathname === link.href ||
  (pathname.startsWith(link.href) && link.href !== "/");
```

## params e searchParams

Para uma dada URL, é possível capturar informações dinâmicas de duas maneiras:

- `params` - Promessa que se resolve em um objeto contendo os parâmetros da rota dinâmica (como o id).
- `searchParams` - Promessa que se resolve em um objeto contendo os parâmetros de consulta (como filtros de ordenação).

```
/articles/breaking-news-123?lang=en
                ↓              ↓
          parâmetros de   parâmetros de
          rota dinâmica   consulta
            (params)      (searchParams)
```

- params -> Captura "breaking-news-12".
- searchParams -> Captura "lang=en".

Como ambos são promessas, é necessário utilizar `async` e `await` para resolver seus valores, que funciona em Server Components, mas não em Client Components:

```tsx
import Link from "next/link";

export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
}
```

Para acessar o `params` e o `searchParams` em `Client Components`, é necessário utilizar o `hook use()` do React.js:

```tsx
export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = use(params);
  const { lang = "en" } = use(searchParams);
}
```

Enquanto o `page.tsx` tem acesso ao `params` e ao `searchParams`, o `layout.tsx` apenas tem acesso ao `params`.

## Navegando Programaticamente

Em aplicações reais, a navegação programática é essencial em situações como submissão de formulário, entre outros.

Para isso, o Next.js fornece o `useRouter()` do `"use/navigation"`, que retornará uma `instância do AppRouter` contendo metadados úteis para a navegação.

- `.push()` - Adiciona qualquer rota válida no histórico da pilha de navegação.
- `.replace()` - Substitui a página atual no histórico da pilha de navegação em vez de adicionar mais um valor.
- `.back()` - Volta para a página anterior.
- `.forward()` - Avança no histórico da pilha de navegação.

```tsx
"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
    // router.replace("/");
    // router.back();
    // router.forward();
  };
}
```

No contexto de Server Components, é possível utilizar a `função redirect` do `"next/navigaton"`:

```tsx
redirect("/products");
```

## Templates

Os layouts montam novos conteúdos de página e mantêm elementos compartilhados entre as páginas intactos, resultando em um melhor desempenho.

Durante a navegação, as páginas são remontadas, enquanto o input do layout, que é um componente compartilhado entre elas, não é recriado a cada mudança de rota.

No entanto, às vezes é necessário que o layout crie uma nova instância para cada componente filho durante a navegação. Neste caso, existem os templates, que são similares aos layouts, pois também são UIs compartilhadas entre múltiplas páginas da aplicação. A diferença é que, sempre quando o usuário navega entre rotas que compartilham um mesmo template, é obtido um conteúdo completamente novo.

- Uma nova instância do template é montada.
- Os elementos DOM são recriados.
- O estado é limpo.
- Os efeitos são ressincronizados.

## Criação de um Template

Para criar um template, é necessário exportar um componente React padrão de um arquivo `template.js` ou `template.tsx` e, assim como layouts, templates precisam aceitar a `propriedade children` para renderizar os segmentos de rotas aninhados.

Além disso, é possível utilizar o layout.tsx e o template.tsx juntos:

```
└───(auth)
    ├───forgot-password
    ├───login
    ├───register
    └───template.tsx
```

```tsx
"use client";

import { useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const pathname = usePathname();

  return <div className="mt-2 flex flex-col gap-2 text-center">{children}</div>;
}
```

## loading.tsx

O arquivo loading.tsx cria um estado de carregamento que os usuários veem enquanto esperam o conteúdo carregar em um segmento de rota específico.

Esse estado de carregamento aparece instantaneamente durante a navegação, proporcionando uma experiência responsiva ao sinalizar que a aplicação está ativamente carregando o conteúdo.

Dentro do `arquivo loading.tsx` é necessário exportar um componente React.js padrão. Por baixo dos panos, o arquivo envolver o conteúdo do `page.tsx` e os seus filhos aninhados em um `Suspense` do React.js.

Ele deve ser colocado na mesma pasta que o `page.tsx`:

```
└───blog
    ├───page.tsx
    └───loading.tsx
```

```tsx
export default function Loading() {
  return <h1>Loading</h1>;
}
```

Benefícios:

- Os usuários têm um feedback imediato quando eles navegam para algum lugar novo, permitindo que saibam que o seu clique causou alguma coisa.
- O Next.js mantém layouts compartilhados na tela enquanto o conteúdo carrega, permitindo que o usuário continue utilizando menus de navegação mesmo quando o conteúdo principal ainda não foi carregado.

## Tratamento de Erros

Quando ocorre um erro na aplicação, o comportamento varia conforme o ambiente:

- `Ambiente de desenvolvimento` - Uma tela com Unhandled Runtom Error e a mensagem de erro será exibida.
- `Ambiente de produção` - Uma tela com mensagem de erro é exibida.

Para lidar com erros de forma elegante, é possível limitá-los para que afetem apenas uma parte da aplicação, mantendo o restante funcional.

## Configuração o Tratamento de Erros

Para criar um tratamento de erro local, é necessário, no segmento de rota desejado, exportar um Client Component React padrão do arquivo `error.tsx`. Esse componente automaticamente envolve os segmentos de rota e os seus filhos aninhados em um React Error Boundary.

Além disso, ele recebe o `objeto error` como `propriedade`, que é do `tipo Error`, que pode ser utilizado para tornar a mensagem de erro dinâmica:

```tsx
"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return <p>{error.message}</p>;
}
```

É possível criar interfaces de erros customizadas para segmentos de rotas específicos utilizando a hierarquia do sistema de arquivos. Isso permite isolar erros, garantindo que apenas a parte com erro exiba a mensagem de erro, enquanto mantém o resto da aplicação funcional:

```
└───products
    └───[productId]
        └───reviews
            └───[reviewId]
                └───error.tsx
```

## Recuperando-se de Erros

Em aplicações React.js, alguns erros são temporários e podem ser resolvidos com simples tentativas de recarregamento.

Para lidar com esses casos, o componente recebe a `propriedade reset()`, que é uma função que não retorna nada. Essa função permite ao usuário renderizar o componente com o erro, no entanto, ele tentará renderizar o Client Side.

Neste caso, é recomendado utilizar o `startTransition()` do React e o `useRouter()` do Next.js. Isso assegura que o recarregamento seja adiado até a próxima fase de renderização, permitindo que o React lide com qualquer estado pendente antes de prosseguir.

```tsx
"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <p>{error.message}</p>
      <button
        onClick={reload}
        className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-black dark:text-white dark:hover:border-gray-600 dark:hover:bg-neutral-900 dark:focus:ring-neutral-800"
      >
        Try again
      </button>
    </div>
  );
}
```

## Tratamento de Erros em Rotas Aninhadas

A `estrutura e a hierarquia` de pasta afeta como o arquivo error.tsx funcionará.

Os erros sempre propagram até encontrar o `ErrorBoundary` mais próximo.

O arquivo error.tsx não lida apenas com os erros da sua própria pasta, mas também com todos os segmentos filhos aninhados abaixo.

Através da organização estratégica dos arquivos `error.tsx` em diferentes níveis das pastas de rotas, é possível controlar o nível de detalhamento do tratamento de erros.

Ao adicionar o arquivo em uma rota pai mais acima, a mensagem de erro customizada aparece, mas toda a rota é substituída pela mensagem de erro.

Portanto, o local onde o arquivo error.tsx faz muita diferença, pois determina onde exatamente quais partes da UI serão afetadas quando algo der errado.

## Lidando com erros em layouts

O `Error Boundary` não captura erros lançados no `layout.tsx` dentro do mesmo segmento, devido à hierarquia de componentes. Isso ocorre porque o `layout.tsx` está `acima` do `Error Boundary` na árvore de componentes.

Portanto, o arquivo `error.tsx` não lida com erros do `layout.tsx` no mesmo segmento. Para resolver isso, é necessário mover o `error.tsx` para o segmento pai do `layout.tsx`.

```
└───products
    ├───[productId]
    │   └───layout.tsx
    └───error.tsx
```

## Lidando com erros globais

Se o arquivo `error.tsx` não consegue lidar com erros de um `layout.tsx`, o que deveria ser realizado com o RootLayout?

Neste caso, como nem o error.tsx e nem o layout.tsx possuem elementos pais. Para gerenciar erros globais, o Next.js fornece um arquivo especial chamado `global-error.tsx`, que deve ser posicionado na raiz do diretório da aplicação.

Esse recurso é a última forma de defesa quando ocorre alguma falha no nível mais alto da aplicação. Dessa forma, basta exportar um componente React.js padrão do arquivo `global-error.tsx`, que será renderizado quando ocorrer um erro no `RootLayout` ou qualquer uma de suas rotas aninhadas na ausência de um Error Boundary:

```
└───app
    └───global-error.tsx
```

No entanto, o arquivo `global-error.tsx` funciona apenas em `produção`.

Além disso, ele também precisa incluir as próprias tags `<html>` e `<body>`, porque, quando o erro ocorre, o `RootLayout é completamente substituído`:

```tsx
"use client";

export default function GlobalError() {
  return (
    <html>
      <body className="bg-black dark:text-white">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h2 className="mb-4 text-2xl font-bold">Something went worng!</h2>
          <button
            onClick={() => window.location.reload()}
            className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-black dark:text-white dark:hover:border-gray-600 dark:hover:bg-neutral-900 dark:focus:ring-neutral-800"
          >
            Refresh
          </button>
        </div>
      </body>
    </html>
  );
}
```

## Rotas Paralelas

Rotas paralelas são um mecanismo avançado de roteamento que permite a renderização simultânea de múltiplas páginas dentro de um mesmo layout.

## slots

As rotas paralelas são definidas utilizando `"slots"`, uma convenção que organiza o conteúdo de forma modular. Para criar um slot, basta criar uma pasta que seguirá a convenção de nomeação `@folder`. Cada slot definido automaticamente se torna uma prop no seu `layout.tsx`.

Detalhes importantes:

- Slots `não` são segmentos de rota e `não` afetam a estrutura da URL.
- A `propriedade children` também é um `slot`, mas que não precisa da sua própria pasta.

```
complex-dashboard/page.tsx é o mesmo que complex-dashboard/@children/page.tsx
```

```
└───complex-dashboard
    ├───@login
    │   └───page.tsx
    ├───@notifications
    │   └───page.tsx
    ├───@revenue
    │   └───page.tsx
    └───@users
        └───page.tsx
```

```tsx
export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  const isLoggedIn = true;

  return;
  <div>
    <div>{children}</div>
    <div className="flex">
      <div className="flex flex-col">
        <div>{users}</div>
        <div>{revenue}</div>
      </div>
      <div className="flex flex-1">{notifications}</div>
    </div>
  </div>;
}
```

## Casos de Uso de Rotas Paralelas

- Dashboard com múltiplas seções.
- Split-view interfaces.
- Layout com múltiplos painéis.
- Interfaces de admin complexas.

## Benefícios

- São boas para dividir o layout em slots gerenciáveis.
- Manuseio de rota independente.

Cada slot pode lidar com o seu próprio estado de carregamento e de erro.

Esse controle granular é útil quando diferentes seções da página carregam com velocidades variáveis ou encontram erros únicos.

## Subnavegação.

Cada slot pode funcionar como uma `miniaplicação` completa com a sua própria navegação e gerenciamento de estado. Isso permite `interações independentes`, como aplicar filtros, ordenar dados, ou navegar através de páginas sem afetar outros partes da interface.

Para adicionar `subnavegação` em um slot, basta criar uma pasta dentro do `@folder` que será um segmento de rota normal. Para acessar a subrota, basta adicionar o componente Link, mirando para a subrota da rota.

No seguinte exemplo, para acessar a subrota `archived` do slot `@notifications`, basta acessar `complex-dashboard/archived`:

```
└───complex-dashboard
    ├───@login
    │   └───page.tsx
    ├───@notifications
    │   └───archived
    │       └───page.tsx
    ├───@revenue
    │   └───page.tsx
    └───@users
        └───page.tsx
```

## Rotas Inigualáveis

O conteúdo renderizado dentro de um slot corresponde à URL atual. Ao navegar para uma subrota, apenas o slot relevante é atualizado, enquanto os outros permanecem inalterados.

Durante a navegação pela interface, o Next.js preserva o estado dos slots não correspondentes, mantendo o conteúdo anterior visível. Assim, mesmo ao remover a subrota do caminho da URL, esses slots continuam exibindo o mesmo conteúdo, sem serem influenciados.

No entanto, ao recarregar a página, o Next.js busca o arquivo `default.tsx` em cada slot não correspondente. Esse arquivo é essencial, pois funciona como um fallback, garantindo que haja um conteúdo reserva para ser renderizado quando o framework não consegue restaurar o estado ativo de um slot a partir da URL atual.

Se o arquivo `default.tsx` estiver ausente, o Next.js exibe um `erro 404`, indicando que não foi possível encontrar o conteúdo esperado.

## Rotas Condicionais

As rotas condicionais permitem a exibição de diferentes conteúdos com base no estado de autenticação do usuário. Por exemplo, é possível apresentar um painel de controle para usuários autenticados e uma tela de login para aqueles que não estão logados.

Essa abordagem mantém o código organizado e facilita a manutenção, mesmo utilizando a mesma URL para diferentes estados da aplicação:

```tsx
export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}
```

## Interceptação de Rotas

A interceptação de rotas é um mecanismo avançado que permite carregar uma rota a partir de outra parte da aplicação, mantendo o layout atual.

Isso é útil para exibir um novo conteúdo sem perder o contexto do usuário. Ao clicar em uma foto em uma galeria, o usuário continua na mesma página, mas com uma URL diferente. A imagem é mostrada em um modal, e se a URL for acessada diretamente ou a página for recarregada, a foto será exibida em uma nova página.

Para combinar segmentos de rota no mesmo nível, utiliza-se o a convenção `(.)`:

```
f1
├───(.)f2
│   └───page.tsx
└───f2
    └───page.tsx
```

É similar ao `./` para se referir à pasta atual.

- `(..)` - Combina segmentos um nível acima:

```
├───f1
│   └───(..)f3
│       └───page.tsx
└───f3
    └───page.tsx
```

É similar ao `../` para se referir a uma pasta um nível cima.

- `(..)(..)` - Combina segmentos dois níveis acima:

```
├───f1
│   └───f2
│       └───(..)(..)f4
└───f4
    └───page.tsx
```

É similar ao `../../` para se referir a uma pasta dois níveis acima.

- `(...)` - Combina segmentos do diretório raiz da aplicação:

```
├───f1
│   └───f2
│       └───inner-f2
│           └───(...)f5
│               └───page.tsx
└───f5
    └───page.tsx
```

# Manipuladores de Rotas

O App Router do Next.js permite criar manipuladores de rotas customizadas usando um recurso chamado `Route Handlers`.

Diferente de `páginas de rotas (page.tsx)`, que fornecem conteúdo HTML, os `Route Handlers` permitem construir `endpoints RESTful` com controle total sobre a resposta.

- Funciona de forma semelhante ao desenvolvimento de uma aplicação com Node.js + Express.js.
- Permitem a realização todas as operações de CRUD em um banco de dados.
- Não é necessário configurar um servidor separado.
- Úteis para realizar requisições para APIs externas.

Um exemplo de utilização de Route Handlers está em uma aplicação que precisa se comunicar com serviços de terceiros. Como Route Handlers são executados no `lado do servidor`, `informações confidenciais`, como `chaves privadas`, ficam seguras e não são expostas ao navegador.

As route Handlers são equivalentes a API routes na Page Router.

O Next.js oferece suporte aos seguintes métodos: `GET, POST, PUT, PATCH, DELETE, HEAD e OPTIONS`. Caso um método não suportado seja chamado, o Next.js retornará a resposta `"404 Method Not Allowed"`.

## Criação de um Route Handler

Assim como páginas de rotas, `Route Handlers` devem ser organizados na pasta `app/` e devem ser estruturados da seguinte forma:

- É necessário criar uma subpasta dentro da pasta `app/`.
- Dentro dela, é necessário criar o arquivo `route.ts` ou `route.js`.

Por convenção, dentro do arquivo `route.ts`, é necessário exportar uma função que corresponde ao `verbo HTTP desejado` e, como resposta, é possível retornar um resposta simples com o objeto `Response` do JavaScript:

```ts
export async function GET() {
  return new Response("Hello, World!");
}
```

## Organização

Os Route Handlers também são flexíveis em relação à organização, então é possível aninhá-los em pastas e subpastas.

Caso um arquivo `route.ts` e um arquivo `page.tsx` existam na mesma pasta, o `route.ts` assume o controle por padrão e processa a requisição. Para evitar esse conflito, basta mover o `route.ts` para uma subpasta.

## Manipulando solicitações GET

Para manipular solicitações GET, basta exportar uma `função assíncrona` chamada `GET` e, dentro dela, retornar uma resposta no formato `JSON` utilizando o método `.json()`:

```ts
export async function GET(request: NextRequest) {
  return Response.json(filteredComments);
}
```

## Manipulando requisições POST

Para adicionar o manipulador POST, basta exportar uma `função assíncrona` no mesmo arquivo `route.ts` com o nome POST, pois é crucial que a função tenha um nome que corresponda ao `verbo HTTP`.

Cada Route Handler recebe um objeto `request` como parâmetro e, para acessar os dados do corpo da requisição, é necessário utilizar o `método .json()` para extrair e processar os dados em `formato JSON`. Após isso, basta adicionar a lógica para inserir os dados no banco de dados.

Para responder à requisição, o `Response.json()` poderia ser utilizado, no entanto, ele retornaria automaticamente uma resposta com `status code 200`. Neste caso, como um novo recurso está sendo criado com a requisição POST, o `status 201 é mais apropriado`. Por isso, é recomendado `instanciar a classe Response` para criar uma `resposta personalizada`, indicando o corpo, o `"Content-Type"` e o `status code`:

```ts
export async function POST(request: Request) {
  const comment = await request.json();

  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
```

## Manipuladores de Rota Dinâmicos

Ao realizar operações com PATCH ou DELETE, é necessário especificar qual registro deve ser atualizado ou deletado. Isso significa que eles precisam de um endpoint dinâmico como.

No Next.js, os Route Handlers seguem o mesmo padrão que páginas de rotas dinâmicas, então basta criar uma pasta com o `nome dinâmico envolvido entre colchetes` dentro da pasta correspondente à rota e adicionar o arquivo `route.ts` dentro dela:

```
└───comments
    └───[id] -> segmento dinâmico
        └───route.ts
```

Para acessar o parâmetro de rota id, é necessário extrair dois parâmetros da função:

- `request`, do `tipo Request`.
- Um objeto de contexto, que contém o objeto `params`.

E, para acessar o id, basta utilizar `await` no objeto params `desestruturá-lo` para obter o `id`:

```ts
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === +id);

  return Response.json(comment);
}
```

## Manipulando solicitações PATCH

As requisições PATCH permitem modificar parcialmente um recurso.

Para isso, é necessário:

- Obter os parâmetros a partir do objeto context recebido pela função.
- Desestruturar o id.
- Extrair o corpo do request com o método assíncrono `.json()`.
- Atualizar o registro no banco de dados.
- Retornar uma resposta.

```ts
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const body = await request.json();

  const { text } = body;

  const index = comments.findIndex((comment) => comment.id === +id);

  comments[index].text = text;

  return Response.json(comments[index]);
}
```

## Manipulando solicitações DELETE

Basta realizar os mesmos procedimentos anteriores e deletar o registro do banco:

```ts
export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const index = comments.findIndex((comment) => comment.id === +id);

  const deletedComment = comments[index];

  comments.splice(index, 1);

  return Response.json(deletedComment);
}
```

## Parâmetros de consulta de URL

Quando for necessário filtrar os registros com base em algum critério, é possível utilizar `parâmetros de consulta na URL`, seguindo a estrutura `?query=value`.

No Next.js, o objeto `NextRequest` (importado de `"next/server"`) fornece métodos para gerenciar esses parâmetro. Basta recebê-lo como parâmetro da função, acessar a propriedade `request.nextUrl.searchParams`, que retornará uma instância de `URLSearchParams` e, a partir dela, utilizar o `método .get()` para obter o parâmetro:

```ts
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("query");

  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;

  return Response.json(filteredComments);
}
```

## Headers em Route Handlers

Os headers HTTP são metadados incluídos em requisições e respostas, fornecendo informações sobre elas.

## Request Headers

Os headers de requisição são enviados pelo cliente, como um navegador web, para o servidor, e contêm informações essenciais sobre a requisição, o que ajuda o servidor a interpretar e processar a requisição corretamente:

- `User-Agent` - Identifica o `navegador` e o `sistema operacional` para o servidor.
- `Accept` - Indica o tipo de conteúdo que o `cliente pode processar`, como: textos, vídeos ou formatos de imagem.
- `Authorization` - Armazena credenciais, permitindo acesso controlado a recursos protegidos.

## Response Headers

Os headers de resposta são enviados pelo servidor para o cliente, fornecendo informações sobre o servidor e os dados retornados:

- `Content-Type` - Especifica o tipo de mídia da resposta e informa ao cliente qual é o tipo de dado do conteúdo retornado, como: `text/html` para HTML, `application/json` para dados JSON, etc.

## Como ler os Headers no Route Handler

Existem duas formas principais de acessar os headers em Route Handlers:

- Utilizando o parâmetro `request` do `tipo NextRequest`:

É possível acessar os headers utilizando o `getter request.headers`. E, para a para extrair os headers, basta utilizar a `Web API Headers`, e em seguida utilizar o `método .get()`.

```ts
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));
}
```

- Utilizar a função headers() do Next.js fornece:

O Next.js também fornece a `função assíncrona headers()`, que pode ser importada de `"next/headers"`, e que retorna um objeto de headers `ReadOnly`, ou seja, somente de leitura. Para utilizá-la, é necessário invocá-la com um `await`, armazenar o seu conteúdo em uma variável e utilizar o `método .get()` para obter o header:

```ts
export async function GET(request: NextRequest) {
  const headerList = await headers();

  console.log(headerList.get("Authorization"));
}
```

Como o objeto retornado é somente de leitura, é necessário configurar novos headers retornando uma nova resposta com um header customizado:

```ts
export async function GET(request: NextRequest) {
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
```

## Cookies em Route Handlers

Cookies são pequenos pedaços de dados que o servidor envia para o navegador do usuário, e o navegador pode armazená-los e renviá-los de volta em requisições futuras. Eles têm 3 propostas principais:

- `Gerenciar sessões` - Como login de usuários e carrinhos de compra.
- `Preferências de usuário` - Como preferências e temas.
- `Monitoramento` - Como gravar e analisar o comportamento do usuário.

Existem 3 maneiras de definir e obter cookies em uma Route Handler.

- Utilizando o header `Set-Cookie`:

É possível configurar um cookie ao retornar uma nova resposta pelo `header "Set-Cookie"`:

```ts
export async function GET(request: NextRequest) {
  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Set-Cookie": "theme=dark",
    },
  });
}
```

Para acessar o cookie, basta acessar o `parâmetro request` do `tipo NextRequest` e utilizar o `método .get()`:

```ts
export function GET(request: NextRequest) {
  const theme = request.cookies.get("theme");
}
```

- O Next.js também fornece uma função nativa chamada `cookies()`. Ela é assíncrona, então é necessário utilizar `await`:

Basta invocá-la e armazenar o seu retorno em uma variável. Com isso, é possível definir mais cookies com o `método .set()`, que aceita a `chave` e o `valor`, ou obter o cookie com o `método .get()`.

```ts
export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "20");
  console.log(cookieStore.get("resultsPerPage"));
}
```

## Redirecionamento em Route Handlers

Para redirecionar usuários para outras rotas ou endpoints, o Next.js oferece a `função redirect()`.

Basta importá-la de `"next/navigation"` e invocá-la no Route Handler, inserindo o novo caminho como argumento:

```ts
export async function GET() {
  redirect("/api/v2/users");
}
```

Ao realizar o redirecionamento, a função gerará uma resposta de redirecionamento com o `status 307`.

## Cache em Route Handlers

Os Route Handlers não são armazenados em cache por padrão, mas o Next.js oferece a possibilidade para configurar o armazenamento em cache para evitar consultas desnecessárias a um banco de dados ao utilizar o método GET, por exemplo.

Ao acessar uma rota contendo o horário, por exemplo, cada recarregamento mostrará o último horário porque não há um armazenamento em cache por padrão.

Para isso forçar o armazenamento em cache, basta adicionar uma de configuração no topo do arquivo:

```ts
export const dynamic = "force-static";
```

No entanto, não existe armazenamento em cache em ambiente de desenvolvimento, apenas em produção.

Para `atualizar os dados` após um certo intervalo de tempo, é possível adicionar mais uma configuração chamada `revalidate`, que irá revalidar os dados em cache, e inserir o `tempo em segundos como valor`:

```ts
export const revalidate = 10;
```

Vale lembrar que o armazenamento em cache apenas funciona em métodos GET, então outros métodos HTTP como POST, PUT ou DELETE nunca são armazenados em cache.

Além disso, o armazenamento em cache também `não` é aplicado ao utilizar as `funções headers()` e `cookies()`, ou trabalhar com o `objeto request` no método GET.

## Middleware

O middleware no Next.js é um recurso poderoso que permite `interceptar` e `controlar o fluxo de requisições` e respostas através da aplicação. Isso é feito em um nível global da aplicação, aprimorando recursos como redirecionamento, reescrita de URL, autenticação, headers, cookies e mais.

O middleware pode ser configurado para atuar apenas em rotas específicas, permitindo especificar as rotas em que ele deve estar ativo.

Para criar um middleware, basta adicionar o arquivo `middleware.ts` ou `middleware.js` na pasta `src/`.

- `Configuração de correspondência customizada:`

É necessário importar a classe `NextResponse` de `"next/server"`, que é uma extensão da `Response API` do JavaScript, e o `tipo NextRequest` de `"next/server"`. Após isso, basta exportar a `função middleware`, que receberá o `parâmetro request` do `tipo NextRequest`, e retornará a `NextResponse` invocando:

- O `método .redirect()`, caso seja necessário redirecionar o usuário para outra página.
- O `método .next()`, para prosseguir com o fluxo da aplicação.

O `método .redirect()` aceita como argumento uma instância da `classe global URL`, que aceita como argumento o `caminho desejado` e o `domínio da aplicação` como `URL base`.

Em seguida, é possível exportar um `objeto de configuração` que informa ao Next.js para `aplicar o middleware` apenas em `rotas específicas`:

```ts
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/profile",
};
```

- `Declarações condicionais:`

Basta verificar se o valor da propriedade `request.nextUrl.pathname` corresponde à rota desejada:

```ts
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/hello", request.nextUrl));
  }
}
```

Além disso, é possível utilizar o `método .rewrite()` para manter a `URL` do navegador `inalterada` enquanto serve um `conteúdo diferente`:

```ts
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.rewrite(new URL("/hello", request.nextUrl));
  }
}
```

## Uso de Cookies e Headers

Para manipular cookies e headers no middleware, é necessário armazenar uma `resposta padrão` da requisição, `invocando o método .next()` da classe `NextResponse`, e utilizar os métodos setters `response.cookies.set()` e `response.headers.set()` para configurar os cookies e headers:

```ts
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");

  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;
}
```

# Renderização

Renderização é o processo de transformar o código do componente em interfaces visíveis e interativas para o usuário.

No Next.js, um dos principais desafios ao construir uma aplicação performática é definir quando e onde essa transformação deve ocorrer.

Antes de entender a renderização no Next.js, é importante entender como ela funciona no React observando como ela evoluiu ao longo do tempo.

## Renderização no React.js

O React.js era utilizado principalmente na construção de `Single Page Applications (SPAs)`:

```
    Client                   Server
       │        request        │
       │──────────────────────>│
Blank  │                       │
screen │                       │
       │<──────────────────────│
       │  HTML + JS reference  │
```

Quando um cliente visita o site, o servidor envia como resposta uma `única página HTML` com uma simples `<div>` e o link para um `arquivo JavaScript` chamado `bundle.js` que contém o que é necessário para executar a aplicação. O navegador baixa o arquivo quando o HTML é processado e, ao fazer isso, `o JavaScript gera o HTML`, `injetando-o` no DOM na `div root`:

```
    Client                   Server
       │        request        │
       │──────────────────────>│
       │<──────────────────────│
       │  HTML + JS reference  │
Blank  │                       │
screen │      request JS       │
       │──────────────────────>│
       │<──────────────────────│
       │          JS           │
       │─╮ generate            │
       │<╯ HTML                │
```

## Client Side Rendering

Essa abordagem, em que o próprio navegador (cliente) é responsável por transformar componentes React na interface exibida na tela, é chamada de `renderização no lado do cliente (CSR)` e foi amplamente adotada pela comunidade.

No entanto, não demorou muito até que os desenvolvedores começasseem a notar algumas desvantagens nessa abordagem.

## Desvantagens

- `SEO` - Ao restreat um site, os motores de busca procuram principalmente por algum conteúdo HTML. No entanto, com o `CSR`, o HTML inicial consiste apenas em uma `div vazia`, `dificultando a indexação e a compreensão` do conteúdo da página pelo o mecanismo de busca. Além disso, quando existem muitos componentes aninhados fazendo chamadas de APIs, o conteúdo mais importante pode carregar muito lentamente a ponto dos motores de busca nem conseguirem detectá-los.

- `Performance e UX` - No `CSR`, o `navegador assume toda a carga de trabalho`, como: buscar dados, renderizar a UI e adicionar interatividade. Isso resulta em telas em branco ou spinners de carregamento enquanto tudo é processado. Além disso, à medida que novos recursos são adicionados na aplicação, o `bundle.js` cresce, e s usuários aguardam mais ainda pelo carregamento da aplicação, pois os navegadores precisam baixar, processar e executar JavaScript antes de exibirem o conteúdo.

## Solução Server Side

```
             Client                        Server
                │          request           │
                │───────────────────────────>│─╮ generate
Non-interactive │<───────────────────────────│<╯ HTML
      UI        │  full HTML + JS reference  │
                │                            │
                │         request JS         │
                │───────────────────────────>│
                │<───────────────────────────│
                │             JS             │
                │                            │
  Interactive   │─╮ hydration                │
      UI        │<╯                          │
```

Quando uma requisição é realizada, em vez de responder com um HTML simples e um arquivo bundle.js para a construção da página, o servidor realiza a `renderização completa do HTML`, enviando-o para o navegador. Como conteúdo já foi gerado pelo servidor:

- O navegador pode rapidamente analisar e exibi-lo.
- Os motores de busca agora podem indexar facilmente o conteúdo renderizado no servidor, melhorando o SEO.
- Os usuários acessam o conteúdo em vez de esperar em uma página em branco ou observar um spinner de carregamento.

No entanto, o `SSR introduz desafios na interatividade da página`, pois a página permanece sem interatividade até que o bundle de JavaScript compreenda tanto o React.js e o código da aplicação tenha terminado de baixar e executar no navegador.

Essa importante fase, chamada de hidratação, é onde a página HTML estática, inicialmente servida pelo servidor, ganha interatividade.

## Hydration

Durante a hidratação, o React.js assume o controle no navegador, reconstruindo a árvore de componentes em memória com base no HTML renderizado pelo servidor.

Ele cuidadosamente:

- Mapeia os elementos interativos e vincula a lógica JavaScript correspondente.
- Inicializa o estado da aplicação.
- Adiciona manipuladores de evento, como clique e mouseover.
- Configura todos os recursos dinâmicos necessários para uma experiência de usuário interativa.

## Renderizações Server Side

- `Static Site Generation (SSG)` - Acontece durante o build da aplicação e resulta em páginas já renderizadas e prontas para serem servidas. É perfeito para conteúdos que se mantêm relativamente estáveis, como postagens de blogs.

- `Server Side Rendering (SSR)` - Renderiza a página sob demanda quando o usuário a solicita. É ideal para conteúdo personalizado como feeds de mídias sociais, em que o HTML muda de acordo com quem está logado.

## Desvantagens do SSR

O Server Side Rendering (SSR) apresenta algumas desvantagens, exigindo que certas etapas sejam finalizadas para que a página esteja totalmente pronta para o usuário, como:

1. `Buscar tudo antes de exibir qualquer conteúdo` - Os componentes não podem iniciar a renderização, então precisam esperar até o conteúdo ser carregado. Se um componente precisa buscar dados de um banco de dados externo, essa busca precisa estar completa antes do servidor começar a renderizar a página. Isso pode atrasar a resposta do servidor, pois o servidor precisa terminar de coletar todos os dados necessários antes de enviar qualquer coisa para o cliente.

2. `Renderizar tudo antes de hidratar qualquer coisa` - Para realizar a hidratação corretamente, ou seja, adicionar interatividade à página, a árvore de componentes no navegador precisa corresponder à árvore de componentes gerada pelo servidor. Isso significa que todo o JavaScript do componente deve ser carregado no cliente antes de iniciar a hidratação de cada um deles.

3. `Hidratar tudo antes de interagir com algo` - O React.js hidrata a árvore de componentes em uma única passagem, então, quando o processo é iniciado, ele não é finalizado até que a hidratação seja realizada na árvore inteira. Como consequência, todos os componentes precisam ser hidratados antes de interagir com eles.

Essa abordagem de "tudo ou nada" resulta em outra desvantagem, pois um problema em uma operação deve ser resolvido antes de partir para o próximo.

## Suspense do SSR

Para resolver esses erros de desempenho no Server Side Rendering (SSR), o `React.js 18` introduziu a arquitetura `Suspense` do SSR, permitindo utilizar o componente `<Suspense>` para:

- Streaming de HTML no servidor.
- Hidratação seletiva no cliente.

Ao envolver alguma parte do código em um componente `<Suspense>`, o React.js não espera pelo seu carregamento antes de começar a renderizar o restante da página. Em vez disso, ele exibe um `callback`, como um spinner de carregamento, onde o Suspense foi adicionado enquanto `espera os dados do servidor`. Quando o servidor finalmente obtém os dados, o React.js realiza o streaming do HTML adicional, junto com um código JavaScript, que sabe exatamente onde `injetar o conteúdo adicional`.

Então não é necessário realizar a busca de todos os dados antes de exibir algo na tela, pois caso algo demore para carregar, isso pode se juntar ao fluxo de carregamento depois.

## Hidratação Seletiva

A hidratação só começa depois que todo o JavaScript é carregado. Por isso, se o bundle gerado for muito grande, o usuário terá que esperar até ser capaz de interagir com a página.

Para resolver esse problema, é possível utilizar `code-splitting` para informar ao bundler que certas partes do código não são tão importantes. Com React.lazy, é possível dividir o código de determinadas seções do núcleo do bundle de principal.

Ao envolver a seção desejada com o componente `<Suspense>`, o React.js priorizará a hidratação de outras partes da página antes de tudo estar pronto. Isso permite a hidratação de partes da página antes mesmo de o resto do HTML e o JavaScript ser totalmente carregado, eliminando a necessidade de hidratar tudo para interagir com qualquer coisa.

Além disso, o React.js prioriza a hidratação dos componentes baseada na `interação do usuário`. Então, caso o React.js comece a hidratar um componente, mas o usuário interaja com outro, o ele `imediatamente começará a hidratar o componente interagido`.

## React Server Components (RSC)

O React Server Components (RSC) é uma nova arquitetura projetada pelo time do React.js que separa os componentes em 2 tipos principais:

- Client Components.
- Server Components.

Enquanto Server Components lidam com busca de dados e renderização estática, Client Components renderizam componentes interativos.

## Client Components

Os `Client Components` são os componentes padrões do React.js e são renderizados no lado do cliente (CSR). No entanto, eles também podem ter o `HTML pré-renderizado` no `lado do servidor (SSR)` para melhorar o desempenho.

Além disso, eles contêm total acesso ao ambiente do navegador, como:

- Estados.
- Ouvintes de evento.
- Browser APIs, que são exclusivas do navegador, como o geoLocation e o localStorage.

## Server Components

Os Server Components são um novo tipo de componente React.js projetado para serem executados exclusivamente no servidor.

## Benefícios

- `Bundles com tamanhos menores` - Como Server Components permanecem no servidor, todas as suas dependências também são mantidas nele. Isso significa, que o dispositivo do usuário não precisa carregar, analisar e executar o JavaScript, eliminando a necessidade de hidratação.

- `Acesso direto a recursos do servidor` - Eles podem interagir diretamente com banco de dados, sistemas de arquivos e APIs back-end, tornando a busca de dados mais eficiente. Dessa forma, o poder computacional do servidor e a proximidade com as fontes de dados são utilizadas para gerenciar tarefas de renderização intensas.

- `Aprimoramento da segurança` - Como eles são executados no servidor, informações sensíveis, como chaves de APIs e tokens, são mantidas nele e nunca são expostas ao cliente.

- `Cache` - Permite armazenar os dados em cache e reutilizá-los, evitando buscas desnecessárias a cada renderização.

- `Carregamento de página veloz` - Como o HTML é pré-renderizado no servidor, os usuários podem visualizar o conteúdo imediatamente.

- `SEO melhorado` - Motores de busca conseguem ler e indexar o HTML pré-renderizado no lado do servidor.

- `Streaming` - Server Components podem dividir o processo de renderização em chunks.

## RSC + Next.js

No Next.js, o `App Router` adota a arquitetura RSC, o que significa que, `por padrão`, todos os componentes são `Server Components`, incluindo o `RootLayout` e página raiz.

Em Server Components, ao utilizar um console.log, a mensagem é exibida no terminal e no console do navegador, mas com a tag `Server`.

Executar componentes no servidor traz alguns benefícios, como:

- Tamanho de bundle reduzido.
- Acesso direto a recursos do servidor.
- Segurança e SEO melhorados.

No entanto, Server Components não podem interagir com APIs do navegador ou lidar com interações do usuário.

Para converter um Server Component em um Client Component, basta incluir no topo do arquivo a `diretiva "use client"`.

Em Client Components, ao adicionar um console.log, após a renderização inicial a mensagem é exibida `apenas no console do navegador`, e sem a tag Server. No entanto, ao recarregar a página, a mensagem é `exibida no servidor`, para que o usuário possa visualizar o HTML imadiatamente em vez de uma tela em branco, e depois mais uma vez `durante a hidratação`. Além disso, a mensagem é exibida duas vezes no console por conta do Strict Mode:

```tsx
"use client";

export default function DashboardPage() {
  console.log("Dashboard client component");
}
```

## Ciclo de vida da renderização de RSCs

Durante a renderização de um Server Component, 3 componentes-chave entram em cena:

- O navegador (client).
- Next.js (framework).
- React.js (biblioteca).

## Sequência do carregamento inicial

```
            Navegador                      Next.js                     React.js
                │          request           │                            │
                │───────────────────────────>│─╮ match                    │
                │                            │<╯ SC     render SC         │
                │                            │───────────────────────────>│─╮ render SC tree +
                │                            │<───────────────────────────│<╯ prepare CC instructions
                │                            │         RSC payload        │
Non-interactive │                            │─╮ generate                 │
      UI        │<───────────────────────────│<╯ HTML                     │
                │         stream HTML        │                            │
                │<───────────────────────────│                            │
                │        RSC payload         │                            │
                │                            │                            │
          Final │─╮ progressively            │                            │
           UI   │<╯ render UI                │                            │
                │                            │                            │
  Interactive   │─╮ hydration                │                            │
   experience   │<╯                          │                            │
```

Quando o navegador solicita a página, o `App Router` associa a URL solicitada a um `Server Component` e instrui o `React.js` a renderizar o Server Component. O React.js, então, renderiza o componente e seus filhos, convertendo-os em um `formato JSON especial` chamado de `RSC payload`.

Durante esse processo, caso algum componente esteja no Suspense, o React.js `pausa` a renderização da subárvore e `exibe um fallback no lugar`.

Enquanto isso acontece, o React.js também prepara as `instruções dos Client Components`, que serão necessárias posteriomente.

O Next.js utiliza tanto o `RSC payload` como as `instruções dos Client Components` para `gerar o conteúdo HTML` no servidor. Esse HTML é transmitido em formato de streaming para o navegador, fornecendo uma `prévia não interativa do site`. Ao mesmo tempo, o Next.js também realiza o streaming do `RSC payload` enquanto o React.js renderiza cada parte da UI.

Quando o HTML alcança o navegador, o Next.js processa tudo. O React.js utiliza o RSC payload e as instruções do Client Component para renderizar progressivamente a UI. Após todos os Server Components e Client Components serem renderizados, o estado final da UI é apresentado ao usuário.

Por fim, os Client Components passam pela hidratação, transformando a aplicação estática em uma experiência interativa.

## Sequência de atualização de um RSC

```
    Navegador                      Next.js                     React.js
        │          refetch           │                            │
        │───────────────────────────>│─╮ match                    │
        │                            │<╯ SC     render SC         │
        │                            │───────────────────────────>│─╮ render SC tree +
        │                            │<───────────────────────────│<╯ prepare CC instructions
        │                            │         RSC payload        │
        │<───────────────────────────│                            │
        │        RSC payload         │                            │
        │                            │                            │
        │─╮ route                    │                            │
        │<╯ render                   │                            │
        │                            │                            │
Updated │─╮ hydration                │                            │
  UI    │<╯                          │                            │
```

O navegador solicita a atualização de uma UI específica como uma rota inteira, o Next.js processa e a associa ao requisição ao `Server Component` correspondente. O Next.js, então, instrui o `React.js` a renderizar a árvore de componentes.

No entanto, ao contrário da renderização inicial, ele não gera um novo HTML nas atualizações. Em vez disso, o Next.js realiza o streaming progressivo dos dados da resposta para o cliente.

Após receber a resposta, o Next.js aciona a renderização da rota utilizando o novo conteúdo.

O React.js, por sua vez, realiza a reconciliação ou funsão cuidadosa do novo conteúdo renderizado com componentes existentes. E, por utilizar um `formato JSON especial` em vez de HTML, o React.js consegue atualizar a UI de forma eficiente, mantendo os estados da UI intactos.

## Renderização Estática

A `renderização estática (Static Site Generation - SSG)` é uma estratégia de renderização no servidor em que as `páginas HTML são geradas durante o build da aplicação`. Isso significa que todo conteúdo é preparado com antecedência antes de qualquer usuário visitar o site.

Uma vez renderizadas, as páginas podem ser `armazenadas em cache` pelos `CDNs (Content Delivery Networks)` e `servidas instantaneamente` para os usuários. Isso culmina em uma melhora de desempenho, pois a `mesma página pré-renderizada` pode ser `compartilhada` entre diferentes usuários.

`Além disso, a renderização estática é a estratégia padrão do App Router.`

## Servidor de produção vs. Servidor de desenvolvimento

Em produção, um build otimizado é criado e as páginas são pré-renderizadas uma vez.

Um servidor de desenvolvimento, por outro lado, é focado na experiência do desenvolvedor, pois é necessário visualizar as mudanças imediatamente sem reconstruir a aplicação o tempo todo, então as páginas são pré-renderizadas em toda requisição. Isso assegura que o desenvolvedor sempre visualize as últimas modificações no código em cada requisição.

Além disso, o Next.js também exibe um indicador de rota estática durante o desenvolvimento para ajudar a identificar quais rotas são estáticas.

## Build

Ao executar o seguinte comando no terminal, o build é gerado:

```bash
npm run build
```

E são exibidas 3 colunas sobre cada rota:

```
Route (app)                              Size     First Load JS
┌ ○ /                                    8.54 kB         114 kB
├ ○ /_not-found                          979 B           106 kB
├ ○ /about                               136 B           105 kB
└ ○ /dashboard                           534 B           106 kB
+ First Load JS shared by all            105 kB
  ├ chunks/4bd1b696-4cb0131454356f0d.js  52.9 kB
  ├ chunks/517-5ba9d4db7186f005.js       50.5 kB
  └ other shared chunks (total)          1.95 kB


○  (Static)  prerendered as static content
```

- `Route` - A rota em si.
- `Size` - A quantidade de dados que é necessário carregar ao navegar para a página correspondente no navegador.
- `First Load JS` - O código carregando durante o carregamento inicial da página no servidor.

O `First Load JS` inclui um bundle compartilhado que todas as rotas utilizam, contendo:

- CSS global.
- Código em execução.
- Código do framework.
- códigos de terceiro, como o React.js.
- Códigos de rotas relacionadas.

Além disso, o Next.js também gera uma `página 404 automaticamente`.

À esquerda de cada rota, existem alguns símbolos de `círculos ocos (○)`, que indicam que elas foram `renderizadas estaticamente`.

## .next

O Next.js coloca todo o build na pasta `.next/`, que contém todos os arquivos necessários para servir a aplicação para o navegador, incluindo `2 subpastas principais`:

- `static`:

A pasta `server/` contém a pasta `app/`, que corresponde à estrutura de rotas da aplicação e que contém:

```
└───server
    └───app
        ├───about/
        ├───dashboard/
        ├───_not-found/
        │
        ├───_not-found.html
        ├───_not-found.rsc
        │
        ├───about.html
        ├───about.rsc
        │
        ├───dashboard.html
        ├───dashboard.rsc
        │
        ├───index.html
        └───index.rsc
```

- Os `arquivos HTML`, incluindo de Client Components, haja vista que eles também são pré-renderizados como uma etapa de otimização.
- Cada rota também recebe um `RSC payload`, um `formato JSON especial` representando o `virtual DOM` de uma forma compacta utilizando `abreviações` e `referências internas`.

Enquanto que para Server Components o `RSC payload` inclui os `resultados da renderização`, para Client Components, o `RSC payload` contém `placeholders`, mostrando onde os Client Components deveriam ir, e referênciass para os arquivos JavaScript (chunks).

- server:

A pasta `static/`, próxima à pasta server/, contém pasta `chunks/app/`, que contém todas as rotas:

```
└───static
    └───chunks
        └───app
            ├───about
            │   └───page-8a3059cad67b7028.js
            ├───dashboard
            │   └───page-0a09f233b260e2c9.js
            └───_not-found
                └───page-b0462f02c57762df.js
```

Cada pasta de rota contém o `código do componente (arquivos JavaScript)` que foi `referenciado` no `RSC payload`. Esses arquivos são necessários para a `reconciliação` e `hidratação` do cliente.

Ao carregar a página, vários arquivos são carregados, incluindo:

- O `localhost`, do tipo document, que `contém o HTML da rota`.
- Os arquivos RSC, que são essenciais para construir a UI no cliente ao navegar para a rota correspondente utilizando os links, além dos arquivos JavaScript do Client Component.

## Prefetching

Ao navegar entre as rotas com o Link, elas são `carregadas instantaneamente`, sem se comunicar com o servidor, graças a uma técnica chamada `Prefetching`, que carrega as `rotas previamente`, em segundo plano, `à medida que seus links ficam visíveis` na página.

Para rotas estáticas, o Next.js `automaticamente pré-busca` e armazena rota a rota em cache. Dessa forma, quando a tela inicial carrega, o Next.js realiza a busca das outras rotas para garantir uma `navegação instantânea`.

No entanto, ao acessar uma `rota diretamente pela URL` ou `recarregar a página`, os outros `arquivos HTML` das rotas são enviados diretos do servidor como `localhost`.

## Renderização Dinâmica

A renderização dinâmica é uma estratégia de renderização no servidor em que as rotas são renderizadas sob demanda, sempre que uma requisição é realizada.

Essa abordagem é útil quando é necessário exibir dados ou informações personalizadas que só estão disponíveis no momento da requisição, como cookies, headers HTTP ou parâmetros de pesquisa de URL.

O Next.js automaticamente detecta quando uma rota precisa ser renderizada dinamicamente quando ela está utilizando uma função ou API dinâmica, como:

- cookies().
- headers().
- connection().
- draftMode().
- searchParams prop.
- after().

```tsx
export default async function AboutPage() {
  const cookieStore = await cookies();

  const theme = cookieStore.get("theme");

  console.log(theme);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1>About page</h1>
    </div>
  );
}
```

Ao adicionar qualquer um deles na rota, após a geração do build, o símbolo `ƒ` aparecerá à esquerda da rota no terminal:

```
Route (app)                              Size     First Load JS
┌ ○ /                                    8.54 kB         114 kB
├ ○ /_not-found                          979 B           106 kB
├ ƒ /about                               136 B           105 kB
└ ○ /dashboard                           534 B           106 kB
+ First Load JS shared by all            105 kB
  ├ chunks/4bd1b696-4cb0131454356f0d.js  52.9 kB
  ├ chunks/517-5ba9d4db7186f005.js       50.5 kB
  └ other shared chunks (total)          1.95 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

As páginas renderizadas de forma `dinâmica não são geradas durante o build`, então `não` é gerado nenhum `HTML` para ela (neste caso, a nota `/about`) em `.next/server/app`:

```
└───server
    └───app
        ├───about/
        ├───dashboard/
        ├───_not-found/
        │
        ├───_not-found.html
        ├───_not-found.rsc
        │
        ├───dashboard.html
        ├───dashboard.rsc
        │
        ├───index.html
        └───index.rsc
```

Se, por exemplo, uma página renderizada dinamicamente exibir o horário atual, ele será atualizado a cada requisição ao contrário da renderização estática.

Não é necessário escolher entre ambas, pois o `Next.js automaticamente seleciona a estratégia de renderização mais otimizada` baseada nos recurso e APIs em uso. No entanto, caso seja necessário forçar a renderização dinâmica, basta exportar uma configuração no topo do arquivo:

```tsx
export const dynamic = "force-dynamic";
```

## generateStaticParams()

A `função generateStaticParams()` é utilizada junto com segmentos de rotas dinâmicas para gerar rotas estáticas no momento do build. Isso melhora e performance da aplicação, pois em vez de renderizar todas as páginas sob demanda, `determinadas páginas são pré-renderizadas de forma estática (SSG) durante o build` de acordo com `parâmetros específicos`.

No entanto, caso a rota dinâmica não esteja no array, o Next.js ainda a renderiza, mas não com antecedência. Em vez disso, ele a renderiza estaticamente em tempo de execução.

No arquivo `page.tsx`, basta exportar a `função assíncrona generateStaticParams()`, que retorna um array de objetos. Cada objeto representa uma rota que será pré-renderizada e as chaves do objeto correspondem aos segmentos de rota dinâmica:

```tsx
export async function generateStaticParams() {
  return [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
  ];
}
```

Em uma rota com múltiplos segmentos dinâmicos, cada objeto do array inclui valores para ambos os segmentos dinâmicos.

Com essa configuração, ao realizar o build, o Next.js pré-renderiza a rotas dinâmicas correspondentes.

## .next com generateStaticParams()

Ao realizar o build, o símbolo `●`, que é um círculo completo, aparecerá à esquerda da rota dinâmica que utiliza a função generateStaticParams(), além da legenda `(SSG) prerendered as static HTML`:

```
Route (app)                              Size     First Load JS
┌ ○ /                                    5.45 kB         114 kB
├ ○ /_not-found                          979 B           106 kB
├ ƒ /about                               139 B           105 kB
├ ○ /dashboard                           534 B           106 kB
├ ○ /products                            172 B           109 kB
└ ● /products/[id]                       139 B           105 kB
    ├ /products/1
    ├ /products/2
    └ /products/3
+ First Load JS shared by all            105 kB
  ├ chunks/4bd1b696-692f10ba759dfb60.js  52.9 kB
  ├ chunks/517-2685a4f087d222a4.js       50.5 kB
  └ other shared chunks (total)          1.95 kB


○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```

Na pasta .next/, que contém o build, é possível encontrar os arquivos HTML para cada segmento dinâmico pré-renderizado:

```
└───server
    └───app
        ├───about/
        ├───dashboard/
        ├───_not-found/
        └───products
            ├───[id]
            ├───1.html
            ├───2.html
            └───3.html
```

Além disso, ao navegar até uma rota que não foi pré-renderizada e checar a pasta products/, a rota conterá um `novo arquivo HTML` para a rota dinâmica.

## dynamicParams

A variável dynamicParams define o comportamento do Next.js ao lidar segmentos dinâmicos que não foram gerados pelo generateStaticParams().

- `true` (padrão) - O Next.js renderizará estaticamente as páginas sob demanda para qualquer segmento dinâmico não incluído no array retornado por `generateStaticParams()`.

- `false` - O Next.js retornará um `erro 404` para qualquer segmento dinâmico não incluído na lista.

```tsx
export const dynamicParams = false;
```

## Streaming

Caso haja um delay para algum componente ser exibido, a página acaba demorando para carregar, incluindo elementos fora do delay. Para resolver isso, basta utilizar a estratégia de `Streaming`, que permite a `renderização progressiva da UI no servidor`, quebrando e transmitindo o trabalho em `pequenos blocos de código (chunks)` para o cliente assim que estiverem prontos. Isso significa que os usuários podem visualizar partes da página imediatamente, sem esperar tudo carregar.

Para utilizar a estratégia de streaming, basta:

- Envolver os componentes com delay com o componente `<Suspense>` e o Next.js lidará com o resto.
- No componente `<Suspense>`, para fornecer um `feedback visual` de carregamento para o usuário, basta adicionar a `propriedade fallback` com um elemento HTML.

```tsx
export default function ProductReviews() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Product reviews</h1>
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
```

## Código somente para servidor

Alguns códigos devem ser executados exclusivamente no servidor, principalmente quando lidam com:

- Módulos ou funções que trabalham com múltiplas bibliotecas.
- Variáveis de ambiente.
- Comunicação direta com bancos de dados.
- Processamento de informações sensíveis.

No Next.js, como módulos JavaScript podem ser compartilhados entre Server Components e Client Components, um `código destinado` ao `servidor` pode ser `acidentalmente importado no cliente`, culminando em problemas como:

- Aumento do tamanho do bundle de JavaScript.
- Exposição das chaves secretas, consultas de banco de dados e lógica de negócio sensível.

Como solução, é possível utilizar o `pacote server-only`:

```bash
npm install server-only
```

Ele impede que códigos exclusivos do servidor sejam importados acidentalmente em um Client Component, lançando um erro em tempo de build ou desenvolvimento caso isso ocorra. Para utilizá-lo, basta importar o `"server-only"` no topo do arquivo contendo a lógica do servidor:

```ts
import "server-only";
```

## Pacotes de Terceiros

Os Server Components introduziram um novo paradigma no React.js, e o ecossistema está evoluindo em constante adaptação para acompanhar essas mudanças.

Para garantir a `compatibilidade`, muitos `pacotes de terceiros` começaram a adicionar a `diretiva "use client"` em componentes que dependem de funcionalidades do cliente, deixando claro onde eles devem ser executados. No entanto, alguns pacotes não realizaram essa transição ainda, o que significa que seus componentes funcionarão apenas em `Client Components`.

Como solução, é possível `envolver componentes de terceiros` que exigem de recursos do cliente em um `Client Component` próprio:

```tsx
"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ImageSlider() {
  const settings = {
    dots: true,
  };

  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="http://picsum.photos/g/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/g/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/g/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/g/400/200" />
        </div>
      </Slider>
    </div>
  );
}
```

```tsx
import { ImageSlider } from "@components/image-carousel";

export default function ServerRoutePage() {
  return <ImageSlider />;
}
```

## Provedores de Contexto

Provedores de contexto normalmente são posicionados próximos à `raiz da aplicação` para compartilhar estados e lógicas globais.

No entanto, o `contexto do React.js não é compatível com Server Components`. Portanto, ao tentar implementar um provedor diretamente na `raiz da aplicação (RootLayout)`, um erro será exibido.

A solução é criar um contexto e renderizar o seu provedor dentro de um Client Component, recebendo toda a `subárvore abaixo` como `propriedade children`. Dessa forma, os Server Components filhos permanecerão como Server Components pois serão renderizados como filhos do provedor:

```tsx
"use client";

import { createContext, useContext } from "react";

interface ITheme {
  colors: {
    primary: string;
    secondary: string;
  };
}

const defaultTheme: ITheme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

const ThemeContext = createContext<ITheme>(defaultTheme);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeContext value={defaultTheme}>{children}</ThemeContext>;
}

export const useTheme = () => useContext(ThemeContext);
```

Além disso, no React.js é possível utilizar apenas `<ThemeContext>` em vez de `<ThemeContext.Provider>`.

## Código somente para o cliente

Assim como certas operações devem ser executadas apenas no lado do servidor, é igualmente crucial manter algumas funcionalidades estritamente no lado do cliente, como:

- Manipulação do DOM.
- Interações no objeto window.
- Operações no localStorage.

Esses recursos funcionam apenas no cliente, então é necesário mantê-los no cliente para evitar erros de renderização.

Para prevenir usos não intencionais de código cliente no servidor, é possível utilizar o `pacote client-only`, que é semelhante ao `server-only`:

```bash
npm install client-only
```

```ts
import "client-only";
```

## Posicionamento de componentes do cliente

Quando um componente é marcado com `"use client"`, isso não apenas afeta o próprio componente, mas também todos os componentes filhos na árvore.

Se um componente de `alto nível` for convertido em um `Client Component` apenas para adicionar interativiade, `todas as subárvores abaixo dele serão executadas no cliente`. Isso resultado no envio de mais código ao navegador e na perda dos benefícios dos Server Components.

Por isso, o idela é posicionar Client Components no nível mais baixo da árvore, idealmente como folhas.

## Intercalando componentes de servidor e cliente

É possível aninhar diferentes tipos de componentes:

- Server Components em Server Components.
- Client Components em Client Components.
- Server Components em Client Components

No entanto, não é possível utilizar Server Components dentro de Client Components.

Como os Client Components são renderizados depois dos Server Components, não é possível importar Server Components diretamente em Client Components. Quando isso acontece, o Server Component é automaticamente transformado em um Client Component.

Para solucionar esse problema, em vez de aninhar, basta passar o Server Component como uma `propriedade children` para o Client Component (um padrão chamado de `slot`), semelhante ao uso de provedores de contexto:

```tsx
export default function InterleadingPage() {
  return (
    <>
      <h1>Interleaving page</h1>

      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
```

# Busca de dados

O `App Router` foi desenvolvido com base na `arquitetura React Server Components (RSC)`, que é flexível para realizar a busca de dados tanto em Server Components quanto em Client Components.

No entanto, é mais recomendado utilizar em `Server Components` devido às seguintes vantagens:

- Ele permite comunicação direta com bancos de dados e o sistema de arquivos no lado do servidor.
- Melhor desempenho por estar próximo da fonte de dados.
- O bundle do lado do cliente é menor, pois o processamento pesado ocorre no servidor.
- Mais seguranças com operações sensíveis e API keys, que permanecem no servidor.

## Buscando dados em Client Components

Para realizar a `busca de dados` em `Client Components`, é necessário:

- Definir o `tipo dos dados` a serem solicitados.
- Criar um componente React.
- Dentro do componente, criar os `estados` de `carregamento`, de `erro` e dos `dados` recebidos.

```tsx
interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function UsersClient() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
}
```

Em seguida, basta utilizar o `useEffect()` para buscar os dados quando o componente for `montado`, que lidará com os estados criados dependendo do resultado da busca:

```tsx
useEffect(() => {
  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) throw new Error("Failed to fetch users");

      const data = await response.json();

      setUsers(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknow error ocurred");
      }
    } finally {
      setLoading(false);
    }
  }

  fetchUsers();
}, []);
```

Por fim, basta `mapear os dados`, exibindo-os em uma lista e retornando determinadas UIs dependendo dos estados criados:

```tsx
export default function UsersClient() {
  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        ...
      ))}
    </ul>
  );
}
```

Embora seja possível buscar dados em Client Components, eles só devem ser utilizados para isso quando for totalmente necessário, como em:

- Atualizações em tempo real.
- Os dados dependem de interações do lado do cliente.

## Buscando dados em Server Components

A `arquitetura RSC` permite o uso de `async` e `await` em `Server Components`. Isso significa que é possível realizar a busca de dados com `JavaScript puro`, utilizando `funções assíncronas` com `await`.

Para isso, basta:

- Realizar uma `requisição GET` utilizando a `API fetch` com `await`.
- Utilizar o retorno dela com o `método .json()` para obter o corpo da requisição.
- `Mapea`r a lista de usuários.

```tsx
export default async function UsersServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users123");

  const users: IUser[] = await response.json();

  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        ...
      ))}
    </ul>
  );
}
```

Durante o desenvolvimento, é necessário buscar os mesmos dados em múltiplos lugares. Por isso, quando uma requisição é realizada, o React.js memoiza o resultado e o reutiliza em chamadas subsequentes durante a mesma renderização.

## Estados de carregamento e erro

Enquanto Client Compnoents exigem o gerenciamento de estados em diferentes variáveis e renderização condicional, os Server Components realizam isso de forma mais simples.

Portanto, para implementar um estado de carregamento, basta definir e `exportar` um `componente React.js` de um `arquivo loading.tsx`. E, para lidar com erros, basta fazer o mesmo em um arquivo error.tsx:

```
└───app
    └───users-server
        ├───error.tsx
        ├───loading.tsx
        └───page.tsx
```

```tsx
export default function LoadingPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-white" />
    </div>
  );
}
```

```tsx
"use client";

import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-2xl text-red-500">Error fetching users data</div>
    </div>
  );
}
```

## Busca de dados sequenciais

Ao buscar dados dentro de componentes, existem dois padrões:

- Sequencial.
- Paralelo.

## Sequencial

Em uma busca de dados sequencial, as requisições em uma árvore de componentes dependem de uma as outras. Um exemplo é buscar dados de vários posts e, com base no userId, realizar a busca do autor de cada post, o que pode culminar em carregamentos demorados:

```tsx
export default async function PostsSequential() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts: IPost[] = await response.json();

  const filteredPosts = posts.filter((post) => post.id % 10 === 1);

  return (
    <div className="mx-auto max-w-7xl p-4">
      <h1 className="mb-8 text-3xl font-extrabold">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredPosts.map((post) => (
          <div key={post.id} className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-3 text-2xl leading-tight font-bold text-gray-800">
              {post.title}
            </h2>
            <p className="mb-4 leading-relaxed text-gray-600">{post.body}</p>
            <Suspense
              fallback={
                <div className="text-sm text-gray-500">Loading author...</div>
              }
            >
              <Author userId={post.userId} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}
```

```tsx
export default async function Author({ userId }: { userId: number }) {
  await setTimeout(1_000);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  const user: IAuthor = await response.json();

  return (
    <div className="text-sm text-gray-500">
      Written by:{" "}
      <span className="font-semibold text-gray-700 transition-colors hover:text-gray-900">
        {user.name}
      </span>
    </div>
  );
}
```

É possível encapsular a lógica de exibição do autor com o componente `<Suspense>` para não bloquear a renderização dos posts. Dessa forma, o post é exibido e o estado do autor é realizado em segundo plano.

## Paralelo

Em uma busca dados em paralelo, as requisições em uma rota são realizadas os dados simultaneamente, o que reduz o tempo total para carregar os dados.

Ao realizar a busca de dados com a `API fetch`, caso a palavra-reservada `await` seja utilizada, haverá o bloqueio de qualquer requisição abaixo dela. Por isso, para realizar requisições de forma paralela, é necessário `inicializar` as requisições primeiro antes de esperar por elas.

Após isso, basta adicionar as requisições inicializadas em um `array` como argumento do `Promise.all()`:

```tsx
async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?${userId}`
  );

  return res.json();
}

async function getUserAlbums(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?${userId}`
  );

  return res.json();
}

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const postsData = getUserPosts(id);
  const albumsData = getUserAlbums(id);

  const [posts, albums] = await Promise.all([postsData, albumsData]);
}
```

## Busca de um banco de dados

Realizar a busca de dados diretamente de um banco de dados é um abordagem poderoso, pois:

- `Server Components` possuem acesso direto a recursos do lado do servidor.
- Como toda execução é realizada no servidor, não há necessidade de utilizar `API routes` ou se preocupar com a exposição de informação sensível no cliente.

## Server Actions

No React.js, abordagem tradicional para manipular dados utiliza múltiplos estados para armazenar os dados e gerenciar o carregamento das operações para fornecer feedback aos usuários. Aém da lógica de envio dos dados, onde ele será tratado e adicionado ao banco de dados.

Por outro lado, no React.js moderno, é possível utilizar as `Server Actions`, que são `funções assíncronas` executadas no servidor e podem ser chamadas dentro de `Server Components` e `Client Components` para lidar com a submissão de formulários e mutações de dados de forma eficiente de segura.

Para definir uma `Server Action`, é necessário adicionar a `diretiva "use server"`:

- No topo da função assíncrona que será a Server Action.
- No topo de um arquivo separado para marcar todos os exports do arquivo como Server Actions.

A função pode ser associada a um formulário a partir do `atributo action`. Quando o formulário for submetido, a Server Action receberá o `FormData` como `argumento`, permitindo a extração dos valores com o `método .get()` e a sua adição no banco de dados:

```ts
export async function createProduct(formData: FormData) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  await addProduct(String(title), +price, String(description));

  redirect("/products-db");
}
```

```tsx
export default function AddProductPage() {
  return (
    <form action={createProduct}>
      <input type="text" name="title" />
      <input type="number" name="price" />
      <textarea name="description" />

      <button type="submit">Add Product</button>
    </form>
  );
}
```

As Server Actions:

- `Simplificam o código`, removendo a necessidade de separar API routes ou gerenciar os estados do formulário no cliente.
- `Melhoram a segurança`, mantendo operações ou informações sensíveis no servidor.
- `Melhoram o desempenho`, reduzindo a quantidade de JavaScript executado no cliente, levando a carregamentos mais rápidos e melhora das métricas do Core Web Vitals.
- O formulário continua funcionando mesmo quando o JavaScript é desativado no navegador, tornando a aplicaçãp acessível e resiliente.

## Estado pendente com useFormStatus

Para adicionar feedbacks durante a submissão de formulários, basta utilizar o hook useFormStatus, que fornece informações do status da última submissão de um formulário:

```tsx
export function Submit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending && <Loading />}
      Add Product
    </button>
  );
}
```

ao chamá-lo, o hook retorn um objeto status com algumas propriedades:

- `pending` - Um booleano que indica se o formulário pai está enviando dados.
- `data` - Um objeto contendo so dados do formulário submetido.
- `method` - Uma string indicando qual método HTTP está sendo utilizado.
- `action` - Uma referência da função que foi passado no atributo action do formulário.

## Validação de formulário com useActionState

O `useActionState` é um hook que permite atualizar o estado baseado no resultado da action de um formulário, sendo útil para lidar com validação de formulários e mensagens de erro.

Ele recebe dois argumento: uma Server Action e o estado inicial:

```tsx
const [state, formAction, isPending] = useActionState(
  createProduct,
  initialState
);
```

Após definir a Server Action como argumento do hook, ela passa a receber dois parâmetros: o `estado anterior` e o `formData`. Com base nisso, é possível definir retornos baseados em lógicas, como verificação dos valores inseridos, retornando um erro caso haja, ou continuar e não retornar, mas sim redirecionar:

```ts
export async function createProduct(_: IFormState, formData: FormData) {
  const { title, price, description } = Object.fromEntries(formData);

  const errors: IErrors = {};

  if (!title) {
    errors.title = "Title is required";
  }

  if (!price) {
    errors.price = "Price is required";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  await addProduct(String(title), +price, String(description));

  redirect("/products-db");
}
```

O hook retornará um array contendo:

- O estado atual do formulário.
- Uma nova action para o formulário.
- Um booleano que indica se uma action está sendo executada.

O estado atual do formulário é valor retornado pela Server Action. Portanto, caso haja o retorno de algum erro, é possível exibi-lo na tela:

```tsx
export default function AddProductPage() {
  const initialState: IFormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
    initialState
  );

  return (
    <form
      action={formAction}
      className="mx-auto flex h-screen max-w-96 flex-col justify-center gap-4 p-4"
    >
      <div>
        <input type="text" name="title" />
        {state.errors.title && (
          <ErrorMessage>{state.errors.title}</ErrorMessage>
        )}
      </div>
      <div>
        <input type="number" name="price" />
        {state.errors.price && (
          <ErrorMessage>{state.errors.price}</ErrorMessage>
        )}
      </div>
      <div>
        <textarea name="description" />
        {state.errors.description && (
          <ErrorMessage>{state.errors.description}</ErrorMessage>
        )}
      </div>

      <button type="submit" disabled={isPending}>
        {isPending && <Loading />}
        Add Product
      </button>
    </form>
  );
}
```

Além disso:

- É possível utilizar o booleano retornado para desabilitar o botão após a submissão do formulário.
- É necessário manter a Server Action em um arquivo separado, pois não é possível utilizá-la dentro de um componente marcado com "use client".

## Pending (useFormStatus) vs. isPending (useActionState)

Ambos ajudam a determinar se o formulário foi submetido e permitem desabilitar o botão de submissão, mas existe uma diferença entre eles: o estado pendente do `useFormStatus` é especificamente para `submissão de formulários`, enquanto o `isPending` do `useActionState` pode ser utilizado com `qualquer Action`.

É recomendável utilizar o peding do useFormStatus ao trabalhar com componentes reutilizáveis feitos para serem utilizados dentro de formulários, e o isPeding do useActionState quando é necessário acompanhar ações do servidor que não são relacionadas a submissões de formulário.

## Server Action Update

Para atualizar um registro, primeiro é necessário criar um formulário capaz de realizar a busca dos dados do registro para popular o formulário e permitir a alteração dos dados já existentes.

Para isso, basta desestruturar o parâmetro de rota `id`. Como o parâmetro de rota é uma promessa, é possível separar a resolução da promessa em um `Server Component`, ou, em um `Client Component`, utilizar o `hook use()`.

Em seguida, basta realizar a busca no banco de dados e inserir os dados do registro como `defaultValue` em todos os campos do formulário. Caso o registro não exista, basta utilizar a função `notFound()`.

Por fim, basta criar uma nova `Server Action` para atualizar o registro. No entanto, como a atualização dele precisa de um `id`, é necessário utilizar o `método .bind()` do JavaScript para passá-lo como argumento:

```tsx
const editProductWithId = editProduct.bind(null, id);
```

```tsx
export async function editProduct(
  id: number,
  _: IFormState,
  formData: FormData
) {
  const { title, price, description } = Object.fromEntries(formData);

  await updateProduct(Number(id), String(title), +price, String(description));

  redirect("/products-db");
}
```

## Server Action Delete

Para deletar um registro utilizando uma Server Action, basta adicionar um botão que a chame com o `método .bind()`, inserindo o `id` como valor.

No entanto, se a Server Action for adicionada em um `onClick` do botão, isso fará o componente se tornar um Client Component. Para manter o componente como Server Component, é necessário envolver o botão em um `formulário` e especificar o `atributo action` como sendo a Server Action criada.

Para recarregar uma rota após a remoção, basta utilizar a função `revalidatePath()`, passando a rota desejada como argumento. Isso limpará o cache e atualizará os dados sob demanda:

```tsx
export async function removeProduct(id: number) {
  await deleteProduct(id);

  revalidatePath("/products-db");
}
```

```tsx
export function ProductsDetail({ products }: { products: IProduct[] }) {
  return (
    <ul className="space-y-4 p-4">
      {products.map((product) => (
        <li key={product.id}>
          <form action={removeProductById.bind(null, product.id)}>
            <button type="submit">
              <Trash />
              Delete
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
}
```

## useOptimistic Hook

O `useOptimistic()` é um hook que permite atualizar a UI de forma otimista enquanto uma operação assíncrona está em andamento. Sendo assim, em vez de os usuários esperarem pela resposta do servidor, é possível exibir o resultado esperado imediatamente.

Basta importá-lo e utilizá-lo depois da busca dos dados. Ele recebe 2 argumentos:

- O estado inicial a ser atualizado de forma otimista, que é a lista de registro do banco de dados
- Uma função que determinará como atualizar o estado de forma otimista.

A função recebe dois parâmetros:

- O estado atual.
- Um parâmetro auxiliar que ajuda a criar o novo estado.

E executa a lógica necessário filtrando os registros para remover o registro o o id específico e retornando o array filtrado como o estado otimista.

O hook retorna:

- O resultado do estado otimista.
- Uma função que acionará a atualização otimista.

A função pode receber qualquer argumento e chamará a função definida no useOptimistic.

Por fim, basta criar uma função assíncrona que aceitará o id e executará a função retornada pelo hook e a função assíncrona para remover o registro. Dessa forma, as mudanças são exibidas imediatamente, enquanto a remoção ocorre por baixo dos panos:

```tsx
export function ProductsDetail({ products }: { products: IProduct[] }) {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) =>
      currentProducts.filter((product) => product.id !== productId)
  );

  async function removeProductById(productId: number) {
    setOptimisticProducts(productId);

    await removeProduct(productId);
  }

  return (
    <ul className="space-y-4 p-4">
      {optimisticProducts.map((product) => (
        ...
      ))}
    </ul>
  );
}
```

## Form Component

Foi construído com base no elemento HTML `<form>` e fornece alguns recursos poderosos, como:

1. Quando o componente fica visível, ele pré-busca a UI de carregamento associada à rota "/products-db".
2. Quando o usuário submete a pesquisa, ele automaticamente navega par a a página de produtos do lado do cliente e o form data se transforma em parâmetros de URL.
3. Ele mostrará o estado de carregamento enquanto os resultados da pesquisa são buscados.
4. Uma vez que os dados estão prontos, os resultados são exibidos na UI.

```tsx
export function Search() {
  return (
    <Form action="/products-db" className="flex gap-2">
      <input name="query" placeholder="Search products" />
      <button type="submit">Submit</button>
    </Form>
  );
}
```

# Autenticação

A maior parte das aplicações giram em torno de usuários, por isso 3 conceitos são importantes:

- `Identidade (Autenticação)` - Verifica quem é o usuário.
- `Sessions (Gerenciamento de Sessão)` - Armazenam o estado do usuário logado através das requisições.
- `Acesso (Autorização)` - Controla o que cada usuário pode fazer.

No Next.js, é necessário proteger a aplicação de 3 ângulos diferentes: `client-side`, `server-side` e `API routes`.

Além disos, de acordo com a documentação do Next.js, é recomendável utilizar uma biblioteca de autenticação. Um exemplo é o Clerk, um serviço de gerenciamento de usuários e autenticação com um plano gratuito para 10 mil usuários mensais.

## Configuração do Clerk

Para configurar o Clerk no projeto, primeiro é necessário criar uma aplicação no site do Clerk, definindo o nome e selecionando as opções que serão suportadas para realizar o login. Após isso, basta integrar o Clerk ao projeto seguindo algumas etapas:

- Instalar o pacote `@clerk/nextjs`.
- Adicionar as `variáveis de ambiente` com as chaves.
- Criar o `arquivo middleware.ts` e inserir o código do middleware de autenticação do Clerk, que permitirá configurar as rotas protegidas.
- Envolver toda a aplicação no componente `<ClerkProvider>` para que os hooks e componentes sejam acessíveis.

## Entrar e Sair

O Clerk fornece componentes prontos que gerenciam todo o fluxo de autenticação.

Para realizar o login, basta utilizar o componente `<SignInButton />`. Ao adicionar a `propriedade mode="modal"`, o login será feito por meio de um modal, em vez de redirecionar o usuário para uma página externa e fora do domínio da aplicação. O modal exibirá todas as opções de autenticação configuradas durante a criação da aplicação:

```tsx
export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-700 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold">
              Next.js App
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <SignInButton mode="modal" />
            <SignOutButton mode="modal" />
          </div>
        </div>
      </div>
    </nav>
  );
}
```

Para deslogar, o Clerk fornece o componente `<SignOutButton />`, que desconecta o usuário, limpa a sessão, remove os tokens e atualiza a UI.

## Configuração de Perfil

Além do `<SignOutButton />`, o Clerk fornece um componente mais completo: o `<UserButton />`. Esse componente exibe um `menu dropdown` com as opções de `deslogar` e acessar uma `UI de gerenciamento` de perfil em um modal:

```tsx
export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-700 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold">
              Next.js App
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <SignInButton />
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
```

No entanto, caso seja preferível uma página separada para a configuraçaõ do perfil, o Clerk fornece o componente `<UserProfile />` para incorporar a UI em uma rota catch-all opcional. Basta criar a rota `/user-profile` com uma rota `catch-all` chamada user-profile e um componente React que conterá o componente `<UserProfile />` com a propriedade path definida como `"/user-profile"`:

```
└───user-profile
    └───[[...user-profile]]
        └───page.tsx
```

```tsx
export default function UserProfilePage() {
  return (
    <div className="flex justify-center items-center py-8">
      <UserProfile path="/user-profile" />
    </div>
  );
}
```

## Renderização de UI condicional

Para renderizar condicionalmente elementos de UI baseados no estado de autenticação do uusário, o Clerk fornece dois componentes:

- `<SignedIn />` - Caso o usuário esteja autenticado.
- `<SignedOut />` - Caso o usuário não esteja autenticado.

Basta `envolver` os elementos da interface com esses componentes para que sejam `renderizados de acordo com o estado de autenticação` do usuário:

```tsx
export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-700 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold">
              Next.js App
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
              <Link href="/user-profile">Profile</Link>
              <SignOutButton mode="modal" />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

## Protegendo Rotas

A forma mais robusta para proteger páginas inteiras de usuários não autenticados é utilizando o middleware do Clerk.

Para configurar o middleware, basta criar um `matcher` para as rotas que serão protegidas a partir da `função createRouteMatcher`. Ela recebe como argumento um array contendo as rotas que serão protegidase e retorna uma função que verifica se a requisição corresponde a uma dessas rotas:

```tsx
const isProtectedRoute = createRouteMatcher(["/user-profile"]);
```

Em seguida, é necessário inserir uma função ao `clerkMiddleware`, que recebe os `objetos auth` e `request` como parãmetros. Dentro da função, basta verificar se a rota é protegida utilizando a função `isProtectedRoute`, retornara pelo matcher, que aceita o `objeto Request`. Se a rota for protegida, é necessário chamar o `método assíncrono .protect()` do objeto auth para garantir que apenas usuários autenticados tenham acesso a ela:

```tsx
const isProtectedRoute = createRouteMatcher(["/user-profile"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});
```

Se o usuário tentar acessar uma rota protegida sem estar autenticado, ele será redirecionado para uma página de login.

Também é possível criar um matcher para `rotas públicas`, o que é útil quando a maior parte da aplicação requer autenticações:

```tsx
const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
```

Para que haja mais controle no que a aplicação faz baseado no estado de autenticação do usuário, é possível o `objeto auth` para obter o `userId` e a `função redirectToSignIn` e utilizar ambos. Dessa forma, é possível adicionar lógica customizada antes de redirecionar o usuário:

```tsx
export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId && !isPublicRoute(req)) {
    return redirectToSignIn();
  }
});
```

## Ler dados de sessão e usuário

O Clerk fornece dois helpers para ler os dados do usuário e da sessão: `auth` e `currentUser`. Esses helpers podem ser importados de `"@clerk/nextjs/server"` e invocados de forma assíncrona para obter o `objeto de autenticação` (auth) e os `dados do usuário` autenticado (currentUser):

```tsx
export default async function DashboardPage() {
  const authObj = await auth();
  const userObj = await currentUser();

  return (
    <div className="flex h-screen justify-center items-center">
      <h1>Dashboard</h1>
    </div>
  );
}
```

Ambos são úteis em `Server Compoennts` e `Route Handlers`, mas `não` funcionam em `Client Components`. Para acessar os dados no lado do cliente, é necessário utilizar os `hooks useAuth()` e `useUser()` importando-os de `@clerk/nextjs`.

Para retornar null caso o usuário deslogue quando o componente estiver montado, é possível utilizar as propriedades isLoaded e userId do useAuth(), e isLoaded e o isSignedIn do useUser():

```tsx
"use client";

export function Counter() {
  const { isLoaded: authIsLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded: userIsLoaded, isSignedIn, user } = useUser();

  if (!authIsLoaded || !userId) {
    return null;
  }

  if (!userIsLoaded || !isSignedIn) {
    return null;
  }

  return <h1>Protected route</h1>;
}
```

O `useAuth()` é ideal quando apenas é necessário do `userId` para associar dados ao usuário, e o `useUser()` caso seja necessário todo o `objeto do usuário`.

## Controle de acesso baseado em função

Em muitas aplicações, também é necessário verificar se o usuário possui um nível específico de permissão. Com o Clerk, é possível implementar o Role-Based Access Control (RBAC) de maneira fácil para gerenciar o nível de acesso do usuário de acordo com as suas funções.

Para permitir que as funções de usuário estejam disponíveis no token de sessão, é necessário configurar o Clerk para incluir essas informações no metadado do usuário. O metadado recomendado é o `publicMetadata`, que é `acessível no navegador` e `somente de leitura`, o que garante maior segurança. Esse metadado pode ser incluído no token de sessão, permitindo a verificação das funções do usuário sem fazer requisições adicionais.

É possível customizar o token se sessão e adicionar o seguinte JSON:

```json
{
  "metadata": "{{user.public_metadata}}"
}
```

Para garantir que o TypeScript reconheça as funções de usuário e previna erros, é necessário criar um arquivo de tipo global na raiz da aplicação chamado global.d.ts. Esse arquivo deve exportar um objeto vazio para tornar o arquivo um módulo e estender o tipo global, incluindo a definição do metadado com a propriedade opcional role.

```
└───types
    └───global.d.ts
```

```ts
export {};

export type Roles = "admin" | "moderator";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
```

No arquivo do middleware, basta criar um matcher para as rotas e, dentro do middleware, verificar a rota e se a role do usuário é `"admin"` ou não. Caso não seja, ele é redirecionado para a tela inicial:

```tsx
export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn, sessionClaims } = await auth();

  const role = sessionClaims?.metadata.role;

  if (isAdminRoute(req) && role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }
});
```

Dessa forma, sempre que for necessário verificar a role do usuário, basta utilizar o `objeto publicMetadata`:

```ts
async function verifyRole() {
  const { sessionClaims } = await auth();

  if (sessionClaims?.metadata.role !== "admin") {
    throw new Error("Not Authorized");
  }

  return;
}
```

Para alterar o usuário, basta utilizar o `ClerkClient`:

```ts
async function updateRole({ id, role = null }: IRole) {
  const client = await clerkClient();

  try {
    await client.users.updateUser(id, {
      publicMetadata: {
        role,
      },
    });
  } catch {
    throw new Error("Failed to set role");
  }
}
```

## Personalizando Componentes do Clerk

Para customizar a aparência dos botões, é possível aninhar um botão próprio dentro do botão do Clerk, alterando-os de componentes self-closing para tags de abertura e fechamento:

```tsx
export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-700 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold">
              Next.js App
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton>
                <button className="cursor-pointer rounded-lg border border-neutral-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-800 hover:text-white focus:ring-4 focus:ring-neutral-900 focus:outline-none">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <SignOutButton>
                <button className="cursor-pointer rounded-lg border border-neutral-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-neutral-800 hover:text-white focus:ring-4 focus:ring-neutral-900 focus:outline-none">
                  Sign out
                </button>
              </SignOutButton>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

Para utilizar páginas dedicadas em vez de modais, basta `remover a propriedade mode="modal"`. No entanto, as páginas redirecionadas são `hospedadas pelo Clerk` e não são do domínio da aplicação.

Para criar páginas customizadas, basta:

- Criar uma `rota sign-up/` com uma rota `catch-all`:

```
├───sign-in
│   └───[[...sign-in]]
└       └───page.tsx
└───sign-up
    └───[[...sign-up]]
        └───page.tsx
```

- Utilizar o componente `<SignUp>`;

```tsx
export default function SignInPage() {
  return (
    <div className="flex justify-center items-center py-8">
      <SignIn />
    </div>
  );
}
```

- Adicionar a variável com a rota criada `arquivo .env`:

```.env
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
```

Assim, ao clicar para ligar ou registrar, o usuário permanece no domínio da aplicação.

Além disso, por padrão, o Clerk armaezena o lugar de onde os usuário vieram com o `query parameter redirect_url`. Isso permite que, após o login ou cadastro, o usuário seja redirecionado automaticamente para a página de onde iniciou o processo de autenticação.
