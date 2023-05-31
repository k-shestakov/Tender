
'use strict';
document.addEventListener('DOMContentLoaded', function () {

    const productList = document.querySelector('.shop__body');
    productList.addEventListener('click', function (event) {
        if (event.target.closest('.shop__item')) {

        }
    });

    const button = document.querySelectorAll('button');
    button.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            btn.classList.toggle('_active');
            console.log('product has been' + e.target.classList);
        })
    });


    // ============== fileter =====================================================================
    const itemFillter = document.querySelectorAll('.shop__swhitch');
    const itemProduct = document.querySelectorAll('.item');
    itemFillter.forEach(li => {
        li.onclick = function () {
            itemFillter.forEach(li => {
                li.classList.remove('_selected');
            });
            li.classList.add('_selected');

            const value = li.textContent;
            itemProduct.forEach(item => {
                item.style.display = 'none';
                if (item.getAttribute('data-fillter') == value.toLowerCase() || value == 'All') {
                    item.style.display = 'block';
                }
            })

        }

    });



});



















