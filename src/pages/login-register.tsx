import Footer from '../components/footer';
import FormComponent from '../components/form-component';
import Navbar from '../components/navbar';

function LoginRegister() {
  return (
    <div className="login-register-page">
      <Navbar />
      <br />
      <div>
        <strong>LOGIN/REGISTER PAGE</strong>
      </div>
      <br />
      <FormComponent />
      <br />
    </div>
  );
}

export default LoginRegister;
