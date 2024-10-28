import { Button } from './Button';
import { Footer } from './components/Footer';
import { Archive } from './components/Archive';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { useEffect, useState } from 'react';
import { PostProvider } from './components/PostContext';

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);
  useEffect(
    function () {
      document.documentElement.classList.toggle('fake-dark-mode');
    },
    [isFakeDark]
  );

  return (
    <section>
      <Button
        setIsFakeDark={setIsFakeDark}
        isFakeDark={isFakeDark}
      />
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
