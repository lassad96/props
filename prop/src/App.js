
import './App.css';
import profile from './component/profile/Profile';
import imageslt from './imageslt.jpg';

const App = () => {
  const hundleName =(x)=>{
    alert(profile for:$(x))
  }
  return(
    <div style={{textAlign:"center", backgroundcolor:"gray", position:"relative", display:"block", border:"2px solid black", borderRadius:"20px"}}>
      <profile bio="Now I am studying fullstackjava" profession="Ingenieur" hundleName={hundleName}>
        <img src={imageslt} alt=' my photo' />
      </profile>
    </div>
  )
}
export default App;
