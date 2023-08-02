interface Review {
    name: string;
    rating: number;
    comment: string; 
    user: string;
}

interface ProductTypes {
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


interface ShippingAddress {
    address: string;
    city: string;
    postalCode: string;
    country: string;
}

export interface CartState {
    cartItems: ProductTypes[];
    shippingAddress: ShippingAddress;
    paymentMethod: string;
    itemsPrice: number;
    shippingPrice: number;
    taxPrice: number;
    totalPrice: number;
}