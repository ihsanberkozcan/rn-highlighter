import React from 'react';
import { Text, type TextStyle } from 'react-native';

type HighlighterProps = {
  text: string;
  highlight: string;
  highlightStyle?: TextStyle;
  textStyle?: TextStyle;
};

export const Highlighter: React.FC<HighlighterProps> = ({
  text,
  highlight,
  highlightStyle = { backgroundColor: 'yellow' },
  textStyle = {},
}) => {
  if (!highlight) {
    return <Text style={textStyle}>{text}</Text>;
  }

  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <Text style={textStyle}>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <Text key={index} style={highlightStyle}>
            {part}
          </Text>
        ) : (
          <Text key={index}>{part}</Text>
        )
      )}
    </Text>
  );
};
