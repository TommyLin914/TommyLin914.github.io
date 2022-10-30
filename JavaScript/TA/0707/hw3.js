'use strict'
const productList =
    [
        {
            "name": "iPhone13",
            "type": [
                { "nameType": "iPhone 13 mini", "price": 22900, "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-family-select?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645036276899" },
                { "nameType": "iPhone 13", "price": 25900, "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-family-select?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645036276869" }
            ],
            "color": [
                {
                    "nameColor": "綠啦",
                    "colorHEX": "#556b2f",
                    "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-green-select?wid=470&hei=556&fmt=png-alpha&.v=1645036275894"
                },
                {
                    "nameColor": "粉啦",
                    "colorHEX": "#faf0e6",
                    "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-pink-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572315655"
                },
                {
                    "nameColor": "藍啦",
                    "colorHEX": "#0000cd",
                    "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572315986"
                },
                {
                    "nameColor": "黑啦",
                    "colorHEX": "#010b13",
                    "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-midnight-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572315770"
                },
                {
                    "nameColor": "白啦",
                    "colorHEX": "#fffefc",
                    "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-starlight-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572315872"
                },
                {
                    "nameColor": "紅啦",
                    "colorHEX": "#d81e0b",
                    "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-product-red-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572315893"
                }
            ],
            "spec": [
                {
                    "nameSpec": "選擇儲存容量",
                    "detail":
                        [
                            { "nameDetail": "128GB", "add": 0 },
                            { "nameDetail": "256GB", "add": 3500 },
                            { "nameDetail": "512GB", "add": 10500 }
                        ]
                }
            ]

        },
        {
            "name": "iPad Air",
            "type": [{ "nameType": "iPad Air", "price": 17900, "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-202203?wid=1765&hei=2000&fmt=jpeg&qlt=95&.v=1645665079887" }],
            "color": [
                {
                    "nameColor": "灰啦",
                    "colorHEX": "#a2a5a7",
                    "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-spacegray-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066742664"
                },
                {
                    "nameColor": "粉啦",
                    "colorHEX": "#faf0e6",
                    "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-pink-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066399526"
                },
                {
                    "nameColor": "紫啦",
                    "colorHEX": "#800080",
                    "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-purple-202203?wid=470&hei=556&fmt=png-alpha&.v=1645066730601"
                },
                {
                    "nameColor": "藍啦",
                    "colorHEX": "#0000cd",
                    "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=470&hei=556&fmt=png-alpha&.v=1645065732688"
                },
                {
                    "nameColor": "白啦",
                    "colorHEX": "#fffefc",
                    "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-starlight-202203?wid=470&hei=556&fmt=png-alpha&.v=1645895139236"
                }
            ],
            "spec": [
                {
                    "nameSpec": "選擇儲存容量",
                    "detail":
                        [
                            { "nameDetail": "64GB", "add": 0 },
                            { "nameDetail": "256GB", "add": 5000 }
                        ]
                },

                {
                    "nameSpec": "連線能力",
                    "detail":
                        [
                            { "nameDetail": "Wi-Fi", "add": 0 },
                            { "nameDetail": "Wi-Fi + Cellular", "add": 5000 },
                        ]
                }

            ]
        },
        {
            "name": "MacBook Pro",
            "type": [{ "nameType": "MacBook Pro 13\"", "price": 39900, "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_TW?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1654014008308" }],
            "color": [
                {
                    "nameColor": "只有灰的",
                    "colorHEX": "#a2a5a7",
                    "imgUrl": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_TW?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1654014008308"
                }
            ],
            "spec": [
                {
                    "nameSpec": "記憶體",
                    "detail": [
                        { "nameDetail": "8GB統一記憶體", "add": 0 },
                        { "nameDetail": "16GB統一記憶體", "add": 6000 },
                        { "nameDetail": "24GB統一記憶體", "add": 12000 },
                    ]
                },
                {
                    "nameSpec": "儲存裝置",
                    "detail": [
                        { "nameDetail": "256GB", "add": 0 },
                        { "nameDetail": "512GB", "add": 6000 },
                        { "nameDetail": "1TB", "add": 12000 },
                        { "nameDetail": "2TB", "add": 24000 }
                    ]
                },
                {
                    "nameSpec": "鍵盤語言",
                    "detail": [
                        { nameDetail: "中文(注音)", "add": 0 },
                        { nameDetail: "美式英文", "add": 0 },
                        { nameDetail: "日文", "add": 0 },
                        { nameDetail: "中文(拼音)", "add": 0 },
                        { nameDetail: "韓文", "add": 0 }
                    ]
                },
                {
                    "nameSpec": "預先安裝的軟體",
                    "detail": [
                        { "nameDetail": "無", "add": 0 },
                        { "nameDetail": "Final Cut Pro", "add": 9990 }
                    ]
                }
            ]
        }
    ]

//iphone

//宣告
const priceTop = document.querySelector('.price-top span')
const productType = document.querySelector('.product-type')
const productName = document.querySelector('.product-name')
const productImg = document.querySelector('.product-img')
const nameType = document.querySelector('.name-type')
const nameSpec = document.querySelector('.name-spec')
const basicPrice = document.querySelector('.basic-price span')
const flushType = document.querySelector('#flush-collapseType')
const accordionFlush = document.querySelector('.accordion-flush')

//總價
let currentPrice = 0
//window onload
navbarCreate()
window.onload = function () {
    selectProduct(productList[0])
    currentPrice = productList[0].type[0].price
    setCurrentPrice()
}

//func
//設定總額
function setCurrentPrice() {
    let sumPrice = currentPrice + getBonusPriceSum()
    priceTop.innerText = toCurrency(sumPrice)
}
//產生nav
function navbarCreate() {
    const list = productList.map(p => p.name)
    const headNav = document.querySelector('.head')
    const ul = document.createElement('ul')
    list.forEach((item, index) => {
        const li = document.createElement('li')
        const a = document.createElement('a')

        a.onclick = function () {
            accordionFlush.innerHTML = ''
            selectProduct(productList[index])

            setCurrentPrice()
        }

        li.setAttribute('class', 'nav-item')
        a.setAttribute('class', 'nav-link')
        a.innerText = item
        li.appendChild(a)
        ul.appendChild(li)
    })
    ul.classList.add('nav', 'd-flex', 'justify-content-center')
    headNav.appendChild(ul)
}

    //選擇產品規格
function selectProduct(product) {
    productType.innerText = product.name
    productImg.src = product.type[0].imgUrl
    productName.innerText = product.type[0].nameType
    currentPrice = product.type[0].price

    //機型
    const divItemType = document.createElement('div')
    divItemType.classList.add('accordion-item')
    const h2Type = document.createElement('h2')
    h2Type.classList.add('accordion-header')
    h2Type.setAttribute('id', `flush-headingType`)
    const btnHeadType = document.createElement('button')
    btnHeadType.classList.add('accordion-button', 'collapsed', 'type-area')
    btnHeadType.setAttribute('data-bs-toggle', 'collapse')
    btnHeadType.setAttribute('data-bs-target', '#flush-collapseType')
    btnHeadType.setAttribute('aria-expanded', 'false')
    btnHeadType.setAttribute('aria-controls', 'flush-collapseType')
    btnHeadType.innerText = '選擇機型'
    h2Type.append(btnHeadType)
    divItemType.append(h2Type)

    const divFlushColType = document.createElement('div')
    divFlushColType.setAttribute('id', `flush-collapseType`)
    divFlushColType.classList.add('accordion-collapse', 'collapse', 'show')
    divFlushColType.setAttribute('aria-labelledby', 'flush-headingType')
const divBtn = document.createElement('div')
        divBtn.classList.add('accordion-body', 'w-100')
    product.type.forEach(type => {
        const btn = document.createElement('button')
        btn.classList.add('btn', 'type-btn', 'w-100','mb-3')
        btn.onclick = function () {
            divFlushColType.querySelectorAll('.btn').forEach(b => b.setAttribute('selected', 'false'))
            btn.setAttribute('selected', 'true')
            const typeAreaBtn = document.querySelector('.type-area')
            productImg.src = type.imgUrl
            typeAreaBtn.innerText = type.nameType
            currentPrice = type.price
            setCurrentPrice()
            typeAreaBtn.click()
        }
        const pType = document.createElement('p')
        pType.classList.add('name-type')
        pType.innerText = type.nameType
        const pPrice = document.createElement('p')
        pPrice.classList.add('basic-price')
        pPrice.innerText = `NT$${type.price}`
        
        
        btn.append(pType, pPrice)
        divBtn.append(btn)
        divFlushColType.append(divBtn)
    })

    
    divItemType.append(divFlushColType)
    accordionFlush.append(divItemType)

    //顏色
    const divItemColor = document.createElement('div')
    divItemColor.classList.add('accordion-item')
    const h2Color = document.createElement('h2')
    h2Color.classList.add('accordion-header')
    h2Color.setAttribute('id', `flush-headingColor`)
    const btnHeadColor = document.createElement('button')
    btnHeadColor.classList.add('accordion-button', 'collapsed', 'color-area')
    btnHeadColor.setAttribute('data-bs-toggle', 'collapse')
    btnHeadColor.setAttribute('data-bs-target', '#flush-collapseColor')
    btnHeadColor.setAttribute('aria-expanded', 'false')
    btnHeadColor.setAttribute('aria-controls', 'flush-collapseColor')
    btnHeadColor.innerText = '選擇顏色'
    h2Color.append(btnHeadColor)
    divItemColor.append(h2Color)

    const divFlushColColor = document.createElement('div')
    divFlushColColor.setAttribute('id', `flush-collapseColor`)
    divFlushColColor.classList.add('accordion-collapse', 'collapse', 'show')
    divFlushColColor.setAttribute('aria-labelledby', 'flush-headingColor')
    const divColor = document.createElement('div')
    divColor.classList.add('accordion-body', 'd-flex', 'flex-wrap')

    product.color.forEach(color => {
        const btn = document.createElement('button')
        btn.classList.add('btn', 'option-btn')
        const divIcon = document.createElement('div')
        divIcon.classList.add('color-icon')
        divIcon.style.backgroundColor = `${color.colorHEX}`
        btn.onclick = function () {
            btn.setAttribute('selected', 'false')
            divIcon.querySelectorAll('.btn').forEach(b => b.setAttribute('selected', 'false'))
            btn.setAttribute('selected', 'true')
            const colorAreaBtn = document.querySelector('.color-area')
            productImg.src = color.imgUrl
            colorAreaBtn.innerText = color.nameColor
            colorAreaBtn.click()
        }
        const pColor = document.createElement('p')
        pColor.classList.add('.name-color', 'mb-0')
        pColor.innerText = color.nameColor
        const divGrid = document.createElement('div')
        divGrid.classList.add('col-6', 'mb-3','d-flex','justify-content-center')

        btn.append(divIcon, pColor)
        divGrid.append(btn)
        divColor.append(divGrid)
        divFlushColColor.append(divColor)
    })
    divItemColor.append(divFlushColColor)
    accordionFlush.append(divItemColor)


    //規格
    product.spec.forEach((item, index) => {
        //nameSpec
        //detail->nameDetail,add

        const divItem = document.createElement('div')
        divItem.classList.add('accordion-item')
        const h2 = document.createElement('h2')
        h2.classList.add('accordion-header')
        //set Id
        h2.setAttribute('id', `flush-heading${item.nameSpec}`)

        const specNameBtn = document.createElement('button')
        specNameBtn.classList.add(`spec-${item.nameSpec}`, 'name-spec', 'accordion-button', 'collapsed')
        specNameBtn.setAttribute('data-bs-toggle', 'collapse')
        specNameBtn.setAttribute('data-bs-target', `#flush-collapse${item.nameSpec}`)
        specNameBtn.setAttribute('aria-expanded', 'false')
        specNameBtn.setAttribute('aria-controls', `flush-collapse${item.nameSpec}`)
        specNameBtn.innerText = item.nameSpec
        h2.append(specNameBtn)

        divItem.append(h2)
        //塞完h2 塞flush-collapseTwo

        const divFlushCol = document.createElement('div')
        divFlushCol.setAttribute('id', `flush-collapse${item.nameSpec}`)
        divFlushCol.classList.add('accordion-collapse', 'collapse', 'show')
        divFlushCol.setAttribute('aria-labelledby', `flush-heading${item.nameSpec}`)
        // divFlushCol.setAttribute('data-bs-parent', '#accordionFlushExample')
        const divAccorBody = document.createElement('div')
        divAccorBody.classList.add('accordion-body', 'd-flex', 'spec-detail-contain', 'flex-wrap')


        item.detail.forEach((detail, index) => {

            const divGrid = document.createElement('div')
            divGrid.classList.add('col-6', 'mb-3','d-flex')
            const btn = document.createElement('button')
            btn.classList.add(`spec-${item.nameSpec}`, 'btn', 'option-btn','mx-auto')
            btn.setAttribute('add', detail.add)

            btn.onclick = function () {
                btn.setAttribute('selected', 'false')
                divAccorBody.querySelectorAll('.btn').forEach(b => b.setAttribute('selected', 'false'))
                btn.setAttribute('selected', 'true')
                let titleAreaBtn = document.querySelector(`.spec-${item.nameSpec}`)
                titleAreaBtn.innerText = item.detail[index].nameDetail
                setCurrentPrice()
                titleAreaBtn.click()
            }
            const strongDetail = document.createElement('strong')
            strongDetail.innerText = detail.nameDetail
            btn.append(strongDetail)

            const pDetail = document.createElement('p')
            pDetail.classList.add('.name-detail', 'mb-0')
            if (detail.add != 0) {
                pDetail.innerText = `+NT$${detail.add}`
                btn.append(pDetail)
            }
            divGrid.append(btn)
            divAccorBody.append(divGrid)
        })
        divFlushCol.append(divAccorBody)
        divItem.append(h2, divFlushCol)

        //塞到 最外層accordionFlush裡
        accordionFlush.append(divItem)
    })


}
function getBonusPriceSum() {
    let seletedAdds = Array.from(document.querySelectorAll('[add][selected="true"]'))
    let sum = seletedAdds.length > 0 ? seletedAdds.map(x => parseInt(x.getAttributeNode('add').value)).reduce((a, b) => a + b) : 0
    return sum
}
//加千分位func
function toCurrency(num) {
    var parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}
