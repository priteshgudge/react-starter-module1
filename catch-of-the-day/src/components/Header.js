import React from 'react';

class Header extends React.Component{
    render(){
       return(
           <React.Fragment>
                <header className="top">
                   <h1>Catch
                       <span className="ofThe">
                           <span className="of">Of</span>
                           <span className="the">The</span>
                       </span>
                       Day</h1>

                    <h3 className="tagline">
                        <span className="fresh-daily">Fresh Sea Food Market</span>
                    </h3>
                </header>

           </React.Fragment>
       )
    }
}
export default Header;