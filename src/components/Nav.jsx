import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className='nav'>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/dashboard">
        <div>Dashboard</div>
      </Link>
      <Link to="/stocks/:symbol" >
        <div>Stock</div>
      </Link>
      <Link to="/about" >
        <div>About</div>
      </Link>
      
    </div>
  )
        
}
