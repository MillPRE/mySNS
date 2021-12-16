import styles from '../../../styles/Main.module.css'
import LeftSideMenu from "./LeftSideMenu";
import RightSideContent from "./RightSideContent";
import {useEffect, useState} from "react";


const like = {
    like : false
};



function MainContainer( {contents, setContents, length}) {

    const [ view, setRightView ] = useState("");

    let tmp= contents.contents;
    tmp.map( index => index.like = false );

    useEffect(()=>{
        setRightView(tmp);
    },[tmp])

    return(
        <>
            <div>
                <div className={styles.Container}>
                    <LeftSideMenu contents={contents} view={view}  setRightView={setRightView} />
                    <RightSideContent contents={contents} view={view} setRightView={setRightView} />
                </div>
            </div>
        </>

    )
}

export default MainContainer;