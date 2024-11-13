import { toast } from "react-toastify";

const getStoredReadList = () =>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}   

const addToStoredReadList= (id)=>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id,'Id already exists');
    }
    else{
        storedList.push(id);
        const storedListstr = JSON.stringify(storedList);
        localStorage.setItem('read-list',storedListstr)

        toast('This book added to your add list')
    }
}
export { addToStoredReadList ,getStoredReadList};