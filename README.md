# Context API : In-built with react
- ### Creating our context 
    ```js
    const UserContext = createContext({
        // defaultValue
    })
    ```

- ### Using context
    ``` 
    const data = useContext(UserContext); 
    ```

- ### Providing diff. Context value to diff. components
    ```jsx
    <UserContext.Provider value={{newValue}} >
        //wrap the Component to which we want to provide context data
    </UserContext>
    ```
- ### Using and Modifying context value with the component
    ```jsx
    // Send setValue function along with it
    <UserContext.Provider value={{newValue ,setNewValue}}>
    </UserContext>
    ```

# Redux Toolkit
- ```
    Install @reduxjs/toolkit and react-redux
- ### Building Our Store
    ```js
    import cartReducer from './slices/cartSlice';
    const store = configureStore({
        reducer:{
            //access this after creating the slice and export default yourSlice.reducer
            cart: cartReducer
        }
    })
    ```
- ### Connect Our Store at the root of our app 
    ```jsx        
    <Provider store={store} >
        <App/>
    </Provider>
    ```
- ### Creating Slice (cartSlice)
    ```js
    const cartSlice = createSlice({
        sliceName,
        initialState:{
            cartItems: [],
        },
        reducers:{
            addItem: (state, action)=>{
                //your logic
                // state -> reference to initialState

                // action -> action you perform, 
                // if any data is sent while dispatching it can be accessed with action.payload (item-data here)
            }
        },
    })
    export const {addItem} = cartSlice.actions;
    export default cartSlice.reducer;
    ```
- ### Dispatch action 
    - #### dispatch is called from the component where we need perform any changes to the data of a slice in our store  
    ```js
    //In our menu page
    import {addItem} from './store/cartSlice';
    onClick(()=>dispatch(addItem('item-data')));
    ```

- ### Subscribing to the store using useSelector
    - #### Accessing the data and keeping it sync with the changes is called subscribing to the store
    ```js
    // In cart Page
    const {cartItems} = useSelector((state)=> state.cart.cartItems)
    // state -> store's state
    // cart -> cartSlice
    // cartItems -> data available cart slice
    ```
# RTK Memoization with createAsyncThunk
- ### createAsyncThunk is used to make any asynchronous task i.e fetching Api
 ```js
    export const loadData = createAsyncThunk('home/fetchData', async (id)=>{ 
        const data = fetchData(Api + id);
        return data;
    })
    //args ('id' in this e.g.) can be passed while dispatching loadData in your app 
    // dispatch(loadData('id'))
```
- ### In Slice code this reducers can be added to handle the status of loadData
    ```js
    extraReducers: (builder) => {
        builder
            .addCase(loadData.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(loadData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
    ```

# New Concept learned with new Bugs

- ```js 
    const handleClick = () => {
        setShowIndices(prev => {
            if(prev.includes(index)){
                return prev.filter(i => i != index);
            }else{
                return [...prev, index];
            }
            // This won't work Becoz React doesn't detect state changes when you mutate the same object/array in place,
            // so it won't trigger a re-render until some other change forces it.

            // getIdx != -1 ?
            //     prev.splice(getIdx, 1) :
            //     prev.push(index)
            // return prev;
        })
        console.log("ShowIndices:", showIndices + " CurrIndex: ", index);
    }
    ```
- ####   This creates bug in Strict Mode. Even though you're returning a new Set, you're still modifying the old Set     (prev) before cloning it
        ❌ Wrong Way
        setVisibleIndicesSet(prev => {
            if(prev.has(index)){
                prev.delete(index);
            }else{
                prev.add(index);
            }
            return new Set(prev);
        })
        ✅ Correct Way
        setVisibleIndicesSet(prev => {
            const newSet = new Set(prev);
            if(newSet.has(index)){
                newSet.delete(index);
            }else{
                newSet.add(index);
            }
            return newSet;
        })

# Some Cool Tailwind styles
- ### Background-blur classes ->
    ``` backdrop-blur-xs backdrop-opacity-95 ```
- ### Toggle button 
    ```html
    <label className="inline-flex items-center cursor-pointer">
        <input id='caterogy-filter' type="checkbox" value="" className="sr-only peer" defaultChecked />
        <div className="relative w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4  after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Green</span>
    </label>
    ```

# Testing - types
- Unit Testing
- Integration Testing
- End to End Testing - e2e test..

# Setup for testing using vitest
- ### 1. Install Vitest and related packages 
   ```
    npm install --save-dev vitest @vitest/ui jsdom @testing-library/react @testing-library/jest-dom
    ```
- ### 2. Update vite.config.js
    ```js 
    export default defineConfig({
    plugins: [react()],
        test: {
            environment: 'jsdom',
            globals: true, // if using global test functions like `describe`, `it`, etc.
            setupFiles: './src/setupTests.js', // optional
        },
    })
    ```
- ### 3. Create optional test setup file 
    // src/setupTests.js

    import '@testing-library/jest-dom';

- ### 4. Sample test case
    ```js 
    test('renders text', () => {
        render(<Example />);
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });
    ```


# Setup for testing
- Install React Testing Library (npm i -D @testing-library/react)
- Install jest (npm i -D jest)
- Install Babel dependencies (npm install --save-dev babel-jest @babel/core @babel/preset-env)
- Configure Babel
- Configure Parcel Config to disable default babel transpilation
- npm jest --init