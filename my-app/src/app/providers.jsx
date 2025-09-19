'use client';

import { Provider, useSelector, useDispatch } from 'react-redux';
import { store, persistor } from '@/Redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useEffect } from 'react';
import { clearError } from '@/Redux/features/CartSlice';
import { CartDrawerProvider } from '@/context/CartDrawerContext';

// Inner component that listens for errors once globally
function GlobalErrorListener() {
  const dispatch = useDispatch();
  const lastError = useSelector((state) => state.cart.lastError);

  useEffect(() => {
    if (lastError) {
      alert(lastError); // or toast
      dispatch(clearError());
    }
  }, [lastError, dispatch]);

  return null; // no UI
}

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalErrorListener />
        {/* now wrap children with CartDrawerProvider */}
        <CartDrawerProvider>
          {children}
        </CartDrawerProvider>
      </PersistGate>
    </Provider>
  )
}

