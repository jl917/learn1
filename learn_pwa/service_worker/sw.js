let version = 'v39'
let run_count = 0

this.addEventListener('install', function (event) {

    event.waitUntil(

        caches.keys().then(function(keys){
            if(keys.indexOf(version) != -1){
                this.skipWaiting()
            }else{
                caches.open(version).then(function (cache) {
                    return cache.addAll([
                        '/',
                        '/index.html',
                        '/main.css',
                        '/main.js'
                    ]);
                }).catch( function (err) {
                    console.log(err)
                })
            }
            //caches.delete(key);
            keys.map(function(key){
                if(key != version){
                    caches.delete(key)
                }
            })
        })

        
    );
});



this.addEventListener('fetch', function (event) {
    console.log(run_count++ + 'fetch' + event.request.url)
    event.respondWith(
        
        caches.match(event.request).then(function (response) {


            
            // 如果 service worker 没有返回，那就得直接请求真实远程服务
            return fetch(event.request).then(function (response) {
                // 请求成功的话，将请求缓存起来。
                var responseClone = response.clone();
                caches.open(version).then(function (cache) {
                    cache.put(event.request, responseClone);
                });

                return response;
            }).catch(function(err){
                return response
            })
            ;
        })
    );
});


this.addEventListener('activate', function (event) {
    console.log(run_count++)
    console.log('activate')
});
