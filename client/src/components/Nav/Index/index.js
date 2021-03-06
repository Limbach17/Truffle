import React from "react";
// import {Link} from "react-router-dom";
import "../../../map.css";
import "./style.css";

function Index (props) {    

    let linkRay = [];

    for (var i = 0; i < 26; i++) {
            linkRay.push(<a className="index-link" key={i} value={String.fromCharCode(i + 65)} 
            href={"/list/genus/" + String.fromCharCode(i + 65)}
            onClick={props.setSelection}>{String.fromCharCode(i + 65)}</a>);
    }

    return (
        <div id="selectors">
            {linkRay}
        </div>
    );
    }

export default Index;

// for (var i = 0; i < 26; i++) {
//     linkRay.push(<a className="index-link" key={i} value={String.fromCharCode(i + 65)} 
//         href={"/list/genus/" + String.fromCharCode(i + 97)}
//         onClick={props.setSelection}>{String.fromCharCode(i + 65)}</a>);
// }
// return (
//     <div id="selectors">
//         {linkRay}
//     </div>
// );



// linkRay.push(
//     <Link to={{
//         pathname: "/list/genus/" + String.fromCharCode(i + 97),
//         state: {
//             selection: String.fromCharCode(i + 65)
//         }
//     }}>{String.fromCharCode(i + 97)}</Link>
// ); 
// }