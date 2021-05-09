import './App.css';
import Profile, { ImageChildren } from './component/profile/Profile';

const App = () => {
  const hundleName = (fullName) => {
    alert(fullName)
  }
  return (
    <div style={{
      textAlign: "center",
      backgroundcolor: "red", position: "relative",
      display: "block", border: "2px solid black", borderRadius: "20px"
    }}>
      <Profile fullName='Tajouri Lassad' bio="Now I am studying fullstackjava" profession="Ingenieur" hundleName={hundleName} />
      <ImageChildren>
        Image Children
      </ImageChildren>
    </div>
  )
}
export default App;