// // Create a Stripe client.
// var stripe = Stripe('pk_test_51IBMCuHZp2nEKQFmxSfD0xSznwmZEM1OYnXrBbYmtHTBrrlmZ1UWkYACOnshBwCSYVbQ1gWWGuGksI6vYnI0puaV00wADiIseB');
// // Create an instance of Elements.
// var elements = stripe.elements();

// // Custom styling can be passed to options when creating an Element.
// // (Note that this demo uses a wider set of styles than the guide below.)
// var style = {
//   base: {
//     color: '#32325d',
//     fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//     fontSmoothing: 'antialiased',
//     fontSize: '16px',
//     '::placeholder': {
//       color: '#aab7c4'
//     }
//   },
//   invalid: {
//     color: '#fa755a',
//     iconColor: '#fa755a'
//   }
// };

// // Create an instance of the card Element.
// var card = elements.create('card', {style: style});

// // Add an instance of the card Element into the `card-element` <div>.
// card.mount('#card-element');
// // Handle real-time validation errors from the card Element.
// card.on('change', function(event) {
//   var displayError = document.getElementById('card-errors');
//   if (event.error) {
//     displayError.textContent = event.error.message;
//   } else {
//     displayError.textContent = '';
//   }
// });

// // Handle form submission.
// var form = document.getElementById('button-submit');
// form.addEventListener('click', function(event) {
//   event.preventDefault();
//     if(document.getElementById('r12').checked){
//         // stripe.createToken(card).then(function(result) {
//         //     if (result.error) {
//         //     // Inform the user if there was an error.
//         //     var errorElement = document.getElementById('card-errors');
//         //     errorElement.textContent = result.error.message;
//         //     } else {
//         //     // Send the token to your server.
//         //     stripeTokenHandler(result.token);
//         //     }
//         // });
//         stripe.createPaymentMethod({
//           type: 'card',
//           card: card,
//           billing_details: {
//             // Include any additional collected billing details.
//             name: document.getElementById('cname').value,
//           },
//         }).then(stripePaymentMethodHandler);
//     }
//     else{
//         console.log("Mobile Money");
//     }
// });
// function stripePaymentMethodHandler(result) {
//   console.log("Stripe Hanlder",result);
//   if (result.error) {
//     var errorElement = document.getElementById('card-errors');
//     errorElement.textContent = result.error.message;
//   } else {
//     // Otherwise send paymentMethod.id to your server (see Step 4)
//     console.log(document.getElementById('ticket-total-amount').innerText)
//     const body = {
//       pay:{
//         payment_method_id: result.paymentMethod.id,
//         amount:document.getElementById('ticket-total-amount').innerText,
//       }
//     }
//     console.log(body);
//     fetch('http://localhost:5000/api/v1/events/tickets/paying', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body)
//     }).then(function(result) {
//       // Handle server response (see Step 4)
//       result.json().then(function(json) {
//         console.log("Error",json);
//         handleServerResponse(json);
//       })
//     });
//   }
// }

// function handleServerResponse(response) {
//   console.log("Response  = ",response);
//   if (response.error) {
//     var errorElement = document.getElementById('card-errors');
//     errorElement.textContent = result.error.message;
//   } else if (response.data.requires_action) {
//     // Use Stripe.js to handle required card action
//     stripe.handleCardAction(
//       response.pay.payment_intent_client_secret
//     ).then(handleStripeJsResult);
//   } else {
//     // Show success message
//     console.log("Success");
//   }
// }

// function handleStripeJsResult(result) {
//   console.log("Result = ",result)
//   if (result.error) {
//     // Show error in payment form
//     var errorElement = document.getElementById('card-errors');
//     errorElement.textContent = result.error.message;
//   } else {
//     const body = {
//       pay:{
//         payment_intent_id: result.data.payment_intent_client_secret,
//       }
//     }
//     // The card action has been handled
//     // The PaymentIntent can be confirmed again on the server
//     fetch('http://localhost:5000/api/v1/events/tickets/paying', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body)
//     }).then(function(confirmResult) {
//       console.log("Confirm Result",confirmResult.json());
//       return confirmResult.json();
//     }).then(handleServerResponse);
//   }
// }


// // Submit the form with the token ID.
// // async function stripeTokenHandler(token) {

// //     var ticketInfo = {
// //         "pay":{
// //             "name":document.getElementById('cname').value,
// //             "amount":document.getElementById('ticket-total-amount').innerText,
// //             'token':token.id
// //         },
// //         "buyer":{
// //             "method1":{
// //                 "name":"Nishimwe Elysee",
// //                 "phone":"0788935645",
// //                 "email":"nishimwelys@gmail.com"
// //             }
// //         },
// //         "attender":{
          
// //         }
// //      }
// //     console.log(ticketInfo);
// //     fetch('http://localhost:5000/api/v1/events/tickets/paying',{
// //         method: 'POST',
// //         headers: {'Content-Type': 'application/json'},
// //         body: JSON.stringify(ticketInfo)
// //     }).then(function (response) {
// // 	// The API call was successful!
// // 	return response.json();
// // }).then(function (data) {
// // 	// This is the JSON from our response
// // 	console.log(data);
// // }).catch(function (err) {
// // 	// There was an error
// // 	console.warn('Something went wrong.', err);
// // });
// // }

// A reference to Stripe.js
var stripe;
var paymentInfo;
function getamount() {
    paymentInfo ={pay:{
      amount:document.getElementById('ticket-total-amount').innerText,
      currency: "RWF"
    },
    buyer:{

    },
    attender:{

    }
  };
}

// Disable the button until we have Stripe set up on the page
document.querySelector("button").disabled = true;

fetch("http://localhost:5000/stripe-key")
  .then(function(result) {
    return result.json();
  })
  .then(function(data) {
    return setupElements(data);
  })
  .then(function({ stripe, card, clientSecret }) {
    document.querySelector("#button-submit").disabled = false;

    var form = document.getElementById("button-submit");
    form.addEventListener("click", function(event) {
      event.preventDefault();
      if(document.getElementById('r12').checked){
        getamount();
        pay(stripe, card, clientSecret);
      }else{
        console.log("Mobile Money")
      }
    });
  });

var setupElements = function(data) {
  stripe = Stripe(data.publishableKey);
  /* ------- Set up Stripe Elements to use in checkout form ------- */
  var elements = stripe.elements();
  var style = {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  };

  var card = elements.create("card", { style: style });
  card.mount("#card-element");

  return {
    stripe: stripe,
    card: card,
    clientSecret: data.clientSecret
  };
};

var handleAction = function(clientSecret) {
  stripe.handleCardAction(clientSecret).then(function(data) {
    if (data.error) {
      showError("Your card was not authenticated, please try again");
    } else if (data.paymentIntent.status === "requires_confirmation") {
      fetch("http://localhost:5000/api/v1/events/tickets/payment/cardpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({pay:{
          paymentIntentId: data.paymentIntent.id
        }})
      })
        .then(function(result) {
          return result.json();
        })
        .then(function(json) {
          if (json.error) {
            showError(json.error);
          } else {
            orderComplete(clientSecret);
          }
        });
    }
  });
};

/*
 * Collect card details and pay for the order
 */
var pay = function(stripe, card) {
  changeLoadingState(true);

  // Collects card details and creates a PaymentMethod
  stripe
    .createPaymentMethod("card", card)
    .then(function(result) {
      if (result.error) {
        showError(result.error.message);
      } else {
        paymentInfo.pay.paymentMethodId = result.paymentMethod.id;

        return fetch("http://localhost:5000/api/v1/events/tickets/payment/cardpay", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(paymentInfo)
        });
      }
    })
    .then(function(result) {
      return result.json();
    })
    .then(function(response) {
      if (response.error) {
        showError(response.error);
      } else if (response.requiresAction) {
        // Request authentication
        handleAction(response.clientSecret);
      } else {
        orderComplete(response.data);
      }
    });
};

/* ------- Post-payment helpers ------- */

/* Shows a success / error message when the payment is complete */
var orderComplete = function(data) {
  console.log(data);
  changeLoadingState(false);
  // stripe.retrievePaymentIntent(clientSecret).then(function(result) {
  //   var paymentIntent = result.paymentIntent;
  //   var paymentIntentJson = JSON.stringify(paymentIntent, null, 2);

  //   document.querySelector("pre").textContent = paymentIntentJson;

  //   document.querySelector(".sr-result").classList.remove("hidden");
  //   setTimeout(function() {
  //     document.querySelector(".sr-result").classList.add("expand");
  //   }, 200);

  //   changeLoadingState(false);
  // });
};

var showError = function(errorMsgText) {
  changeLoadingState(false);
  var errorMsg = document.querySelector(".sr-field-error");
  errorMsg.textContent = errorMsgText;
  setTimeout(function() {
    errorMsg.textContent = "";
  }, 4000);
};

// Show a spinner on payment submission
var changeLoadingState = function(isLoading) {
  if (isLoading) {
    document.querySelector("#button-submit").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("#button-submit").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
};
