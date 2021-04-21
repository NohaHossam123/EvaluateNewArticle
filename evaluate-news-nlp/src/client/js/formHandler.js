function handleSubmit(e) {
    e.preventDefault()

    let inputURL = document.getElementById('URL').value;
    let results = document.getElementById('results');
    let error = document.getElementById('error');
    
    if(Client.URLValidation(inputURL)){
        error.style.display = 'none';
        fetch(`http://localhost:5000/article?url=${inputURL}`)
        .then(res =>res.json())
        .then(data =>{
            document.getElementById('agreement').innerHTML = `Argeement: ${data.agreement}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
            document.getElementById('confidence').innerHTML = `Confidance: ${data.confidence}`;
        })
        .catch(err=>console.log(err))
    }else{
        results.style.display = 'none';
        error.innerHTML = "Invalid URL,You should enter a valid URL!"
    }
}

export { handleSubmit }