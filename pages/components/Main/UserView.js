import styles from "../../../styles/Main.module.css";
import styled from 'styled-components';

const Title = styled.h1`
    font-size : 30px;
    border-bottom : 0.5px solid dimgray;
`;

const ViewHeader = styled.div`
  width : 100%;
  height : 15%;
  margin-top : 20px;
  
  display: flex;
  justify-content: center;
  align-items: center;

`;

const ViewContent = styled.div`
  width : 100%;
  height : 85%;

  margin-top : 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Content = styled.h5`
  font-size : 15px;
  margin : 5px;
`;

const UserImage = styled.img`
  padding : 10px;
  width : 20rem;
  height : 20rem;
  border : 3px solid lightblue;
  margin-bottom : 10px;
`;

const LikeCountTag = styled.h3`
  font-size : 18px;
  color : lightpink;
  text-align: center;
  margin-left : 10px;
`;

const LikeCountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-bottom : 30px;
  width : 100%;
  height : 5vh;
`;


/* like button */
const LikeButton = styled.button`
  margin : 10px;
  font-weight: 600;
  width : 60px;
  
`;

function onClickLikeButton({index, data, setRightView,like, setLike}){
    let temp = data;
    let tmp = like;

    console.log("onClickLikeButton index", index);
    console.log("\n");
    console.log("onClickLikeButton like", like);
    console.log("\n");
    console.log("onClickLikeButton tmp", tmp);
    console.log("\n");
    console.log("onClickLikeButton temp", temp);


    if(tmp[index] === false){
        temp.likeCount += 1;
        tmp[index] = true;
    }
    else{
        temp.likeCount -= 1;
        tmp[index] = false;
    }

    console.log("tmp", tmp);
    console.log("temp", temp);

    setRightView(temp);
    setLike(tmp);
}


function UserView({data, title, content, imageUrl, likeCount, location, index, like, setLike, setRightView}){
    return (
        <div className={styles.ViewContainer}>
            <ViewHeader>
                <Title>{title}</Title>
            </ViewHeader>

            <ViewContent>

                {/* Image */}
                <UserImage src={imageUrl} alt={"User Image"}/>

                {/* likeCount */}
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

                {/* Content */}
                <Content>
                    Content : {content}
                </Content>

                {/* location */}

                <Content>
                    Location : {location}
                </Content>
            </ViewContent>


        </div>
    )
}

export default UserView;