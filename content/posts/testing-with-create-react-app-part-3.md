---
title: Testing with Create React App - part 3
slug: testing-react-frontends
description: You've tested your functions, you've tested your components now lets
  put it all together
canonical_url: false
date: 2020-07-17T23:00:00Z
published: false
tags:
- Create React App
- React
- JavaScript
- Testing
cover_image: "/assets/static/cypress.jpg"

---
## Previous entries

If you haven't already, might be worth a look at part 1 - testing 101, and part 2 - testing React components of this series before continuing.

## The final piece of the puzzle

In the previous two posts we've tested functions, and then React components in isolation to check that they behave as expected.  And that's great. However, in the real world your components work together to serve the user.  It's time to take the training wheels off...

## End-to-end testing with Cypress.io

We want to be able to test our application in the exact same way that the user will use it - through the browser.  We want to be able to click on things, type things into inputs as our user would and ensure that everything works.  There are a few options for doing this but one of the more popular ones is [Cypress.io](https://cypress.io "Cypress.io") 

We write our tests in plain old Javascript and they look exactly like a mashup of jest and react-testing-library which is good for us and allows us to concentrate on writing tests.

The tests get run in a browser that Cypress.io has full control over and the great thing about Cypress.io is that if a test fails (or even if it passes) we can look through each step of the test and see what the user would see!

## Setup

For setup for your particular system see the [official setup guide](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

## Example test case
```javascript
// Test file wrapper
context('App Flow', () => {
	// Run before all tests
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });
  
	// Group of tests to test a concept
    describe('It should allow a user to register', () => {
      	// Run before each test in this describe block
        beforeEach(() => {
          	// cy.get(css-selector]) << get an element
          	// .click() << simulate a user clicking on the element
            cy.get('nav a[href="/auth/register"]').click();
        });
      
        it('Should show registration from when registration is selected', () => {
            // Two examples of matching text
          	// direct match
            cy.get('nav a[aria-current="page"]')
                .should('have.text', 'Register');
          
          	// Regex example text match
            cy.get('button[type=submit]')
                .invoke('text')
                .should('match', /sign up/i);
        });
      
        it('Should warn about filling in email without password', () => {
            // Simulate the user typing something into an input field
          	cy.get('#email').type(email);
            cy.get('button[type=submit]').click();
            cy.get('[data-testid="login-errors"]')
                .invoke('text')
                .should('match', /please enter your login details/i);
        });
    });
});
```

## Conclusions
