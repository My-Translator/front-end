import React from 'react';
import "./NavBar.css";
import { Button } from 'react-bootstrap';

export default function NavBar(props) {

   

    return (
        <div className='nav-bar'>
         
                <span>
                    <i className="fas fa-language"></i>
                </span>
                <span>
                    My Translations
                </span>

               
        </div>
    )
}
