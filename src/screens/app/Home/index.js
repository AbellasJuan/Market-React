import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryBox from '../../../components/CategoryBox';
import Header from '../../../components/Header';
import ProductHomeItem from '../../../components/ProductHomeItem';
import { categories } from '../../../data/categories';
import { products } from '../../../data/products';
import { styles } from './styles';

const Home = () => {

  const renderCategoyItem = ({item, index}) => {
    return (
      <CategoryBox title={item?.title} image={item?.image}></CategoryBox>
    )
  };

  const renderProductHomeItem = ({item, index}) => {
    return (
      <ProductHomeItem title={item?.title} image={item?.image} price={item?.price}></ProductHomeItem>
    )
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header title="Find All You Need" showLogout={false} showSearch={true}/>
        <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCategoyItem} keyExtractor={(item, index) => String(index)}></FlatList>
        <FlatList style={styles.products} data={products} renderItem={renderProductHomeItem} keyExtractor={(item, index) => String(index)}></FlatList>
      </View>
    </SafeAreaView>
  )
};

export default Home;