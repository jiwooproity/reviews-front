const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: "So Ji Woo",
            job: 'programmar',
            age: 24,
        })
    }, 500);
});

const onLoad = async () => {
    const data = await promise;
    
    for(let key in data) {
        console.log(`${key} : ${data[key]}`)
    }
}

onLoad();