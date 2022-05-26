import {Link} from "react-router-dom"
import styles from "../styles/Header.module.css"

function Header (){
    return(
        <header>
            <div className={styles.wrapper}>
        <h1><Link to="/Home">산책갈래?</Link></h1>
        <nav>
        <ul className={styles.menu}>
           <li ><Link to="Routes">내 산책로</Link></li>
           <li ><Link to="Routes">추천 산책로</Link></li>
           <li><Link to="MyPage">마이페이지</Link></li>
           <li><Link to="Login">Login</Link></li>
           <li><Link to="Join">Join</Link></li>
        </ul>
        </nav>  
        </div>
        </header>
    );
}

export default Header;