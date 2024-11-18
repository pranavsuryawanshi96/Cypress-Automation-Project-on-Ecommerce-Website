class wishList {
  // Adding a single product to the wishlist
  addSingleProductToWishList() {
    // Navigate back to the homepage
    cy.go("back");
    // Scroll to a specific position on the page
    cy.scrollTo(0, 500);
    // Click on the wishlist button for the product
    cy.get(
      ':nth-child(1) > .product-thumb > .content > form > > [formaction="https://demo.opencart.com/en-gb?route=account/wishlist.add"]'
    ).click();
    // Click on the wishlist button to view the wishlist page
    cy.xpath("//a[@id='wishlist-total']").click();
  }
}
export default wishList;
