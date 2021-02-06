import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Product1() {
  return (
    <div className='cards'>
      <h1 className='fruits'>Get Fresh Fruits Everyday!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='/images/apple.jpeg'
              price='@ Ksh.40 Each'
              text='Fresh and sweet Apples'
              label='Apples'
              path='/fruits'
            />
            <CardItem
              src='/images/Bana.jpg'
              price='@ Ksh.5 Each'
              text='Fresh and sweet Banana'
              label='Banana'
              path='/fruits'
            />
            <CardItem
              src='/images/avoca.jpg'
              price='@ Ksh.50 Each'
              text='Fresh and sweet Avocado'
              label='Avocado'
              path='/fruits'
            />
           <CardItem
              src='/images/orange.jpg'
              price='@ Ksh.20 Each'
              text='Fresh and sweet Oranges'
              label='Orange'
              path='/fruits'
            />
            <CardItem
              src='/images/Pears.jpg'
              price='@ Ksh.30 Each'
              text='Fresh Pears available'
              label='Pears'
              path='/fruits'
            />
          </ul>

          <ul className='cards__items'>
          <CardItem
              src='/images/Mango.jpg'
              price='@ Ksh.15 Each'
              text='Fresh and sweet Mangoes'
              label='Mango'
              path='/fruits'
            />
            <CardItem
              src='/images/pawpaw.jpg'
              price='@ Ksh.60 Each'
              text='Fresh and sweet Pawpaw'
              label='Pawpaw'
              path='/fruits'
            />
            <CardItem
              src='/images/guava.jpg'
              price='@ Ksh.5 per Kg'
              text='Fresh and sweet Quavas'
              label='Guavas'
              path='/fruits'
            />
            <CardItem
              src='/images/melon.jpg'
              price='@ Ksh.300 Each'
              text='Fresh and sweet Melon'
              label='Water melon'
              path='/fruits'
            />
            <CardItem
              src='/images/pin.jpg'
              price='@ Ksh.150 Each'
              text='Fresh and sweet Pineapple'
              label='Pineapple'
              path='/fruits'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='./images/Bake.jpg'
              price='@ Ksh.500 per Basket'
              text='Fresh and juicy Fruits'
              label='Juicy'
              path='/fruits'
            />
            <CardItem
              src='/images/Bake1.jpg'
              price='@ Ksh.500 per Basket'
              text='Fresh and juicy Fruits'
              label='Juicy'
              path='/fruits'
            />
            <CardItem
              src='/images/Bake2.jpg'
              price='@ Ksh.500 per Basket'
              text='Fresh and juicy Fruits'
              label='Juicy'
              path='/fruits'
            />
            <CardItem
              src='/images/Bake3.jpg'
              price='@ Ksh.500 per Basket'
              text='Frsh and juicy Fruits'
              label='Jucy'
              path='/fruits'
            />
            <CardItem
              src='/images/Bake4.jpg'
              price='@ Ksh.500 per Basket'
              text='Fresh and sweet Fruits'
              label='Juicy'
              path='/fruits'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='/images/Pash.jpg'
              price='@ Ksh.5 Each'
              text='Fresh Passion available'
              label='Banana'
              path='/fruits'
            />
            <CardItem
              src='/images/Loqu.jpg'
              price='@ Ksh.70 per Kg'
              text='Fresh Loquats available'
              label='Loquats'
              path='/fruits'
            />
            <CardItem
              src='/images/Java.png'
              price='@ Ksh.150 per Kg'
              text='Fresh Java Plum available'
              label='Java Plum'
              path='/fruits'
            />
            <CardItem
              src='/images/Berry.jpg'
              price='@ Ksh.130 per Kg'
              text='Fresh Berries available'
              label='Berry'
              path='/fruits'
            />
            <CardItem
              src='/images/grape.jpg'
              price='@ Ksh.150 per Kg'
              text='Fruits and sweet Grapes'
              label='Grapes'
              path='/fruits'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='/images/Custa.jpg'
              price='@ Ksh.20 Each'
              text='Fresh Custard Apple available'
              label='Custard Apple'
              path='/fruits'
            />
            <CardItem
              src='/images/Kiwi.jpg'
              price='@ Ksh.15 Each'
              text='Fresh Kiwi fruit available'
              label='Kiwi'
              path='/fruits'
            />
            <CardItem
              src='/images/Coco.jpg'
              price='@ Ksh.50 Each'
              text='Fresh Coconut available'
              label='Coconut'
              path='/fruits'
            />
            <CardItem
              src='/images/Fig.jpg'
              price='@ Ksh.10 Each'
              text='Fresh Fig fruits available'
              label='Fig'
              path='/fruits'
            />
            <CardItem
              src='/images/Lemon.jpg'
              price='@ Ksh.10 Each'
              text='Fresh Lemon available'
              label='Lemon'
              path='/fruits'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product1;