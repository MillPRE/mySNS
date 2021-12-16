import styles from '../../../styles/Main.module.css'
import LeftSideMenu from "./LeftSideMenu";
import RightSideContent from "./RightSideContent";
import { useState } from "react";


function MainContainer({ contents, length }) {
    const [ view, setRightView ] = useState("");

    return (
        <div className={styles.Container}>
            <LeftSideMenu contents={contents} view={view} setRightView={setRightView} />
            <RightSideContent contents={contents} view={view} setRightView={setRightView} />
        </div>
    );
}

export default MainContainer;