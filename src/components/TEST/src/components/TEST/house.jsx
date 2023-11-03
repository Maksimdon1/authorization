import React from 'react'
import '../../style/house.css'
import { HouseButton } from 'src/requests/house.js'

export default function House() {
  function btn(el){
      console.log((el.target.id),(el.target.checked))
      HouseButton(el.target.id, el.target.checked)
  }
  return (
    <>
    <div className="house">
    
          <div className="item">
            <div className="title">комната 1 дом кисы</div>
            <div className="button">



              <label class="switch">
                <input type="checkbox" defaultChecked={1} id='1' onClick={(el)=>{btn(el)}}/>
                <span class="slider round"></span>
              </label>




            </div>
          <div className="frequency">
            
        <label class="custom-select">
              
              <select   name="sample" onChange={(el)=>{console.log(1)}}>
                <option value="1">1 sec</option>
                <option value="10">10 sec</option>
                <option value="30">30 sec</option>
                <option value="60">one min</option>
                <option value="120">two min</option>
                <option value="300">five min</option>
              </select>
            </label>
        </div>
        </div>
        
    </div>
    </>
  )
}
