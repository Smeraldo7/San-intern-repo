# Identifying & Fixing Code Smells

## What code smells did you find in your code?

1. **Magic Numbers & Strings (Hardcoded values instead of constants)**

```Javascript 
function calculateDiscount(price) {
  return price * 0.1; // 0.1 is the magic number for discount
}

console.log(calculateDiscount(100));  // Output: 10
```

**Refactored:**
```Javascript
const DISCOUNT_RATE = 0.1;

function calculateDiscount(price) {
  return price * DISCOUNT_RATE;
}
```
2. *** Long Functions**
``` Javascript
function processOrder(order) {
  // Step 1: Validate order
  if (!order) {
    console.log("Invalid order");
    return;
  }
  
  // Step 2: Calculate price
  let price = order.items.reduce((sum, item) => sum + item.price, 0);

  // Step 3: Apply discount
  if (order.customer.isVIP) {
    price = price * 0.9; // Apply 10% discount
  }

  // Step 4: Process payment
  if (order.paymentMethod === "credit card") {
    console.log("Processing credit card payment");
  } else {
    console.log("Processing other payment method");
  }

  // Step 5: Ship the order
  console.log(`Order processed. Total price: ${price}`);
}

processOrder({ 
  items: [{ price: 50 }, { price: 30 }], 
  customer: { isVIP: true }, 
  paymentMethod: "credit card" 
});
```

Refactored:
```Javascript

function validateOrder(order) 
function calculatePrice(items) 
function applyDiscount(price, isVIP) 
function processPayment(method) 
function shipOrder(price) 

function processOrder(order) {
  if (!validateOrder(order)) {
    return;
  }
  const price = calculatePrice(order.items);
  const discountedPrice = applyDiscount(price, order.customer.isVIP);
  processPayment(order.paymentMethod);
  shipOrder(discountedPrice);
}
```

3. ***Duplicate Code**
``` Javascript
function calculateTax(price) {
  return price * 0.2; // Tax rate 20%
}

function calculateTotal(price) {
  const tax = price * 0.2; // Same tax rate logic as above
  return price + tax;
}
```
***Refactored:**
```Javascript
const TAX_RATE = 0.2;

function calculateTax(price) {
  return price * TAX_RATE;
}

function calculateTotal(price) {
  const tax = calculateTax(price);
  return price + tax;
}
```
4. ***Large Classes (God Objects)**
```Javascript
class OrderProcessor {
  constructor() {
    this.orders = [];
  }

  validateOrder(order) 
  calculatePrice(order) 
  processPayment(order) 
  sendEmailNotification(order)
  shipOrder(order) 
  applyDiscount(order) 
  saveOrder(order) 
}
```

***Refactored**
```Javascript
class OrderValidator 
class PriceCalculator 
class PaymentProcessor 
class EmailNotifier 
class OrderShipper 
class DiscountApplier
class OrderSaver 

class OrderProcessor {
  constructor() {
    this.validator = new OrderValidator();
    this.calculator = new PriceCalculator();
    this.paymentProcessor = new PaymentProcessor();
    this.notifier = new EmailNotifier();
    this.shipper = new OrderShipper();
    this.discountApplier = new DiscountApplier();
    this.orderSaver = new OrderSaver();
  }

  process(order) {
    this.validator.validate(order);
    const price = this.calculator.calculate(order);
    this.paymentProcessor.process(order);
    this.notifier.send(order);
    this.shipper.ship(order);
    this.discountApplier.apply(order);
    this.orderSaver.save(order);
  }
}
```
5.***Deeply Nested Conditionals**
```Javascript
function processPayment(payment) {
  if (payment.type === 'credit card') {
    if (payment.cardExpiry > Date.now()) {
      if (payment.amount > 0) {
        console.log('Payment processed');
      } else {
        console.log('Invalid amount');
      }
    } else {
      console.log('Card expired');
    }
  } else if (payment.type === 'paypal') {
    if (payment.emailVerified) {
      if (payment.amount > 0) {
        console.log('Payment processed');
      } else {
        console.log('Invalid amount');
      }
    } else {
      console.log('Email not verified');
    }
  }
}
```

***Refactored**
```Js
function processCreditCard(payment) 
function processPaypal(payment) 
function validateAmount(payment) 

function processPayment(payment) {
  if (payment.type === 'credit card') {
    if (payment.cardExpiry <= Date.now()) {
      console.log('Card expired');
      return;
    }
    processCreditCard(payment);
  } else if (payment.type === 'paypal') {
    if (!payment.emailVerified) {
      console.log('Email not verified');
      return;
    }
    processPaypal(payment);
  }
  validateAmount(payment);
}
```

## How did refactoring improve the readability and maintainability of the code?
- Refactoring improved readability and maintainability by:
- Replacing magic numbers with constants for clarity and easy updates.
- Breaking long functions into smaller, reusable ones for better organization.
- Eliminating duplicate code, reducing redundancy and maintenance effort.
- Splitting large classes into modular components, improving separation of concerns.
- Flattening deeply nested conditionals for clearer logic flow.

## How can avoiding code smells make future debugging easier?

Avoiding code smells makes debugging easier by keeping code readable, modular, and maintainable. Simplified logic prevents hidden errors, and well-structured code is easier to test, catching bugs early. 