const puppeteer = require('puppeteer');

(async () => {

  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('request',(e) => {
    if(e._url.includes('ajaxProducts')){

    }
    //console.log(e._url)
  })

  page.on('response',async (e) => {
    if(e._url.includes('ajaxProducts')){
      let a = await e.text()
      console.log(a)
      //console.log(e.text())
    }
  })

  await page.goto('http://www.shilladfs.com/estore/kr/ko/Skin-Care/c/1');
  
  
  const divC = await page.$$eval('div', divs => divs.length)
  await page.addStyleTag({content:'body{color:#ff0000}'})
  console.log(divC)
  let html = await page.content()
  
  
  await page.screenshot({path: 'static.png'});

  const snapshot = await page.accessibility.snapshot()
  //console.log(snapshot)

  await browser.close();
})();