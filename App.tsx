import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator } from 'react-native';
import { ChompDemo } from './src/ChompDemo';
export default function App(){
  const [loaded,error]=useFonts({Inter400:require('./assets/fonts/font-0.ttf'),Inter500:require('./assets/fonts/font-1.ttf'),Inter600:require('./assets/fonts/font-2.ttf'),Inter700:require('./assets/fonts/font-3.ttf'),Jakarta400:require('./assets/fonts/font-4.ttf'),Jakarta500:require('./assets/fonts/font-5.ttf'),Jakarta600:require('./assets/fonts/font-6.ttf'),Jakarta700:require('./assets/fonts/font-7.ttf'),Jakarta800:require('./assets/fonts/font-8.ttf')});
  if(error)return <View style={{flex:1,justifyContent:'center',padding:24}}><Text>Unable to load Chomp’s bundled fonts. Please restart the app.</Text></View>;
  if(!loaded)return <View style={{flex:1,justifyContent:'center',backgroundColor:'#fff8f4'}}><ActivityIndicator color="#a53b22"/></View>;
  return <><StatusBar hidden/><ChompDemo/></>;
}
