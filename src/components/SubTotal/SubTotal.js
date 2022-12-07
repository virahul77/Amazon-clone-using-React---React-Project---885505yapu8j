import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../../utils/BasketTotal";

const SubTotal = () => {
  const { basket, user } = useSelector((state) => state.data);

  let history = useHistory();

  const handleCheckout = () => {
    if (user) {
      history.push("/payment");
    } else {
      history.push("/login");
    }
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This orders contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
