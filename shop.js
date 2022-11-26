var listMain = [
    {
        img : "img/products-1.jpg",
        name : "Kẹo Skittles hương trái cây hũ 100g",
        href:"https://www.bachhoaxanh.com/keo-cung/keo-trai-cay-skittles-original-hu-100g",
        description:"Price: $1.67/45100 VNĐ",
    },
    {
        img : "img/products-2.jpg",
        name : "Kẹo socola nhân bơ đậu phộng Snickers thanh 51g",
        href:"https://www.bachhoaxanh.com/socola/keo-chocolate-snickers-51g",
        description:"Price: $0.89/22000 VNĐ",
    },
    {
        img : "img/products-3.jpg",
        name : "Kẹo socola sữa M&M's gói 40g",
        href:"https://www.bachhoaxanh.com/socola/keo-chocolate-m-ms-milk-40g",
        description:"Price: $0.85/21000 VNĐ",
    },
    {
        img : "img/products-4.jpg",
        name : "Bánh xốp KitKat phủ socola gói 102g",
        href:"https://www.bachhoaxanh.com/banh-chocopie-kitkat/socola-kit-kat-goi-6-thanh-2f",
        description:"Price: $1.45/36000 VNĐ",
    },
    {
        img : "img/products-5.jpg",
        name : "Socola trắng nhân bánh quy Hershey's gói 40g",
        href:"https://www.bachhoaxanh.com/socola/socola-hersheys-hrc-cookiesncreme-40g",
        description:"Price: $1.13/28000 VNĐ",
    },
    {
        img : "img/products-6.jpg",
        name : "Socola Ferrero Rocher hộp 375g",
        href:"https://www.bachhoaxanh.com/socola/socola-ferrero-rocher-hop-375g",
        description:"Price: $15.10/375000 VNĐ",
    },
    {
        img : "img/products-7.jpg",
        name : "Wonka Rainbow Nerds, 6-Ounce Packages (Pack of 12)",
        href:"https://www.amazon.com/Wonka-Rainbow-Nerds-6-Ounce-Packages/dp/B002HN0EYK",
        description:"Price: $30.22/750438.15 VNĐ",
    },
    {
        img : "img/products-8.jpg",
        name : "Twix Twin Chocolate Bars - 50g - Pack of 12 (50g x 12 Bars)",
        href:"https://www.amazon.com/Twix-Twin-Chocolate-Bars-Pack/dp/B013P4XSHE",
        description:"Price: $22.9/568664.25 VNĐ",
    },
    
];
function showMain(data) {
    var _first = document.querySelector(".products");
    _first.innerHTML = "";
    if(_first) {
        for(var item of data) {
            _first.innerHTML += `
            <div class="product">
                <div class="product-img">
                    <img src="${item.img}" alt="">
                </div>
                <div class="desc">
                    <a href="${item.href}">
                        <h4>${item.name}</h4>
                        <p>${item.description}</p>
                    </a>
                </div>
            </div>
            `;
        }
    }
}
showMain(listMain);