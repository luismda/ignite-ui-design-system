# @ig-ui/tokens

[![npm version](https://badgen.net/npm/v/@ig-ui/tokens)](https://npm.im/@ig-ui/tokens) [![npm downloads](https://badgen.net/npm/dm/@ig-ui/tokens)](https://npm.im/@ig-ui/tokens)

Package of tokens usage in Ignite applications.

## 👀 What is Ignite?

The Ignite is program of bootcamp for especialization in JavaScript ecosystem, mantened by
[Rocketseat](https://www.rocketseat.com.br/), on focused in React.js, React Native and Node.js. All tokens this package they are used in web applications developing with React.js.

## ⚙️ Install

Install in your project:

```bash
npm i @ig-ui/tokens
```

## 📖 Usage

### Example

```javascript
import { colors } from '@ig-ui/tokens'

export function App() {
  return (
    <div>
      <button 
        style={{ backgroundColor: colors.ignite300, color: colors.gray100 }}
      >
        Click me
      </button>
    </div>
  )
}
```

## 📚 Documentation

For complete usage, please see [Documentation in Storybook](https://luismda.github.io/ignite-ui-design-system/?path=/story/home--page), and for more details consult the [repository](https://github.com/luismda/ignite-ui-design-system/tree/main/packages/tokens) on GitHub.

## License

MIT