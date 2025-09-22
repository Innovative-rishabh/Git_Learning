const cart = ["pizza", "coke", "sandwich"];

function placeOrder(cart) {
  console.log("Talking with Dominos");

  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const food_available = true;
      if (food_available) {
        console.log("Order Placed Successfully");
        const order = { orderId: 20, restaurant: "Dominos", food: cart };
        resolve(order);
      } else {
        reject("Items out of stock");
      }
    }, 2000);
  });
  return pr;
}

function prepareOrder(order) {
  console.log("Pizza Preparation started");

  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Pizza Preparation Done!");
      const foodDetails = {
        token: 12,
        restaurant: order.restaurant,
        location: "Motihari",
      };
      resolve(foodDetails);
    }, 5000);
  });
  return pr;
}

function pickupOrder(foodDetails) {
  console.log("Reaching restaurant to pick up the order");

  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Order picked up by the delivery boy");
      const dropLocation = foodDetails.location;
      resolve(dropLocation);
    }, 3000);
  });
  return pr; // yeh important hai
}

function deliveryOrder(dropLocation) {
  console.log("Delivery boy is on the way");
  setTimeout(() => {
    console.log(`Order delivered successfully at ${dropLocation}`);
  }, 5000);
}

placeOrder(cart)
  .then((order) => prepareOrder(order))
  .then((foodDetails) => pickupOrder(foodDetails))
  .then((dropLocation) => deliveryOrder(dropLocation))
  .catch((error) => console.log(error));
