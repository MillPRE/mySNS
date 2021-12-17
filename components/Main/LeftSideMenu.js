import styles from '../../styles/Main.module.css'

function handleCLick(user, view, setRightView, contents) {

    for (let i = 0; i < contents.length; i++) {

        if (user.userName === contents[i].userName) {
            setRightView(contents[i]);
            break;
        }
    }
}


function LeftSideMenu({users,setUsers, view, setRightView}) {


    const userListTag = users.contents.map((user) => (
        <div className={styles.userListContainer}>
            <div
                className={styles.userList}
                onClick={()=>handleCLick(user, view, setRightView, users.contents)}
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