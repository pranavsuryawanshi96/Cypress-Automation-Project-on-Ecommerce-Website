class EditAccount {
  updateAccouunt() {
    // Step 1: Click on the 'My Account' dropdown to access account-related options.
    cy.xpath("(//span[normalize-space()='My Account'])[1]").click();

    // Step 2: Click on the 'Edit your account information' link to navigate to the account edit page.
    cy.xpath("//a[normalize-space()='Edit your account information']").click();

    // Step 3: Clear the existing text in the first name field and type the new first name, 'sejal'.
    cy.xpath("(//input[@id='input-firstname'])[1]").clear().type("sejal");

    // Step 4: Click the submit button to save the updated account information.
    cy.get("button[type='submit']").click();

    // Step 5: Verify that a success alert is visible, indicating that the account was successfully updated.
    cy.get(".alert.alert-success.alert-dismissible").should(
      "be.visible",
      " Success: Your account has been successfully updated"
    );
  }
}
export default EditAccount;
