import React from 'react'
import { Link } from "react-router-dom"

const AddContact = () => {
  return (
    <>
      <section className='add-contact p-3'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='h4 text-success fw-bold'>Create Contact</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <form>
                <div className='mb-2'>
                  <input type="text" className='form-control' placeholder='Name' />
                </div>
                
                <div className='mb-2'>
                  <input type="number" className='form-control' placeholder='Mobile' />
                </div>
                
                <div className='mb-2'>
                  <input type="email" className='form-control' placeholder='Email' />
                  <div className='mb-2'>
                  <input type="text" className='form-control' placeholder='Gender' />
                </div>
                </div>
                <div className='mb-2'>
                  <input type="text" className='form-control' placeholder='Picture Url' />
                </div>
                <div className='mb-2'>
                  <input type="text" className='form-control' placeholder='isActive' />
                </div>
               
                <div className='mb-2'>
                  <input type="submit" className='btn btn-success' value="Create" />
                  <Link to={'/contacts/list'} className="btn btn-dark ms-2">Close</Link>
                </div>
              </form>
            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default AddContact