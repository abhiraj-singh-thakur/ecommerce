# iShops E-commerce Application

## Project Overview

This repository contains a full-stack e-commerce application built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides a platform for users to browse products, add them to their cart, and proceed to checkout.

## Project Structure

The project is divided into two main parts:

- **client:** Contains the React frontend code.
- **server:** Contains the Strapi backend code (headless CMS) and the API endpoints.

## Technologies Used

### Client

- **React:** JavaScript library for building user interfaces.
- **Redux Toolkit:** State management library for React.
- **React Router DOM:**  For handling routing and navigation.
- **Axios:** Promise-based HTTP client for making API requests.
- **Stripe.js:** Library for integrating Stripe payments.
- **Sass:** CSS preprocessor for styling.

### Server

- **Strapi:** Headless CMS to manage content and provide API endpoints.
- **MongoDB:** NoSQL database for data storage.
- **Express.js:** Node.js framework for building the API.
- **Stripe API:** For processing payments.
- **Cloudinary:**  Cloud-based image and video management platform.

## Workflow

1. **Content Management:** Products, categories, and other content are managed using Strapi's admin panel.
2. **API Endpoints:** Strapi automatically generates RESTful API endpoints based on the defined content types.
3. **Client-Server Interaction:** The React frontend interacts with the Strapi backend through these API endpoints using Axios.
4. **Data Fetching:** The client fetches product data, category data, and other necessary information from the API.
5. **User Interactions:** Users can interact with the frontend to browse products, add them to the cart, and proceed to checkout.
6. **Cart Management:** The shopping cart is managed on the client-side using Redux Toolkit for state management.
7. **Checkout Process:** During checkout, the client interacts with the Stripe API to securely process payments.

## Client-Server Communication

The client and server communicate through HTTP requests.

- **GET requests** are used to retrieve data from the server, such as product information or category listings.
- **POST requests** are used to send data to the server, for example, creating a new order during checkout.

## Getting Started

### Prerequisites

- **Node.js and npm**
- **MongoDB**
- **Strapi CLI**
- **Stripe Account:** [https://stripe.com/](https://stripe.com/) 