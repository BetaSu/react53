import React, { useState } from 'react'

function App() {
  return (
    <GrandParent/>
  )
}

function GrandParent() {
  return (
    <Parent/>
  )
}

function Parent() {
  const [num, updateNum] = useState(0);
  return <Child num={num} onChange={updateNum}/>;
}

function Child({num, onChange}: {num: number; onChange: (num: number) => void;}) {
  return <div onClick={() => onChange(num + 1)}>当前值是：{num}，点我后看console日志</div>;
}

export default App
