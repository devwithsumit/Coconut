const filterDeepCategories = (categories, query) => {
    return categories.flatMap(category => (
        category.card.card.gridElements.infoWithStyle.restaurants &&
        category.card.card.gridElements.infoWithStyle.restaurants.
            filter(item => (
                item.info.name.toLowerCase().includes(query)
            ))
            // .map(item => item.info)
    ))
}

export const searchedRes = (categories, query) => {
    const filteredRestaurants = filterDeepCategories(categories, query.toLowerCase());
    // console.log(filteredRestaurants);
    return filteredRestaurants;
}