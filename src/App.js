import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';
import UserCard from './UserCard';
import ChangeCard from './ChangeText';
import Button from './Button';

function App() {
  const [show, setShow] = useState(true);

  const userData = {
    name: 'Александра Осадчий'
  };

  return (
    <div className="App">
      <Header />
      <p>Это ваше первое React-приложение.</p>
      <UserCard name="Александра" age="20" />
      {show ? <Counter /> : null}
      <button onClick={() => setShow(!show)}>
        Нажми, чтобы скрыть/показать
      </button>
      <Profile name={userData.name} photo={userData.photo} description={userData.description} />
      <ChangeCard />
      <Button buttontext="Click" />
      <Footer />
    </div>
  );
}

export default App;