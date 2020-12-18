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
              src='Images/imageB.jpg'
              text='We have different types of fruits for you at a friendly price according to ones need '
              label='Fruits'
              path='/fruits'
            />
            <CardItem
              src='Images/imageC.jpg'
              text='Vegetables of different kinds at a very friendly price according to ones need'
              label='Vegetables'
              path='/vegetables'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Images/apple.jpeg'
              text='Fresh and sweet'
              label='Apples'
              path='/fruits'
            />
            <CardItem
              src='Images/avoca.jpg'
              text='Fresh and sweet'
              label='Avocado'
              path='/fruits'
            />
            <CardItem
              src='Images/grape.jpg'
              text='Fruits and vegetables'
              label='Grapes'
              path='/fruits'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='Images/pawpaw.jpg'
              text='Fresh and sweet pawpaw'
              label='Apples'
              path='/fruits'
            />
            <CardItem
              src='Images/guava.jpg'
              text='Fresh and sweet guavas'
              label='Guavas'
              path='/fruits'
            />
            <CardItem
              src='Images/melon.jpg'
              text='Fresh and sweet water melon'
              label='Water melon'
              path='/fruits'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='Images/imageD.jpg'
              text='Fresh fruveggies'
              label='Fruveggies'
              path='/all'
            />
            <CardItem
              src='Images/imageE.jpg'
              text='Fruits and vegetables at an affordable price'
              label='Fruveggies'
              path='/all'
            />
            <CardItem
              src='Images/imageF.jpg'
              text='Always fresh and sweet'
              label='Fruveggies'
              path='/all'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='Images/broco.jpg'
              text='Fresh and sweet Brocoli'
              label='Brocolli'
              path='/vegetables'
            />
            <CardItem
              src='Images/onion.jpg'
              text='Fresh onions available'
              label='Onions'
              path='/vegetables'
            />
            <CardItem
              src='images/tomato.jpeg'
              text='Fresh tomatoes'
              label='Tomatoes'
              path='/vegetables'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='Images/cucu.jpg'
              text='Fresh cucumbers available'
              label='Cucumber'
              path='/vegetables'
            />
            <CardItem
              src='Images/kales.jpg'
              text='Fresh kales available'
              label='Kales'
              path='/vegetables'
            />
            <CardItem
              src='images/spinach.jpg'
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