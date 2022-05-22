import React from 'react'
import Restaurant from './Restaurant'

const Restaurants = (props) => {
  return (
    <div className="container divider">
         <div className="cards">
     { props.restaurants.map((restaurants)=>(
       
<Restaurant key={restaurants.id} restaurant={restaurants}/>
      ))
      }

    
     
    </div>
</div>
  )
}

export default Restaurants