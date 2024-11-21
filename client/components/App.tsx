import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
    <ChakraProvider>
      <header className="header">
        <h1>My Collection ho hay</h1>
      </header>
      <section className="main">{/* add your code here */}</section>
      </ChakraProvider>
    </>
  )
}

export default App
