import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our fresh Fruits and Vegetables everyday!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/imageB.jpg'
              text='We have different types of fruits for you at a friendly price according to your needs'
              label='Fruits'
              path='/fruits'
            />
            <CardItem
              src='/images/imageC.jpg'
              text='Vegetables of different kinds at a very friendly price according to your needs'
              label='Vegetables'
              path='/vegetables'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/apple.jpeg'
              price='@ Ksh.40 Each'
              text='Fresh and sweet'
              label='Apples'
              path='/fruits'
            />
            <CardItem
              src='/images/avoca.jpg'
              price='@ Ksh.50 Each'
              text='Fresh and sweet'
              label='Avocado'
              path='/fruits'
            />
            <CardItem
              src='/images/orange.jpg'
              price='@ Ksh.50 Each'
              text='Fresh and sweet'
              label='Orange'
              path='/fruits'
            />
            <CardItem
              src='/images/grape.jpg'
              price='@ Ksh.150 per Kg'
              text='Fruits and vegetables'
              label='Grapes'
              path='/fruits'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='/images/pawpaw.jpg'
              price='@ Ksh.80 Each'
              text='Fresh and sweet pawpaw'
              label='Pawpaw'
              path='/fruits'
            />
            <CardItem
              src='/images/guava.jpg'
              price='@ Ksh.5 Each'
              text='Fresh and sweet guavas'
              label='Guavas'
              path='/fruits'
            />
            <CardItem
              src='/images/pin.jpg'
              price='@ Ksh.150 Each'
              text='Fresh and sweet'
              label='Pineapple'
              path='/fruits'
            />
            <CardItem
              src='/images/melon.jpg'
              price='@ Ksh.350 Each'
              text='Fresh and sweet water melon'
              label='Water melon'
              path='/fruits'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='./images/fru.jpg'
              price='@ Ksh.500 per Basket'
              text='Fresh fruveggies'
              label='Fruveggies'
              path='/all'
            />
            <CardItem
              src='/images/img.jpg'
              price='@ Ksh.500 per Basket'
              text='Fresh and at an affordable '
              label='Fruveggies'
              path='/all'
            />
            <CardItem
              src='/images/frug.jpg'
              price='@ Ksh.500 per basket'
              text='Fresh and sweet'
              label='Fruveggies'
              path='/fruits'
            />
            <CardItem
              src='/images/frus.jpg'
              price='@ Ksh.500 per Basket'
              text='Always fresh and sweet'
              label='Fruveggies'
              path='/all'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='/images/broco.jpg'
              price='@ Ksh.200 per Kg'
              text='Fresh and sweet Brocoli'
              label='Brocolli'
              path='/vegetables'
            />
            <CardItem
              src='/images/onion.jpg'
              price='@ Ksh.120 per Kg'
              text='Fresh onions available'
              label='Onions'
              path='/vegetables'
            />
            <CardItem
              src='/images/avoca.jpg'
              price='@ Ksh.50 Each'
              text='Fresh beetroots'
              label='Beetroot'
              path='/fruits'
            />
            <CardItem
              src='/images/tomato.jpeg'
              price='@ Ksh.150 per Kg'
              text='Fresh tomatoes'
              label='Tomatoes'
              path='/vegetables'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='/images/cucu.jpg'
              price='@ Ksh.150 per Kg'
              text='Fresh cucumbers available'
              label='Cucumber'
              path='/vegetables'
            />
            <CardItem
              src='/images/kales.jpg'
              price='@ Ksh.50 per Kg'
              text='Fresh kales available'
              label='Kales'
              path='/vegetables'
            />
            <CardItem
              src='/images/cabbe.jpg'
              price='@ Ksh.50 Each'
              text='Fresh and sweet'
              label='Cabbages'
              path='/fruits'
            />
            <CardItem
              src='/images/spinach.jpg'
              price='@ Ksh.60 per Kg'
              text='Fresh spinach available'
              label='Spinach'
              path='/vegetables'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;