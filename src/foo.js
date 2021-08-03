import axios from "axios"

export var a = () => axios.get("https://bt-21-playground-vppfc.ondigitalocean.app/forecast")
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

a();