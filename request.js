class Request{
    constructor(){
        this.url="https://type.fit/api/quotes"
    }

    getRequest(){
        return new Promise((resolve,reject)=>{
            fetch(this.url)
            .then(reponse => reponse.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
            
        
    }



}

