import React from 'react'
import { Link } from "react-router-dom"
import "../../../App.css"

const EditContact = () => {
    return (
        <>
            <section className='add-contact p-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <p className='h4 text-primary fw-bold'>Edit Contact</p>
                        </div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-md-4'>
                            <form>
                                <div className='mb-2'>
                                    <input type="text" className='form-control' placeholder='Name' />
                                </div>
                                <div className='mb-2'>
                                    <input type="text" className='form-control' placeholder='Photo Url' />
                                </div>
                                <div className='mb-2'>
                                    <input type="number" className='form-control' placeholder='Mobile' />
                                </div>
                                <div className='mb-2'>
                                    <input type="email" className='form-control' placeholder='Email' />
                                </div>
                                <div className='mb-2'>
                                    <input type="text" className='form-control' placeholder='company' />
                                </div>
                                <div className='mb-2'>
                                    <input type="text" className='form-control' placeholder='Title' />
                                </div>
                                <div className='mb-2'>
                                    <select className='form-control'>
                                        <option value="">
                                            Select a Group
                                        </option>
                                    </select>

                                </div>
                                <div className='mb-2'>
                                    <input type="submit" className='btn btn-primary' value="Update" />
                                    <Link to={'/contacts/list'} className="btn btn-dark ms-2">Close</Link>
                                </div>
                            </form>
                        </div>
                        <div className='col-md-6'>
                            <img src='https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png' alt='img' className='contact-img' />
                        </div>
                    </div>


                </div>

            </section>
        </>
    )
}

export default EditContact