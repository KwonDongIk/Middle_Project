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