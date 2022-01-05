import * as axios from 'axios'

const apiFirebase = axios.create({
    baseURL: 'https://todo-redux-3b0de-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default apiFirebase