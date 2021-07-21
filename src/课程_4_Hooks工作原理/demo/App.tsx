import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'

function App() {
  const [num, updateNum] = useState(0);
  const numRef = useRef(num);

  useEffect(() => {
    numRef.current = num;
  }, [num])

  const onClick = useCallback(() => updateNum(num + 1), [num])

  const doubleNum = useMemo(() => num * 2, [num])

  return (
    <div onClick={onClick}>
      <p>num: {num}</p>
      <p>doubelNum: {doubleNum}</p>
    </div>
  )
}

export default App
