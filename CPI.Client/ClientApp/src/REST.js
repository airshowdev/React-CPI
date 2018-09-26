export default class REST {
    Post = function (data, controller, action) {
        console.log(data + controller + action);
        //var request = new XMLHttpRequest();
        //request.open('POST', 'http://localhost:50285/' + controller + '/' + action, true);
        //request.setRequestHeader('Content-Type', 'application/json', charset = UTF = 8);
        //request.send(data);
    };
    Get = function (json, controller, action) {
        
    };
}

export function Post(data, controller, action) {
    console.log(data + controller + action);
}