class changePassword {
  updatePassword() {
    // Step 1: Click on the "Change your password" link to navigate to the password update page.
    cy.xpath("//a[normalize-space()='Change your password']").click();

    // Step 2: Enter the new password in the password field.
    cy.xpath("//input[@id='input-password']").type("123456887");

    // Step 3: Enter the confirmation password in the confirm password field.
    cy.xpath("(//input[@id='input-confirm'])[1]").type("123456788");

    // Step 4: Click the submit button to attempt updating the password.
    cy.get("button[type='submit']").click();

    // Step 5: Validate that an error message is displayed indicating a mismatch between the password and confirmation password.
    cy.get("#error-confirm").should(
      "be.visible",
      "Password confirmation does not match password!"
    );
  }
}
export default changePassword;
