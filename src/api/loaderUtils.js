import axios from 'axios';
import Data from '../data/loginData.json';
export default {

  loadPropertyCodes: async () => {
    const url = "http://dummy.restapiexample.com/api/v1/employees";
    const propertyCodes = await axios.get(url);
    return propertyCodes.data;
  },
  getLoginAuth: async () => {
    const data = Data;
    debugger;
    return data;
  }
}
