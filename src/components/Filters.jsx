import React from 'react'

const Filters = ({filters,updateFilter},{currentFilterBy}) => {
    
  return (
    <div className="container restaurants">
    <h1>50 restaurants</h1>
    <div className="restaurant-options">
        {Object.entries(filters).map(([key,value])=>(
 <div key={key} className="restaurant-option" onClick={()=>updateFilter(key)}>
{value}
</div>
        ))}
       

        
    </div>
</div>
  )
}

export default Filters