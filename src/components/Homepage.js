import React from 'react'
import {Link} from 'react-router-dom'


function Homepage() {
    return (
        <>
            
                <Link to = "/userlogin">
                <button >Book Tickets    </button>
                </Link>

                <Link to = "/adminlogin">
                <button>Administrator</button>
                </Link>
        </>
    )
}

export default Homepage
