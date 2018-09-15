import axios from 'axios';

export default {

loadPropertyCodes: async() => {
    debugger;
    const url = "http://dummy.restapiexample.com/api/v1/employees";
    const propertyCodes = await axios.get(url);
    return propertyCodes.data;
  }
}
