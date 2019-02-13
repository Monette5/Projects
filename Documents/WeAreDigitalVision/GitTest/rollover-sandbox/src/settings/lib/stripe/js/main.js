 var handler = StripeCheckout.configure({
key: 'pk_test_U6hhqvHmg4QdXDXzrKPx58Ea',
image: 'images/logo-48px.png',
token: function(token, args) {
	$.post("/charge", {token: token}, function(res) {
		console.log("response from charge: " + res);
	})
}
})
document.getElementById('customButton').addEventListener('click', function(e) {
	alert('test')
  // Open Checkout with further options:
  handler.open({
	name: 'We Are Digital Vision LTD',
	description: '2 widgets',
	currency: 'gbp',
	amount: 2000
  });
  e.preventDefault();
});

// Close Checkout on page navigation:
window.addEventListener('popstate', function() {
  handler.close();
});