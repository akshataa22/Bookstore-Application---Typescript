// services/BookService.ts
export const getCartItems = async (): Promise<any[]> => {
    // Replace with your actual API call
    return fetch('/api/cart-items')
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching cart items:', error);
        return [];
      });
  };
  