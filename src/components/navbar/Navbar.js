import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <h3>Logo</h3>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="about">About</Link>
            </li>
            <li>
                <Link to="blog">Blog</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar