import FormRow from '../components/FormRow.component';
import Logo from '../components/Logo.components';
import Modal from '../components/Modal.component';
import Background from '../components/BackGround.component';

const Login = () => {
    return (
        <>
            <Background />
            <form className="form">
                <div className='top-title'>
                    <Logo />
                    <h1 className='title-login-page'>Kids Choice Awards</h1>
                </div>

                {/* email filed */}
                <FormRow
                    type='email'
                    name='Email:'
                />

                {/* Password filed */}
                <FormRow
                    type='password'
                    name='Password:'
                />
                <button className='btn btn-block'>Log In</button>
            </form>
        </>
    );
};


export default Login;