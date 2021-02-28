import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8400/api/test/';

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', {headers: authHeader()});
    }

    getModeratoBoard(){
        return axios.get(API_URL + 'mod', {headers: authHeader()});
    }
}

export default new UserService();