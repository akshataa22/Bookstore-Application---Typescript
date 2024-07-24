import axios from "axios";
import base_url from './../api/baseapi';

export interface CartItem {
  _id: string;
  user_id: string;
  product_id: Book;
  quantityToBuy: number;
}

export interface WishlistItem {
  _id: string;
  user_id: string;
  product_id: Book;
}

export interface Book {
  _id: string;
  description: string;
  discountPrice: number;
  bookName: string;
  author: string;
  quantity: number;
  price: number;
  bookImage: string | null;
}

interface ApiResponse<T> {
  result: T;
}

const BookService = {
  getBooks: async (token: string): Promise<ApiResponse<Book[]>> => {
    const response = await axios.get(`${base_url}/bookstore_user/get/book`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  },

  getWishlistItems: async (token: string): Promise<ApiResponse<WishlistItem[]>> => {
    try {
      const response = await axios.get(`${base_url}/bookstore_user/get_wishlist_items`, {
        headers: {
          Accept: 'application/json',
          'x-access-token':`${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching wishlist items", error);
      throw error;
    }
  },

  addToWishlist: async (token: string, product_id: string): Promise<ApiResponse<WishlistItem>> => {
    const response = await axios.post(`${base_url}/bookstore_user/add_wishlist_item/${product_id}`, {}, {
      headers: {
        'Content-type': 'application/json',
       'x-access-token': `${token}`,
      },
    });
    console.log(response);
    return response.data;
  },

  getCartItems: async (token: string): Promise<ApiResponse<CartItem[]>> => {
    const response = await axios.get(`${base_url}/bookstore_user/get_cart_items`, {
      headers: {
        'x-access-token': `${token}`,
      },
    });
    return response.data;
  },

  addCartItem: async (token: string, product_id: string): Promise<ApiResponse<CartItem>> => {
    const response = await axios.post(`${base_url}/bookstore_user/add_cart_item/${product_id}`, {}, {
      headers: {
       'x-access-token': `${token}`,
      },
    });
    return response.data;
  },

  removeCartItem: async (token: string, _id: string): Promise<ApiResponse<CartItem>> => {
    const response = await axios.delete(`${base_url}/bookstore_user/remove_cart_item/${_id}`, {
      headers: {
       'x-access-token':  `${token}`,
      },
    });
    return response.data;
  },

  updateCartItemQuantity: async (token: string, _id: string, quantityToBuy: number): Promise<ApiResponse<CartItem>> => {
    const response = await axios.put(`${base_url}/bookstore_user/cart_item_quantity/${_id}`, { quantityToBuy }, {
      headers: {
        'x-access-token': `${token}`,
      },
    });
    return response.data;
  }
};

export default BookService;
