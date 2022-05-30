
import styles from "./styles/LoginForm.module.css";
import Header from "./Layouts/Header";
const RegisterForm = () => {
     return(  
  
     <div>
     
        <head>
        <title>로그인 / 회원가입</title>
    </head>
    <div className={styles.wrap}>
            <div className={styles.formwrap}>
                <div className={styles.buttonwrap}>
                    <div id="btn"></div>
                    <button type="button" className={styles.togglebtn} onClick="Register">Register</button>
                  
                </div>
                <div className={styles.socialicons}>
                    <img src="https://github.com/mdab4793/petwalk/blob/main/fb.png?raw=true" alt="facebook"/>
                    <img src="https://github.com/mdab4793/petwalk/blob/main/tw.png?raw=true" alt="twitter"/>
                    <img src="https://github.com/mdab4793/petwalk/blob/main/gl.png?raw=true" alt="google"/>
                </div>
                <div className={styles.RegisterForm}>
                <form id="register" action="" className={styles.inputgroup}>
                    <input type="text" className={styles.inputfield} placeholder="User name or Email" required/>
                    <input type="email" className={styles.inputfield} placeholder="Your Email" required/>
                    <input type="password" className={styles.inputfield} placeholder="Enter Password" required/>
                    <input type="checkbox" className={styles.checkbox}/><span>Terms and conditions</span>
                    <button className={styles.submit}>REGISTER</button>
                </form>
                </div>
                </div>
        </div>
       
                
        <Header/>
                
         </div>  
                
    
          
      

    )
}

export default RegisterForm;