import './computer.css';
import { useCart } from './CartContext';

function Game(props){
    const { addToCart } = useCart();

    return(
        <div>
      {props.gameProduct &&
        Object.entries(props.gameProduct).map(([category, items]) => (
          <div key={category}>
            <h2 className="category-title">{category}</h2>
            <div className="row">
              {items.map((item) => (
                <div key={item.id} className="col-sm-12 col-md-4 col-lg-3 mb-4">
                    <div className="card">
                        <div className="computerCard h-100 computer text-center p-3">
                        <img
                        src={item.productPhoto}
                        className="card-img-top product-img"
                        alt={item.productName}
                        />
                        <div className="card-body">
                        <div className="card-title">{item.productName}</div>
                        <div className="card-text">{item.productPrice}</div>
                        <button
                            className="btn cateCartBtn"
                            onClick={() => addToCart(item)}
                        >
                            Add To Cart
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
    )
}
export default Game;