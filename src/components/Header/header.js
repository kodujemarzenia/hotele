import React, { useState } from 'react';
import styles from  './header.module.css';

function Header(){

    const [term, setTerm] = useState('');
    const search = () =>{
        console.log('szukaj', term);
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
    }
    const onKeyDownHandler = e =>{
        e.key === 'Enter' && search();
    }
    

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
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input onKeyDown={onKeyDownHandler} value={term} onChange={e => setTerm(e.target.value)} className={styles.input} type="text" placeholder="Wyszukaj miejsce marzeń..." />
                        <button onClick={search} type="submit" className={styles.submit}>SZUKAJ</button>
                    </form>
                </div>
            </div>
        </div>
    </header>);
}

export default Header;