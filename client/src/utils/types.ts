interface Review {
    name: string;
    rating: number;
    comment: string; 
    user: string;
}

export interface ProductTypes {
    _id: string;
    user: string;
    name: string;
    image: string;
    brand: string;
    category: string; 
    description: string;
    reviews: Review[];
    rating: number;
    numReviews: number;
    price: number;
    countInStock: number;
    qty: number;
}
  
export interface CartState {
    cartItems: ProductTypes[];
    itemsPrice: number;
    shippingPrice: number;
    taxPrice: number;
    totalPrice: number;
}