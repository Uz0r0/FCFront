import { useEffect, useState } from "react";
import axios from "axios";
import styles from '../../components/Style.module.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

function SettingsPage() {
    const [music, setMusic] = useState("");
    const [musician, setMusician] = useState("");
    const [actor, setActor] = useState("");
    const [anime, setAnime] = useState("");
    const [film, setFilm] = useState("");
    const [meme, setMeme] = useState("");
    const [message, setMessage] = useState("");
    
    const Picks = async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem("access_token");
        console.log("Token:", token);

        if (!token) {
            setMessage("Not authenticated. Please log in.");
            return;
        }

        const res = await axios.post("http://localhost:8080/card/add",
            { music, musician, actor, anime, film, meme },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(res.data);
        setMessage("ok");
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        setMessage("no");
    }
};
        
    return (
      <>
        <div>
            <div className={styles.HeaderBack}>
                <Header />
            </div>
            <div className={styles.VerticalLine}></div>
            <div className={styles.Back}>
                <div>
                    <h1>Editing your profile</h1>
                    <a href={`/profile/${localStorage.getItem("username")}`}>Go to profile</a>
                </div>
                <div className={styles.PicksCard}>
                    <form onSubmit={Picks}>
                        <div>
                            <div className={styles.inputStyle}>
                                <input
                                onChange={(e) => setMusic(e.target.value)}
                                value={music}
                                type="text"
                                placeholder="Music"
                                className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyle}>
                                <input
                                onChange={(e) => setMusician(e.target.value)}
                                value={musician}
                                type="text"
                                placeholder="Musician"
                                className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyle}>
                                <input
                                onChange={(e) => setActor(e.target.value)}
                                value={actor}
                                type="text"
                                placeholder="Actor"
                                className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyle}>
                                <input
                                onChange={(e) => setAnime(e.target.value)}
                                value={anime}
                                type="text"
                                placeholder="Anime"
                                className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyle}>
                                <input
                                onChange={(e) => setFilm(e.target.value)}
                                value={film}
                                type="text"
                                placeholder="Film"
                                className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyle}>
                                <input
                                onChange={(e) => setMeme(e.target.value)}
                                value={meme}
                                type="text"
                                placeholder="Meme"
                                className={styles.inputField}
                                />
                            </div>
                        </div> 
                        {message && <p>{message}</p>}
                        <button type="submit">Save changes</button> 
                    </form>
                </div>
            </div>
            <div className={styles.VerticalLine}></div>
            <div className={styles.footerBack}>
                <Footer />
            </div> 
        </div>
      </>
    );
};
 
export default SettingsPage


