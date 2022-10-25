import { Link } from 'react-router-dom'
import user from './img/rose.jpg';

function App() {
  return <div className="container">
   <div className="profile">
    <img src={user} alt="User Img" className='userImg' />
    <h1 id='twitter'>dosu-roseline</h1>
    <h1 id='slack'>Slack</h1>
   </div>
  <div className="links">
    <a href="https://twitter.com/DosuRoseline" target='blank' id='twitter__link'>Twitter Link</a>
    <a href="https://training.zuri.team/" id="btn__zuri" target='blank'>Zuri Team</a>
    <a href="http://books.zuri.team " id="books" target='blank'>Zuri Books</a>
    <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" id="book__python" target='blank'>Python Books</a>
    <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" id="pitch" target='blank'>Background Check for Coders</a>
    <a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" id="book__design" target='blank'>Design Books</a>
  </div>
  </div>
}

export default App;
