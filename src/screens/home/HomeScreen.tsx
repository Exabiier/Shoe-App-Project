import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import products from '../../data/products';


const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <FlatList<Product>
      numColumns={2}
      data={products}
      renderItem={({item}) => (
          <View className='w-[50%] p-1'>
          <Image source={{uri: item.image}} className='w-[100%]' style={styles.image}/>
          </View>
      )}
      />
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      aspectRatio: 1,
    }
  });