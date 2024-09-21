import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
  fullwidth?: boolean;  // Default is false
}

const Wrapper: React.FC<WrapperProps> = ({ children, fullwidth = false }) => {
  return (
    <section className={`w-full ${fullwidth ? '' : 'px-5'}`}>
      {children}
    </section>
  );
};

export default Wrapper;
