# OpenCart E-commerce Automation Project  

## **Introduction**  
This project focuses on automating key e-commerce functionalities of the OpenCart web application using Cypress. It covers the **registration page**, **login page**, **adding products to the cart**, **product comparison**, **editing account details**, and **purchasing products**. The goal is to ensure these critical user journeys work flawlessly through automated and manual testing approaches.  
## Project Type
Testing Automation using Cypress
## Deployed App
Since this project is about testing and not deploying a live application, the OpenCart web application is used for testing purposes:  
[Opencart web application](https://demo.opencart.com/)

## **Project Highlights**  
1. **Comprehensive Functional Coverage**:  
   - Registration and login functionality validation.  
   - Automated product addition to the cart.  
   - Product comparison automation, ensuring attributes like name, price, and specifications display accurately.  
   - Verification of the account editing workflow.  
   - Purchase process testing to ensure a seamless transaction experience.  

2. **Manual Testing**:  
   Conducted detailed manual testing alongside automation to uncover edge cases and usability improvements.  

3. **Technology Stack**:  
   - **Cypress**: End-to-end testing tool for automating UI interactions.  
   - **JavaScript**: For writing reusable and maintainable test scripts.  
   - **Mochawesome**: For detailed and visually appealing HTML reports.  
   - **Page Object Model (POM)**: Ensures modular, maintainable, and scalable code.  

---

## Directory Structure
opencart-comparison-automation/  
├── cypress/  
│   ├── integration/  
│   ├── fixtures/  
│   ├── support/  
│   └── reports/  
├── node_modules/  
|── readme.md  
├── cypress.json  
├── package.json

## **Features Automated**  
- **Registration and Login**: Validating user onboarding and authentication workflows.  
- **Product Cart Functionality**: Adding, viewing, and removing products from the cart.  
- **Product Comparison**: Comparing multiple products by their attributes and verifying the displayed data.  
- **Account Updates**: Editing account details and verifying data persistence.  
- **Purchasing Workflow**: Simulating product purchases and ensuring order confirmation functionality.  

---

## Design Decisions or Assumptions
###Design Pattern:  
The project follows the Page Object Model (POM) design pattern to ensure modularity and reusability of code
## Credentials
You don’t need any special credentials to access and test the OpenCart demo site.
## APIs Used
This project does not interact directly with APIs. It focuses on UI-based test automation.
## API Endpoints
Since this is a UI automation project, no API endpoints are used directly.
## Technology Stack
Cypress: The primary tool used for test automation.  
JavaScript: The language used for writing Cypress test scripts.  
Mochawesome: Reporting tool for generating test results in HTML format.  
Page Object Model (POM): Used to structure the test code efficiently, separating page interactions from test logic.
