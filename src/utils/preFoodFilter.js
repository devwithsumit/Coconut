const filterDeepCategoryItems = (categories, filterFn) => {
    return categories.map((category) => (
        {
            ...category,
            card: {
                ...category.card,
                card: {
                    ...category.card.card,
                    itemCards: category.card.card.itemCards.filter(itemCard => (
                        filterFn(itemCard.card.info)
                    ))
                }
            }
        }
    )).filter(category => category.card.card.itemCards.length > 0);
}

export const preFoodFilter = (categories) => {
    return {
        all: categories,
        veg: filterDeepCategoryItems(categories, (info) => info.isVeg),
        nonVeg: filterDeepCategoryItems(categories, (info) => !info.isVeg),
    }
}