import {Link} from "react-router-dom"

export const Navbar = () =>{
    return (
        <div style={{ 
            display: 'flex',
            margin:'10px',
            
            justifyContent:"space-evenly"
        }}>
        
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
        </div>
    )
}