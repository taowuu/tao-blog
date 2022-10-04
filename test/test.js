const ajax1 = (method, url) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                console.log(xhr)
            }
        }
    }
}

const ajax2 = url => {
    return fetch(url).then(res => console.log(res))
}

ajax1('GET', 'https://cdn2.thecatapi.com/images/ebv.jpg')
ajax2('https://cdn2.thecatapi.com/images/ebv.jpg')
