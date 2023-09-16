function togglePricing() {
  const toggleButton = document.getElementById('pricing-toggle');
  const monthlyPrices = document.querySelectorAll('.monthly-price');
  const annuallyPrices = document.querySelectorAll('.annually-price');

  if (toggleButton.checked) {
    for (let i = 0; i < monthlyPrices.length; i++) {
      monthlyPrices[i].style.display = 'block';
      annuallyPrices[i].style.display = 'none';
    }

  } else {
    for (let i = 0; i < monthlyPrices.length; i++) {
      monthlyPrices[i].style.display = 'none';
      annuallyPrices[i].style.display = 'block';
    }
  }
}
