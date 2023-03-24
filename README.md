# Ignite UI - Design System ⚛

Esse projeto é um **Design System** completo desenvolvido com o **Storybook** para documentar os componentes **React.js** que são utilizados nas aplicações desenvolvidas no **Ignite** - bootcamp de especialização da [**Rocketseat**](https://github.com/rocketseat-education). O projeto ainda conta com um pacote em React.js que pode ser baixado pelo **NPM** para reutilizar os componentes documentados no Design System, além do pacote de tokens, que conta com todos os valores padronizados que são utilizados nas aplicações, como cores, fontes, espaçamentos, dentre outros.

🚀 [**Veja o Design System completo com o Storybook**](https://luismda.github.io/ignite-ui-design-system/?path=/story/home--page)

⚛ [**Acesse o pacote de componentes React no NPM**](https://www.npmjs.com/package/@ig-ui/react)

🎨 [**Acesse o pacote de tokens no NPM**](https://www.npmjs.com/package/@ig-ui/tokens)

## 👀 Sobre o projeto

Todo o projeto foi desenvolvido usando o conceito de **monorepo**, que basicamente agrupa vários projetos que são dependentes entre si em um único repositório, que pode ser entendido como uma pasta. O principal objetivo de utilizar um monorepo foi **facilitar o gerenciamento das dependências comuns entre os pacotes**, além de conseguir **trabalhar em vários pacotes ao mesmo tempo**, fazendo com que as mudanças em um pacote sejam replicadas para os outros pacotes dependentes.

Além disso, foram utilizadas outras ferramentas muito importantes para o gerenciamento desse monorepo, como o **TSUP** para **facilitar e agilizar o processo de build**, permitindo **formatar a build do pacote em ES Modules e Common JS**, além de **possibilitar o build em tempo real a cada alteração nos pacotes**. Além disso, foi utilizado também o **TuboRepo** para **executar scripts em todos os pacotes do monorepo ao mesmo tempo** e para deixar o **processo de build ainda mais performático com a configuração do remote cache na Vercel**. Foi utilizado também o **Changeset**, uma ferramenta que permite **automatizar e facilitar o processo de versionamento e changelogs para publicação dos pacotes no NPM**.

A documentação dos componentes foi feita utilizando o **Storybook**, que permite organizar e separar os componentes em **stories**, além de possibilitar a **documentação de todas as variantes de um componente e o controle de todas as suas propriedades por meio de uma interface gráfica**. Além disso, o Storybook permite a **integração de novos addons**, que são como plugins, que permitem, por exemplo, o uso de **testes unitários** e **testes de acessibilidade** nos componentes.

Dentro do Storybook, além de documentar os componentes foi criado uma sessão de **tokens**, que relaciona todos os valores padronizados que são utilizados nas aplicações do Ignite, como cores, fontes, espaçamentos, dentre outros. Isso garante que todas as aplicações que seguirem essa documentação ficarão com suas interfaces padronizadas.

Por fim, utilizando o **GitHub Actions** foi criado um **workflow de CI/CD** para o **deploy da documentação do Storybook no GitHub Pages**, e também para a **publicação de novas atualizações dos pacotes no NPM**, integrando também com o **serviço de remote cache oferecido pela Vercel** e o **cache de dependências do NPM**, para que a build fique mais rápida no momento do deploy.

## 🧰 Ferramentas e tecnologias utilizadas

- TypeScript
- Monorepo
- React.js
- Radix UI
- Stitches
- Storybook
- Storybook Deployer
- TSUP
- TurboRepo
- Changeset
- ES Lint
- Vite

##

**#NeverStopLearning 🚀**
