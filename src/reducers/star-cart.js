const updateStarItems = (starItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...starItems.slice(0, idx),
            ...starItems.slice(idx + 1)
        ];
    }

    if (idx === -1) {
        return [
            ...starItems,
            item
        ];
    }

    return [
        ...starItems.slice(0, idx),
        item,
        ...starItems.slice(idx + 1)
    ];
};

const updateStarItem = (book, item = {}, quantity) => {

    const {
        code = book.code,
        count = 0,
        name = book.name,
        brand = book.brand,
        picture = book.picture,
        total = book.price,} = item;

    return {
        code,
        count: count + quantity,
        name,
        brand,
        picture,
        total
    };
};


const updateStar = (state, bookId, quantity) => {
    const { bookList: { books }, starCart: { starItems }} = state;

    const book = books.find(({code}) => code === bookId);
    const itemIndex = starItems.findIndex(({code}) => code === bookId);
    const item = starItems[itemIndex];
    const newItem = updateStarItem(book, item, quantity);
    return {
        starItems: updateStarItems(starItems, newItem, itemIndex)
    };
};



const updateStarCart = (state, action) => {
    if (state === undefined) {
        return {
            starItems: []
        }
    }


    switch (action.type) {
        case 'BOOK_ADDED_TO_STAR':
            return updateStar(state, action.payload, 1);
        case 'BOOK_REMOVED_FROM_STAR':
            const item = state.starCart.starItems.find(({code}) => code === action.payload);
            return updateStar(state, action.payload, -item.count);
        default:
            return state.starCart;
    }
};

export default updateStarCart;