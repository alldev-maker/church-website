import React, { useEffect, useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  loginUser,
  loginUserWithGoogle,
  loginUserWithApple,
} from 'redux/actions';
import SingleLightbox from 'components/pages/SingleLightbox';

import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import { adminRoot } from 'constants/defaultValues';
import logo from 'assets/img/churchnoteslogo.png';
import { validateEmail, validatePassword } from 'helpers/Utils';

const initValues = {
  email: '',
  password: '',
};

const Login = ({
  loading,
  history,
  loginUserAction,
  loginUserWithGoogleAction,
  loginUserWithAppleAction,
}) => {
  const [errors, setErrors] = useState({ ...initValues });
  const [values, setValues] = useState({ ...initValues });
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  useEffect(() => {
    if (Object.keys(errors).some((k) => errors[k] !== undefined)) {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [values]);

  const validate = (name, value) => {
    let trimedValue = value.trim();
    switch (name) {
      case 'email':
        setErrors({
          ...errors,
          [name]: validateEmail(trimedValue),
        });
        break;
      case 'password':
        setErrors({
          ...errors,
          [name]: validatePassword(trimedValue),
        });
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    validate(name, value);
    setValues({ ...values, [name]: value });
  };

  const onUserLogin = (e) => {
    e.preventDefault();
    const checkedValues = Object.values(values).every((v) => v.trim());

    if (loading || isBtnDisabled || !checkedValues) {
      return;
    }

    if (checkedValues) {
      history.push('/app/home');
    }

    loginUserAction(values, history);
  };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="6" className="mx-auto my-auto" style={{}}>
        <Card
          style={{
            padding: '30px',
            textAlign: 'center',
            boxShadow: '1px 3px 10px #9E9E9E',
            backgroundImage: 'linear-gradient(to right, #ff8a93, #ffbf81)',
          }}
        >
          <div className="form-side">
            <div style={{ paddingBottom: '50px' }}>
              <NavLink to="/" className="white">
                <SingleLightbox
                  thumb={logo}
                  large={logo}
                  className="img-thumbnail card-img social-profile-img"
                />
              </NavLink>
            </div>
            <p style={{ fontWeight: 'bold' }} className="text-white h2">
              Welcome To Church Notes
            </p>
            <p className="white mb-0">Please use this form to Login.</p>
            &nbsp; &nbsp;
            <Form>
              <div
                style={{
                  textAlign: 'center',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'left',
                  alignItems: 'left',
                }}
              >
                <Label>Email</Label>
              </div>
              <FormGroup className="form-group has-float-label  mb-4">
                <Input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={(e) => handleChange(e)}
                />
                {errors.email && (
                  <div className="validation-message">{errors.email}</div>
                )}
              </FormGroup>

              <div
                style={{
                  textAlign: 'center',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'left',
                  alignItems: 'left',
                }}
              >
                <Label>Password</Label>
              </div>
              <FormGroup className="form-group has-float-label  mb-4">
                <Input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={(e) => handleChange(e)}
                />
                {errors.password && (
                  <div className="validation-message">{errors.password}</div>
                )}
              </FormGroup>

              <NavLink to="/app/home" className="white">
                <Button
                  style={{ width: '200px' }}
                  color="primary"
                  className="btn-shadow"
                  size="lg"
                  onClick={(e) => onUserLogin(e)}
                  disabled={isBtnDisabled}
                >
                  {loading ? (
                    <Spinner color="light" size="sm" className="mb-1" />
                  ) : (
                    <IntlMessages id="user.login-button" />
                  )}
                </Button>
              </NavLink>

              <br />
              <br />
              <div>
                <Row className="mb-4">
                  <Colxx xxs="12" lg="6">
                    <Button
                      color="primary"
                      className="btn-shadow"
                      size="lg"
                      onClick={() => loginUserWithGoogleAction(history)}
                    >
                      <IntlMessages id="user.login-with-google-button" />
                    </Button>
                  </Colxx>
                  <br />
                  <br />
                  <Colxx xxs="12" lg="6">
                    <Button
                      color="primary"
                      className="btn-shadow"
                      size="lg"
                      onClick={() => loginUserWithAppleAction(history)}
                    >
                      <IntlMessages id="user.login-with-apple-button" />
                    </Button>
                  </Colxx>
                </Row>
              </div>

              <p style={{ color: 'white', paddingTop: '20px' }}>
                Don't have an account?{' '}
                <NavLink to="/user/register" className="white">
                  <p style={{ fontWeight: 'bold' }}>Register</p>
                </NavLink>
              </p>
            </Form>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};
const mapStateToProps = ({ authUser }) => ({ loading: authUser.loading });

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
  loginUserWithGoogleAction: loginUserWithGoogle,
  loginUserWithAppleAction: loginUserWithApple,
})(Login);
