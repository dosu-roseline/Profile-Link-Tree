import user from './img/user.png';
import github from './img/github.svg';
import slack from './img/slack.svg';
import ingressive from './img/ingressive.png';
import zuri from './img/zuri.png';
import camera from './img/Icon.svg';
import dot from './img/dot.png';
import arrow from './img/arrow.png';

function App() {
  return (
    <div className="container">
      <div id="share">
        <img src={arrow} alt="" id='arrow'/>
        <img src={dot} alt="" id='dot'/>
      </div>
      <div id="profile">
        <div className="box">
          <img src={user} alt="User Img" id="profile__img" />
          <img src={camera} alt="Camera Icon" id="icon" />
        </div>
        <h1 id="twitter">dosu-roseline</h1>
        <h1 id="slack">Slack</h1>
      </div>
      <div className="links">
        <a
          href="https://twitter.com/DosuRoseline"
          target="blank"
          id="twitter__link"
        >
          Twitter Link
        </a>
        <a href="https://training.zuri.team/" id="btn__zuri" target="blank">
          Zuri Team
        </a>
        <a href="http://books.zuri.team " id="books" target="blank">
          Zuri Books
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
          id="book__python"
          target="blank"
        >
          Python Books
        </a>
        <a
          href="https://background.zuri.team"
          id="pitch"
          target="blank"
        >
          Background Check for Coders
        </a>
        <a
          href="https://books.zuri.team/design-rules "
          id="book__design"
          target="blank"
        >
          Design Books
        </a>
      </div>
      <div id="social">
        <img src={slack} alt="Slack Icon" />
        <img src={github} alt="GitHub Icon" id="github" />
      </div>
      <footer id="footer">
        <img src={zuri} alt="Zuri Logo" />
        <h1>HNG Intenship 9 Frontend Task</h1>
        <img src={ingressive} alt="14G Logo" />
      </footer>
    </div>
  );
}

export default App;
