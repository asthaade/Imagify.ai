# Imagify.ai (Text-to-Image Convertor)

A full-stack AI-powered image generation app using the **MERN stack** (MongoDB, Express, React, Node.js). Users can enter a text prompt and get a unique image generated using an AI image API.

## Features

- **Convert user text or prompts into unique AI-generated images.
- **Modern frontend with **React 19** and **Vite**
- **Backend with **Node.js** **Express** and **MongoDB**
- **Secure user data with **JWT** and **bcrypt**
- **Image data managed and stored with MongoDB.
- **Razorpay integration for potential premium features (optional)

## Technologies Used

- **Frontend:** React.js, React Router, Tailwond CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Tokens), Bcrypt (for password hash)
- **Deployment:** Render, MongoDB Atlas (database)

## 📸 Demo
Live here - [Imagify.ai](https://imagify-ai-4376.onrender.com)

![Demo Screenshot](./assets/demo.png)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account (or local MongoDB server)

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/asthaade/Imagify.ai.git
   ```
2. Install NPM packages:

   ```sh
   cd Imagify.ai
   cd backend
   npm install
   cd..
   cd frontend
   npm install
   ```

3. ## If you don't want to change the`.env` credentials skip step 4 and move to step 5.

4. Set up environment variables:

   - Create a `.env` root file in the backend directory, containing the following variables:

   ```env
  MONGODB_URI=
  JWT_SECRET=
  FRONTEND_URL=
  CLIPDROP_API=
  RAZORPAY_KEY_ID=
  RAZORPAY_KEY_SECRET=
  CURRENCY=
   ```

   - Create a `.env` root file in the frontend directory, containing the following variables:

  ```env
  VITE_BACKEND_URL=
  VITE_RAZORPAY_KEY_ID=

   ```

   Replace each value with your specific configuration details.

5. Run the application backend (make sure you are in `/backend` directory) :

   ```sh
   npm run start
   ```

6. Run the application frontend (make sure you are in `/frontend` directory) :
   ```sh
   npm run dev
   ```
7. Open your browser and navigate to `http://localhost:5173` to view the app.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request 

## Please give a star ⭐ to the repository if you like it.

## Contact

Astha Ade - [GitHub](https://github.com/asthaade)

Project Link: [https://github.com/exclusiveabhi/react-job-portal.git](https://github.com/exclusiveabhi/react-job-portal.git)

