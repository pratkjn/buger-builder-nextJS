import React from 'react';

import Link from 'next/link';
import classes from './NavigationItem.css';

const navigationItem = ( props ) => (
    <li className={classes.NavigationItem}>
        <Link href={props.link}><a>{props.children}</a></Link> 
    </li>
);

export default navigationItem;