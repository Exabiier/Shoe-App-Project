import { View, Text, Image, FlatList, useWindowDimensions, StyleSheet, ScrollView } from 'react-native'
import products from '../../data/products'


const ProductDetailScreen = () => {
    const product = products[0];
    const { width } = useWindowDimensions();
    
  return (
    <ScrollView style={styles.container}>
        {/* Carassoul for images */}
        
        <FlatList
        data={product.images}
        renderItem={ ({item}) => (
            // the image gets cut out if aspect ration and flex is use on it 
        
            <View style={[styles.imageContainer, { width: width}]}>
                <Image className='h-[100%] w-[100%]' source={{ uri: item }}  style={[styles.image, { width: width}]} resizeMode="cover" />
            </View>
        )}
        horizontal
        pagingEnabled
        />
        <View style={{padding: 20}}>
            {/* Title */}
            <Text style={styles.title} >{product.name}</Text>
            {/* For Price */}
            <Text style={styles.price}>{product.price}</Text>
            {/* For Description */}
            <Text style={styles.description1}>{product.description}</Text>
            {/* Add Cart button */}
            <Text></Text>
            {/* Navigaiton icon */}
        </View>
    </ScrollView>
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
        aspectRatio: 1,
      },

    //  these are the styles for the fonts
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10,
    },
    price: {
        fontWeight: '500',
        fontSize: 16,   
    },
    description1:{
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '300',
    }
})

export default ProductDetailScreen