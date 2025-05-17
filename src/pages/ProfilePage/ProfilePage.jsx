import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from '../../components/Style.module.css'
import settingsIcon from '../../assets/images/settings.png'
import LogOutIcon from '../../assets/images/LogOut.png'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

const ProfilePage = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            setUsername(savedUsername);
        }
    }, []);

    const handleLogout = () => {
      localStorage.clear();
      navigate("/");
    };

    return (
        <div>
          <div className={styles.HeaderBack}>
            <Header />
          </div>
          <div className={styles.VerticalLine}></div>
          <div className={styles.gradientBack}>
            <div className={styles.ProfileHeader}>
              <h1>Personal account</h1>
              <div>
                <a href="/settings" title="Settings"><img src={settingsIcon} alt="" className={styles.ProfileIcons}/></a>
                <a href="" title="Log Out" onClick={handleLogout}><img src={LogOutIcon} alt="" /></a>
              </div>
            </div>
            <div>
              <div className={styles.PersonalInfo}>
                <h1>{username}</h1>
                <p></p>
              </div>
              
            </div>
            

          </div>
          <div className={styles.VerticalLine}></div>
          <div className={styles.footerBack}>
            <Footer />
          </div> 
        </div>
        
    );
};

export default ProfilePage;
