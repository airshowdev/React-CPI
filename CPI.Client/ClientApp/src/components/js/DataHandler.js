export default class DataHandler {

    getProject = (id) => {
        return fetch('api/Project/GetProjectAsync?id=' + id)
            .then(response => response.json())
            .then(data => data);
    }

    getDataCollection = (id) => {
        return fetch('api/Project/GetProjectAsync?id=' + id)
            .then(response => response.json())
            .then(data => { return data.DataCollection });
    }



}