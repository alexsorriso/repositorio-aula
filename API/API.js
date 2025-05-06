class API {
    static async post(url, body) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
  
        if (!response.ok) {
          throw new Error(`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA: ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log('Dados salvos:', data);
        return data;
      } catch (error) {
        console.error('Erro ao enviar dados:', error.message);
        throw error; // Re-throw para permitir que o chamador trate o erro, se necessário
      }
    }
  }

export default API;
  