var address = 'http://10.10.3.27:1337/v1';

export default class DataHandler {

    //GET
    //Returns Project
    async getProject(id){
        let response = await fetch(`${address}/projects/${id}`)
        return response.json();
    }


    //GET
    //Returns [Project]
    async getProjects() {
        let response = await fetch(`${address}/projects`);
        return response.json();
    }

    //PUT
    //Empty response, status code only
    async replaceProject(project, id){
        let response = await fetch(`${address}/projects${id}`, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json"
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(project)
        })
        return response.json();
    }


    //PATCH
    //Empty response, status code only
    async modifyProject(project, id){
        let response = await fetch(`${address}/projects${id}`, {
            method: 'PATCH',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json"
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(project)
        })
        return response.json();
    }


    //DELETE 
    //Empty response, status code only
    async deleteProject(project){
    let response = await fetch(`${address}/projects/${id}`, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json"
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(project)
        })
        return response.json();
    }
    //POST
    //Empty response, status code only
    async addProject(project) {
        let response = await fetch(`${address}/projects`, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json"
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(project)
        });

        return response.json();
    }
}