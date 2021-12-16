import styles from '../../../styles/Main.module.css'

function handleCLick(user, view, setRightView, contents) {

    for (let i = 0; i < contents.length; i++) {

        if (user.userName === contents[i].userName) {
            setRightView(contents[i]);
            break;
        }
    }
}


function LeftSideMenu({contents, view, setRightView}) {


    const userListTag = contents.contents.map((user) => (
        <div className={styles.userListContainer}>
            <div
                className={styles.userList}
                onClick={()=>handleCLick(user, view, setRightView, contents.contents)}
            >
                {user.userName}
            </div>
        </div>
    ));

    return (
        <div className={styles.leftSideContainer}>
            {userListTag}
        </div>
    )
}

export default LeftSideMenu;