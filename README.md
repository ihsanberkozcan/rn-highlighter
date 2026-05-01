# rn-highlighter

rn-highlighter is a simple and effective way to highlight text in React Native applications.

![Screenshot_1749759627](https://github.com/user-attachments/assets/282c30de-da57-4ede-bbad-f2e0f7eb176e)

## Installation

```sh
npm install rn-highlighter
```

## Usage

```tsx
<Highlighter
  text="rn-highlighter is a simple and effective way to highlight text in React Native applications."
  highlight="React Native"
  highlightStyle={{ backgroundColor: 'orange', fontWeight: 'bold' }}
  textStyle={{ fontSize: 18 }}
/>

<Highlighter
  text="Check out the docs at google.com or visit https://reactnative.dev for more info."
  highlight="docs"
  highlightStyle={{ backgroundColor: 'yellow', fontWeight: 'bold' }}
  textStyle={{ fontSize: 18, marginTop: 16 }}
  url
/>

<Highlighter
  text="Follow us on github.com or reach out via stackoverflow.com for support."
  highlight="support"
  highlightStyle={{ backgroundColor: 'lightgreen', fontWeight: 'bold' }}
  textStyle={{ fontSize: 18, marginTop: 16 }}
  urlStyle={{ color: 'purple', textDecorationLine: 'underline' }}
  url
/>
```

## Props

| Prop             | Type         | Default                                          | Description                                              |
| ---------------- | ------------ | ------------------------------------------------ | -------------------------------------------------------- |
| `text`           | `string`     | —                                                | Full text to display                                     |
| `highlight`      | `string`     | —                                                | Substring to highlight within the text                   |
| `highlightStyle` | `TextStyle?` | `{ backgroundColor: 'yellow' }`                  | Custom style for the highlighted part                    |
| `textStyle`      | `TextStyle?` | `{}`                                             | Style for the overall text                               |
| `url`            | `boolean?`   | `false`                                          | Detects URLs in text and makes them tappable             |
| `urlStyle`       | `TextStyle?` | `{ color: 'blue', textDecorationLine: 'underline' }` | Custom style for detected URLs                       |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
