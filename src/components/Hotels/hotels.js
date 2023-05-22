import React from 'react';
import Hotel from './Hotel/hotel.js';
import styles from './hotels.module.css';

function Hotels(){
    return (<section>
        <div className='container'>
            {/* <div className='row'>
                <div className='col-12'>
                    <h2>Lista wszystkich hoteli:</h2>
                    <hr className={styles.line}></hr>
                </div>
            </div> */}
            <Hotel />
            <Hotel />
            <Hotel />
        </div>
    </section>);
}

export default Hotels;