import axios from 'axios';
import { useEffect, useState } from 'react';
import OrderList from './components/OrderList';
import OrderForm from './components/OrderForm';
import './css/App.css';

const App = () => {

  const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'

  const [order, setOrder] = useState({});

  useEffect(() => {
    axios
      .get(`https://eshop-deve.herokuapp.com/api/v2/orders`, {
        headers: {
          authorization: token
        }
      })
      .then(response => setOrder(response.data))
  }, []);

  const addOrder = (order) => {
    axios
      .post(`https://eshop-deve.herokuapp.com/api/v2/orders`, order, {
        headers: {
          authorization: token
        }
      })
  }

  return (
    <div className="app">
      <OrderForm addOrder={addOrder} />
      <OrderList order={order} />
    </div>
  );
}

export default App;
