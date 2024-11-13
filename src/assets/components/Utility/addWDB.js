

const getWishList = ()=>{
    const getWishLIstStr = localStorage.getItem('wish-list');
    if(getWishLIstStr){
        const getStoredWishList= JSON.parse(getWishLIstStr);
        return getStoredWishList;
    }
    else{
        return [];
    }
}

const addToStoreWishList = (id)=>{
    const storedWishList = getWishList();
    if(storedWishList.includes(id)){
        console.log(id,'Id already exists');
    }
    else{
      storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list',storedWishListStr)
    }
}
export {addToStoreWishList};