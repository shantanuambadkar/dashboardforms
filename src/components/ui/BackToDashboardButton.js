import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Common.css';

function BackToDashboardButton() {
  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate('/');
  };
  return (
    <img
      className="cursor-pointer"
      alt="Black color Back Button"
      onClick={goToDashboard}
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVR4nO3VPUpDQRRA4U+IlindQ9bhCgTdR7rUWgWyglT2NhaCjYJdAsEuYCOKK0gTSBsZGMPwEHyF7we8B04zzRmYOzMEQRDU4xQrXOqAEzxjj0UX8bscT160GR/ioYh/YtBWfITXIp6ctBEeYIxdJZ68xlGT8TOsfwiXbrHJfuAdb3jJLvGYvcdt9gbz7AzT7IGnX8JN2Z8NdH4EdYbwqukh7MU17M1D9M1x5Sn+f59R+R2nCT8/rARBEPgbvgCs35I/roMHywAAAABJRU5ErkJggg=="
    />
  );
}

export default BackToDashboardButton;
