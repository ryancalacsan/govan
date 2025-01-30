# 🚐 GoVan – Mock Van Hosting & Rental Platform

GoVan is a **mock van hosting and rental website** designed as a personal project. It showcases **camping and adventure vans**, allowing users to browse, filter, and view detailed listings.

- 🏕️ **For Renters:** Explore available vans, filter listings, and view details.
- 👨‍🏢 **For Hosts:** Access a dashboard to manage listings, track income, and view analytics.
- 🔒 **Authentication:** Simulated login for now (Firebase authentication planned).
- 💽 **Data Storage:** Firestore powers data persistence.
- 🎡 **Mock API:** Uses MirageJS for local development and testing.

**🌍 Live Demo:** [GoVan](https://govan-dev.netlify.app/)

---

## 🚀 Features

✔ **Van Listings** – Browse and filter vans by type and price.\
✔ **Van Details** – View comprehensive information about each van.\
✔ **Host Dashboard** – Manage listed vans, track income, and view interactive charts.\
✔ **Authentication** – Firebase authentication for secure login (upcoming).\
✔ **Dynamic Charts** – Uses Chart.js for data visualization.\
✔ **Firestore Database** – Persistent data storage.\
✔ **MirageJS Mocking** – Retained for testing and local development.\
✔ **Mock Reviews** – Integrated into the host dashboard view.\
✔ **Responsive Design** – Fully optimized for various screen sizes.

### 🔬 Upcoming Features:

- 🔄 **Redux Implementation** – Enhanced state management.
- 📍 **Google Maps Integration** – Display van pickup locations.
- 💬 **Reviews & Ratings** – User-generated reviews for hosts and vans.
- 🗓 **Booking System** – Availability calendar for rentals.
- 💳 **Payment Processing** – Enable real bookings.

---

## 🛠 Tech Stack

| Technology               | Purpose                                         |
| ------------------------ | ----------------------------------------------- |
| **React**                | UI library for building components              |
| **Vite**                 | Fast build tool for React apps                  |
| **TypeScript**           | Static typing for better development experience |
| **MirageJS**             | Mock API for backend simulation                 |
| **Firebase (Firestore)** | Database for van listings and authentication    |
| **Tailwind CSS**         | Utility-first CSS framework                     |
| **React Router**         | Client-side navigation                          |
| **Chart.js**             | Data visualization for host dashboard           |
| **Netlify**              | Hosting and deployment                          |

---

## 🌐 API & Data Storage

GoVan uses **Firestore** as its primary database while **MirageJS** is retained for testing.

| Method | Endpoint           | Description                                |
| ------ | ------------------ | ------------------------------------------ |
| GET    | `/api/vans`        | Fetch all vans from Firestore              |
| GET    | `/api/vans/:id`    | Fetch van details by ID from Firestore     |
| GET    | `/api/host/vans`   | Fetch all vans owned by the logged-in host |
| GET    | `/api/host/income` | Fetch income data for the host             |
| POST   | `/api/login`       | Authenticate a user (mock)                 |

> 🚀 **Firestore now powers data storage**, but MirageJS remains available for local development and testing.

---

## 🛠️ Getting Started

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/YOUR_USERNAME/govan.git
cd govan
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Start the Development Server**

```sh
npm run dev
```

> The app will be available at `http://localhost:5173`.

---

## 💪 Development Roadmap

### ✅ Completed:

✔ Firebase Firestore integration for data storage\
✔ Basic van browsing & filtering\
✔ Host dashboard with earnings visualization\
✔ Mock reviews integrated\
✔ Netlify deployment

### 🛠 In Progress:

🔄 Redux for state management

### 🔝 Future Enhancements:

📍 Google Maps integration to show van pickup locations\
💬 Reviews & ratings for hosts and vans\
🗓 Booking system with availability calendar\
💳 Payment processing for real rentals

---

## 📁 Project Structure

```
📚 src
 ┣ 📂 components      # Reusable UI components
 ┃ ┣ 📂 charts       # Data visualization components
 ┃ ┃ ┣ 📄 LineChart.tsx
 ┃ ┣ 📄 Alert.tsx    # Global alert component
 ┃ ┣ 📄 Footer.tsx
 ┃ ┣ 📄 Header.tsx
 ┣ 📂 layouts         # Page layout components
 ┃ ┣ 📄 Layout.tsx    # Main layout
 ┃ ┣ 📄 HostLayout.tsx # Host dashboard layout
 ┣ 📂 lib             # Utility functions, API calls
 ┃ ┣ 📂 api          # Firestore & API interactions
 ┣ 📂 hooks           # Custom hooks (e.g., Firebase, data fetching)
 ┣ 📂 auth            # Authentication logic
 ┃ ┣ 📄 AuthRequired.tsx # Protects private routes
 ┣ 📂 pages           # Page components
 ┃ ┣ 📂 HostDashboard # Host dashboard pages
 ┃ ┃ ┣ 📄 Dashboard.tsx
 ┃ ┃ ┣ 📄 HostVanDetail.tsx
 ┃ ┃ ┣ 📄 HostVanInfo.tsx
 ┃ ┃ ┣ 📄 HostVanPhotos.tsx
 ┃ ┃ ┣ 📄 HostVanPricing.tsx
 ┃ ┃ ┣ 📄 HostVans.tsx
 ┃ ┃ ┣ 📄 Income.tsx
 ┃ ┃ ┣ 📄 Reviews.tsx
 ┃ ┣ 📂 Vans         # Van listing pages
 ┃ ┃ ┣ 📄 VanDetail.tsx
 ┃ ┃ ┣ 📄 Vans.tsx
 ┃ ┣ 📄 About.tsx
 ┃ ┣ 📄 Home.tsx
 ┃ ┣ 📄 Login.tsx
 ┃ ┣ 📄 NotFound.tsx
 ┣ 📂 types           # TypeScript types
 ┃ ┣ 📄 types.ts
 ┣ 📄 index.css       # Global styles
 ┣ 📄 index.tsx       # App entry point
```

---

## 🚧 Contributing

Contributions are welcome! Follow these steps to contribute:

1. **Fork the Repository**
2. **Create a New Branch** (`git checkout -b feature-name`)
3. **Commit Your Changes** (`git commit -m "Add feature"`)
4. **Push to Your Branch** (`git push origin feature-name`)
5. **Open a Pull Request**

For major changes, please open an issue first to discuss the proposed modifications.

---

## 📚 License

This project is licensed under the **GNU General Public License 3.0**. See the [LICENSE](LICENSE) file for details.

---

💙 **Built with love by Ryan Calacsan** 🚐✨
