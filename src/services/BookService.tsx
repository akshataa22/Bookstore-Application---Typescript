import axios from "axios";
import base_url from './../api/baseapi';

export interface Book {
  _id: string;
  description: string;
  discountPrice: number;
  bookName: string;
  author: string;
  quantity: number;
  price: number;
}

interface ApiResponse<T> {
  result: T;
}

const BookService = {

  getCartItems: async (token:string): Promise<ApiResponse<Book[]>> => {
    const response = await axios.get(`${base_url}/bookstore_user/get/book`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response.data;
  }
}  

export default BookService;