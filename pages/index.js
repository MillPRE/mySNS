import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContainer from "./components/Main/MainContainer";


const defaultData = {
    title: 'defaultTitle',
    contents: [
        {
            userName: "",
            location: "",
            imageUrl: "",
            content: "",
            likeCount: 0
        }
    ],
};

const footerDefaultProps = {
    name: "Kitez",
    address: "아주대학교",
    email: "duswl339@ajou.ac.kr",
    github: "https://github.com/MillPRE",
};

export default function Home() {
  const [users, setUsers] = useState(defaultData);

    useEffect(() => {
        fetch('/files/response.json')
                .then(res => res.json())
                .then(res => setUsers(()=>res.data));
    },[]);
    /* 이후 user 값 변경하면 안됨.*/

    return (
      <div className={styles.Container}>
        <Head>
            <title>{users.title}</title>
        </Head>
          {/* Header */}
          <Header title={users.title}/>

          {/* Main */}
          <MainContainer contents={users} setContents={setUsers} length={users.contents.length}>
          </MainContainer>

          {/* footer */}
          <Footer footerInfo={footerDefaultProps}/>
      </div>
  );
}
