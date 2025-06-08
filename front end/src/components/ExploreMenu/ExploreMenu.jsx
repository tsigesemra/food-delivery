import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">
        Ready to order? Browse the full menu and get your favorites delivered wherever you are on the resort.
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className={`explore-menu-list-item ${category===item.menu_name?"active":""}`}>
                    <img src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                 </div>
            )
          })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu