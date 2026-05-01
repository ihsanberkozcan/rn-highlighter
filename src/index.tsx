import React from 'react';
import { Text, Linking, type TextStyle } from 'react-native';

type HighlighterProps = {
  text: string;
  highlight: string;
  highlightStyle?: TextStyle;
  textStyle?: TextStyle;
  urlStyle?: TextStyle;
  url?: boolean;
};

const URL_REGEX =
  /((?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+\.(?:com|net|org|io|co|app|dev|gov|edu|tr|uk|de|fr)(?:\/[^\s]*)?)/gi;

export const Highlighter: React.FC<HighlighterProps> = ({
  text,
  highlight,
  highlightStyle = { backgroundColor: 'yellow' },
  textStyle = {},
  urlStyle = { color: 'blue', textDecorationLine: 'underline' },
  url = false,
}) => {
  const handleUrlPress = (link: string) => {
    const fullUrl = /^https?:\/\//i.test(link) ? link : `https://${link}`;
    Linking.openURL(fullUrl).catch(() => {});
  };

  const renderParts = (rawText: string) => {
    if (url) {
      URL_REGEX.lastIndex = 0;
      const urlParts = rawText.split(URL_REGEX);
      return urlParts.map((part, i) => {
        URL_REGEX.lastIndex = 0;
        const isUrl = URL_REGEX.test(part);
        URL_REGEX.lastIndex = 0;

        if (isUrl) {
          if (!highlight) {
            return (
              <Text
                key={i}
                style={urlStyle}
                onPress={() => handleUrlPress(part)}
              >
                {part}
              </Text>
            );
          }
          const highlightRegex = new RegExp(`(${highlight})`, 'gi');
          const subParts = part.split(highlightRegex);
          return (
            <Text key={i} style={urlStyle} onPress={() => handleUrlPress(part)}>
              {subParts.map((sub, j) =>
                highlightRegex.test(sub) ? (
                  <Text key={j} style={[highlightStyle, urlStyle]}>
                    {sub}
                  </Text>
                ) : (
                  <Text key={j}>{sub}</Text>
                )
              )}
            </Text>
          );
        }

        if (!highlight) {
          return <Text key={i}>{part}</Text>;
        }

        const highlightRegex = new RegExp(`(${highlight})`, 'gi');
        const subParts = part.split(highlightRegex);
        return (
          <Text key={i}>
            {subParts.map((sub, j) =>
              highlightRegex.test(sub) ? (
                <Text key={j} style={highlightStyle}>
                  {sub}
                </Text>
              ) : (
                <Text key={j}>{sub}</Text>
              )
            )}
          </Text>
        );
      });
    }

    if (!highlight) {
      return [<Text key={0}>{rawText}</Text>];
    }

    const highlightRegex = new RegExp(`(${highlight})`, 'gi');
    const parts = rawText.split(highlightRegex);
    return parts.map((part, i) =>
      highlightRegex.test(part) ? (
        <Text key={i} style={highlightStyle}>
          {part}
        </Text>
      ) : (
        <Text key={i}>{part}</Text>
      )
    );
  };

  return <Text style={textStyle}>{renderParts(text)}</Text>;
};
