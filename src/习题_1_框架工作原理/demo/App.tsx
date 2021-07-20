import React, {useState} from 'react'

function App() {
  const [count, update] = useState(0);
  const add = () => {
    if (count > 0) {
      update(count - 1);
    }
  };

  const del = () => update(count + 1);

  return (
    <div>
      <p>提莫队长正在送命</p>
      <button onClick={del}>点我种蘑菇</button>
      <button onClick={add}>点我踩蘑菇</button>
      <ul>
        {Array(count).fill('🍄').map((what, i) => <li key={i}>{what}</li>)}
      </ul>
    </div>
  )
}

export default App 
