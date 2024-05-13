import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Button2 from './Button2.jsx'
import Student from './Student.jsx'

function App() {
  return(
    <>
      <Header/>
      <Button/>
      <Button2/>
      <Card/>
      <Card/>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student/>
      <Food/>
      <Food/>
      <Footer/>
    </>
  );
}

export default App
