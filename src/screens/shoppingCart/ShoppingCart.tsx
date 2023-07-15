import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CartListItem from '../../components/CartListItem'
import cart from '../../data/cart'

const ShoppingCart = () => {
  return (
    <View>
      <FlatList data={cart} renderItem={({item}) => <CartListItem cartItem={item} />} 
      />

      
    </View>
  )
}

export default ShoppingCart