export default class DataHandler {

    async getProject(id) {
        let project = await fetch('api/Project/GetProjectAsync?id=' + id);
        return project.json();
    }

    async getDataCollection(id) {
        return (await this.getProject(id)).DataCollection;
    }

    async getAnalyzeData(id, component) {
        let project = await this.getProject(id);
        component.setState({ loading: false, championGoal: project.Champion.Goal, Type: project.DataCollection.Type });
    }

    async getMeetWithChampion(id, component) {
        let project = await this.getProject(id);
        component.setState({ project: project, loading: false });
    }

    async getMeetWithTeamLead(id, component) {
        let project = await this.getProject(id);
        component.setState({ project: project, dateBeginTemp: project.TeamLeadMeeting.DateRange.begin, dateEndTemp: project.TeamLeadMeeting.DateRange.end, loading: false, SIPOC: project.TeamLeadMeeting.SipocRows })
    }

    async getNVADataCollection(id, component) {
        let project = await this.getProject(id);
        component.setState({ Elements: project.DataCollection.Elements, loading: false, championGoal: project.Champion.Goal, Type: project.DataCollection.Type })
    }

    async getProjectInfo(id, component) {
        let project = await this.getProject(id);
        if (project.TeamLeads) {
            component.setState({ project: project, loading: false })
        }
    }
}