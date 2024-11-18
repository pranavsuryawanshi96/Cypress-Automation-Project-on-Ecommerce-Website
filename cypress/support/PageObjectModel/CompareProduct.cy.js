class compareProduct {
    // Test Case: Comparing two products
    compareProduct() {
      // Step 1: Search for the first product
      cy.go('back'); // Navigate to homepage
      cy.xpath("(//input[@placeholder='Search'])[1]").type('Apple Cinema 30"').type('{enter}'); // Search for product
      // Step 2: Click on compare for the first product
      cy.get('[formaction="https://demo.opencart.com/en-gb?route=product/compare.add"]').click();

      // Step 3: Search for the second product
      cy.go('back'); // Navigate to homepage
      cy.xpath("(//input[@placeholder='Search'])[1]").clear().type('Samsung SyncMaster 941BW').type('{enter}'); // Search for product
      // Step 4: Click on compare for the second product
      cy.get(':nth-child(1) > .product-thumb > .content > form > .button-group > [formaction="https://demo.opencart.com/en-gb?route=product/compare.add"]').click();
      
      // Step 5: Open product comparison page
      cy.get('#compare-total').click();
    }
}
export default compareProduct;
