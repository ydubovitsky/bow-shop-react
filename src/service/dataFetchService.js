import axios from 'axios';

export const dataFetch = async (options) => {

  console.log('Send query with options: ' + JSON.stringify(options));

  const result = await axios(options)
    .then(data => console.log(data))
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });

  return result;
}