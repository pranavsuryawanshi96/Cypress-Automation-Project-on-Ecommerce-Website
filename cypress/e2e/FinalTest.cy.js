import RegisterPage from "../support/PageObjectModel/Register.cy";
import LoginPage from "../support/PageObjectModel/Login.cy";
import compareProduct from "../support/PageObjectModel/CompareProduct.cy";
import Purchase from "../support/PageObjectModel/Purchase.cy";
import EditAccount from "../support/PageObjectModel/EditAccount.cy";
import changePassword from "../support/PageObjectModel/ChangePassword.cy";
import wishList from "../support/PageObjectModel/addToWishList.cy";

// Test suite for the Opencart application
describe("Opencart", () => {
  // Instantiate page object models for each page involved in the tests
  const register = new RegisterPage(); // Register page object
  const login = new LoginPage(); // Login page object
  const compare = new compareProduct(); // Compare Product page object
  const shopping = new Purchase(); // Purchase Product page object
  const edit = new EditAccount(); // Edit Account page object
  const passwordchange = new changePassword(); // Change Password page object
  const favProduct = new wishList(); // Add to Wishlist page object

  // // Test case: Register with valid credentials
  it("Register Page - Positive Test: Registration with Valid Credentials", () => {
    // Open the registration page and perform the registration process
    register.EnterUrl();
    register.RegisterAccount();
    register.PT_Register1(); // Positive test scenario for valid credentials
  });

  // Test case: Register with invalid credentials
  it("Register Page - Negative Test: Registration with Invalid Credentials", () => {
    // Open the registration page and test invalid credentials
    register.EnterUrl();
    register.RegisterAccount();
    register.NT_Register2(); // Negative test scenario for invalid credentials
  });

  // Test case: Register with the first name field left blank
  it("Register Page - Negative Test: Registration with First Name Field Left Blank", () => {
    // Open the registration page and test with the first name field left blank
    register.EnterUrl();
    register.RegisterAccount();
    register.NT_Register3();
  });

  // Test case: Register with the last name field left blank
  it("Register Page - Negative Test: Registration with Last Name Field Left Blank", () => {
    // Open the registration page and test with the last name field left blank
    register.EnterUrl();
    register.RegisterAccount();
    register.NT_Register4();
  });

  // Test case: Register with the email field left blank
  it("Register Page - Negative Test: Registration with Email Field Left Blank", () => {
    // Open the registration page and test with the email field left blank
    register.EnterUrl();
    register.RegisterAccount();
    register.NT_Register5();
  });

  // Test case: Register with the password field left blank
  it("Register Page - Negative Test: Registration with Password Field Left Blank", () => {
    // Open the registration page and test with the password field left blank
    register.EnterUrl();
    register.RegisterAccount();
    register.NT_Register6();
  });

  // Test case: Register with the privacy policy unchecked
  it("Register Page - Negative Test: Registration with Privacy Policy Unchecked", () => {
    // Open the registration page and test with the privacy policy unchecked
    register.EnterUrl();
    register.RegisterAccount();
    register.NT_Register7();
  });

  // Test case: Register with all fields blank and the privacy policy unchecked
  it("Register Page - Negative Test: Registration with All Fields Blank and Privacy Policy Unchecked", () => {
    // Open the registration page and test with all fields blank and the privacy policy unchecked
    register.EnterUrl();
    register.RegisterAccount();
    register.NT_Register8();
  });

  // Test case: Login attempt with incorrect email format (missing "@gmail.com")
  it('Login Page - Negative Test: Login with Incorrect Email Format (Missing "@gmail.com")', () => {
    // Open the login page and test with an incorrect email format
    register.EnterUrl();
    login.LoginToAccount();
    login.ntLogin1(); // Test with incorrect email format
  });

  // Test case: Login with an invalid email and a valid password
  it("Login Page - Negative Test: Login with Invalid Email and Valid Password", () => {
    // Open the login page and test with an invalid email and a valid password
    register.EnterUrl();
    login.LoginToAccount();
    login.ntLogin2();
  });

  // Test case: Login with a valid email and an invalid password
  it("Login Page - Negative Test: Login with Valid Email and Invalid Password", () => {
    // Open the login page and test with a valid email and an invalid password
    register.EnterUrl();
    login.LoginToAccount();
    login.ntLogin3();
  });

  // Test case: Login with a valid email and a blank password
  it("Login Page - Negative Test: Login with Valid Email and Blank Password", () => {
    // Open the login page and test with a valid email and a blank password
    register.EnterUrl();
    login.LoginToAccount();
    login.ntLogin4();
  });

  // Test case: Login with a blank email and a valid password
  it("Login Page - Negative Test: Login with Blank Email and Valid Password", () => {
    // Open the login page and test with a blank email and a valid password
    register.EnterUrl();
    login.LoginToAccount();
    login.ntLogin5();
  });

  // Test case: Successful login and compare products
  it("Login Page - Positive Test: Login with Valid Credentials and Product Comparison", () => {
    // Open the login page, perform a successful login, and compare products
    register.EnterUrl();
    login.LoginToAccount();
    login.ptLogin(); // Positive login scenario
    compare.compareProduct(); // Compare selected products after login
  });

  // Test case: Successful login and purchase products
  it("Purchase Page - Positive Test: Login with Valid Credentials and Purchase Products", () => {
    // Open the purchase page, perform a successful login, and purchase products
    register.EnterUrl();
    login.LoginToAccount();
    login.ptLogin(); // Positive login scenario
    shopping.purchaseProduct(); // Execute product purchase
  });

  // Test case: Update or edit account information
  it("Account Page - Positive Test: Update Account Info", () => {
    // Open the account page, login, and update account info
    register.EnterUrl();
    login.LoginToAccount();
    login.ptLogin();
    edit.updateAccouunt(); // Update account information
  });

  // Test case: Update password
  it("Account Page - Negative Test: Update Password", () => {
    // Open the account page, login, and attempt to update the password
    register.EnterUrl();
    login.LoginToAccount();
    login.ptLogin();
    passwordchange.updatePassword(); // Update password
  });

  // Test case: Add a single product to the wishlist
  it("Home Page - Add Product to Wishlist", () => {
    register.EnterUrl();
    login.LoginToAccount();
    login.ptLogin();
    favProduct.addSingleProductToWishList();
  });
});
