function App() {
  function main() {
    return Math.random() * 10;
  }
setInterval(() => {
  console.log(main());
}, 1000);
  return (
    <>
    <h1>Welcome {main()} Bhau</h1>
    </>
  )
  
  
}

export default App
