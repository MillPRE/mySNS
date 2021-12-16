import React, {useState} from 'react';
import styles from '../../../styles/Main.module.css'
import ViewRight from './ViewRight'

function RightSideContent({contents, view, setRightView}){
    return(
        <div className={styles.rightSideContainer}>
            <ViewRight view={view} contents={contents} setRightView={setRightView} />
        </div>
    )
}

export default RightSideContent;