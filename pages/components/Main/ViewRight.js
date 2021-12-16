import UserView from "./UserView";

function ViewRight({view, contents, setRightView}){

        let imageUrl = view.imageUrl;

        if (imageUrl === "") {
            imageUrl = './defaultImage.jpg';
            let tmp = view;
            tmp.imageUrl = imageUrl;
            setRightView(tmp);

            return (
                <UserView view={view} setView={setRightView} />
            )
        }
        else {
            return (
                <UserView view={view} setView={setRightView} />
            )
        }
    

}

export default ViewRight;