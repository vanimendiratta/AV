// utils/requestHandlers.js
export const sendRequest = async (url, config) => {
    try {
      const response = await fetch(url, config);
      const data = await response.json();
  
      if (!response.ok) {
        // Throw error with status code and message
        throw new Error(`${response.status}: ${data.error || 'An error occurred'}`);
      }
  
      return data;
    } catch (error) {
      // Re-throw error to be caught in the calling function
      throw error;
    }
  };
  