class Purchase {
  purchaseProduct() {
    // Navigate back to the homepage
    cy.go("back");

    // Search for the product "nikon d300"
    cy.get('[type="text"]').type("nikon d300").type("{enter}");

    // Click on the product to view its details
    cy.get(".image > a > .img-fluid").click();

    // Change the product quantity (this input seems to have an invalid value, check this later)
    cy.xpath("//input[@id='input-quantity']").clear().type("###5544522");

    // Add the product to the cart
    cy.get("#button-cart").click();

    // Wait for a few seconds to ensure the action completes
    cy.wait(4050);

    // Add the product to the bag again (potential redundancy, verify if needed)
    cy.get("#button-cart").click();

    // Navigate to the checkout option using a selector containing the text "Checkout"
    cy.get(":nth-child(5) > a > .d-none").click({ force: true });

    // Take a screenshot to capture the current state (bug: product might not be added to the cart, review this)
    cy.screenshot();
  }
}

export default Purchase;
