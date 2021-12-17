import styles from '../../styles/Main.module.css'
import LeftSideMenu from "./LeftSideMenu";
import RightSideContent from "./RightSideContent";
import {useEffect, useState} from "react";


const like = {
    like : false
};

function MainContainer( {users, setUsers, length}) {
    const [ view, setRightView ] = useState("");

    useEffect(()=> {
        console.log("view 선언부분",view);
        console.log("view like ",view.like);

        /* view.lie 값이 바뀔때 ( ex : false -> true, true->false ) 실행되어야함.*/
        if(view.like !== undefined){
            let tempUsers = Object.assign({},users);
            let index = 0;
            tempUsers.contents.map((user,i)=>{
                if(view.userName === user.userName){
                  index = i;
                }
            });

            if(tempUsers.contents[index].like !== view.like){
                tempUsers.contents[index].like = view.like !== false;
                let temp = Object.assign({},view);
                tempUsers.contents[index] = Object.assign({},temp);
                console.log("tempUsers.contents",tempUsers.contents);
                setUsers(tempUsers);
            }
        }
    }
    ,[view.like])


    console.log("dd",users.contents);

    if(users.contents.length !== 1 && users.contents[0].like === undefined){
        let tmp= users.contents;
        tmp.map( index => index.like = false );
        setRightView(tmp);
    }

    return(
        <>
            <div>
                <div className={styles.Container}>
                    <LeftSideMenu users={users} setUsers={setUsers} view={view}  setRightView={setRightView} />
                    <RightSideContent users={users} setUsers={setUsers} view={view} setRightView={setRightView} />
                </div>
            </div>
        </>

    )
}

export default MainContainer;