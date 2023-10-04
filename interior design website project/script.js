const goToPortfolioButton = document.getElementById('goToPortfolio');

if (goToPortfolioButton) {
    goToPortfolioButton.addEventListener('click', function() {
        document.body.style.backgroundColor = '#000000';
        setTimeout(function() { 
            window.location.href = 'portfolio.html'; 
        }, 500); 
    });
}
