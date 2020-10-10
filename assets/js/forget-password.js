$( document ).ready(function() {
    window.onclick = function(event) {
        console.log(event.target);

        // Loại bỏ hiển thị item khi click ra ngoài Loại giấy tờ
        const container = document.querySelector('.select-container__wrap-top');
        if (!container.contains(event.target)) {
            document.querySelector('.select-container__wrap-items').classList.remove('active');
            document.querySelector('.select-container__icon').classList.remove('rotate-icon');
        }
       
      }
    
    // Click on select document type
    document.querySelector('.select-container__wrap-top').addEventListener("click", function() {
        const documentTypeItems = document.querySelector('.select-container__wrap-items');
        const icon = document.querySelector('.select-container__icon');
        if (documentTypeItems && documentTypeItems.classList.contains('active')) {
            documentTypeItems.classList.remove('active');
            icon.classList.remove('rotate-icon');
        } else {
            documentTypeItems.classList.add('active');
            icon.classList.add('rotate-icon');
        }
    });
});