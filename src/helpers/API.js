export default class API{
    static retrieveFlights(departure, arrival){
        return fetch('http://localhost:3003/getflights', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({departure, arrival})
        })
        .then(resp => resp.json())
    }

}

