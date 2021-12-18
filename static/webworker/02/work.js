onmessage = e => {
    console.log('워커 처리중')
    for(let i=0;i<99999;i++){
        for(let j=0;j<99999;j++){
            data = i+j
        }
    }
    let workerResult = e.data + 'a'
    console.log('워커 처리완료')
    postMessage(workerResult);
}