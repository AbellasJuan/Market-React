import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryBox from '../../../components/CategoryBox';
import Header from '../../../components/Header';
import { categories } from '../../../data/categories';
import { styles } from './styles';

const Home = () => {

  const renderCategoyItem = ({item, index}) => {
    return (
      <CategoryBox title={item?.title} image={item?.image}></CategoryBox>
    )
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header title="Find All You Need" showLogout={false} showSearch={true}/>
        <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoyItem} keyExtractor={(item,index) => String(index)}></FlatList>
      </ScrollView>
    </SafeAreaView>
  )
};

export default Home;