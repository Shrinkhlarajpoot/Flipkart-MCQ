
export const sortByPrice = (data,sort)=>{
    if(sort==="LOW_TO_HIGH"){
return [...data].sort((a,b)=>a.price-b.price)
    }
    if(sort==="HIGH_TO_LOW"){
     return [...data].sort((a,b)=>b.price-a.price)
    }
    return data;
}