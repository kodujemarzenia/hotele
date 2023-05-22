import React from 'react';
import styles from  './header.module.css';

function Header(){
    return (<header className={styles.header}>
        <div className={styles.overlay}></div>
        <div className={`${styles.upper} container`}>
            <div className='row'>
                <h4 className={styles.h4}>
                    Nie trać czasu...
                </h4>
                <h1 className={styles['h1-main']}>
                    Wyszukaj swój ulubiony hotel!
                </h1>
            </div>
            <div className='row justify-content-center'>
                <div className='col-10  center-it'>
                    <form className={styles.form}>
                        <input className={styles.input} type="text" placeholder="Wyszukaj miejsce marzeń..." />
                        <button type="submit">SZUKAJ</button>
                    </form>
                </div>
            </div>
        </div>
    </header>);
}

export default Header;