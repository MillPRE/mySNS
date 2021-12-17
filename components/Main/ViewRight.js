import UserView from "./UserView";

function ViewRight({view, users, setUsers, setRightView}){

        let imageUrl = view.imageUrl;

        if (imageUrl === "") {
            imageUrl = './defaultImage.jpg';
            let tmp = view;
            tmp.imageUrl = imageUrl;
            setRightView(tmp);

            return (
                <UserView view={view} setView={setRightView} users={users} setUsers={setUsers} />
            )
        }
        else {
            return (
                <UserView view={view} setView={setRightView} users={users} setUsers={setUsers} />
            )
        }
    

}

export default ViewRight;