


// xử lí scroll header 
var header = document.querySelector('.header');
window.addEventListener('scroll', fixed_header);

function fixed_header() {
    if (window.scrollY > header.offsetHeight) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
}



// xử lí click ẩn/ hiện khung search

var searchElement = document.querySelector('.header__action-item--action');
var headerSearch = document.querySelector('.header-search');
var headerInput = document.querySelector('.header_search-input')

searchElement.onclick = function () {

    // Thêm class action để hiện input header
    headerSearch.classList.add('action');

    // kiểm tra nếu có input header và blur khỏi thì ẩn 
    if (headerInput) {
        headerInput.onblur = function () {
            headerSearch.classList.remove('action');
        }
    }



}

// chọn ảnh hiển thị
// dựa vào code acctive menu trên w3school custom lại 
var itemChange = document.querySelector('.wrapper-img img');
var items = document.getElementsByClassName("product-item-img");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("border");
        current[0].className = current[0].className.replace(" border", "");
        this.className += " border";
        itemChange.src = this.src;
    });
}




//Làm tương tự như cái chọn img src

var productSizes = document.querySelectorAll('.product-detail-size');

var checked = document.querySelectorAll('.checked');


productSizes.forEach(productSize => {

    productSizes.forEach(function (productSizeOther) {

        productSizeOther.classList.remove('broder-checked');
        checked.forEach(function (check) {
            check.style.display = 'none'
        });
    });


    checked[0].style.display = "block";
    productSizes[0].classList.add('broder-checked')
    productSize.onclick = function () {

        productSizes.forEach(function (k) {
            k.classList.remove('broder-checked');
            checked.forEach(function (check) {
                check.style.display = 'none'
            });
        });

        var productSizeCheck = productSize.querySelector('.checked');
        productSizeCheck.style.display = 'block';
        productSize.classList.add('broder-checked');


    }
})





//xử lí inner id áo

var clothingSize = document.querySelector('.product-detail-id1');
var valueSizes = document.querySelectorAll('.value-size');
valueSizes.forEach(function (valueSize) {
    valueSize.onclick = function () {
        clothingSize.innerText = 'SS22FLMSB' + valueSize.htmlFor;
    }
});


// forgot password

var forgot = document.querySelector('#forgot');
var login = document.querySelector('#login');
var cancelLink = document.querySelector('#cancel-link');
var loginClick = document.querySelector('#login-click');

forgot.style.display = "none";
loginClick.onclick = function () {
    forgot.style.display = "block";
    login.style.display = "none";
}

cancelLink.onclick = function () {
    login.style.display = "block";
    forgot.style.display = "none";
}


