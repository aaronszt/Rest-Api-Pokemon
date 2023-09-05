import style from './Landing.module.css';
import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import audioPoke from '../../assets/audio_pokemon.mpeg';
import logo from '../../img_pokemon/logo.png'

const Landing = () => {
  useEffect(() => {
    const audio = new Audio(audioPoke);
    audio.play();

    return () => {
        audio.pause();
    };
}, []);
    return (
            <div className={style.meContainer}>
                <img src = {logo} alt="logo" className = {style.logo}/>
                <Link to = "/home">
                <button className = {style.button}>START</button>
                </Link>
            </div>
    );
}

export default Landing;