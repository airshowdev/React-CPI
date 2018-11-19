var address = '/v1';

export default class DataHandler {

    //GET
    //Returns Project
    async getProject(id) {
        return await this.handleResponse(await fetch(`${address}/projects/${id}`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json"
            },
            redirect: 'follow',
            referrer: 'no-referrer'
        }));
    }


    //GET
    //Returns [Project]
    async getProjects() {
        return this.handleResponse(await fetch(`${address}/projects`, {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json"
            },
            redirect: 'follow',
            referrer: 'no-referrer'
        }));
        
    }

    //PUT
    //Empty response, status code only
    async replaceProject(project, id) {
        return this.handleDataEdit(await fetch(`${address}/projects/${id}`, {
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
        }));

    }

    //PATCH
    //Empty response, status code only
    async modifyProject(project, id) {
        return await this.handleDataEdit(await fetch(`${address}/projects/${id}`, {
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
        }));
    }


    //DELETE 
    //Empty response, status code only
	async deleteProject(id) {
		return await this.handleDataEdit(await fetch(`${address}/projects/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json"
            },
            redirect: 'follow',
            referrer: 'no-referrer'
        }));
    }
    //POST
    //Empty response, status code only
    async addProject(project) {
        return await this.handleProjectPost(await fetch(`${address}/projects`, {
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
        }));
    }

    //HANDLE RESPONSE
    async handleResponse(response) {
        if (response.status === 200) {
            console.log(response)
            return {
                successful: true,
                data: await response.json()
            };
        } else {
            return {
                successful: false,
                data: {}
            };
        }
    }
    async handleDataEdit(response) {
        return {
            successful: response.status === 200
        }
    }

    async handleProjectPost(response) {
        if (response.status === 200) {
            return {
                successful: true,
                data: await response.text()
            }
        } else {
            return {
                successful: false,
                data: {}
            }
        }
    }

}