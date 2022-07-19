import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ElectricBikes from './app/screens/electric_bikes/ElectricBikes';

import HeadNav from './app/screens/header/HeadNav';
import Home from './app/screens/home/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HeadNav title="Home" toggler="bars" />
      {/* <Home /> */}
      {/* <HeadNav title="Electric Bikes" toggler="chevron-left" /> */}
      <ElectricBikes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
