import React, {useState} from 'react';
import styles from '../../../styles/Main.module.css'
import ViewRight from './ViewRight'

function RightSideContent({users,setUsers, view, setRightView}){
    return(
        <div className={styles.rightSideContainer}>
            <ViewRight view={view} users={users} setUsers={setUsers} setRightView={setRightView} />
        </div>
    )
}

export default RightSideContent;