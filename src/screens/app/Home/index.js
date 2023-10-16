import React from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { styles } from './styles';

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header title="Find All You Need" showLogout={false} showSearch={true}/>
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  )
};

export default Home;