document.addEventListener('DOMContentLoaded', function() {


let tabs = document.querySelectorAll('.tab');
let searchFilter = document.querySelector('.search-filter');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tb => tb.classList.remove('active'));
        tab.classList.add('active');

        let tabType = tab.dataset.tab;

        let oldFields = searchFilter.querySelectorAll('.search-row, .car-type-buttons, .btn-container');
        oldFields.forEach(fields => fields.remove());

        let newFields = '';

        if (tabType == 'direct'){
            newFields =`<div class="search-row">
                                <div class="search-field">
                                <label class="search-label">제조사</label>
                                <select class="search-control" id="">
                                    <option selected="" value="">선택하세요.</option>
                                    <option>현대자동차</option>
                                    <option>기아</option>
                                    <option>KGM</option>
                                    <option>르노</option>
                                    <option>쉐보레</option>
                                    <option>테슬라</option>
                                    <option>BYD</option>
                                </select>
                                </div>
                                
                                <div class="search-field">
                                <label class="search-label">모델</label>
                                <select class="search-control" id="">
                                    <option selected="" value="">선택하세요.</option>
                                    <option>그랜저</option>
                                    <option>그랜저</option>
                                    <option>그랜저</option>
                                    <option>그랜저</option>
                                    <option>그랜저</option>
                                </select>
                                </div>

                                <div class="search-field">
                                <label class="search-label">세부모델</label>
                                <select class="search-control" id="">
                                    <option selected="" value="">선택하세요.</option>
                                    <option>그랜저 (GN7) (22년 ~ 현재)</option>
                                    <option>그랜저 하이브리드 (GN7) (22년 ~ 현재)</option>
                                    <option>더 뉴 그랜저 IG (19년 ~ 22년)</option>
                                    <option>더 뉴 그랜저 IG 하이브리드 (19년 ~ 22년)</option>
                                    <option>그랜저 IG 하이브리드 (17년 ~ 19년)</option>
                                </select>
                                </div>
                            </div>
                            <div class="btn-container">
                                <button class="search-btn" type="submit" id="searchButton">
                                검색하기
                                </button>
                            </div>
                        </div>`;
        } else if(tabType == 'price') {
            newFields =`<div class="search-row">
                                <div class="search-field">
                                <label class="search-label">제조사</label>
                                <select class="search-control" id="">
                                    <option selected="" value="">선택하세요.</option>
                                    <option>현대자동차</option>
                                    <option>기아</option>
                                    <option>KGM</option>
                                    <option>르노</option>
                                    <option>쉐보레</option>
                                    <option>테슬라</option>
                                    <option>BYD</option>
                                </select>
                                </div>
                                
                                <div class="search-field">
                                <label class="search-label">최저가</label>
                                <select class="search-control" id="">
                                    <option selected="" value="">선택하세요.</option>
                                    <option>1,000만원</option>
                                    <option>2,000만원</option>
                                    <option>3,000만원</option>
                                </select>
                                </div>

                                <div class="search-field">
                                <label class="search-label">최고가</label>
                                <select class="search-control" id="">
                                    <option selected="" value="">선택하세요.</option>
                                    <option>2,000만원</option>
                                    <option>3,000만원</option>
                                    <option>4,000만원</option>
                                </select>
                                </div>
                            </div>
                            <div class="btn-container">
                                <button class="search-btn" type="submit" id="searchButton">
                                검색하기
                                </button>
                            </div>
                        </div>`;
        } else if(tabType == 'type') {
            newFields =`<div class="car-type-buttons">
                            <button class="car-type-button" data-type="경차"><img src="images/경차.png"><span>경차</span></button>
                            <button class="car-type-button" data-type="준중형"><img src="images/준중형.png"><span>준중형</span></button>
                            <button class="car-type-button" data-type="중형"><img src="images/중형.png"><span>중형</span></button>
                            <button class="car-type-button" data-type="SUV"><img src="images/SUV.png"><span>SUV</span></button> 
                            <button class="car-type-button" data-type="대형"><img src="images/대형.png"><span>대형</span></button>           
                        </div>
                        <div class="btn-container">
                            <button class="search-btn" type="submit" id="searchButton">
                            검색하기
                            </button>
                        </div>`;
        }
        
        searchFilter.querySelector('.tabs').insertAdjacentHTML('afterend', newFields);

        if(tabType == 'type'){
            addCarTypeButtonListeners();
        }
    });
});


function addCarTypeButtonListeners(){
    let carTypeButtons = document.querySelectorAll('.car-type-button');

    carTypeButtons.forEach(button => {
        button.addEventListener('click', () => {
            carTypeButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
        });
    })
}


let carWrapper = document.getElementById('carWrapper');
let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');
let slideContainer = document.querySelector('.car-slide-container');

let currentSlide = 0;
let totalSlides = 1;
let autoSlideInterval;
const autoSlideDelay = 5000; // 5초마다

const carData = [
    [
        {
            manufacturer: '현대자동차',
            name: '투싼',
            price: '2,890만원',
            info: '23년 5월식 | 5,500km | 가솔린 | 대구',
            Image: 'images/car/현대자동차/tucson.png'
            
        },

        {
            manufacturer: '테슬라',
            name: '모델 Y',
            price: '4,700만원',
            info: '24년 3월식 | 9,300km | 전기 | 경북 포항',
            Image: 'images/car/테슬라/modely.png'
        },

        {
            manufacturer: '기아',
            name: '쏘렌토',
            price: '3,300만원',
            info: '24년 12월식 | 1,800km | 가솔린 | 대전',
            Image: 'images/car/기아/the_new_sorento.png'
        }
    ],
    [
        {
            manufacturer: '현대자동차',
            name: '캐스퍼',
            price: '1,000만원',
            info: '22년 9월식 | 9,500km | 가솔린 | 대구',
            Image: 'images/car/현대자동차/casper.png'
            
        },

        {
            manufacturer: '테슬라',
            name: '모델 Y',
            price: '4,700만원',
            info: '24년 3월식 | 9,300km | 전기 | 경북 포항',
            Image: 'images/car/테슬라/modely.png'
        },

        {
            manufacturer: '현대자동차',
            name: '싼타페',
            price: '3,100만원',
            info: '24년 11월식 | 3,800km | 가솔린 | 경북 구미',
            Image: 'images/car/현대자동차/santafe.png'
        }
    ]
];

function createCarSlide() {
    if(carData.length > 0) {
        carData.forEach((slideData, index) => {
            let slideHTML = createSlideHTML(slideData, index + 2)
            carWrapper.innerHTML += slideHTML;
        });

        totalSlides = carData.length + 1;
    }
}

function createSlideHTML(cars, slideNumber){
    let carCardsHTML = '';

    cars.forEach(car => {
        carCardsHTML += `<a href="">
                <div class="car-card">
                  <img src="${car.Image}" class="car-slide-img">
                  <div class="car-data">
                    <div class="car-title-line">
                      <p class="car-manufacturer">${car.manufacturer}</p>
                      <p class="car-name">${car.name}</p>
                    </div>
                    <p class="car-price">${car.price}</p>
                    <p class="car-info">${car.info}</p>
                  </div>
                </div>
              </a>`;
    });

    return `<div class="slide-${slideNumber}">
                <div class="car-slide-info">
                    ${carCardsHTML}
                </div>
            </div>`;
}

function moveSlide(direction){
    const totalSlides = carWrapper.children.length;

    if(direction == 'next') {
        currentSlide = (currentSlide + 1) % totalSlides;
    } else {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    }

    updateSlidePosition();
}

function updateSlidePosition(){
    carWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function startAutoSlide(){
    stopAutoSlide();
    autoSlideInterval = setInterval(() => {
        moveSlide('next');
    }, autoSlideDelay);
}

function stopAutoSlide(){
    if(autoSlideInterval){
        clearInterval(autoSlideInterval);
    }
};

prevButton.addEventListener('click', () => {
    moveSlide('prev');
    startAutoSlide();
});

nextButton.addEventListener('click', () => {
    moveSlide('next');
    startAutoSlide();
});

slideContainer.addEventListener('mouseenter', stopAutoSlide);
slideContainer.addEventListener('mouseleave', startAutoSlide);

createCarSlide();
startAutoSlide();

});
