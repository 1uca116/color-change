import './index.css';
import { useState } from 'react';

const Swatches = () => {
  const [hex, setHex] = useState('#ffff');
  const randomizedHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setHex(randomColor);
  };
  return (
    <div>
      <div
        onMouseMove={randomizedHex}
        className='swatches_container'
        style={{ backgroundColor: `${hex}`, height: '100vh' }}
      >
        <div className='info'>
          <h2 className='info_name'>{hex}</h2>
          <small>Click to Save</small>
        </div>
      </div>
    </div>
  );
};
export default Swatches;
