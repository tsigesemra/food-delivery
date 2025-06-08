import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'
import QRScanner from '../../Context/QRScanner'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  const navigate = useNavigate()
  const [location, setLocation] = useState(null)

  const handleScanSuccess = (text) => {
    console.log("Scan successful:", text)
    setLocation(text)
  }

  return (
    <div className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Phone' />
        <input type="text" placeholder='Room number' />
        <input type="text" placeholder='Special Requests' />
        {/* <div className="multi-fields">
          <input type="text" placeholder='' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div> */}
        
        {/* QR Scanner Section */}
        <br />
        <div className='QR'><hr />Or<br />You Can Scan The QR Code Near You for Location</div>
        <div style={{ marginTop: '10px', border: '1px solid #ddd', padding: '8px', borderRadius: '8px' }}>
          <h3 style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>QR Scanner</h3>
          {!location ? (
            <QRScanner onScanSuccess={handleScanSuccess} />
          ) : (
            <div style={{ padding: '8px', background: '#e8f5e9', borderRadius: '4px', fontSize: '14px' }}>
              <p>Location Code: {location}</p>
            </div>
          )}
        </div>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
          </div>
          <button onClick={() => navigate('/')}>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder