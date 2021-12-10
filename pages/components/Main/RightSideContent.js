import React, {useState} from 'react';
import styles from '../../../styles/Main.module.css'
import ViewRight from './ViewRight'

function RightSideContent({contents, view, setViewContent}){

    return(
        <div className={styles.rightSideContainer}>
            <ViewRight view={view}/>
        </div>
    )
}

export default RightSideContent;