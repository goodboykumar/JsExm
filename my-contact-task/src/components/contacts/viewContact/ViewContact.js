import React from 'react'
import { Link } from "react-router-dom"
import "../../../App.css"

const ViewContact = () => {
  return (
    <>
      <section className='view-contact-intro p-3'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='h3 text-warning'>View Contact</p>
            </div>
          </div>

        </div>

      </section>
      <section className='view-contact mt-3'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-4'>
              <img src='https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png' alt='img' className='contact-img' />

            </div>
            <div className='col-md-8'>
              <ul className='list-group'>
                <li className='list-group-item list-group-item-action'> Name: <span className='fw-bold'>Remo</span></li>
                <li className='list-group-item list-group-item-action'> Mob: <span className='fw-bold'>98745612</span></li>
                <li className='list-group-item list-group-item-action'> Email: <span className='fw-bold'>abc@gmail.com</span></li>
                <li className='list-group-item list-group-item-action'> Company: <span className='fw-bold'>abc@gmail.com</span></li>
                <li className='list-group-item list-group-item-action'> Title: <span className='fw-bold'>abc@gmail.com</span></li>
                <li className='list-group-item list-group-item-action'> Group: <span className='fw-bold'>abc@gmail.com</span></li>

              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default ViewContact