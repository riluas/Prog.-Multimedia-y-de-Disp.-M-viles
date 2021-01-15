
const promise = new Promise((resolve, reject) =>{
    const request = new XMLHttpRequest();
    request.timeout = 5;
    request.open('GET','https://jsonplaceholder.typicode.com/posts/1');

    request.onload = () =>{
        if (request.status === 200) {
            resolve(request.response);
        }else{
            reject('Algo ha ido mal');
        }
    }
    request.send();
})

const promiseResult = promise.then((resolvedResult) => {
    const result = JSON.parse(resolvedResult);
    console.log(result);
},(rejectResult)=>{
 console.error(rejectResult);
});

console.log('This is a test after the promise');