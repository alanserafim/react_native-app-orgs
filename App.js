import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Cesta from './src/screens/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';


export default function App() {

  let [fontesCarregadas] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontesCarregadas) {
    return null;
  }


  return (
    <SafeAreaView>
      <Cesta/>
      <StatusBar />
    </SafeAreaView>
  );
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7eddf2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
