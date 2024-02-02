import { useDispatch } from "react-redux";
import { addGoods } from "../action";

const Goods = () => {
  const dispatch = useDispatch();
  const formHandler = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    let data = event.target.elements;
    dispatch(addGoods(data.id.value, data.title.value, data.image.value));
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
          <input type="text" name="id" defaultValue="28ss7s" />
        </div>
        <div>
          <input
            type="text"
            name="title"
            defaultValue="Механизм Крепление для рулонных штор. Besta mini Set"
          />
        </div>
        <div>
          <input
            type="text"
            name="image"
            defaultValue="https://content1.rozetka.com.ua/goods/images/big/347632875.jpg"
          />
        </div>
        <div>
          <button type="submit">Add new goods</button>
        </div>
      </form>
    </div>
  );
};

export default Goods;
