# Tavola Restaurant

Tavola Restaurant is a premium restaurant website built with React. The project focuses on a warm dining experience, elegant food presentation, responsive layouts, dark mode support, reusable UI components, menu browsing, shop items, reservation handling, and restaurant content pages.

## Tech Stack

- React
- Vite
- React Router
- Redux Toolkit
- React Redux
- createAsyncThunk
- Axios
- Tailwind CSS
- Lucide React icons
- Remix Icon React icons
- Path alias with `@`
- ESLint

## Main Features

- Multi-page routing with `React Router`
- Shared layout with `Navbar`, `Outlet`, and `Footer`
- Light and dark mode with Redux state
- Dynamic logo switching between light and dark themes
- Menu data loading through Redux async thunk
- Axios service layer with fallback local data
- Reservation form with controlled inputs, validation, loading state, and success feedback
- Responsive restaurant homepage with hero, featured food, chefs, testimonials, gallery, and blog preview
- Shop page for restaurant products
- Scroll-to-top button using `useEffect` cleanup
- Reusable components such as `FoodCard`, `ChefCard`, `BlogCard`, `SectionTitle`, `PrimaryButton`, and `ReservationForm`

## Project Structure

```txt
src/
  assets/
  components/
    common/
  data/
  features/
    about/
    blog/
    contact/
    gallery/
    home/
    menu/
    reservation/
    shop/
  layouts/
  routes/
  services/
  store/
```

## State Management

Redux Toolkit is used only for global or async state:

- `themeSlice` controls light and dark mode.
- `menuSlice` loads menu items with `createAsyncThunk`.
- `reservationSlice` handles reservation submission status.

Local component state is used for form values, menu filters, mobile navigation, and temporary UI state.

## API Layer

The project uses a dedicated service file:

```txt
src/services/restaurantApi.js
```

Axios is configured there instead of being called directly inside components. If the API request fails, the app falls back to local restaurant data so the website still works during development.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Design Direction

The UI follows a premium restaurant style:

- Warm orange/gold primary color
- Deep red accent color
- Cream and dark surfaces
- Large food imagery
- Rounded cards and buttons
- Soft shadows
- Responsive mobile-first layout
- Accessible labels, focus states, and semantic buttons/links
