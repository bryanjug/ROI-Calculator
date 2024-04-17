document.addEventListener('DOMContentLoaded', function() {
    function updateDisplay(sliderId, displayId) {
      var slider = document.getElementById(sliderId);
      var display = document.getElementById(displayId);
      display.textContent = slider.value;
      updateTotal(); // Call updateTotal whenever a slider value changes
    }
  
    function updateTotal() {
      // Get the current values of all sliders
      var glassesPerMonth = parseFloat(document.getElementById('glassesPerMonth').value) || 0;
      var costPerGlass = parseFloat(document.getElementById('costPerGlass').value) || 0;
      var labor = parseFloat(document.getElementById('labor').value) || 0;
      var btgPrice = parseFloat(document.getElementById('btgPrice').value) || 0;
      
      // Calculate the "Your Profit" value
      var totalCost = (glassesPerMonth * costPerGlass) + (labor * 25);
      var totalGrossProfit = (btgPrice * glassesPerMonth);
      var totalNetProfit = totalGrossProfit - totalCost;
      
      var netProfitMonthly = totalNetProfit;
      var netProfitYearly = totalNetProfit * 12;
      
      // Update the "Your Profit" value display
      document.getElementById('yourProfitMonthly').textContent = "$" + netProfitMonthly.toLocaleString();
      document.getElementById('yourProfitYearly').textContent = "$" + netProfitYearly.toLocaleString();
      document.getElementById('yourProfitMonthly2').textContent = "$" + netProfitMonthly.toLocaleString();
      document.getElementById('yourProfitYearly2').textContent = "$" + netProfitYearly.toLocaleString();

      //Calculate the "Pasmosa Profit" value
      var totalCostPasmosa = (glassesPerMonth * 1.80) + 0;
      var totalGrossProfitPasmosa = (btgPrice * glassesPerMonth);
      var totalNetProfitPasmosa = totalGrossProfitPasmosa - totalCostPasmosa;
      
      var netProfitMonthlyPasmosa = totalNetProfitPasmosa;
      var netProfitYearlyPasmosa = totalNetProfitPasmosa * 12;

      // Update the "Your Profit" value display
      document.getElementById('pasmosaProfitMonthly').textContent = "$" + netProfitMonthlyPasmosa.toLocaleString();
      document.getElementById('pasmosaProfitYearly').textContent = "$" + netProfitYearlyPasmosa.toLocaleString();
      document.getElementById('pasmosaProfitMonthly2').textContent = "$" + netProfitMonthlyPasmosa.toLocaleString();
      document.getElementById('pasmosaProfitYearly2').textContent = "$" + netProfitYearlyPasmosa.toLocaleString();
    }
  
    // Attach input event listeners to sliders
    document.getElementById('glassesPerMonth').addEventListener('input', function() {
      updateDisplay('glassesPerMonth', 'glassesPerMonthValue');
    });
    document.getElementById('costPerGlass').addEventListener('input', function() {
      updateDisplay('costPerGlass', 'costPerGlassValue');
    });
    document.getElementById('labor').addEventListener('input', function() {
      updateDisplay('labor', 'laborValue');
    });
    document.getElementById('btgPrice').addEventListener('input', function() {
      updateDisplay('btgPrice', 'btgPriceValue');
    });
  
    // Initialize displays
    updateDisplay('glassesPerMonth', 'glassesPerMonthValue');
    updateDisplay('costPerGlass', 'costPerGlassValue');
    updateDisplay('labor', 'laborValue');
    updateDisplay('btgPrice', 'btgPriceValue');
    updateTotal(); // Initialize the total value display
  });
