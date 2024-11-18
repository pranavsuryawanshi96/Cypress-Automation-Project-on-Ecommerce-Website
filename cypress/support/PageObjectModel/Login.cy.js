class LoginPage {
  // Test Case: Navigate to My Account page and access Login option
  LoginToAccount() {
    cy.xpath("(//div[@class='dropdown'])[2]").click();
    cy.xpath("//a[normalize-space()='Login']").click();
  }

  // Test Case: Attempt login with valid credentials
  ptLogin() {
    cy.wait(5000);
    cy.get("#input-email").type("pranavpatil7789@gmail.com");
    cy.xpath("//input[@id='input-password']").type("1234567");
    cy.xpath("(//button[normalize-space()='Login'])[1]").click();
  }

  // Test Case: Attempt login with incorrect credentials - invalid email format
  ntLogin1() {
    cy.xpath("//form[@id='form-login']//div[1]").type("praanv");
    cy.xpath("//input[@id='input-password']").type("123456");
    cy.xpath("(//button[normalize-space()='Login'])[1]").click();
  }

  // Test Case: Attempt login with incorrect credentials - non-registered email
  ntLogin2() {
    cy.xpath("//form[@id='form-login']//div[1]").type("praanv@gmail.com");
    cy.xpath("//input[@id='input-password']").type("123456");
    cy.xpath("(//button[normalize-space()='Login'])[1]").click();
    cy.get(".alert").should(
      "be.visible",
      "Warning: No match for E-Mail Address and/or Password."
    );
  }

  // Test Case: Attempt login with valid email and incorrect password
  ntLogin3() {
    cy.get("#input-email").type("praanv@gmail.com");
    cy.xpath("//input[@id='input-password']").type("123777456");
    cy.xpath("(//button[normalize-space()='Login'])[1]").click();
    cy.get(".alert").should(
      "be.visible",
      "Warning: No match for E-Mail Address and/or Password."
    );
  }

  // Test Case: Attempt login with valid email and empty password field
  ntLogin4() {
    cy.get("#input-email").type("praanv@gmail.com");
    cy.xpath("//input[@id='input-password']").type("{selectall}{backspace} ");
    cy.xpath("(//button[normalize-space()='Login'])[1]").click();
  }

  // Test Case: Attempt login with empty email field and valid password
  ntLogin5() {
    cy.xpath("//form[@id='form-login']//div[1]").type("{selectall}{backspace}");
    cy.xpath("//input[@id='input-password']").type("123456");
    cy.xpath("(//button[normalize-space()='Login'])[1]").click();
  }
}

export default LoginPage;
