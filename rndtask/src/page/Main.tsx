import React, { useState, useEffect } from 'react';
import axios from 'axios';

type InputType = {
  x1: number;
  x2: number;
  x3: number;
  x4: number;
  x5: string;
  x6: string;
};

function Main() {
  const [input, setInput] = useState<InputType>({ x1: 0, x2: 0, x3: 0, x4: 0, x5: '', x6: '' });
  const [output, setOutput] = useState(null);

  const handleInput = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/predict', input);
      setOutput(response.data.y);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='x1' type='number' value={input.x1} onChange={handleInput} />
        <input name='x2' type='number' value={input.x2} onChange={handleInput} />
        <input name='x3' type='number' value={input.x3} onChange={handleInput} />
        <input name='x4' type='number' value={input.x4} onChange={handleInput} />
        <input name='x5' type='string' value={input.x5} onChange={handleInput} />
        <input name='x6' type='string' value={input.x6} onChange={handleInput} />
        <button type='submit'>Predict</button>
        <div>Ouput: {output}</div>
      </form>
    </div>
  );
}

export default Main;
