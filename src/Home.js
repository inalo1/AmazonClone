import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src="https:images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                <div className="home__row"> 
                    <Product
                        id="49538091"
                        title="World Travel: An Irreverent Guide Hardcover – Illustrated, April 20, 2021" 
                        price={24.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51NKOiMZz8L._SX329_BO1,204,203,200_.jpg"
                        rating={3}
                    />
                    <Product 
                        id="49538092"
                        title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal" 
                        price={39.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61IxWv3ecpL._AC_SL1000_.jpg"
                        rating={4}
                        />
                </div>
                <div className="home__row"> 
                    <Product 
                        id="49538093"
                        title="Wonder Woman 1984 (Blu-ray + DVD + Digital)" 
                        price={24.96} 
                        image="https://images-na.ssl-images-amazon.com/images/I/91Na6bD%2BDIL._SY445_.jpg"
                        rating={2}
                        />
                    <Product 
                        id="49538096"
                        title="Fearless (Taylor's Version) [2 CD]" 
                        price={17.59} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71sTuVRDUuL._SL1200_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="49538095"
                        title="All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal" 
                        price={49.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg"
                        rating={4}
                        />
                </div>
                <div className="home__row"> 
                 
                    <Product 
                        id="49538094"
                        title="Kealive Stand Mixer, Electric Food Mixer Kitchen with 5.5QT, 6+P-Speed, Tilt-Head Food Mixer with Dough Hook, Wire Whip & Beater, Stainless Steel Bowl, Upgraded Transparent Cover, Gold" 
                        price={109.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81tupScVKuL._AC_SL1500_.jpg"
                        rating={5}
                        />
                </div>
            </div> 
        </div>
    )
}

export default Home;
