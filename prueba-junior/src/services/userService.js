const API_BASE_URL = 'https://reqres.in/api';

export const userService = {
  async getUsers(page = 1) {
    const url = `${API_BASE_URL}/users?page=${page}`;
    console.log(`🚀 Fetch GET: ${url}`);
    
    try {
      const response = await fetch(url, {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });
      
      console.log(` Response status: ${response.status} ${response.statusText}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(`✅ Datos de la API`, data);
      
      return data;
      
    } catch (error) {
      console.error(`❌ Error: ${error.message}`);
      throw new Error(`No se pudo cargar la página ${page}: ${error.message}`);
    }
  },

  // 👤 Obtener usuario específico 
  async getUserById(id) {
    const url = `${API_BASE_URL}/users/${id}`;
    console.log(`🚀 Fetch GET: ${url}`);
    
    try {
      const response = await fetch(url, {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });
      
      console.log(`📡 Response status: ${response.status} ${response.statusText}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(`✅ Usuario de la API:`, data);
      
      return data;
      
    } catch (error) {
      console.error(`❌ Error: ${error.message}`);
      throw new Error(`No se pudo cargar el usuario ${id}: ${error.message}`);
    }
  }
};