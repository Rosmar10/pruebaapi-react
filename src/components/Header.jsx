import React from "react";

const Header = ({imagen}) => {
return(
    <header className="">
        <div className="header">
         <img className="img1" src={imagen} alt='imagen principal' />
        </div>
    </header>
)
}
export default Header;