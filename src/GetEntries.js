const getData = () => {
    var responseData = fetch('https://jsonplaceholder.typicode.com/posts')
                       .then(response => response.json())
                       .then(data => data)
    return responseData;
}

export default getData;