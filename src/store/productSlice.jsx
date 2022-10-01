const {createSlice } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
    IDLE: "idle",
    LOADING: "loading",
    ERROR: "error",
});
const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE,

    },

    reducers: {
        setProducts (state, action) {
            state.data = action.payload
        },
        setStatus (state, action) {
            state.status = action.payload
        }

    },
});

export const {setProducts,setStatus} =productSlice.actions;
export default productSlice.reducer;

//Thunks

export function fetchProduct (){
    return async function fetchProductThunk(dispatch, getState){
        dispatch(setStatus(STATUSES.LOADING));
        try{
            const response = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await response.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));
        }catch(error){
            dispatch(setStatus(STATUSES.ERROR));
            console.log(error);
        }
    }
}
