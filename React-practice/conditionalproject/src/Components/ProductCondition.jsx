import React from 'react'
import Mensproduct from './Mensproduct'
import Womensproduct from './Womensproduct'

function ProductCondition({ catagory }) {
    const userText = catagory.toUpperCase();

    if (userText == "MEN") {
        return (
            <>
                <h1 className='text-bg-secondary p-2 m-0 text-center'>Mens Collection</h1>
                <div className='bg-secondary-subtle p-3 d-flex flex-wrap justify-content-center gap-3'>
                    <Mensproduct img="Menshirt1.webp" title="Levi's" Price="2000" text="Men's Slim Shirt" />
                    <Mensproduct img="Menshirt2.webp" title="Van Heusen" Price="1800" text="Men's Slim Fit Shirt" />
                    <Mensproduct img="Menshirt3.webp" title="UCB" Price="1500" text="Men's Slim Fit Shirt" />
                    <Mensproduct img="Menshirt4.webp" title="U.S. POLO ASSN." Price="1700" text="Men's Slim Shirt" />
                    <Mensproduct img="Menshirt5.webp" title="Van Heusen" Price="1900" text="Men's Regular Fit Shirt" />
                    <Mensproduct img="Menshirt6.webp" title="UCB" Price="2500" text="Men's Regular Fit Shirt" />
                    <Mensproduct img="Menshirt7.webp" title="UCB" Price="4000" text="Men's Slim Fit Shirt" />
                    <Mensproduct img="Menshirt8.jpg" title="U.S. POLO ASSN." Price="2200" text="Men's Slim Fit Shirt" />
                    <Mensproduct img="Menshirt9.jpg" title="Van Heusen" Price="2100" text="Men's Regular Fit Shirt" />
                    <Mensproduct img="Menshirt10.jpg" title="Van Heusen" Price="3500" text="Men's Slim Fit Shirt" />
                </div>
            </>

        )
    }
    else if (userText == "WOMEN") {
        return (
            <>
                <h1 className='bg-success text-white p-2 m-0 text-center'>Womens Collection</h1>
                <div className='bg-success-subtle p-3 d-flex flex-wrap justify-content-center gap-3'>
                    <Womensproduct img="women1.webp" title="Janasya" Price="2200" text="Women's Classic Fit Poly Cotton Formal Shirt" />
                    <Womensproduct img="women2.webp" title="VERO MODA" Price="2300" text="Women's Black Dobby Chiffon Solid Empire Top" />
                    <Womensproduct img="women3.webp" title="VERO MODA" Price="1200" text="Women's Regular Fit Graphic T-Shirt" />
                    <Womensproduct img="women4.webp" title="Levi's" Price="1510" text="Womens Floral Linen Blend Collared Neck Regular Fit Shirt" />
                    <Womensproduct img="women5.webp" title="Van Heusen" Price="3000" text="Women's Regular Fit Brand Logo T-Shirt" />
                    <Womensproduct img="women6.webp" title="FabAlley" Price="3000" text="Women's Regular Fit Graphic T-Shirt" />
                    <Womensproduct img="women7.webp" title="ONLY" Price="1200" text="Women's Classic Fit Poly Cotton Formal Shirt" />
                    <Womensproduct img="women8.webp" title="Bewakoof" Price="1400" text="Women's Cotton Regular Fit T-Shirt" />
                    <Womensproduct img="women9.webp" title="Allen Solly" Price="1000" text="Women's Classic Fit Poly Cotton Formal Shirt" />
                    <Womensproduct img="women10.webp" title="Levi's" Price="2000" text="Women's Cotton Regular Fit T-Shirt" />
                </div>
            </>
        )
    } else {
        return (
            <>
                <h1 className='text-center'>Invalid Input</h1>
            </>
        )
    }
}

export default ProductCondition