var initialState = [
    {
        id: 1,
        name: 'Iphone 7 plus',
        image: 'https://phuckhangmobile.com/image/iphone-7-plus-bac-900-19479j6.jpg',
        description: 'Sản phẩm do apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung galaxy S7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/74113/samsung-galaxy-s7-16-300x300.jpg',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 400,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Oppo F1S',
        image: 'https://cdn.tgdd.vn/Products/Images/42/81592/oppo-f1s-7-300x300.jpg',
        description: 'Sản phẩm do Oppo sản xuất',
        price: 450,
        inventory: 5,
        rating: 5
    },
];
const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];

    }
}
export default products;