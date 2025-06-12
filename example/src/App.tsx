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
    </View>
  );
};

export default App;
