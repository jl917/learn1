let i = 0;

let wk = () => {
    setInterval(()=> {
        postMessage(++i)
    }, 500)
}

wk()