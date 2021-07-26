import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
// Subtraction of Two Numbers
Given(`Open chrome browser and start application`, () => {
    cy.visit('https://www.online-calculator.com/full-screen-calculator/')
})

When(`I subtract following values and press CE button`, () => {
    // This is for Iframe capture
    cy.get('#fullframe')
        .then(function ($iframe) {
            const $jbody = $iframe.contents().find('#canvas')
            // Added wait to know which number is clicked
            cy.wait(5000)
            cy.wrap($jbody).click(200, 400)// Click 3
            cy.wait(5000)
            cy.wrap($jbody).click(250, 400)// Click -
            cy.wait(5000)
            cy.wrap($jbody).click(200, 400) //Click 3
            cy.wait(5000)
            cy.wrap($jbody).click(350, 450) //Click =

        })
})

Then(`I should be able to see {string}`, (value) => {
    cy.get('#fullframe')
        .then(function ($iframe) {
            const $jbody = $iframe.contents().find('#canvas')
            cy.wrap($jbody).contains(value);


        })
})

// Addition of Two Numbers
Given(`Open firefox browser and start running the application`, () => {
    cy.visit('https://www.online-calculator.com/full-screen-calculator/')
})

When(`I add following values and press CE button`, () => {
    // This is for Iframe capture
    cy.get('#fullframe')
        .then(function ($iframe) {
            const $jbody = $iframe.contents().find('#canvas')
            // Added wait to know which number is clicked
            cy.wait(5000)
            cy.wrap($jbody).click(200, 400)// Click 3
            cy.wait(5000)
            cy.wrap($jbody).click(300, 450)// Click +
            cy.wait(5000)
            cy.wrap($jbody).click(200, 400) //Click 3
            cy.wait(5000)
            cy.wrap($jbody).click(350, 450) //Click =

        })
})

Then(`I should be able to see {string}`, (value) => {
    cy.get('#fullframe')
        .then(function ($iframe) {
            const $jbody = $iframe.contents().find('#canvas')
            cy.wrap($jbody).should('equal', value);


        })
})

// Division of Two Numbers
Given(`Start running the application`, () => {
    cy.visit('https://www.online-calculator.com/full-screen-calculator/')
})

When(`I divide following values and press CE button`, () => {
    // This is for Iframe capture
    cy.get('#fullframe')
        .then(function ($iframe) {
            const $jbody = $iframe.contents().find('#canvas')
            // Added wait to know which number is clicked
            cy.wait(5000)
            cy.wrap($jbody).click(200, 400)// Click 3
            cy.wait(5000)
            cy.wrap($jbody).click(250, 200)// Click /
            cy.wait(5000)
            cy.wrap($jbody).click(200, 400) //Click 3
            cy.wait(5000)
            cy.wrap($jbody).click(350, 450) //Click =

        })
})

Then(`I should be able to see {string}`, (value) => {
    cy.get('#fullframe')
        .then(function ($iframe) {
            const $jbody = $iframe.contents().find('#canvas')
            cy.wrap($jbody).should('equal', value);


        })
})

//Multiplication of Two Numbers
Given(`Start running the application`, () => {
    cy.visit('https://www.online-calculator.com/full-screen-calculator/')
})

When(`I multiply following values and press CE button`, () => {
    // This is for Iframe capture
    cy.get('#fullframe')
        .then(function ($iframe) {
            const $jbody = $iframe.contents().find('#canvas')
            // Added wait to know which number is clicked
            cy.wait(5000)
            cy.wrap($jbody).click(200, 400)// Click 3
            cy.wait(5000)
            cy.wrap($jbody).click(250, 300)// Click *
            cy.wait(5000)
            cy.wrap($jbody).click(200, 400) //Click 3
            cy.wait(5000)
            cy.wrap($jbody).click(350, 450) //Click =

        })
})

Then(`I should be able to see {string}`, (value) => {
    cy.get('#fullframe')
        .then(function ($iframe) {
            const $jbody = $iframe.contents().find('#canvas')
            cy.wrap($jbody).should('equal', value);


        })
})

// Division of 1 with any Number
Given(`Start the application`, () => {
    cy.visit('https://www.online-calculator.com/full-screen-calculator/')
})

When(`I divide 1 by any number and press equal button`, () => {
    // This is for Iframe capture
    cy.get('#fullframe')
        .then(function ($iframe) {
            const $jbody = $iframe.contents().find('#canvas')
            // Added wait to know which number is clicked
            cy.wait(5000)
            cy.wrap($jbody).click(200, 400)// Click 3
            cy.wait(5000)
            cy.wrap($jbody).click(200, 400)// Click 3
            cy.wait(5000)
            cy.wrap($jbody).click(350, 400)// Click 1/x
            cy.wait(5000)
            cy.wrap($jbody).click(350, 450) //Click =

        })
})

Then(`I should be able to see {string}`, (value) => {
    cy.get('#fullframe')
        .then(function ($iframe) {
            const $jbody = $iframe.contents().find('#canvas')
            cy.wrap($jbody).should('equal', value);


        })
})
// Finding Percentage of a number
Given(`Start application`, () => {
    cy.visit('https://www.online-calculator.com/full-screen-calculator/')
})

When(`I press a number and finds its percentage`, () => {
    // This is for Iframe capture
    cy.get('#fullframe')
        .then(function ($iframe) {
            const $jbody = $iframe.contents().find('#canvas')
            // Added wait to know which number is clicked
            cy.wait(5000)
            cy.wrap($jbody).click(200, 400)// Click 3
            cy.wait(5000)
            cy.wrap($jbody).click(200, 400)// Click 3
            cy.wait(5000)
            cy.wrap($jbody).click(350, 300)// Click %
            cy.wait(5000)
            cy.wrap($jbody).click(350, 450) //Click =

        })
})

Then(`I should be able to see {string}`, (value) => {
    cy.get('#fullframe')
        .then(function ($iframe) {
            const $jbody = $iframe.contents().find('#canvas')
            cy.wrap($jbody).should('equal', value);


        })
})
