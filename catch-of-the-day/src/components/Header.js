import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
           <React.Fragment>
                <header className="top">
                   <h1>Catch
                       <span className="ofThe">
                           <span className="of">Of</span>
                           <span className="the">The</span>
                       </span>
                       Day</h1>

                    <h3 className="tagline">
                        <span className="fresh-daily">{props.tagline}</span>
                    </h3>
                </header>

           </React.Fragment>
);

Header.propTypes = {
    tagline: PropTypes.string.isRequired
};
// class Header extends React.Component{
//     render(){
//        return(
//            <React.Fragment>
//                 <header className="top">
//                    <h1>Catch
//                        <span className="ofThe">
//                            <span className="of">Of</span>
//                            <span className="the">The</span>
//                        </span>
//                        Day</h1>
//
//                     <h3 className="tagline">
//                         <span className="fresh-daily">{this.props.tagline}</span>
//                     </h3>
//                 </header>
//
//            </React.Fragment>
//        )
//     }
// }
export default Header;