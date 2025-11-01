import React, { useContext, useEffect ,useState} from "react";
import { assets}  from '../frontend_assets/assets'; 
import { context } from "../context/ShopContext";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
const {search,setSearch,showSearch, setShowSearch  }=useContext(context)
const [visible,setVisible]=useState();

const location=useLocation();
useEffect(()=>{
console.log(location.pathname);
if(location.pathname.includes('collection')){
setVisible(true)

}

else{

  setVisible(false);
}

},[location])


return showSearch&&visible? (  



    <div className="flex justify-center items-center bg-gray-100 h-20">
      {/* Outer container for centering */}
      <div className="bg-white shadow-md rounded-2xl flex items-center px-4 h-12 w-96">
        {/* Search icon */}
     <img src={assets.search_icon}  className="size-7" alt="" />

        {/* Search input */}
        <input
        value={search}
        onChange={(e)=>{  e.preventDefault;   setSearch(e.target.value)}}
          type="text"
          placeholder="Search..."
          className="ml-3 flex-1 bg-transparent focus:outline-none h-full text-gray-700"
        />
      </div>
<div className="ml-4" >
<img  className="inline w-3 cursor-pointer" onClick={()=>{setShowSearch(prev => !prev)}}  src={assets.cross_icon} alt="" />

</div>


    </div>)  : " ";



  ;

 
};

export default SearchBar;
