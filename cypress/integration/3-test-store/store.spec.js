import HomePage from '../../support/PageObjects/HomePage'
import RegisterPage from '../../support/PageObjects/RegisterPage'
import LoginPage from '../../support/PageObjects/LoginPage'
//import { PassThrough } from 'stream';




describe('test1', () => {

    const home = new HomePage();
    const register = new RegisterPage();
    const login = new LoginPage();

    beforeEach(() => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login')
        cy.get('.newcustomer').should('be.visible')
        cy.get('.returncustomer').should('be.visible')
    })
    it('display log', () => {
        // cy.get('#accountFrm > fieldset > .btn').should('be.visible').click()
        home.openRegisterForm()
        cy.get('.maintext').should('have.text', ' Create Account')

        //register form
        const uuid = () => Cypress._.random(0, 1e6)
        const id = uuid()
        const testname = `jaja_name${id}@mailinator.com`
        const loginName = `jaja_name${id}`

        //Privacy Policy
        cy.get('.col-md-6 > a > b').should('be.visible').click()
        //cy.get('#privacyPolicyModalLabel').should('contain.Privacy Policy        ')
        cy.get('#privacyPolicyModal > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('.col-md-6 > a > b').should('be.visible').click()
        //cy.get(':nth-child(3) > p').should('contain.Privacy Policy')
        cy.get('#privacyPolicyModal > .modal-dialog > .modal-content > .modal-header > .close').click()
        cy.get('#AccountFrm_agree').click()

        //Your Personal Details
        cy.get('#AccountFrm > :nth-child(4)').should('have.text', 'Your Personal Details')
        cy.log(testname)

        register.populateForm('JaJaJa1', 'jajaja2', testname, '359893594267', 'jajastr 69', 'jajaSofia', '1111', 'Viet Nam', 'Bac Kan', loginName, 'jaja1!', 'jaja1!')
        cy.get(':nth-child(5) > fieldset > :nth-child(1) > .control-label').should('have.text', 'First Name:')
        // cy.get('#AccountFrm_firstname').type('JaJaJa1')
        cy.get(':nth-child(5) > fieldset > :nth-child(2) > .control-label').should('have.text', 'Last Name:')
        // cy.get('#AccountFrm_lastname').type('famalyja')
        cy.get(':nth-child(5) > fieldset > :nth-child(3) > .control-label').should('have.text', 'E-Mail:')
        // cy.get('#AccountFrm_email').type(testname)
        cy.get(':nth-child(5) > fieldset > :nth-child(4) > .control-label').should('have.text', 'Telephone:')
        // cy.get('#AccountFrm_telephone').type('359893594267')
        cy.get('#AccountFrm_telephone')
          .invoke('val')
        //  .should('match', /^\d{2}([ .-]?)\d{2}(?:\1\d{2}){3}$/gmu)
        //   .then ((result) => {
        //      cy.log(result)
        //        expect(result).to.match(/^\d{2}([ .-]?)\d{2}(?:\1\d{2}){3}$/gmu)
        //    })
        cy.get(':nth-child(5) > fieldset > :nth-child(5) > .control-label').should('have.text', 'Fax:')
        cy.get('#AccountFrm_fax').should('be.visible')

        //Your Address
        cy.get('#AccountFrm_company').type('JAJA & Co')
        // cy.get('#AccountFrm_address_1').type('Address1 jaja str 69')
        cy.get('#AccountFrm_address_2').should('be.visible')
        cy.get(':nth-child(7) > fieldset > :nth-child(3) > .input-group > .input-group-addon > .required').should('not.exist')
        // cy.get('#AccountFrm_city').type('jajaSofia')
        
        // cy.get('#AccountFrm_postcode').type('123azd12fd12')

        // cy.get('#AccountFrm_country_id').select('Viet Nam')
        // cy.get('#AccountFrm_zone_id').select('Bac Kan')
        //Login Details
        // cy.get('#AccountFrm_loginname').type(loginname)
        // cy.get('#AccountFrm_password').type('JaJa123!')
        cy.get('#AccountFrm_password').should
        // cy.get('#AccountFrm_confirm').type('JaJa123!')

        cy.get('input#AccountFrm_password').should('have.value', 'jaja1!')

        //Newsletter
        cy.get('#AccountFrm_newsletter1').should('be.visible')
        cy.get('#AccountFrm_newsletter0').should('be.visible').click()


        //Continue1
        cy.get('.col-md-2 > .btn').click()

        //Continue2
        cy.get('.mb40 > .btn').click()
        cy.get('#topnav > .form-control').select('Logout')


        //logout continue
        cy.get('.mb40 > .btn').click()
        cy.get('#customer_menu_top > li > a').click()

        login.loginPageForm(loginName, 'jaja1!')

    })
    
})