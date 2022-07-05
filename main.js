


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

var headerMobile = document.querySelector('.header-mobile');
window.addEventListener('scroll', fixed_header1);

function fixed_header1() {
    if (window.scrollY > headerMobile.offsetHeight) {
        headerMobile.classList.add('active');
    }
    else {
        headerMobile.classList.remove('active');
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

// xử lí tag a href="#" ngăn ngừa load lại trang 
var links = document.querySelectorAll('a[href="#"]');

links.forEach(function (link) {
    link.onclick = function (e) {
        e.preventDefault();
    }
});

//search mobile 


var searchIcon = document.querySelector('.mobile-search__icon');
var searchElement = document.querySelector('.mobile-search__input');

searchIcon.onclick = function () {
    searchElement.classList.toggle('block');
}


// acount

var login = document.querySelector('.wrapper-moblie-login');
var login__login = document.querySelector('.login__login');
var mobileLogin__icon = document.querySelector('.mobile-login__icon');

login.onclick = function () {
    login__login.classList.toggle('block');
    mobileLogin__icon.classList.toggle('animation-rotate');

}

//modal and close menu
var wrapperMenuMoblie = document.querySelector('.wrapper-menuMoblie');
var closeMenuMoblieIcon = document.querySelector('.menuMoblie-close');
closeMenuMoblieIcon.onclick = function () {
    wrapperMenuMoblie.style.display = 'none';
 

}

wrapperMenuMoblie.onclick = function () {
    wrapperMenuMoblie.style.display = 'none';
}

var menuMoblie = document.querySelector('.menuMoblie');
menuMoblie.onclick = function (e) {
    e.stopPropagation();
}

var mobileMenuNav = document.querySelector('.mobile-menu');
mobileMenuNav.onclick = function () {
    wrapperMenuMoblie.style.display = 'block';
    
}