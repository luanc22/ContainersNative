import React from 'react';
import { Text, ScrollView, View, Image, ImageBackground, Pressable, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Capa from './assets/capa.jpg';
import RHCP from './assets/rhcp.jpg';
import Spotify from './assets/spotify.png'
import estilos from './components/styles';

export default function App() {
  return (
    <ImageBackground style={estilos.container } source={RHCP}>

        <StatusBar style="auto" />
        <Image source={Capa} style={estilos.imagem} />

        <Pressable
        style={ estilos.botao }
        onPress={ () => Linking.openURL('https://open.spotify.com/track/3oP2vxUR2bjFCrU9YolGnM?si=8cbae3ea5cc244ca') } >
        <Image source={Spotify} style={estilos.botaoimagem} />
        <Text style={ estilos.botaotitle }>Spotify</Text>
        </Pressable>

      <View style = {estilos.boxtitulo}>

        <Text style={estilos.titulo}>Red Hot Chili Peppers</Text>
        <Text style={estilos.subtitulo}>I Could Die for You</Text>
        <Text style={estilos.album}>Álbum: By the Way</Text>
        
      </View>

      <ScrollView style = {estilos.box}>
        <Text style={estilos.paragrafo}>
          I could die for you,
          oh, this life I choose
        </Text>

        <Text style={estilos.paragrafo}>
          I'm here to be your only go-between,
          to tell you of the sights these eyes have seen,
          what I really want to do is turn it into motion,
          beauty that I can't abuse,
          you know that I use my senses, too,
          you can see that it's only everywhere,
          I'd take it all in, then I'd find a way to share
        </Text>

        <Text style={estilos.paragrafo}>
          Come along and go along with me,
          wander with me, yo, it's all for free
        </Text>

        <Text style={estilos.paragrafo}>
          I could die for you, what you wanna do?
          Oh, this life I choose,
          I could die for you, what you wanna do?
          Oh, this life I choose,
        </Text>

        <Text style={estilos.paragrafo}>
          Come again and tell me where you want to go,
          what it means to me to be with you alone,
          close the door and no one has to know,
          how we are
        </Text>

        <Text style={estilos.paragrafo}>
          Come along and go along with me,
          wander with me, yo, it's all for free
        </Text>

        <Text style={estilos.paragrafo}>
          I could die for you, what you wanna do?
          Oh, this life I choose,
          I could die for you, what you wanna do?
          Oh, this life I choose, make me wanna say,
          I could die for you, what you wanna do?
          Oh, this life I choose,
          I could die for you, what you wanna do?
          Oh, this life I choose.
        </Text>
      </ScrollView>
    </ImageBackground>
  );
}