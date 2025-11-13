# One-cart
# 🛒 One_Cart

### Speech-Powered E-Commerce Platform

A modern, full-featured e-commerce website with hands-free navigation powered by voice commands. One_Cart demonstrates the future of accessible online shopping by integrating the Web Speech API to create a seamless, inclusive user experience.

[![GitHub Stars](https://img.shields.io/github/stars/labhanshu03/One_Cart?style=social)](https://github.com/labhanshu03/One_Cart)
[![GitHub Forks](https://img.shields.io/github/forks/labhanshu03/One_Cart?style=social)](https://github.com/labhanshu03/One_Cart/fork)

---

## 🌟 Features

### 🎤 Voice Navigation
- **Hands-Free Shopping**: Navigate the entire platform using voice commands
- **Natural Language Processing**: Intuitive voice controls that understand everyday language
- **Accessibility First**: Designed to make online shopping accessible to everyone

### 🛍️ E-Commerce Functionality
- Complete product catalog with categories and collections
- Shopping cart management
- Secure checkout process
- Order tracking and history
- User authentication and profiles

### 👨‍💼 Admin Panel
- Product management (Add, Edit, Delete)
- Order management and fulfillment
- User management
- Analytics and reporting dashboard
- Inventory tracking

### 🎨 Modern UI/UX
- Responsive design for all devices
- Clean and intuitive interface
- Fast loading times
- Smooth animations and transitions

---

## 🎯 Voice Commands Examples

Get started with these voice commands:

- `"Open cart"` - View your shopping cart
- `"Open collections"` - Browse product collections
- `"Open search"` - Open search bar
- `"Open Orders"` -  Open orders page
- `"Close search"` - Close search bar
- `"View orders"` - See your order history

*More commands available in the app!*

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- Modern web browser with Web Speech API support (Chrome, Edge, Safari)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/labhanshu03/One_Cart.git
   cd One_Cart
   ```

2. **Install dependencies**
   ```bash
   cd admin
   npm install

   cd backend
   npm install

   cd frontend
   npm install

   
   
   ```

3. **Set up environment variables**
   ```bash
   cd frontend
   cp .env.example .env
  
   ```
   Edit `.env` and add your configuration:
   ```
   VITE_FIREBASE_APIKEY=FIREBASE_API_KEY
   VITE_RAZORPAY_KEY_ID=RAZORPAY_KEY_ID
   ```

  cd backend


  Edit `.env` and add your configuration:
  ```
  PORT = 8000
  MONGODB_URL= MONGODB_ATLAS_URL
  JWT_SECRET=JWT_SECRET
  ADMIN_EMAIL=ADMIN_EMAIL
  ADMIN_PASSWORD=ADMIN_PASSWORD
  CLOUDINARY_NAME=CLOUDINARY_NAME
  CLOUDINARY_APIKEY=CLOUDINARY_API_KEY
  CLOUDINARY_API_SECRET=CLOUDINARY_API_SECRET
  RAZORPAY_KEY_SECRET=RAZORPAY_KEY_SECRET
  RAZORPAY_KEY_ID=RAZORPAY_KEY_ID
   ```

5. **Run database migrations**
   ```bash
   npm run migrate
   # or
   yarn migrate
   ```

6. **Start the development server**
   ```bash
   cd backend
   npm run dev
   
   cd frontend
   npm run dev
   
   cd admin
   npm run dev
   ```

7. **Access the application**
   - Frontend: `http://localhost:3000`
   - Admin Panel: `http://localhost:3000/admin`

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Web Speech API** - Voice recognition

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB/PostgreSQL** - Database
- **JWT** - Authentication

### Additional Tools
- **Razorpay** - Payment processing
- **Cloudinary** - Image management
- **Context API** - State management

---

## 📁 Project Structure

```
One_Cart/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   ├── utils/         # Utility functions
│   │   └── services/      # API services
│   └── public/            # Static assets
├── server/                # Backend application
│   ├── controllers/       # Request handlers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── config/            # Configuration files
├── .env.example           # Environment variables template
├── package.json           # Dependencies
└── README.md             # Documentation
```

---

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Labhanshu**

- GitHub: [@labhanshu03](https://github.com/labhanshu03)
- Project Link: [https://github.com/labhanshu03/One_Cart](https://github.com/labhanshu03/One_Cart)

---

## 🙏 Acknowledgments

- Web Speech API Documentation
- React Community
- All contributors who have helped this project grow

---

## 📞 Support

If you have any questions or need help, please:
- Open an [issue](https://github.com/labhanshu03/One_Cart/issues)
- Reach out via GitHub discussions
- Contact the maintainer

---

## ⭐ Show your support

Give a ⭐️ if this project helped you or if you find it interesting!

---

<p align="center">Made with ❤️ for accessible e-commerce</p>
