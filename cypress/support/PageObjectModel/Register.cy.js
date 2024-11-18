class RegisterPage {
  // Navigate to the Opencart website
  EnterUrl() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    // cy.visit("https://demo.opencart.com/");
    cy.visit("https://demo.opencart.com/bypassCaptcha=true", {
      failOnStatusCode: false,
    });
    cy.wait(4050); // Wait to allow elements to load if needed
  }

  // Navigate to the Register page
  RegisterAccount() {
    cy.xpath("(//span[normalize-space()='My Account'])[1]").click(); // Click on 'My Account' dropdown
    cy.xpath("//a[normalize-space()='Register']").click(); // Click on 'Register' link
    cy.wait(5000);
    cy.get("div[id='content'] h1").should("be.visible", "Register Account"); // Verify 'Register Account' heading is visible
  }

  // Positive test case - Valid registration details
  PT_Register1() {
    cy.get("#input-firstname").type("Pranav"); // Enter valid first name
    cy.get("#input-lastname").type("Patil"); // Enter valid last name
    cy.get("#input-email").type("pranavpatil7789@gmail.com"); // Enter valid email address
    cy.get("#input-password").type("123456"); // Enter valid password
    cy.get(".text-end > .form-check > .form-check-input").check(); // Check the Privacy Policy checkbox
    cy.get(".text-end > .btn").click(); // Submit the registration form
  }

  // Negative test case - Invalid email format
  NT_Register2() {
    cy.get("#input-firstname").type("Praasdfanav"); // Enter invalid first name
    cy.get("#input-lastname").type("Patifsfsaf##l"); // Enter invalid last name
    cy.get("#input-email").type("pranavpatid@sgf##dafaesfl7789@gmail.com"); // Enter malformed email
    cy.get("#input-password").type("123456"); // Enter valid password
    cy.get(".text-end > .form-check > .form-check-input").check(); // Check the Privacy Policy checkbox
    cy.get(".text-end > .btn").click(); // Submit the registration form
  }

  // Negative test case - Empty first name field
  NT_Register3() {
    cy.get("#input-firstname").type("{selectall}{backspace}"); // Clear first name field
    cy.get("#input-lastname").type("Patil"); // Enter valid last name
    cy.get("#input-email").type("pranavpatidafaesfl7789@gmail.com"); // Enter valid email
    cy.get("#input-password").type("123456"); // Enter valid password
    cy.get(".text-end > .form-check > .form-check-input").check(); // Check the Privacy Policy checkbox
    cy.get(".text-end > .btn").click(); // Submit the registration form
    cy.xpath("(//div[@id='error-firstname'])[1]").should(
      "be.visible",
      "First Name must be between 1 and 32 characters!"
    ); // Verify error message for first name
  }

  // Negative test case - Empty last name field
  NT_Register4() {
    cy.wait(5000); // Wait to allow elements to load if needed
    cy.get("#input-firstname").type("pranav"); // Enter valid first name
    cy.get("#input-lastname").type("{selectall}{backspace}"); // Clear last name field
    cy.get("#input-email").type("pranavpatidsgf##dafaesfl7789@gmail.com"); // Enter valid email
    cy.get("#input-password").type("123456"); // Enter valid password
    cy.get(".text-end > .form-check > .form-check-input").check(); // Check the Privacy Policy checkbox
    cy.get(".text-end > .btn").click(); // Submit the registration form
    cy.xpath("(//div[@id='error-lastname'])[1]").should(
      "be.visible",
      "Last Name must be between 1 and 32 characters!"
    ); // Verify error message for last name
  }

  // Negative test case - Empty email field
  NT_Register5() {
    cy.get("#input-firstname").type("pranav"); // Enter valid first name
    cy.get("#input-lastname").type("Patil"); // Enter valid last name
    cy.get("#input-email").type("{selectall}{backspace}"); // Clear email field
    cy.get("#input-password").type("123456"); // Enter valid password
    cy.get(".text-end > .form-check > .form-check-input").check(); // Check the Privacy Policy checkbox
    cy.get(".text-end > .btn").click(); // Submit the registration form
    cy.xpath("(//div[@id='error-email'])[1]").should(
      "be.visible",
      "E-Mail Address does not appear to be valid!"
    ); // Verify error message for email
  }

  // Negative test case - Empty password field
  NT_Register6() {
    cy.get("#input-firstname").type("pranav"); // Enter valid first name
    cy.get("#input-lastname").type("Patil"); // Enter valid last name
    cy.get("#input-email").type("{selectall}{backspace}"); // Clear email field
    cy.get("#input-password").type("{selectall}{backspace}"); // Clear password field
    cy.get(".text-end > .form-check > .form-check-input").check(); // Check the Privacy Policy checkbox
    cy.get(".text-end > .btn").click(); // Submit the registration form
    cy.xpath("//div[@id='error-password']").should(
      "be.visible",
      "Password must be between 4 and 20 characters!"
    ); // Verify error message for password
  }

  // Negative test case - Privacy Policy checkbox unchecked
  NT_Register7() {
    cy.get("#input-firstname").type("pranav"); // Enter valid first name
    cy.get("#input-lastname").type("Patil"); // Enter valid last name
    cy.get("#input-email").type("{selectall}{backspace}"); // Clear email field
    cy.get("#input-password").type("{selectall}{backspace}"); // Clear password field
    cy.get(".text-end > .form-check > .form-check-input").uncheck(); // Uncheck the Privacy Policy checkbox
    cy.get(".text-end > .btn").click(); // Submit the registration form
  }

  // Negative test case - All fields left empty
  NT_Register8() {
    cy.get("#input-firstname").type("{selectall}{backspace}"); // Clear first name field
    cy.get("#input-lastname").type("{selectall}{backspace}"); // Clear last name field
    cy.get("#input-email").type("{selectall}{backspace}"); // Clear email field
    cy.get("#input-password").type("{selectall}{backspace}"); // Clear password field
    cy.get(".text-end > .form-check > .form-check-input").uncheck(); // Uncheck the Privacy Policy checkbox
    cy.get(".text-end > .btn").click(); // Submit the registration form
    // Verify all error messages for missing fields
    cy.xpath("(//div[@id='error-firstname'])[1]").should(
      "be.visible",
      "First Name must be between 1 and 32 characters!"
    );
    cy.xpath("(//div[@id='error-lastname'])[1]").should(
      "be.visible",
      "Last Name must be between 1 and 32 characters!"
    );
    cy.xpath("(//div[@id='error-email'])[1]").should(
      "be.visible",
      "E-Mail Address does not appear to be valid!"
    );
    cy.xpath("//div[@id='error-password']").should(
      "be.visible",
      "Password must be between 4 and 20 characters!"
    );
  }
}

export default RegisterPage;
