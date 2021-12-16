import styles from '../../../styles/Main.module.css'
import {useEffect, useState} from "react";
import UserView from "./UserView";


function DefaultView() {
    return (
      <div className={styles.ViewContainer}>
          <h2>Welcome! <br/>Click Left menu items</h2>
      </div>
    );
}

/*const UserView = ({data, title, content, imageUrl, likeCount, location, index, like, setLike, setRightView}) => {

    return (
                <div className={styles.ViewContainer}>
                    <ViewHeader>
                        <Title>{title}</Title>
                    </ViewHeader>

                    <ViewContent>

                        {/!* Image *!/}
                        <UserImage src={imageUrl} alt={"User Image"}/>

                        {/!* likeCount *!/}
                        <LikeCountContainer>
                            {
                                like[index] === false
                                ? <img src={'./img/emptyHeart.png'} alt={"heart image"} width={20} height={20}/>
                                : <img src={'./img/Heart.png'} alt={"heart image"} width={20} height={20}/>
                            }

                            <LikeCountTag>{likeCount}</LikeCountTag>
                            {
                                like[index] === false
                                ? <LikeButton onClick={()=>onClickLikeButton({index, data, setRightView,like, setLike})} >like</LikeButton> : <LikeButton onClick={onClickLikeButton} >unLike</LikeButton>
                            }
                        </LikeCountContainer>

                        {/!* Content *!/}
                        <Content>
                            Content : {content}
                        </Content>

                        {/!* location *!/}

                        <Content>
                            Location : {location}
                        </Content>
                    </ViewContent>


                </div>
        )
}*/

function ViewRight({ view, contents, setRightView }){

    let defaultArray = [];
    const [like, setLike] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        for (let i = 0 ; i < contents.contents.length ; i++) {
            if (view.userName === contents.contents[i].userName) {
                setIndex(i);
            }
        }
    },[view])

    useEffect(()=>{
        for (let i = 0 ; i < contents.contents.length ; i++) {
            defaultArray[i] = false;
        }
        setLike(() => defaultArray);
    },[contents.contents.length]);

    useEffect(() => {console.log(like)}, [like]);

    if (Object.keys(view).length === 0) {
        return (
            <div className={styles.rightSideContainer}>
                <DefaultView />
            </div>
        )
    }
    else {
        /* user info */
        const title = view.userName;
        const content = view.content;
        let imageUrl = view.imageUrl;
        const likeCount = view.likeCount;
        const location = view.location;

        if (imageUrl === "") {
            imageUrl = './defaultImage.jpg';
        }
        return (
          <UserView data={contents.contents[index]} title={title} content={content} imageUrl={imageUrl} likeCount={likeCount} index={index} like={like} setLike={setLike} setRightView={setRightView} />
        );
    }
}

export default ViewRight;