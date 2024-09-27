document.addEventListener('DOMContentLoaded', function () {
  const btcPrice = document.getElementById('price-btc');
  const ethPrice = document.getElementById('price-eth');
  const dogePrice = document.getElementById('price-doge');

  async function fetchCryptoPrices() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd');
      const data = await response.json();

      btcPrice.textContent = `BTC: $${data.bitcoin.usd}`;
      ethPrice.textContent = `ETH: $${data.ethereum.usd}`;
      dogePrice.textContent = `DOGE: $${data.dogecoin.usd}`;
    } catch (error) {
      btcPrice.textContent = 'Error fetching data';
      ethPrice.textContent = 'Error fetching data';
      dogePrice.textContent = 'Error fetching data';
      console.error('Error:', error);
    }
  }

  fetchCryptoPrices();
});
