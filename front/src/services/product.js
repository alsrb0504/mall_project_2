class Product {

  constructor () {
    // 나중엔 서버에서 받아오는 걸로 구현.
    console.log('Create Product Class');
  }

  // 이미지 주소 나중에 서버 안의 주소로 수정.
  product_list = [
    {
      id: 1,
      name: '맛있는 사과',
      sub_title: '아침이슬을 머금은 사과',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, non magni atque odit inventore iure assumenda sequi! Amet, reprehenderit voluptate sunt similique illo voluptatum itaque quas. Sit, doloremque ab nobis, aliquam dignissimos repudiandae vero porro quisquam,',
      thumbnail: '/images/product01/pic01.jpg',
      price_info: {
        text: '5kg 당 16,900',
        unit: 3,
        price: 16900,
      },
      imgs: [
        '/images/product01/pic01.jpg',
        '/images/product01/pic02.jpg',
        '/images/product01/pic03.jpg',
        '/images/product01/pic04.jpg',
      ]
    },
    {
      id: 2,
      name: '달콤한 수박',
      sub_title: '농장에서 바로온 꿀수박',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, non magni atque odit inventore iure assumenda sequi! Amet, reprehenderit voluptate sunt similique illo voluptatum itaque quas. Sit, doloremque ab nobis, aliquam dignissimos repudiandae vero porro quisquam,',
      thumbnail: '/images/product02/pic01.jpg',
      price_info: {
        text: '6kg 당 20,900',
        unit: 3,
        price: 20900,
      },
      imgs: [
        '/images/product02/pic01.jpg',
        '/images/product02/pic02.jpg',
        '/images/product02/pic03.jpg',
        '/images/product02/pic04.jpg',
      ]
    },
    {
      id: 3,
      name: '신선한 포도',
      sub_title: '고당도 제철 프리미엄 포도',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, non magni atque odit inventore iure assumenda sequi! Amet, reprehenderit voluptate sunt similique illo voluptatum itaque quas. Sit, doloremque ab nobis, aliquam dignissimos repudiandae vero porro quisquam,',
      thumbnail: '/images/product03/pic01.jpg',
      price_info: {
        text: '3kg 당 24,500',
        unit: 3,
        price: 24500,
      },
      imgs: [
        '/images/product03/pic01.jpg',
        '/images/product03/pic02.jpg',
        '/images/product03/pic03.jpg',
        '/images/product03/pic04.jpg',
      ]
    },
    {
      id: 4,
      name: '유기농 바나나',
      sub_title: '국내산 무농약 제주바나나',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, non magni atque odit inventore iure assumenda sequi! Amet, reprehenderit voluptate sunt similique illo voluptatum itaque quas. Sit, doloremque ab nobis, aliquam dignissimos repudiandae vero porro quisquam,',
      thumbnail: '/images/product04/pic01.jpg',
      price_info: {
        text: '3kg 당 24,900',
        unit: 3,
        price: 24900,
      },
      imgs: [
        '/images/product04/pic01.jpg',
        '/images/product04/pic02.jpg',
        '/images/product04/pic03.jpg',
        '/images/product04/pic04.jpg',
      ]
    }
  ]

}

export default Product;