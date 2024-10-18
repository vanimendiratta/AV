import { API_ROUTES } from '../constants/apiRoutes';

import { cashfree } from "../utils/cashfreeHandler.jsx";

export const handleUpgrade = async (orderAmount, courseCode) => {
  const authToken = localStorage.getItem("authToken");
  const userId = await localStorage.getItem('userId');
  const userName = await localStorage.getItem('userName');
  const userEmail = await localStorage.getItem('userEmail');
  const userPhone = await localStorage.getItem('userPhone');
  const requestData = {
    order_amount: orderAmount,
    customer_details: {
      customer_id: userId,
      customer_name: userName,
      customer_email: userEmail,
      customer_phone: userPhone,
    },
    order_note: courseCode,
  };

  await fetch(API_ROUTES.CREATE_ORDER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": authToken,
    },
    body: JSON.stringify(requestData),
  })
    .then((response) => response.json())
    .then(async (data) => {
      const orderId = data.order_id;
      const paymentSessionId = data.payment_session_id;
      // Use paymentSessionId as needed
      // console.log("Payment Session ID:", paymentSessionId);
      let checkoutOptions = {
        paymentSessionId: paymentSessionId,
        returnUrl: `https://api.asmiveda.com/payments/order-status/${orderId}`,
      };
      await cashfree.checkout(checkoutOptions).then(function (result) {
        if (result.error) {
          alert(result.error.message);
        }
        if (result.redirect) {
          console.log("Redirection");
        }
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};