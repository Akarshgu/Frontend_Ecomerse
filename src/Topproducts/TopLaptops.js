import React from 'react'
import "./Top.css"
import { useNavigate } from 'react-router-dom';
import Cardsdata from '../Navbar/CardsData';
const TopLaptops = () => {
  let store = useNavigate();
  const product = Cardsdata.filter((list) => list.category === "Laptop")
  return (
    <div>

      <h1 className='lap'>TopBrands/Laptops</h1>
      <div className='accsbox homebrands text-center'>
        {product.filter((value) => value.price >= 60000).map((items) => {
          return (
            <div className='homebrand d-flex text-center'>
              <div className='accscard' onClick={() => store(`/Laptop`)}>
                <img className='accsimage' src={items.imageurl} alt="" style={{ width: "200px", textAlign: "center" }} />
                <h5 className="card-title">{items.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{items.category}</h6>
                <p>Rs.{items.price}</p>

              </div>
            </div>

          )

        })}

      </div>
    </div>
  )
}

export default TopLaptops
