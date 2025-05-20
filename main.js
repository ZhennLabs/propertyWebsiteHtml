function calculateKPR() {
    var income = document.getElementById('income').value;
    var otherLoans = document.getElementById('otherLoans').value;
    var loanTenure = document.getElementById('loanTenure').value;
    var interestRate = document.getElementById('bank-persen').value;

    if (income && otherLoans && loanTenure && interestRate) {
        var netIncome = income - otherLoans;
        var maxLoanPaymentRatio = 0.50;
        var maxMonthlyPayment = netIncome * maxLoanPaymentRatio;
        var loanTenureMonths = loanTenure * 12;
 
        var monthlyInterestRate = interestRate / 12;
        
        var maxLoanAmount = maxMonthlyPayment * 
            (1 - Math.pow(1 + monthlyInterestRate, -loanTenureMonths)) / 
            monthlyInterestRate;
        
        var downPaymentPercentage = 0.20;
        var propertyPrice = maxLoanAmount / (1 - downPaymentPercentage);
    
        var formattedPropertyPrice = propertyPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    
        document.getElementById('propertyPrice').innerText = formattedPropertyPrice;
        document.getElementById('result').style.display = 'block';
    } else {
        document.getElementById('result').style.display = 'none';
    }
}
