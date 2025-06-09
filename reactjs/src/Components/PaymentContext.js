import React, { createContext, useState } from 'react';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [amount, setAmount] = useState(0);

  return (
    <PaymentContext.Provider value={{ amount, setAmount }}>
      {children}
    </PaymentContext.Provider>
  );
};