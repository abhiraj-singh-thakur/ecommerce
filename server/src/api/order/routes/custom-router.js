module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/orders/customOrder',
        handler: 'order.customOrderController',
      },
    ],
  };
