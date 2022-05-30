import styles from "../styles/MapImg.module.css";
import { Link } from "react-router-dom";

const MapImg = ()=> {
    return(
      <div>

<section className={styles.mainsection}>
    <div className={styles.maincontent}>
        <div className={styles.mainimg}>
        <img className={styles.mainmapimg} src="https://github.com/mdab4793/petwalk/blob/main/%E1%84%8C%E1%85%B5%E1%84%83%E1%85%A9%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%B7.png?raw=true"/>
        </div>
    <div>
        <h1 className={styles.maintitle}>몇번의 클릭으로 거리와 시간까지</h1>
        <p className={styles.ptext}>최애 산책로를 추천해주세요.</p>
          
        <div className={styles.btns}>
            <a className={styles.btnone}><Link to>우리동네 추천 경로</Link></a>
            <a className={styles.btntwo}><Link to>내 추천 경로</Link></a>
                
        </div>
    </div>
    </div>
</section>

      </div>
    );
}

export default MapImg;