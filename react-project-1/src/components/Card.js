/**
 * This component is used wrap other elements with common CSS so we can maintain said CSS in one place, rather than multiple. It's called Card because it happens to have the characteristics of a CSS card. 
 */

import "./Card.css";

function Card(props) {

    const classes = 'card' + props.className;
    return <div className={classes}>{props.children}</div>;

}

export default Card;