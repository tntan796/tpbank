document.addEventListener('DOMContentLoaded', (event) => {
    const wallets = document.getElementsByClassName('txt-color-action');
    for (let i = 0; i < wallets.length; i++) {
        wallets[i].addEventListener('click', function() {
            const walletDetails = document.getElementsByClassName('ewallet-item-detail');
            if (walletDetails[i].classList.contains('hide-info')) {
                walletDetails[i].classList.add('show-info');
                walletDetails[i].classList.remove('hide-info');
            } else {
                walletDetails[i].classList.remove('show-info');
                walletDetails[i].classList.add('hide-info');
            }
        });
    }
});