export const getAPI =  function (url, params, onSuccess, onFailure) {
  
  fetch(url,params)
  .then((response) => response.json())
  .then((responseJson) => {
      console.log(responseJson)
      onSuccess(responseJson)
  })

  .catch((error) => {
      onFailure(error)
      console.error(error);
  });
}