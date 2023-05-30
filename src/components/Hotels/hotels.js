import React, { Component } from 'react';
import Hotel from './Hotel/hotel.js';
import styles from './hotels.module.css';

class Hotels extends Component{
    render(){
        return (<section>
            <div className='container'>
                {/* <div className='row'>
                    <div className='col-12'>
                        <h2>Lista wszystkich hoteli:</h2>
                        <hr className={styles.line}></hr>
                    </div>
                </div> */}
    
                {/* petla po hotelach */}
                {this.props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel}/>)}
            </div>
        </section>);
    }
}

export default Hotels;