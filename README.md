# Blog Application

A responsive blog application built with **Next.js** and **Tailwind CSS** that fetches posts from an API, supports infinite scrolling, scroll-to-top functionality, and dynamic tag generation.

---

## Installation and Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/webcraft0123/nextjs-blog.git
   cd blog-app
   ```

2. **Install Dependencies**
   Install the required Node.js dependencies:

   ```bash
   npm install
   ```

3. **Run the Development Server**
   Start the Next.js development server:

   ```bash
   npm run dev
   ```

4. **Access the Application**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Explanation of Approach

This project was designed to demonstrate key features of a modern blog application:

### 1. Responsive Design

- Built with **Tailwind CSS** for responsive layouts.
- The application includes a grid-based design for the homepage and ensures compatibility across devices.

### 2. Fetching Data

- Posts are fetched from the `https://jsonplaceholder.typicode.com/posts` API using Next.js's `fetch`.
- Tags are manually generated for each post since the API does not include them.

### 3. Dynamic Routing

- Post details are implemented using Next.js dynamic routes (`/post/[id]`).
- The `getStaticProps` and `getStaticPaths` methods are used to statically generate post detail pages.

### 4. Tag Filtering

- Tags are dynamically generated based on post titles.
- Users can filter posts by selecting one or more tags. The list of displayed posts updates accordingly.

---

## Advanced Features

### 1. Infinite Scrolling

- **Purpose**: Efficiently load a large number of posts in chunks without overloading the browser.
- **Implementation**:
  - The first 12 posts are displayed initially.
  - Additional posts are fetched and appended dynamically as the user scrolls down.
  - This is achieved using the `react-infinite-scroll-component` library.
- **Benefits**:
  - Reduces initial page load time.
  - Enhances user experience for long content lists.

### 2. Scroll-to-Top Button

- **Purpose**: Allows users to quickly return to the top of the page after scrolling.
- **Implementation**:
  - The button appears after the user scrolls down 300px.
  - Clicking the button smoothly scrolls the page to the top.
  - This was implemented using the `react-scroll-to-top` library for simplicity and smooth animations.
- **Benefits**:
  - Improves navigation in long lists.
  - Adds a polished, user-friendly touch to the application.

### 3. Manual Tag Generation

- **Purpose**: Tags were added manually since the API response did not include them.
- **Implementation**:
  - A function generates tags for each post based on predefined keywords (e.g., `#Company Updates`, `#Education`).
  - Ensures each post has at least one tag and randomly assigns others.
- **Benefits**:
  - Enhances the filtering feature and allows dynamic content interactions.

---

## Features Summary

- Responsive grid-based design.
- Dynamic routing for post detail pages.
- Infinite scrolling for seamless content loading.
- Scroll-to-top functionality for improved navigation.
- Tag-based filtering for personalized content display.
