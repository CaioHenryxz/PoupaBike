const fuelCostInput = document.getElementById("fuelCost");
const monthlySavingsOutput = document.getElementById("monthlySavings");
const yearlySavingsOutput = document.getElementById("yearlySavings");
const whatsappLinks = document.querySelectorAll(".js-whatsapp");

const formatCurrency = (value) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

const updateSavings = () => {
  const monthlyFuelCost = Number(fuelCostInput.value) || 0;
  const monthlySavings = monthlyFuelCost * 0.8;
  const yearlySavings = monthlySavings * 12;

  monthlySavingsOutput.textContent = formatCurrency(monthlySavings);
  yearlySavingsOutput.textContent = formatCurrency(yearlySavings);
};

fuelCostInput.addEventListener("input", updateSavings);
updateSavings();

whatsappLinks.forEach((link) => {
  const message = link.dataset.message;

  if (!message) return;

  link.href = `https://wa.me/?text=${encodeURIComponent(message)}`;
});
