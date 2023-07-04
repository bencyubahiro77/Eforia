import React from 'react';
import { ScaleLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <ScaleLoader color="#1f2328" loading={true} height={45} width={8} radius={2} margin={2} />
    </div>
  );
};

export default LoadingSpinner;
