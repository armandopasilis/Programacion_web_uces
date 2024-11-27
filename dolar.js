document.getElementById("fetchDollarPrice").addEventListener("click", fetchDollarPrice);

async function fetchDollarPrice() {
    const apiUrl = "https://api.exchangerate-api.com/v4/latest/USD"; 
    const priceElement = document.getElementById("price");
    const errorElement = document.getElementById("error");

    try {
       
        priceElement.textContent = "Cargando...";

        
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Error en la respuesta de la API.");
        }

        const data = await response.json();

        
        const dollarToArs = data.rates.ARS; 
        priceElement.textContent = `Precio del Dólar: $${dollarToArs.toFixed(2)}`;
        errorElement.style.display = "none"; 
    } catch (error) {
       
        console.error("Error al obtener el precio del dólar:", error);
        priceElement.textContent = "Precio del Dólar: ---";
        errorElement.textContent = "No se pudo obtener el precio del dólar.";
        errorElement.style.display = "block";
    }
}
