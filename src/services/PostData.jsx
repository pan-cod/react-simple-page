/*
 * Fetch native method https://facebook.github.io/react-native/docs/network
 */

const PostData = (type, userData) => {
  const API_URL = ' https://recruitment-api.pyt1.stg.jmr.pl/';

  return new Promise((resolve, reject) => {
    fetch(API_URL + type, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(resp => resp.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
};

export default PostData;
