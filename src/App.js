import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';

const imageProfileGitHub =
  'https://avatars.githubusercontent.com/u/49615830?v=4';

const urlToMyGitHub = 'https://github.com';

const App = () => {
  const handlePressGoToGitHub = async () => {
    console.log('verificando link');
    const res = await Linking.canOpenURL(urlToMyGitHub);
    if (res) {
      console.log('link aprovado');
      await Linking.openURL(urlToMyGitHub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="GitHub Avatar"
          style={style.avatar}
          source={{uri: imageProfileGitHub}}
        />
        <Text style={[style.defaultText, style.name]}>Lucas Silva</Text>
        <Text style={[style.defaultText, style.nickname]}>lucas labs</Text>
        <Text style={[style.defaultText, style.description]}>
          Software engineer | lordlabs
        </Text>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1, //Expandir a tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'green',
    borderWidth: 4,
  },
  defaultText: {
    color: colorFontGitHub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    color: colorDarkFontGitHub,
    fontSize: 18,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
