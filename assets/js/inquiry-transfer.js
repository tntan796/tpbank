document.addEventListener('DOMContentLoaded', (event) => {
    

    // // Handle event action when click transferType
    // const transferType = document.getElementById('transfer-type');
    // const transferTypePopup = document.getElementsByClassName('search-by-catalogue')[0];
    // const btnCloseTransferType = document.getElementsByClassName('btn-close-transfer-type')[0];
    // transferType.addEventListener('click', function() {
    //     transferTypePopup.classList.add('show');
    // })
    // btnCloseTransferType.addEventListener('click', function() {
    //     transferTypePopup.classList.remove('show');
    // })


    // // Show detail when click transaction
    // const contentTransactions = document.querySelectorAll('.content-transaction');
    // contentTransactions.forEach((transaction, index) => {
    //     transaction.addEventListener('click', function(index) {
    //         alert(index);
    //     });
    // })
});

window.addEventListener('DOMContentLoaded', (event) => {
    var menuIcon = document.getElementById('hamburger-menu');
    var menu = document.querySelector('#main-menu.left');
    menuIcon.addEventListener("click", function() {
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        } else {
            menu.classList.add('show');
        }
    })

    // Xử lí đóng mở dropdown menu
    var menuParentItem = document.querySelectorAll('.menu-item.parent');
    menuParentItem.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Loại bỏ active cũ
            var menuParentItemActive = document.querySelector('.menu-item.parent.active');
            // Loại bỏ active của list item cũ
            var menuItemList = document.querySelector('.menu-item.active + div');
            menuItemList.classList.remove('active');
            // Loại bỏ icon active
            var menuIconChevron = document.querySelector('.menu-item.active > i');
            menuIconChevron.classList = "fas fa-chevron-down"

            menuParentItemActive.classList.remove('active');

            // Thêm lại active vào item hiện tại
            item.classList.add('active');
            item.nextElementSibling.classList.add('active');
            item.lastElementChild.classList = "fas fa-chevron-up";
        });
    })
});

window.addEventListener("mouseup", (e) => {
    var menu = document.querySelector('#main-menu.left');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
    }
})