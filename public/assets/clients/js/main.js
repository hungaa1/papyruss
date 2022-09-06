const query = document.querySelector.bind(document);
const querys = document.querySelectorAll.bind(document);
const resultsCart = query('.helloCart')
console.log(resultsCart);
const checkBackground = false;
let dataP;
const productDetail = query(".productDetail");
const callback = (call, type = '') => {
  resultsCart.innerHTML = ''

  $.ajax({
    url: '/getProductAll',
    type: "GET",
    success: function (data) {
      $.ajax({
        url: '/getCart',
        type: "GET",
        success: function (data2) {
          if (data2.length > 0) {

            $('.cartsNumber').text(data2.length);
          } else {
            $('.cartsNumber').text(0);

          }
          hanldeCart(data, data2)
          function hanldeCart(data, data2) {
            data.map(one => {
              data2.map(two => {
                if (two.idProduct == one.id) {
                  const div = `
                    <div class="resultCart">
                      <div style="width: 100%;display: flex; align-items: unset;">
                        <div class="imageCart">
                          <img src="${ one.image }" alt="${ one.name }">
                        </div>
                        <div class="nameCart">
                            <p style="font-size: 18px">${ one.name } </p>
                            <p style="font-size: 14px" class="cartPrice"><sup style="color: #333">$</sup>${ two.sumPrice }</p>
                        </div>
                      </div>
                      <div class="deleteCart" data-index="${ two.idProduct }"><i class="fa-solid fa-circle-xmark" data-index="${ two.idProduct }"></i></div>
                      <div class="quantityCart" ><div class="backgroundI">-- ${ two.quantity } --</div></div>
                      <div class="backgroundI"></div>
                    </div>
                
                `
                  resultsCart.insertAdjacentHTML("beforeend", div)
                }
              })
            })
          }
          console.log($('.deleteCart'));

          $('.deleteCart').on('click', (e) => {
            console.log(e.target.dataset.index);
            if (e.target.dataset.index) {
              resultsCart.innerHTML = ''
              $.ajax({
                url: '/deleteCart',
                type: "DELETE",
                headers: {
                  'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                },
                data: {
                  id: e.target.dataset.index
                },
                success: function (data3) {
                  if (data3) {
                    callback()

                  }
                }
              })
            }

          })
        }
      })
      if (call) {
        if (type) {
          call(data, type)
        } else {
          call(data)
        }
        dataP = data
      }
    }
  })

}


const iamg = [
  {
    id: 1,
    name: 'Google',
    image: 'https://media.istockphoto.com/photos/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles-picture-id1136810581?k=20&m=1136810581&s=612x612&w=0&h=Jj80oUK2CtY9nwYYRfJXB31ydjhOo5igRolQn-lV8M0=',
    price: 155,
    sold: 10,
    type: 'BirthDay'
  }, {
    id: 2,

    name: 'bootrap',
    image: 'https://www.birthdaywishes.expert/wp-content/uploads/2015/01/anniversary-wishes-for-couple-social.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2',
    price: 45435,
    sold: 10,
    type: 'Anniversary'

  }, {
    id: 3,

    name: 'Reactjs',
    image: 'https://www.birthdaywishes.expert/wp-content/uploads/2015/01/anniversary-wishes-for-couple-social.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2',
    price: 6655,
    sold: 10,
    type: 'Newyear'

  },
  {
    id: 4,

    name: 'Nodejs',
    image: 'https://media.istockphoto.com/photos/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles-picture-id1136810581?k=20&m=1136810581&s=612x612&w=0&h=Jj80oUK2CtY9nwYYRfJXB31ydjhOo5igRolQn-lV8M0=',
    price: 755,
    sold: 10,
    type: 'Newyear'

  }, {
    id: 5,

    name: 'Nextjs',
    image: 'https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg',
    price: 7755,
    sold: 10,
    type: 'BirthDay'

  }
]
const body = query('#body');
ddd()
function ddd() {
  const div = ` 
                <div style="width: 100%" class="slide" id="home"></div>
                <div style="text-align: center; margin-bottom: 50px" id="product"><h3>List Products</h3></div>
                <div class="allResults" >
                </div>
         `
  body.insertAdjacentHTML('beforeend', div)
}
function detail(valProduct, productDetail) {
  const stars = [];
  for (let i = 1; i <= valProduct.star; i++) {
    stars.push('<i class="fa-regular fa-star"></i>')
  }
  console.log(stars.join(''));
  const divStar = ` <div class='star'>${ valProduct.star }.0<span>${ stars.join('') }</span></div>`
  const div = `<div class='image'><img id="src"
                    src=' ${ valProduct.image }'
                        alt='${ valProduct.name }'
                        /></div>
                        <div class='order'>
                          ${ valProduct.star ? divStar : '<p style="color: red">There are no reviews yet</p>' }
                          <p class='productName' >
                            ${ valProduct.name }
                          </p>
                        <div class='PP'>
                            <div class='currentPrice'>
                              <p>
                                <sup>$</sup>${ valProduct.currentPrice }
                              </p>
                            </div> 
                            <sup>
                              <div class='price'><p>
                                <sup>$</sup>${ valProduct.price }</p>
                              </div> 
                            </sup>
                          </div> 
                      <div class='saleProduct'>${ valProduct.sale }</div>
                      <div class='quantityBuy'><div class='btn-minus'><i class="fa-solid fa-minus"></i></div><div class='showQuantity'>1</div><div class='btn-add'><i class="fa-solid fa-plus"></i></div></div>
                      <div class="sumCurrentPrice">
                      <span>Sum Current Price:</span>
                        <sup>$</sup><span class="sumPrice"> ${ valProduct.currentPrice }</span>

                      </div>
                      <div class="requierBuy">
                          <button>Buy</button>
                      </div>
                    </div>
                    <div class="introducts">
                      <div class="components"><h3>Components</h3><p>${ valProduct.component }</p></div>
                      <div class="description"><h3>Description</h3><p>${ valProduct.description }</p></div>
                    </div>
                    
                   `;
  productDetail.insertAdjacentHTML("beforeend", div);
  $('.btn-minus').on('click', (e) => {
    if ($('.showQuantity').text() > 1) {
      $('.showQuantity').text($('.showQuantity').text() - 1);
      $('.sumPrice').html(`${ Number($('.sumPrice').text()) - Number(valProduct.currentPrice) }`)

    }
  })
  $('.btn-add').on('click', (e) => {
    $('.showQuantity').text(Number($('.showQuantity').text()) + 1);
    $('.sumPrice').html(`${ Number($('.sumPrice').text()) + Number(valProduct.currentPrice) }`)


  })
}
{/* <div class='allColor'> <div class='resultColor'></div>
</div> */}
addSlide()
callback(defaultHome)

callback
function defaultHome(data) {
  const resultsProducts = query('.allResults')
  let checkProduct = []

  if (data) {
    data.map((val) => {
      let checkProduct2 = []
      const t = data.map(valC => {
        if (valC.type == val.type) {
          console.log(valC.type, val.type);
          checkProduct2.push(`<img src="${ valC.image }" alt="${ valC.name }" data-index='${ valC.id }' data-index2='${ val.id }'/>`)
          return `<img src="${ valC.image }" alt="${ valC.name }" data-indexs='${ valC.id }' data-index2='${ val.id }'/>`
        }
      })
      console.log(checkProduct2);

      if (!checkProduct.includes(val.type)) {
        const divM = `
                  <div class="moreIcon" data-indexs='${ val.id }'> 
                    <div class='more' type= "${ val.type }" data-indexs='${ val.id }'>
                        ${ t.join('') }
                    </div>
                    <p data-indexs='${ val.id }'>more...</p>
                      <i data-indexs='${ val.id }' class="fa-solid fa-caret-down"></i>
                  </div>
        `
        let div = `
            <div class='padding'>
                        <div class='results' data-index='${ val.id }'type= "${ val.type }">
              ${ checkProduct2.length > 1 ? divM : '' }
                         <span class='hoverTitle'> ${ val.name } </span>
                          <div class='productAvatar' data-index='${ val.id }'type = "${ val.type }">
                            <img data-index='${ val.id }' src='${ val.image }'type = "${ val.type }"/>
                            </div>
                          <div class="productOverview" data-index='${ val.id }'type = "${ val.type }">
                            <div class="information" data-index='${ val.id }'type = "${ val.type }">
                              <div class='productName' data-index='${ val.id }'type = "${ val.type }">
                                 ${ val.name }         
                              </div>
                              <div class="PP">
                                <div class="currentPrice" data-index='${ val.id }' type = "${ val.type }">
                                  <sup>$</sup> ${ val.currentPrice }
                                </div>
                                <sup>
                                    <div class="price" data-index='${ val.id }' type = "${ val.type }" ><sup class="dolarCurrent">$</sup>${ val.price }</div>
                                </sup>
                              </div>
                            </div>
                              <div class='submitProduct'>

                                </div>
                                <div class="statuss">
                                  <div class="addCart" addCart='${ val.id }' >Add cart</div>
                                  <div class="buyProduct" data-index='${ val.id }'>Buy</div>
                                </div>
                              </div>
                          </div>
                        </div></div></div>`;
        resultsProducts.insertAdjacentHTML('beforeend', div)
        checkProduct.push(val.type)
        console.log(checkProduct);

      }

    })
  }
  const background = query(".background");
  const product = $('.results')
  // const image = $('.results .productAvatar img')
  // Array.from(image).map(im => {
  //   im.onmouseover = (e) => {
  //     $('body').css('background-image', `url("${ e.target.getAttribute('src') }")`)
  //     $('body').css('background-repeat', 'no-repeat');

  //   }
  // })

  product.on('click', (e) => {
    if (e.target.dataset.index) {
      console.log(e.target.dataset.index);
      $.ajax({
        url: '/getInformation',
        type: "GET",
        data: {
          id: e.target.dataset.index
        },
        success: function (data) {
          console.log(data);
          background.classList.toggle("show", !checkBackground);
          productDetail.classList.add("showDetails");
          detail(data, productDetail)
        }
      })


    }

  })
  background.onclick = function () {
    background.classList.remove("show");
    productDetail.classList.remove("showDetails");
    productDetail.innerHTML = "";
  };
  const viewMore = $('.moreIcon')
  const hover = $('.more img')

  Array.from(viewMore).map(mo => {
    mo.onmouseover = (e) => {
      console.log(e.target.dataset.indexs);
      const moreClass = query(`.more[data-indexs="${ e.target.dataset.indexs }"]`)
      moreClass.classList.toggle('more2');

      if (e.target.dataset.indexs) {
        Array.from(hover).map(elm => {
          elm.addEventListener('mouseover', hoverImag)
          function hoverImag(e2) {


            console.log(e2.target.dataset.indexs);
            if (e2.target.dataset.indexs && e2.target.dataset.indexs != e.target.dataset.indexs) {

              const image = query(`.productAvatar img[data-index="${ e.target.dataset.indexs }"]`)
              const moreIcon = query(`.moreIcon[data-indexs="${ e.target.dataset.indexs }"]`)
              const moreP = query(`.moreIcon p[data-indexs="${ e.target.dataset.indexs }"]`)
              const moreI = query(`.moreIcon i[data-indexs="${ e.target.dataset.indexs }"]`)
              const moreIconBar = query(`.more[data-indexs="${ e.target.dataset.indexs }"]`)
              const name = query(`.information .productName[data-index="${ e.target.dataset.indexs }"]`)
              const price = query(`.information .price[data-index="${ e.target.dataset.indexs }"]`)
              const currentPrice = query(`.information .currentPrice[data-index="${ e.target.dataset.indexs }"]`)
              dataP.map(valAt => {
                if (valAt.id == e2.target.dataset.indexs) {
                  if (moreP) {

                    moreP.setAttribute('data-indexs', valAt.id)
                  } if (moreI) {

                    moreI.setAttribute('data-indexs', valAt.id)
                  }
                  if (moreIconBar) {

                    moreIconBar.setAttribute('data-indexs', valAt.id)
                  }
                  if (moreIcon) {

                    moreIcon.setAttribute('data-indexs', valAt.id)
                  }
                  mo.setAttribute('data-index', valAt.id)
                  if (image) {

                    image.setAttribute('data-index', valAt.id)
                  }
                  if (name) {

                    name.setAttribute('data-index', valAt.id)
                    name.innerText = valAt.name

                  }
                  if (price) {

                    price.setAttribute('data-index', valAt.id)
                    price.innerHTML = `<sup>$</sup>${ valAt.price }`

                  }
                  if (currentPrice) {

                    currentPrice.setAttribute('data-index', valAt.id)
                    currentPrice.innerHTML = `<sup>$</sup>${ valAt.currentPrice }`

                  }

                }
              })
              if (image) {

                image.setAttribute('src', e2.target.getAttribute('src'))
              }

            }
          }
        })
      }

    }
    mo.onmouseout = (e) => {

      const moreClass = query(`.more[data-indexs="${ e.target.dataset.indexs }"]`)
      moreClass.classList.remove('more2');
    }
  })

  console.log($('.addCart'));
  function updataCart() {
    $.ajax({
      url: '/getCart',
      type: "GET",
      success: function (data) {
        console.log('ok2', data);
        $('.cartsNumber').text(data.length);
      }
    })
  }
  $('.addCart').on('click', (e) => {
    if (e.target.getAttribute('addCart')) {
      data.map(cart => {
        if (cart.id == e.target.getAttribute('addCart')) {

          $.ajax({
            url: '/checkCart',
            type: "GET",
            data: {
              id: e.target.getAttribute('addCart')
            },
            success: function (data2) {
              if (data2) {
                $.ajax({
                  url: '/updateCart',
                  type: "PATCH",
                  headers: {
                    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                  },
                  data: {
                    id: e.target.getAttribute('addCart'),
                    sumPrice: cart.currentPrice,
                    quantity: data2.quantity
                  },
                  success: function (data) {
                    console.log(data);
                    callback()
                  }
                })
              } else {
                $.ajax({
                  url: '/addCart',
                  type: "POST",
                  headers: {
                    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                  },
                  data: {
                    id: e.target.getAttribute('addCart'),
                    sumPrice: cart.currentPrice,
                    quantity: 1
                  },
                  success: function (data) {
                    updataCart()
                    callback()
                  }
                })
              }
            }
          })


        }

      })

    }



  })

}

function addSlide() {
  const slide = query('.slide')
  slide.innerHTML = ''
  const div = ` 

                      <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" alt="BirthDay">
          <img src="https://i.pinimg.com/564x/1f/55/f1/1f55f1126fb3d79d4e8fa0a53515e7ec.jpg" alt="BirthDay"/>
        </div>
        <div class="swiper-slide"  alt="Anniversary">
          <img src="https://www.desicomments.com/wp-content/uploads/2022/03/Funny-Anniversary-Wishes-for-Couples.jpg" alt="Anniversary"/>
        </div>
        <div class="swiper-slide" alt="Friendship">
          <img src="https://i2.wp.com/www.uniquenewsonline.com/wp-content/uploads/2021/06/2-9.png?resize=708%2C708&ssl=1" alt="Friendship"/>
        </div>
        <div class="swiper-slide" alt="NewYear">
          <img src="https://th-test-11.slatic.net/p/e5b20a6fadb879cd779b1fe193a514d5.jpg" alt="NewYear" / >
        </div>
        <div class="swiper-slide" alt="Mother'sDay">
          <img src="https://www.bestmessage.org/wp-content/uploads/2015/04/mothers-day-text-message.jpg"  alt="Mother'sDay"/>
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </div>
        <div class="swiper-slide">
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

                    
    `
  console.log(slide);
  slide.insertAdjacentHTML('beforeend', div)
  console.log('sd');
  new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    centeredSlidesBounds: true,
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    }, autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  const swiperSlide = $('.swiper-slide');
  Array.from(swiperSlide).map(elmSwiper => {
    console.log(elmSwiper);
    elmSwiper.onclick = (e) => {

      $.ajax({
        url: '/getProductType',
        type: "GET",
        data: {
          typeProduct: e.target.alt
        },
        success: function (data) {
          console.log(data);
          addProducts(data, e.target.alt)


        }
      })
    }
  })
}

function addProducts(data = [], typeProduct = 'all') {
  const resultsProducts = query('.allResults')
  if (resultsProducts) {
    resultsProducts.innerHTML = ''
  }

  console.log(typeProduct);

  if (typeProduct == 'all') {
    console.log('homes');
    callback(defaultHome)
    return
  }
  else if (data.length > 0) {
    data.map((val) => {
      if (val.type == typeProduct) {
        let div = `
            <div class='padding'>
                        <div class='results' data-index='${ val.id }' >
                        <div class='more'></div>
                        <span class="saleProductHome">${ val.sale } </span>
                         <span class='hoverTitle' > ${ val.name } </span>
                          <div class='productAvatar'  data-index='${ val.id }'>
                            <img data-index='${ val.id }' src='${ val.image }' />
                            </div>
                          <div class="productOverview" data-index='${ val.id }' >
                            <div class="information" data-index='${ val.id }' >
                              <div class='productName' data-index='${ val.id }' >
                                 ${ val.name }         
                              </div>
                              <div class="PP">
                                <div class="currentPrice" data-index='${ val.id }' type = "${ val.type }">
                                    <sup>$</sup> ${ val.currentPrice }
                                </div>
                                <sup>
                                  <div class="price" data-index='${ val.id }'>
                                    <sup>$</sup> ${ val.price }
                                  </div>
                                </sup>
                              </div>
                            </div>
                              <div class='submitProduct'>
    
                                </div>
                                <div class="statuss">
                                  <div class="addCart" >Add cart</div>
                                  <div class="buyProduct" data-index='${ val.id }'>Buy</div>
                                </div>

                              </div>

                          </div>
                        </div></div></div>`;
        resultsProducts.insertAdjacentHTML('beforeend', div)
      }


    })

  }
  else {
    resultsProducts.innerHTML = '<p style="color: red; font-size: 30px;">Hiện tại đã Hết Hàng</p>'
    return
  }


  const background = query(".background");
  const product = $('.results')

  product.on('click', (e) => {
    if (e.target.dataset.index) {
      console.log(e.target.dataset.index);
      $.ajax({
        url: '/getInformation',
        type: "GET",
        data: {
          id: e.target.dataset.index
        },
        success: function (data) {
          console.log(data);
          background.classList.toggle("show", !checkBackground);
          productDetail.classList.add("showDetails");
          detail(data, productDetail)
        }
      })


    }

  })
  background.onclick = function () {
    background.classList.remove("show");
    productDetail.classList.remove("showDetails");
    productDetail.innerHTML = "";
  };

  console.log($('.addCart'));

  $('.addCart').on('click', () => {
    console.log('ok');
  })



}


//detail  


const type = querys('.children a[type]')
Array.from(type).map(type => {
  type.onclick = (e) => {
    $('#body').text('')
    ddd()
    addSlide()
    $.ajax({
      url: '/getProductType',
      type: "GET",
      data: {
        typeProduct: e.target.type
      },
      success: function (data) {
        addProducts(data, e.target.type)


      }
    })

  }
})

$(document).ready(function () {
  $('.home').on('click', function () {
    $('#body').text('')
    ddd()
    addSlide()
    callback(defaultHome)


  })
  $('.top').on('click', function () {
    $('#body').text('')
    const div = '<div>Top</div>'
    body.insertAdjacentHTML('beforeend', div)
  })
  $('.sale').on('click', function () {
    $('#body').text('')
    const div = '<div>sale</div>'
    body.insertAdjacentHTML('beforeend', div)
  })
  $('.gift').on('click', function () {
    $('#body').text('')
    const div = '<div>gift</div>'
    body.insertAdjacentHTML('beforeend', div)
  })
  $('.contact').on('click', function () {
    $('#body').text('')
    const div = '<div>contact</div>'
    body.insertAdjacentHTML('beforeend', div)
  })
})
