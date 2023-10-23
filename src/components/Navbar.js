import React from "react";
import { Link } from "react-router-dom";
//shortcut rce
 const Navbar = () =>{
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" to="/general">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/business"> Business</Link> </li>
                 {/* We use link instead a tag because with use of 'a tag ' it reloads page and reloding a page is not a user experiance so thats why we use Link and we use to instead of href*/}
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment </Link> </li>
                <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>     
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>  
                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
              </ul>      
            </div>
          </div>
        </nav>
      </div>
    );
  }

export default Navbar; 
              
                
               
                 
                    
                 
               

              
                  
                    
                  
               

                
                  
                    
                  
                

                
                 
                   
                 
                

                
                 
                   

                
                  
                   
            
