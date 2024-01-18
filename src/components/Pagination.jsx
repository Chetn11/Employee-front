import React from 'react'


function Pagination({page,setPage,totalPages}) {
  return<div>
    {
      Array.from({length:totalPages},(_,index)=>index+1).map(function(ele){
        return <button id='page_btn' key={ele} onClick={()=>{setPage(ele)}}>{ele}</button>
      })
    }
  </div>
}

export default Pagination
