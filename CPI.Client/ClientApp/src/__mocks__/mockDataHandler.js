const fakeProjects = [
    {
        ID:"5bf2ddc27507820c30274604",
                Unit:"595 SCS",
                Creator:"A1C Gabriel Stines",
                Name:"CPI Demo"
            }
    ]

const fakeProject = {
    _id:"5bf2ddc27507820c30274604",
    Name:"CPI Demo",
    MajCom:null,
    Base:"Offutt AFB",
    Creator:"A1C Gabriel Stines",
    Unit:"595 SCS",
    WingDirectorate:null,
    Standard:null,
    Evaluators:[
 
    ],
    TeamLeads:null,
    Facilitators:null,
    Facilitator:null,
    IdentifyPerformanceGap:null,
    ImprovementTarget:null,
    ProcessOwner:null,
    Mentor:null,
    Elements:[
       {
          Goal:"0",
          Actual:"50",
          Name:"1",
          Type:"NVA",
          VA:1,
          NVA:1,
          Labor:null,
          Material:null,
          Other:null,
          Transaction:null
       },
       {
          Goal:"0",
          Actual:"50",
          Name:"2",
          Type:"NVA",
          VA:2,
          NVA:2,
          Labor:null,
          Material:null,
          Other:null,
          Transaction:null
       }
    ],
    Champion:null,
    TeamLeadMeeting:null,
    RootCauses:[
       {
          Description:"Root Cause Example One",
          Countermeasures:[
             {
                Description:"Counter Measure One for Root Cause One",
                ActionOfficer:"",
                Date:"",
                Status:""
             }
          ]
       }
    ],
    DesiredEffects:null,
    DateRange:{
       Begin:"",
       End:""
    },
    ProblemStatement:null
 }

export default class mockDataHandler {

    //GET
    //Returns Project
    async getProject(id) {
        if(id){
        return {
            successful: true,
            data: fakeProject
        }} else {
            return {
                successful: false,
                data: {}
            }
        }
    }

    //GET
    //Returns [Project]
    async getProjects() {
            return {
                successful: true,
                data: fakeProjects
            }
    }

    //PUT
    //Empty response, status code only
    async replaceProject(project, id) {
           return {successful: Boolean(Object(project) === project && id)}
    }

    //PATCH
    //Empty response, status code only
    async modifyProject(project, id) {
        return {successful: Boolean(Object(project) === project && id)}
    }

    //DELETE 
    //Empty response, status code only
	async deleteProject(id) {
		return {successful: Boolean(id)}
    }
    //POST
    //Empty response, status code only
    async addProject(project) {
        return {successful: Boolean(Object(project) === project)}
    }

}