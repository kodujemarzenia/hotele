import React from 'react';
import styles from './hotel.module.css';

function Hotel(){
    return (<div className='row'>
        <div className='col-12'>
            <div className={`${styles.mrgbtm} row`}>
                <div className={`${styles.hotelphoto} col-lg-4`}></div>
                <div className={`${styles.hotelopis} col-lg-8`}>
                    <h2 className={styles.h2name}>
                        Stars Hotel,  Warszawa
                    </h2>
                    <h3>Ocena: 4.8</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget metus at mauris pharetra sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam a dictum dolor.
                    </p>
                    <a href="#" className='simple-button'>Zobacz więcej</a>
                </div>
            </div>
        </div>
    </div>);
}

export default Hotel;