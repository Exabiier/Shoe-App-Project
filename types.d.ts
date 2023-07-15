// React navigation types:
type RootStackParamList = {
    Home: undefined,
    ProductScreen: undefined,
    ShoppingCartScreen: undefined,
}

//Data types and Interfaces:
interface Product {
    id: string;
    image: string;
    images: string [];
    name: string;
    price: number;
    sizes: number[];
    description: string;

}

interface CartItem {
    product: {
        id: string,
        image:
          string,
        name: string,
        price: number,
      },
      size: number,
      quantity: number,
}

