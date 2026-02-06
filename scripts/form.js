// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Product data
const products = [
    { id: "p1", name: "Smart Thermostat" },
    { id: "p2", name: "Solar Water Heater" },
    { id: "p3", name: "LED Light Bulbs" },
    { id: "p4", name: "Inverter Air Conditioner" },
    { id: "p5", name: "Energy Efficient Refrigerator" }
  ];
  
  const productSelect = document.getElementById("product");
  
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  