
 const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
] 




  const App = () => {
    
const [tshirtsState, setTshirtsState] = React.useState(tshirts);
const handleQuantityChange = (index, value) => {
  setTshirtsState((prev) => {
    const newTshirts = [...prev];
    newTshirts[index].quantity = Number(value);
    return newTshirts;
  });
};


const handleBuy = (index) => {
  setTshirtsState((prev) => {
    const newTshirts = [...prev];
    const qty = newTshirts[index].quantity || 1;

    if (qty <= newTshirts[index].stock) {
      newTshirts[index].stock -= qty;
     
      newTshirts[index].quantity = newTshirts[index].stock > 0 ? 1 : 0;
    }
    return newTshirts;
  });
};

    

    return (
        <div>
            <h1>T-shirt Store</h1>
            <ul>
                {tshirtsState.map((tshirt, index) => (
                    <li key={index}>
                        <h3>{tshirt.title}</h3>
                        <img src={`./images/${tshirt.image}`} alt={tshirt.title} width='150'/>
                        <p>Price: ${tshirt.price.toFixed(2)}</p>
                        {tshirt.title} - ${tshirt.price.toFixed(2)}
                        <p>{tshirt.stock > 0
                          ? `Stock: ${tshirt.stock}` : 'Out of Stock'}</p>
                    
                     {tshirt.stock > 0 && (
                      <>
                      <select 
                      value={tshirt.quantity || 1}
                      onChange={(e) => { handleQuantityChange(index, e.target.value) }}
                      >
                      {[...Array(tshirt.stock).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                      
                      </select>
                      <button onClick={() => handleBuy(index)}>Buy</button>
                        
                      </>
                    )}
                    </li>
            ))}
            </ul>
                
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
