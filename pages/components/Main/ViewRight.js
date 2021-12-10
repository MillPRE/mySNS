import styled from 'styled-components';
import styles from '../../../styles/Main.module.css'

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

const defaultView = (
    <div className={styles.ViewContainer}>
        <h2>Welcome! <br/>Click Left menu items</h2>
    </div>
)

const userView = ({title, content, imageUrl, likeCount, location}) => {

    return (
        <>
            <div className={styles.ViewContainer}>
                <ViewHeader>
                    <Title>{title}</Title>
                </ViewHeader>

                <ViewContent>

                    {/* Image */}
                    <UserImage src={imageUrl} alt={"User Image"}/>

                    {/* likeCount */}
                    <LikeCountContainer>
                        <img src={'./Heart.jpg'} alt={"heart image"} width={20} height={20}/>
                        <LikeCountTag>{likeCount}</LikeCountTag>
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
        </>
    )
}

function ViewRight({view}){

        /* user info */
    const title = view.userName;
    const content = view.content;
    let imageUrl = view.imageUrl;
    const likeCount = view.likeCount;
    const location = view.location;


    if(Object.keys(view).length===0){
        return(
            <div className={styles.rightSideContainer}>
                {defaultView}
            </div>
        )

    }else{
        if(imageUrl === ""){
            imageUrl = './defaultImage.jpg';

            return(
                userView({title, content, imageUrl, likeCount, location})
            )
        }
        else{
            return(
                userView({title, content, imageUrl, likeCount, location})
            )
        }
    }

}

export default ViewRight;