import { motion, AnimatePresence } from "framer-motion";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import DishCard from "./DishCard";

const CategoryCard = ({ cartItems, category, isOpen, handleToggle }) => {
    return (
        <div className="category-section bg-white w-full">
            <div className='category-header cursor-pointer py-3 px-2 sm:px-3 sm:py-4 flex items-center justify-between'
                onClick={handleToggle}>
                <h1 className='font-bold sm:text-xl capitalize'>
                    {category?.card?.card?.title || "Category Title"}
                    <span className='opacity-90'>{` - (${category?.card?.card?.itemCards?.length || 0})`}</span>
                </h1>
                {!isOpen ? (
                    <MdArrowDropDown size={25} />
                ) : (
                    <MdArrowDropUp size={25} />
                )}
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="dishes"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0, transition: { duration: 0.1, ease: "easeInOut" } }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="dishes-card-list p-3 space-y-5 w-full overflow-hidden mt-5"
                    >
                        {
                            category?.card?.card?.itemCards.map((dishItem) => {
                                const currId = dishItem.card?.info?.id;
                                const currItem = cartItems.find((item) => item.id == currId);
                                return <DishCard key={currId} dishObj={dishItem.card?.info} quantity={currItem?.quantity || 0} />
                            })
                        }
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
export default CategoryCard