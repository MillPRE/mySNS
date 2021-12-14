import styles from '../../../styles/Main.module.css'
import LeftSideMenu from "./LeftSideMenu";
import RightSideContent from "./RightSideContent";
import {useEffect, useState} from "react";


function MainContainer( {contents, length}) {

    const [ view, setRightView ] = useState("");

    return(
        <>
            <div>
                <div className={styles.Container}>
                    <LeftSideMenu contents={contents} view={view} setRightView={setRightView} />
                    <RightSideContent contents={contents} view={view} setRightView={setRightView} />
                </div>
            </div>
        </>

    )
}

export default MainContainer;