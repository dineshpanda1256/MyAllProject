const { createSelector } = require("@reduxjs/toolkit");

const cartSelector = (state) => state.cart;

export const cartTotalSelector = createSelector([cartSelector], (cart) =>
  cart.reduce((total, current) => (total += current.quantity), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (total, current) =>
      (total +=
        current.quantity * (current.actual_price - current.discount_price)),
    0
  )
);
export const cartTotalPriceSelectorTwo = createSelector(
  [cartSelector],
  (cart) =>
    cart.reduce(
      (total, current) => (total += current.quantity * current.discount_price),
      0
    )
);
