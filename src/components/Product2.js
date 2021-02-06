import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='vegetables'>Get Fresh Vegetables Everyday!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
    
          <ul className='cards__items'>
            <CardItem
              src='/images/Caro.png'
              price='@ Ksh.100 per Kg'
              text='Fresh Carrots available'
              label='Carrots'
              path='/vegetables'
            />
            <CardItem
              src='/images/tomato.jpeg'
              price='@ Ksh.150 per Kg'
              text='Fresh Tomatoes available'
              label='Tomatoes'
              path='/vegetables'
            />
            <CardItem
              src='/images/onion.jpg'
              price='@ Ksh.130 per Kg'
              text='Fresh Onions available'
              label='Onions'
              path='/vegetables'
            />
           <CardItem
              src='/images/Bell.jpg'
              price='@ Ksh.20 Each'
              text='Fresh Bell Pepper available'
              label='Bell Pepper'
              path='/vegetables'
            />
            <CardItem
              src='/images/Garli.jpg'
              price='@ Ksh.150 per Kg'
              text='Fresh Garlic available'
              label='Garlic'
              path='/vegetables'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='/images/Celery.jpg'
              price='@ Ksh.50 per Kg'
              text='Fresh Celery available'
              label='Celery'
              path='/vegetables'
            />
            <CardItem
              src='/images/Cauli.png'
              price='@ Ksh.80 per Kg'
              text='Fresh Cauliflower available'
              label='Cauliflower'
              path='/vegetables'
            />
            <CardItem
              src='/images/Oni.jpg'
              price='@ Ksh.100 per Kg'
              text='Fresh Green Onions available'
              label='Green Onions'
              path='/vegetables'
            />
            <CardItem
              src='/images/Bean.jpg'
              price='@ Ksh.300 per Kg'
              text='Fresh Green Beans available'
              label='Green Beans'
              path='/vegetables'
            />
            <CardItem
              src='/images/Pea.jpeg'
              price='@ Ksh.350 each'
              text='Fresh Peas available'
              label='Peas'
              path='/vegetables'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='./images/Veg.jpg'
              price='@ Ksh.500 per Basket'
              text='Fresh Vegetables available'
              label='Vegetables'
              path='/vegetables'
            />
            <CardItem
              src='/images/Veg1.jpg'
              price='@ Ksh.500 per Basket'
              text='Fresh Vegetables available'
              label='Vegetables'
              path='/vegetables'
            />
            <CardItem
              src='/images/Veg2.jpg'
              price='@ Ksh.500 per Basket'
              text='Fresh Vegatables available'
              label='Vegetables'
              path='/vegetables'
            />
            <CardItem
              src='/images/Veg3.jpg'
              price='@ Ksh.500 per Basket'
              text='Fresh Vegetables available'
              label='Vegetables'
              path='/vegetables'
            />
            <CardItem
              src='/images/Veg4.jpg'
              price='@ Ksh.500 per Basket'
              text='Fresh Vegetables available'
              label='Vegetables'
              path='/vegetables'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='/images/Cucu.jpg'
              price='@ Ksh.200 per Kg'
              text='Fresh Cucumber available'
              label='Cucumber'
              path='/vegetables'
            />
            <CardItem
              src='/images/Egg.jpg'
              price='@ Ksh.20 each'
              text='Fresh Eggplant available'
              label='Eggplant'
              path='/vegetables'
            />
            <CardItem
              src='/images/Pumpki.jpg'
              price='@ Ksh.150 Each'
              text='Fresh Pumpkin available'
              label='Pumpkin'
              path='/vegetables'
            />
            <CardItem
              src='/images/beetru.jpg'
              price='@ Ksh.130 per Kg'
              text='Fresh beetroots available'
              label='Beetroots'
              path='/vegetables'
            />
            <CardItem
              src='/images/Pote.jpg'
              price='@ Ksh.150 per Kg'
              text='Fresh tomatoes'
              label='Tomatoes'
              path='/vegetables'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src='/images/Lettu.jpg'
              price='@ Ksh.140 per Kg'
              text='Fresh Lettuce available'
              label='Lettuce'
              path='/vegetables'
            />
            <CardItem
              src='/images/broco.jpg'
              price='@ Ksh.40 each'
              text='Fresh Brocolli availabe'
              label='Brocolli'
              path='/vegetables'
            />
            <CardItem
              src='/images/cabbe.jpg'
              price='@ Ksh.50 Each'
              text='Fresh Cabbages available'
              label='Cabbage'
              path='/vegetables'
            />
            <CardItem
              src='/images/kales.jpg'
              price='@ Ksh.60 per Kg'
              text='Fresh Kales available'
              label='Kales'
              path='/vegetables'
            />
            <CardItem
              src='/images/spinach.jpg'
              price='@ Ksh.70 per Kg'
              text='Fresh Spinach available'
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