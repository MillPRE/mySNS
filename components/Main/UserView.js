import styles from "../../styles/Main.module.css";
import styled from 'styled-components';
import {useEffect} from "react";

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

function FalseView({view, setView}){
    return(
        <div className={styles.ViewContainer}>
            <ViewHeader>
                <Title>{view.title}</Title>
            </ViewHeader>

            <ViewContent>

                {/* Image */}
                <UserImage src={view.imageUrl} alt={"User Image"}/>

                {/* likeCount */}
                <LikeCountContainer>
                    <img src={'./img/emptyHeart.png'} alt={"heart image"} width={20} height={20}/>
                    <LikeCountTag>{view.likeCount}</LikeCountTag>
                    <LikeButton onClick={()=>onClickLikeButton(view,setView)} >like</LikeButton>
                </LikeCountContainer>

                {/* Content */}
                <Content>
                    Content : {view.content}
                </Content>

                {/* location */}

                <Content>
                    Location : {view.location}
                </Content>
            </ViewContent>
        </div>
    )
}

function onClickLikeButton(view,setView, users, setUsers) {
    let tempView = {...view};
    console.log(view);

    if( view.like === false ){
        //    like button ??????.
        tempView.like = true;
        let tmpCount = tempView.likeCount + 1;
        tempView["likeCount"] = tmpCount;
    }
    else{
        //    unlike button ??????
        tempView.like = false;
        let tmpCount = tempView.likeCount - 1;
        tempView["likeCount"] = tmpCount;
    }
    setView({...tempView});
    // state??? ?????????
}

function UserView({view, setView, users, setUsers}) {
    if (typeof view.like === "undefined") {
        return (
            <div className={styles.ViewContainer}>
                <h2>Welcome! <br/>Click Left menu items</h2>
            </div>
        )
    }
    return (
        <div className={styles.ViewContainer}>
            <ViewHeader>
                <Title>{view.title}</Title>
            </ViewHeader>

            <ViewContent>

                {/* Image */}
                <UserImage src={view.imageUrl} alt={"User Image"}/>

                {/* likeCount */}
                <LikeCountContainer>
                    {
                        view.like === false
                            ? <img src={'./img/emptyHeart.png'} alt={"heart image"} width={20} height={20}/>
                            : <img src={'./img/Heart.png'} alt={"heart image"} width={20} height={20}/>
                    }
                    <LikeCountTag>{view.likeCount}</LikeCountTag>
                    {
                        view.like === false
                        ? <LikeButton onClick={() => onClickLikeButton(view, setView, users, setUsers)}>like</LikeButton>
                        : <LikeButton onClick={() => onClickLikeButton(view, setView, users, setUsers)}>Unlike</LikeButton>

                    }
                </LikeCountContainer>

                {/* Content */}
                <Content>
                    Content : {view.content}
                </Content>

                {/* location */}

                <Content>
                    Location : {view.location}
                </Content>
            </ViewContent>
        </div>
    )
}

export default UserView;