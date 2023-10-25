import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryBox from '../../../components/CategoryBox';
import Header from '../../../components/Header';
import ProductHomeItem from '../../../components/ProductHomeItem';
import { categories } from '../../../data/categories';
import { products } from '../../../data/products';
import { styles } from './styles';

const Home = ({navigation}) => {
  const [keyword, setKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    } else if (selectedCategory && keyword){
      setFilteredProducts(products.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()) && product.category === selectedCategory));
    } else if (!selectedCategory && keyword){
      setFilteredProducts(products.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase())));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, keyword]);

  const renderCategoyItem = ({ item }) => {
    return <CategoryBox onPress={() => setSelectedCategory(item?.id)} isSelected={item?.id === selectedCategory} title={item?.title} image={item?.image}></CategoryBox>;
  };

  const renderProductHomeItem = ({ item }) => {
    const onProductPress = (product) => {
      navigation.navigate('ProductDetails', {product});
    }
    return <ProductHomeItem {...item} onPress={() => onProductPress(item)}></ProductHomeItem>;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header
          onSearch={setKeyword}
          title="Find All You Need"
          showLogout={false}
          showSearch={true}
          keyword={keyword}
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
          ListFooterComponent={<View style={{ height: 440 }}></View>}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
