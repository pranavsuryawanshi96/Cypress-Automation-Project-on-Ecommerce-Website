Cypress.on("uncaught:exception", (err, runnable) => {
  // If the error message contains '429' (Too Many Requests)
  if (err.message.includes("429")) {
    // Prevent Cypress from failing the test due to this error
    return false;
  }

  // Optionally, you can handle other specific errors here
  // For example:
  if (err.message.includes("otherErrorCode")) {
    return false; // Ignore other specific errors
  }

  // Return true or nothing to let Cypress handle other errors as usual
});
