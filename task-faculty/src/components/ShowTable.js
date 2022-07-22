import React, { useState } from 'react'
import "./ShowTable.css";
import { Link } from "react-router-dom"

// import Spinner from '../Spinner/Spinner'

const books = {
    Astronomy: [
        {
            name: "A Brief History of time",
            author: "Stephen Hawking",
            rating: "9:00 to 9:45 am"
        },
        {
            name: "Astrophysics for People in a Hurry",
            author: "Neil deGrasse Tyson",
            rating: "10:00 to 10:45 am"
        },
        {
            name: "Cosmos",
            author: "Carl Sagan",
            rating: "11:00 to 11:45 am"
        }
    ],
    Autobiography: [
        {
            name: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
            author: "Ashlee Vance",
            rating: "12:00 to 12:45 pm"
        },
        {
            name: "Wings of Fire",
            author: "Arun Tiwari",
            rating: "14:00 to 14:45 am"
        },
        {
            name: "Steve Jobs",
            author: "Walter Isaacson",
            rating: "15:00 to 15:45 am"
        }
    ],
    Finance: [
        {
            name: "The Psychology of money",
            author: "Morgan Housel",
            rating: "15:30 to 16:00 am"
        },
        {
            name: "The Intelligent Investor",
            author: "Benjamin Graham",
            rating: "12:00 to 12:30 pm"
        }, {
            name: "Your Money or Your Life",
            author: "Vicki Robin",
            rating: "9:00 to 10:00 am"
        }
    ],

    Programming: [
        { name: "Clean Code", author: "Robert C. Martin", rating: "10/10" },
        {
            name: "Cracking the Coding Interview",
            author: "Gayle Laakmann McDowell",
            rating: "10:00 to 11:00 am"
        },
        {
            name: "The Pragmatic Programmer",
            author: "Dave Thomas",
            rating: "14:00 to 14:45 pm"
        }
    ]
};

const ShowTable = () => {

    const [activeGenre, setGenre] = useState("Astronomy");
    const [loading, setLoading] = useState(false);

    function genreClickHandler(genre) {
        setTimeout(function () {
            setGenre(genre);
            setLoading(false);
        }, 2000);
        setLoading(true);
    }

    if (loading)
        return (
            // <div className="container">
            <div className="App" style={{ margin: "auto" }}>
                <h1>Today's Class</h1>
                {/* <p>My Favourite Books</p> */}

                <div>
                    {Object.keys(books).map((genre) => (
                        <button
                            className="genre-btn"
                            onClick={() => genreClickHandler(genre)}
                            style={{
                                padding: "0.5rem 1rem",
                                margin: "0 0.2rem",
                                border: "1px solid black",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
                <div className="loader"></div>
            </div>
            // </div>
        );


    return (
        <>
            <div className="App" style={{ margin: "auto" }}>
                <h1>Today's Class</h1>
                {/* <p>My Favourite Books</p> */}

                <div>
                    {Object.keys(books).map((genre) => (
                        <button
                            className="genre-btn"
                            onClick={() => genreClickHandler(genre)}
                            style={{
                                padding: "0.5rem 1rem",
                                margin: "0 0.2rem",
                                border: "1px solid black",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
                <div>
                    <ul>
                        {books[activeGenre].map((bookDetails) => (
                            <li
                                style={{
                                    listStyle: "none",
                                    border: "1px solid black",
                                    borderRadius: "10px",
                                    maxWidth: "500px",
                                    margin: "10px auto",
                                    padding: "10px"
                                }}
                            >
                                <div style={{ fontSize: "2rem" }}>{bookDetails.name}</div>
                                <div style={{ fontSize: "1rem" }}>by {bookDetails.author}</div>
                                <div style={{ fontSize: "0.8rem" }}>{bookDetails.rating}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p className='h3'> Go To Assign Task
                            <Link to={'/set-table'} className="btn btn-primary ms-2" >New Task <i className='fa fa-plus-circle'></i></Link>

                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ShowTable;





