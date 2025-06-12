# rn-highlighter

rn-highlighter is a simple and effective way to highlight text in React Native applications.

![Screenshot_1749759627](https://github.com/user-attachments/assets/282c30de-da57-4ede-bbad-f2e0f7eb176e)


## Installation

```sh
npm install rn-highlighter
```

## Usage

```js
<Highlighter
  text="rn-highlighter is a simple and effective way to highlight text in React Native applications."
  highlight="React Native"
  highlightStyle={{ backgroundColor: 'orange', fontWeight: 'bold' }}
  textStyle={{ fontSize: 16 }}
/>
```
## Props

| Prop             | Type         | Description                            |
| ---------------- | ------------ | -------------------------------------- |
| `text`           | `string`     | Full text to display                   |
| `highlight`      | `string`     | Substring to highlight within the text |
| `highlightStyle` | `TextStyle?` | Custom style for the highlighted part  |
| `textStyle`      | `TextStyle?` | Style for the overall text             |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
