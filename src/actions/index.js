import axios from 'axios';

const ROOT_URL = '';

export function get() {
    return (dispatch) => {

       

        axios.get(`${ROOT_URL}`)
            .then((response) => {

                // dispatch({
                //     type: ACTION,
                //     payload: RESPONSE
                // });

            }).catch((error) => {
            
            })
    }
}
