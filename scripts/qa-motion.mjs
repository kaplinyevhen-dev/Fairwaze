import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const browser = await chromium.launch({executablePath:process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',headless:true});
const url = process.env.QA_URL || 'http://127.0.0.1:3017';
const output = process.env.QA_OUTPUT || 'qa-motion';
await fs.mkdir(output,{recursive:true});
const results=[];
try {
  for(const width of [375,768,1024,1600]) {
    const page=await browser.newPage({viewport:{width,height:900}});
    const errors=[]; page.on('pageerror',e=>errors.push(e.message));
    await page.goto(url,{waitUntil:'networkidle'});
    await page.waitForTimeout(1000);
    assert.equal(await page.locator('.canvas-section').count(),11);
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    const images=await page.evaluate(()=>[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src));
    assert.deepEqual(images,[]);
    const scan=page.locator('.qr-scan-sweep');
    await scan.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    const a=await scan.evaluate(e=>getComputedStyle(e).transform);
    await page.waitForTimeout(350);
    const b=await scan.evaluate(e=>getComputedStyle(e).transform);
    assert.notEqual(a,b,'QR must move while in view');
    await page.screenshot({path:`${output}/qr-${width}.png`});
    await page.getByRole('button',{name:'Pause animations',exact:true}).click();
    assert.equal(await scan.evaluate(e=>e.getAnimations().length),0);
    const base=await page.locator('[data-node-id]').evaluateAll(es=>es.map(e=>({id:e.dataset.nodeId,transform:getComputedStyle(e).transform,rect:[e.getBoundingClientRect().width,e.getBoundingClientRect().height]})));
    await page.getByRole('button',{name:'Resume animations',exact:true}).click();
    await page.waitForTimeout(850);
    await page.getByRole('button',{name:'Pause animations',exact:true}).click();
    const after=await page.locator('[data-node-id]').evaluateAll(es=>es.map(e=>({id:e.dataset.nodeId,transform:getComputedStyle(e).transform,rect:[e.getBoundingClientRect().width,e.getBoundingClientRect().height]})));
    assert.deepEqual(after,base,'Paused state must restore original geometry and transforms');
    await page.emulateMedia({reducedMotion:'reduce'});
    assert.equal(await page.locator('.viewport-bottom-fade').evaluate(e=>getComputedStyle(e).display),'none');
    assert.equal(await scan.evaluate(e=>e.getAnimations().length),0);
    await page.emulateMedia({reducedMotion:'no-preference'});
    if(width===375){
      await page.getByRole('button',{name:'Open navigation menu'}).click();
      assert(await page.getByRole('navigation',{name:'Mobile navigation'}).isVisible());
      await page.keyboard.press('Escape');
    }
    assert.deepEqual(errors,[]);
    results.push({width,images:'all loaded',horizontalOverflow:false,qrMoves:true,pauseRestoresGeometry:true,reducedMotion:true,errors});
    await page.close();
  }
  const context=await browser.newContext({reducedMotion:'reduce',viewport:{width:1600,height:900}});
  const p=await context.newPage();await p.goto(url,{waitUntil:'networkidle'});
  assert.equal(await p.locator('.qr-scan-sweep').evaluate(e=>e.getAnimations().length),0);
  await p.screenshot({path:`${output}/desktop-static.png`});
  await context.close();
} finally {await browser.close();}
await fs.writeFile(`${output}/results.json`,JSON.stringify(results,null,2));
console.log(JSON.stringify(results,null,2));
