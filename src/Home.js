import { Link } from "react-router-dom";
import Header from "./Layouts/Header";
import Layout from "./Layouts/Layout";
import  styles from "./styles/Home.module.css"
import MapImg from "./components/MapImg";

const Home = () => {
    return(      
        <div>
        
       <Layout/>
       <section className={styles.container}>    
      <div className={styles.homemain}>
      <div className={styles.homesub}>
      <h1 className={styles.hometitle}>오늘은 어디로가볼까?<br/> 반려견과 예쁜길을 걷고싶을땐?</h1> 
      <p className={styles.ptext}>다른친구의 최애 <br/>산책로로 놀러가봐요!
        </p> 
       </div>    
          <div className={styles.mainimg}>
        <img className={styles.img}
         src= "https://github.com/mdab4793/petwalk/blob/main/1.jpeg?raw=true"/>
         </div>   
      </div>
        </section>

        <div>

            <MapImg/>
        </div>
       
        </div>
        
          
      
     
           

    );
}

export default Home;