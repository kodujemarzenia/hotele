import styles from './hotel.module.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hotel(props){
    useEffect(() => {
        AOS.init({
          duration: 600, // Czas trwania animacji (w milisekundach)
          easing: 'ease-out', // Wygładzanie animacji
          once: false, // Czy animacja ma być wywołana tylko raz
        });
      }, []);

    return (<div className='row'>
        <div className='col-12'>
            <div className={`${styles.mrgbtm} row`} data-aos="fade-up">
                <div className={`${styles.hotelphoto} col-lg-4`}></div>
                <div className={`${styles.hotelopis} col-lg-8`}>
                    <h2 className={styles.h2name}>
                        {props.name},  {props.city}
                    </h2>
                    <h3>Ocena: {props.rating}</h3>
                    <p>
                        {props.description}
                    </p>
                    <a href="#" className='simple-button'>Zobacz więcej</a>
                </div>
            </div>
        </div>
    </div>);
}

export default Hotel;