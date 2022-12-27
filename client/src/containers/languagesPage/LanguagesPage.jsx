import { Link } from 'react-router-dom';
import './LanguagesPage.css';
import AraksLogo from '../../assets/logo/araksLogo.svg';

const LanguagesPage = () => (
  <div className="languages-page">
    <div className="logo">
      <img src={AraksLogo} alt="Logo" />
    </div>
    <div className="main">
      <Link to="/">
        <div className="languages-type">
          <h1>ARMENIAN</h1>
          <div className="dot">.</div>
        </div>
      </Link>
      <Link to="/">
        <div className="languages-type">
          <h1>ENGLISH</h1>
          <div className="dot">.</div>
        </div>
      </Link>
      <Link to="/">
        <div className="languages-type">
          <h1>RUSSIAN</h1>
          <div className="dot">.</div>
        </div>
      </Link>

    </div>

  </div>
);

export default LanguagesPage;
