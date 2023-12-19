# ✉️ About
This is a simple web application for tracking parcels sent through the Nova Poshta company, created based on React.
# 📋 Technical Specification for the Project:
1. The user enters the TTN number or their invoice number in the input field on the page.
2. The application sends a request to obtain data on the current delivery status of the product.
3. Display information about the shipment to the user.
4. The user should see all previous TTN numbers in the form of a list in the sidebar, even after the page reloads.
5. Clicking on a previously added TTN number in the list should automatically trigger a request for the status of the product's location (delivery), and the corresponding information should be displayed. The TTN number should automatically appear in the input field.
6. The TTN number must be validated for correct entry. This can be done either by comparing each symbol with the required encoding range or by using a regular expression.
7. There should be an option to clear all old TTN numbers.
8. In case of an incorrect format, after pressing the "Get Delivery Status" button, a prompt must be shown, and the request should not be sent.
9. When switching to the second tab, the user should be able to see the list of Nova Poshta departments. To achieve this, make a corresponding request to the Nova Poshta API and display them as a list according to your discretion.
# 💻 Tech Stack:
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![GithubPages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
- ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
- Axios
- React-toastify
- Prettier
# 📌 Instruction:
1. Clone repository
2. Open the terminal in the project
3. Install necessary packages:
```
 npm install
```
6. Run this command in the terminal:
```
npm start
```
8. Open the application in your browser http://localhost:3000
