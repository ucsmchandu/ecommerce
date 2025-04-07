import { createContext } from "react"
const WishlistContext= createContext({
    wishlist:[],
    setWishlist:()=>{}
});

export default WishlistContext