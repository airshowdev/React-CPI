export default class REST {
    Post = function (data, controller, action) {
        console.log(data + controller + action);
    };
    Get = function (json, controller, action) {
        
    };
}

export function Post(data, controller, action) {
    console.log('yeet?');
    fetch('api/' + controller + '/' + action, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data)
    })
        .then(response => { return response.json(); });
}

