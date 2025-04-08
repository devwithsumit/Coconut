import ResCard, { PromotedResCard } from '../components/home/ResCard'

const SearchPanel = ({ searchList }) => {
    const EnhancedCard = PromotedResCard(ResCard);
    return (
        <div className='search-list w-full my-10 border-b min-h-[80vh]  border-black/10 pb-10'>
            <h1 className='header text-start my-1 py-2 font-bold text-xl md:text-2xl'>
                {"Searched Results"}
            </h1>
            <div className={`res-items-wrapper py-2 w-full flex justify-between gap-2 md:gap-5 flex-wrap`}>
                {
                    searchList?.map((restaurant, index) => (
                        restaurant &&   
                        <div key={restaurant.info?.id + index || restaurant?.id + index} className='res-card-wrapper flex-shrink-0 mt-3'>
                            {!restaurant?.info?.promoted ?
                                <ResCard resInfo={restaurant} /> :
                                <EnhancedCard resInfo={restaurant} />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchPanel
