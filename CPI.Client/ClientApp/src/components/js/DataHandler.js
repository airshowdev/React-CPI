var address = 'https://localhost:5001/v1';
            /*http://10.10.3.27:1337/v1 */
export default class DataHandler {

    //GET
    //Returns Project
    async getProject(id){
        let response = await fetch(`${address}/projects/${id}`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json"
            },
            redirect: 'follow',
            referrer: 'no-referrer'
        })
        if (response.status !== 200) {
            return response.status;
        } else {
            return response.json();
        }
    }


    //GET
    //Returns [Project]
    async getProjects() {
        let response = await fetch(`${address}/projects`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials:'same-origin',
            headers: {
                "Content-Type": "application/json"
            },
            redirect: 'follow',
            referrer: 'no-referrer'
        });

        if (response.status !== 200) {
            return response.status;
        } else {
            return response.json();
        }
    }

    //PUT
    //Empty response, status code only
    async replaceProject(project, id){
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
        return response.status;
    }


    //PATCH
    //Empty response, status code only
    async modifyProject(project, id){
        let response = await fetch(`${address}/projects/${id}`, {
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
        return response.status;
    }


    //DELETE 
    //Empty response, status code only
    async deleteProject(id){
    let response = await fetch(`${address}/projects/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json"
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        })
        return response.status;
    }
    //POST
    //Empty response, status code only
    async addProject(project) {
        let response = await fetch(`${address}/projects`, {
            method: 'POST',
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

        return response.status;
    }
}