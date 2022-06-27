/**
 * This component is used wrap other elements with common CSS so we can maintain said CSS in one place, rather than multiple. It's called Card because it happens to have the characteristics of a CSS card. 
 */

import "./Card.css";

function Card(props) {

    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
    // {props.children} lets us return the div with all of the Card instance's children inside, meaning all the elements inside the code with <Card> is being called. This is how Card is just a "wrapper." It simplys adds a div containing all the other code along with some new CSS to manipulate that code, whatever it is

}

export default Card;