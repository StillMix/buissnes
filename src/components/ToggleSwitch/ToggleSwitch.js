import React, { useState } from 'react';
import './ToggleSwitch.css'; // Подключаем стили для переключателя

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false); // Состояние переключателя

  const toggleChecked = () => {
    setIsChecked(prevState => !prevState); // Изменяем состояние переключателя
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="toggle"
        className="toggle-switch-checkbox"
        checked={isChecked}
        onChange={toggleChecked}
      />
      <label className="toggle-switch-label" htmlFor="toggle">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
