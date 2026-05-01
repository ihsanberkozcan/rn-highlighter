import { View } from 'react-native';
import { Highlighter } from 'rn-highlighter';

const App = () => {
  return (
    <View style={{ padding: 20, marginTop: 50 }}>
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
        urlStyle={{ color: 'red', textDecorationLine: 'underline' }}
        url
      />
    </View>
  );
};

export default App;
