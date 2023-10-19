import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryBox from '../../../components/CategoryBox';
import Header from '../../../components/Header';
import ProductHomeItem from '../../../components/ProductHomeItem';
import { categories } from '../../../data/categories';
import { products } from '../../../data/products';
import { styles } from './styles';

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory) {
      console.log('selectedCategory', selectedCategory)
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);

  const renderCategoyItem = ({ item }) => {
    return <CategoryBox onPress={() => setSelectedCategory(item?.id)} isSelected={item?.id === selectedCategory} title={item?.title} image={item?.image}></CategoryBox>;
  };

  const renderProductHomeItem = ({ item }) => {
    return <ProductHomeItem {...item}></ProductHomeItem>;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          title="Find All You Need"
          showLogout={false}
          showSearch={true}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          horizontal
          data={categories}
          renderItem={renderCategoyItem}
          keyExtractor={(item, index) => String(index)}></FlatList>
        <FlatList
          style={styles.products}
          numColumns={2}
          data={filteredProducts}
          renderItem={renderProductHomeItem}
          keyExtractor={item => String(item.id)}
          ListFooterComponent={<View style={{ height: 350 }}></View>}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
