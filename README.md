# Ignite UI - Design System ⚛

This project is a complete **Design System** developed with **Storybook** to document the **React.js** components that are used in applications developed in **Ignite** - specialization bootcamp of [**Rocketseat**](https://github.com/rocketseat-education). The project still has a package in React.js that can be downloaded by **NPM** to reuse the components documented in the Design System, in addition to the tokens package, which has all the standardized values that are used in applications, such as colors, fonts, spacing, among others.

🚀 [**See the complete Design System on Storybook**](https://luismda.github.io/ignite-ui-design-system/?path=/story/home--page)

⚛ [**Access the React components package in NPM**](https://www.npmjs.com/package/@ig-ui/react)

🎨 [**Access the tokens package in NPM**](https://www.npmjs.com/package/@ig-ui/tokens)

## 👀 About the project

The entire project was developed using the concept of **monorepo**, which basically groups several projects that are dependent on each other in a single repository, which can be understood as a folder. The main objective of using a monorepo was to **facilitate the management of common dependencies between packages**, in addition to being able to **work on several packages at the same time**, making the changes in one package be replicated to the others dependent packages.

In addition, other very important tools were used to manage this monorepo, such as **TSUP** to **facilitate and speed up the build process**, allowing **formatting the package build in ES Modules and Common JS**, in addition to **enabling the build in real time with each change in packages**. In addition, **TuboRepo** was also used to **execute scripts in all monorepo packages at the same time** and to make the **build process even more performant with the configuration of the remote cache in Vercel** . **Changeset** was also used, a tool that allows **automating and facilitating the process of versioning and changelogs for publishing packages on NPM**.

The documentation of the components was done using the **Storybook**, which allows organizing and separating the components into **stories**, in addition to enabling the **documentation of all variants of a component and the control of all its properties through a graphical interface**. In addition, Storybook allows the **integration of new addons**, which are like plugins, which allow, for example, the use of **unit tests** and **accessibility tests** in components.

Within the Storybook, in addition to documenting the components, a **tokens** session was created, which lists all the standardized values ​​that are used in Ignite applications, such as colors, fonts, spacing, among others. This guarantees that all applications that follow this documentation will have their standardized interfaces.

Finally, using **GitHub Actions**, a **CI/CD workflow** was created for **deploying the Storybook documentation on GitHub Pages**, and also for **publishing new package updates in NPM**, also integrating with the **remote cache service offered by Vercel** and the **NPM dependencies cache**, so that the build is faster when deploying.

## 🧰 Tools and technologies

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
