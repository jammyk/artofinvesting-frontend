import { getJwt } from './jwt';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const HEADER_PAYLOAD_COOKIE = 'jwt_header_payload';
const SIGNATURE_COOKIE = 'jwt_signature';
const MAX_AGE = 1800;

// header.payload.signature

export const getHeaderPayloadCookie = () => { return cookies.get(HEADER_PAYLOAD_COOKIE); }
export const getSignatureCookie = () => { return cookies.get(SIGNATURE_COOKIE); }
export const isAuthenticated = () => { return !!getHeaderPayloadCookie(); }

// to be set by server
export const authenticate = async () => {
    if (getHeaderPayloadCookie()) {
        cookies.set(HEADER_PAYLOAD_COOKIE, 'something', { secure: true, maxAge: MAX_AGE, sameSite: true })
        cookies.set(SIGNATURE_COOKIE, 'value', { secure: true, httpOnly: true, sameSite: true })
    }
}

export const signOut = () => {
    if (isAuthenticated()) {
        cookies.remove(HEADER_PAYLOAD_COOKIE);
    }
}

export const testAuthentication = () => {
    cookies.set(HEADER_PAYLOAD_COOKIE, 'test', { maxAge: MAX_AGE, sameSite: true});
}

export const redirectToLogin = (context) => {
    context.props.history.push({ pathname: '/login', state: { isModalVisible: true } });
}

export const getUser = (context) => {
    const jwt = getJwt();
    console.log(jwt);
    if (!jwt) {
        redirectToLogin(context);
    } else {
        console.log('Logged in');
        context.setState({ user: { loggedIn: true } })
        // axios.get('/getUser/', { headers: { 
        //     Authorization: 'Bearer ${jwt}'
        // }}).then(res => { 
        //     this.setState({
        //         user: res.data
        //     });
        // }).catch(err => {
        //     redirectToLogin(context);
        // })
    }
}