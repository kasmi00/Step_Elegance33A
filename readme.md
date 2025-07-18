# Step Elegance - E-Commerce Shoe Store

Step Elegance is a full-stack e-commerce platform specialized in shoe retail, built with modern web technologies. The application provides a comprehensive shopping experience with user management, product catalog, shopping cart, wishlist, and administrative capabilities.

## 🏗️ Architecture

The project follows a microservices-inspired architecture with clear separation between frontend and backend:

- **Backend**: Spring Boot REST API (Port 8087)
- **Frontend**: React with TypeScript and Vite (Port 5173)
- **Database**: PostgreSQL
- **Authentication**: JWT-based with OTP email verification

## 🛠️ Technologies Used

### Backend

- **Framework**: Spring Boot 3.2.0
- **Language**: Java 17
- **Database**: PostgreSQL with Spring Data JPA
- **Security**: Spring Security with JWT tokens
- **Email**: JavaMail API for OTP verification
- **Build Tool**: Maven
- **Additional Libraries**:
  - Lombok (code generation)
  - Passay (password validation)
  - Apache Commons Text
  - JJWT (JWT handling)

### Frontend

- **Framework**: React 18.2.0
- **Language**: TypeScript
- **Build Tool**: Vite 5.0.0
- **Routing**: React Router DOM 6.20.1
- **HTTP Client**: Axios 1.6.2
- **UI Libraries**:
  - Material-UI (@mui/material)
  - Ant Design (antd)
  - React Toastify (notifications)
- **Charts**: Chart.js with React Chart.js 2, Recharts
- **Maps**: React Leaflet
- **State Management**: TanStack React Query

## 🚀 Features

### Customer Features

- User registration and authentication
- Product browsing by categories (Men, Women, Kids)
- Product search and filtering
- Shopping cart management
- Wishlist functionality
- Secure checkout process
- Order tracking
- Size chart reference
- Contact form
- Password recovery with OTP

### Administrative Features

- Admin dashboard with analytics
- Product management (CRUD operations)
- User management
- Order management
- Sales reporting with charts
- Inventory tracking

## 📡 API Endpoints

### Authentication

- `POST /authenticate` - JWT authentication
- `POST /user/login` - User login
- `POST /user/sendotp` - OTP for password recovery

### User Management

- `POST /user/save` - Create/update user
- `GET /user/getAll` - Get all users
- `GET /user/getById/{id}` - Get user by ID
- `GET /user/getByEmail/{email}` - Get user by email
- `DELETE /user/deleteById/{id}` - Delete user

### Product Management

- `POST /product/save` - Create/update product
- `POST /product/save-image` - Upload product image
- `GET /product/getAll` - Get all products
- `GET /product/getById/{id}` - Get product by ID
- `GET /product/getImageByName/{name}` - Get product image
- `GET /product/getByCategory/{category}` - Get products by category
- `DELETE /product/deleteById/{id}` - Delete product

### Shopping Cart

- `POST /cart/save` - Add/update cart item
- `GET /cart/getAll` - Get all cart items
- `GET /cart/getById/{id}` - Get cart item by ID
- `DELETE /cart/deleteById/{id}` - Remove cart item

### Wishlist

- `POST /wishlist/save` - Add/update wishlist item
- `GET /wishlist/getAll` - Get all wishlist items
- `GET /wishlist/getByUid/{uid}` - Get wishlist by user ID
- `GET /wishlist/getById/{id}` - Get wishlist item by ID
- `DELETE /wishlist/deleteById/{id}` - Remove wishlist item

### Transaction Management

- `POST /transaction/save` - Create transaction
- `GET /transaction/getAll` - Get all transactions
- `GET /transaction/getById/{id}` - Get transaction by ID
- `GET /transaction/getOrderDetailsById/{id}` - Get order details
- `DELETE /transaction/deleteById/{id}` - Delete transaction

### Address Management

- `POST /address/save` - Create/update address
- `GET /address/getAll` - Get all addresses
- `DELETE /address/deleteById/{id}` - Delete address

### Contact & Support

- `POST /contact-us/save` - Submit contact form
- `GET /contact-us/getAll` - Get all contact submissions

### Admin Endpoints

All user, product, cart operations are also available under `/admin` prefix for administrative access.

## 🗃️ Database Schema

The application uses the following main entities:

- **User**: Customer and admin user information
- **Product**: Shoe products with categories (Men/Women/Kids)
- **Cart**: Shopping cart items
- **Wishlist**: User wishlist items
- **Transaction**: Order transactions
- **Address**: Shipping/billing addresses
- **ContactUS**: Customer inquiries

## 🔧 Setup & Installation

### Prerequisites

- Java 17+
- Node.js 18+
- PostgreSQL
- Maven

### Backend Setup

1. Clone the repository
2. Configure PostgreSQL database:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/step_elegance
   spring.datasource.username=postgres
   spring.datasource.password=123456
   ```
3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd StepEleganceFrontEnd
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🌐 Application URLs

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8087
- **Database**: PostgreSQL on localhost:5432

## 📁 Project Structure

```
Step_Elegance33A/
├── src/main/java/com/example/stepelegance/    # Backend source code
│   ├── controller/                            # REST controllers
│   ├── service/                              # Business logic
│   ├── Entity/                               # JPA entities
│   ├── dto/                                  # Data transfer objects
│   ├── repository/                           # Data access layer
│   └── Security/                             # JWT security configuration
├── StepEleganceFrontEnd/                      # Frontend React application
│   ├── src/components/                        # Reusable React components
│   ├── src/Pages/                            # Page components
│   └── src/assets/                           # Static assets
└── src/main/resources/                        # Backend resources
    ├── application.properties                 # Configuration
    └── Images/                               # Product images
```
