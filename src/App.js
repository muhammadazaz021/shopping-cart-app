import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store'; // Ensure store.js is set up properly
import { CartProvider } from './components/CartContext'; // Correctly import CartProvider

import './styles.css';

const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./components/Cart'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

function AnimatedApp() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Home /></motion.div>} />
          <Route path="/product/:id" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><ProductDetail /></motion.div>} />
          <Route path="/cart" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Cart /></motion.div>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Provider store={store}>
      <CartProvider> {/* Wrap the app with CartProvider */}
        <Router>
          <Header />
          <AnimatedApp />
        </Router>
      </CartProvider>
    </Provider>
  );
}

export default App;
