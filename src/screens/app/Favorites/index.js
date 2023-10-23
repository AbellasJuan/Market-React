import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';
import { products } from '../../../data/products';
import { styles } from './styles';

const Favorites = () => {
  
  const renderItem = ({ item }) => {
    return (
      <>
        <FavoriteItem {...item}></FavoriteItem>
        <View style={styles.line}></View>
      </>
    );
  };
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Header title="Favorites" showLogout={false} showSearch={false} />
        <FlatList
          style={styles.favProducts}
          data={products}
          renderItem={renderItem}
          keyExtractor={item => String(item?.id)}
          ListFooterComponent={<View style={{ height: 20}}></View>}
        />
      </View>
    </SafeAreaView>
  );
};

export default Favorites;
