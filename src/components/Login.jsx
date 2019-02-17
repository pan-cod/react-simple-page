/*
 * Followed https://reactjs.org/docs/forms.html#controlled-components
 * and https://reactjs.org/docs/conditional-rendering.html
 */
import React from 'react';
import PostData from '../services/PostData';
import style from '../styles/app.scss';

const btnClasses = `${style.cBtn} ${style.cBtn__primary} ${style.cBtn__large}`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      isLogged: false,
      erorr: false,
      response: [],
    };
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
    this.handleSubmitLogout = this.handleSubmitLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmitLogin(e) {
    PostData('login', this.state).then(result => {
      const responseJson = result;
      if (responseJson.status === 'ok') {
        this.setState({ isLogged: true, response: responseJson });
        sessionStorage.setItem('message', responseJson.message);
      } else {
        this.setState({ response: responseJson });
      }
    });
    e.preventDefault();
  }

  handleSubmitLogout(e) {
    sessionStorage.setItem('message', '');
    sessionStorage.clear();
    this.setState({ isLogged: false, response: [] });
    e.preventDefault();
  }

  render() {
    const { response } = this.state;
    const { isLogged } = this.state;

    return (
      <div>
        {isLogged || sessionStorage.getItem('message') ? (
          <div className={style.cLogin__form}>
            <p className={style.cLogin__message}>
              {response.message || sessionStorage.getItem('message')}
            </p>
            <form onSubmit={this.handleSubmitLogout}>
              <input className={btnClasses} type="submit" value="Log out" />
            </form>
          </div>
        ) : (
          <form
            className={style.cLogin__form}
            onSubmit={this.handleSubmitLogin}
          >
            <input
              className={style.cLogin__input}
              type="email"
              name="login"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <input
              className={style.cLogin__input}
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <span className={style.cLogin__wrong}>{response.message}</span>
            <input className={btnClasses} type="submit" value="Log in" />
          </form>
        )}
      </div>
    );
  }
}

export default Login;
