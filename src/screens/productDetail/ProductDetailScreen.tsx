import { View, Text, Image, FlatList, useWindowDimensions, StyleSheet } from 'react-native'
import products from '../../data/products'


const ProductDetailScreen = () => {
    const product = products[0];
    const { width } = useWindowDimensions();
    
  return (
    <View style={styles.container}>
        {/* Carassoul for images */}
        <FlatList
        data={product.images}
        renderItem={ ({item}) => (
            // the image gets cut out if aspect ration and flex is use on it 
            <View style={[styles.imageContainer, { width: width}]}>
                <Image className='h-[100%] w-[100%]' source={{ uri: item }}  style={styles.image} />
            </View>
        )}
        horizontal
        pagingEnabled
        />
        {/* Title */}
        <Text>{product.name}</Text>
        {/* For Price */}
        <Text>{product.price}</Text>
        {/* For Description */}
        <Text>{product.description}</Text>
        {/* Add Cart button */}
        <Text></Text>
        {/* Navigaiton icon */}

      

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      imageContainer: {
        flex: 1,
      },
      image: {
        
        // aspectRatio: 1,
      },
})

export default ProductDetailScreen