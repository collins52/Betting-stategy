const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // Launch browser in visible mode
  const page = await browser.newPage();

  // Open the URL
  await page.goto('https://www.sportybet.com/ng/games?source=TopRibbon', { waitUntil: 'networkidle2' });

  // Wait for the image element with the specified URL and click it
  await page.waitForSelector('img[src="https://s.sporty.net/sportygames/lobby_banner/1732541503678.png"]');
  await page.click('img[src="https://s.sporty.net/sportygames/lobby_banner/1732541503678.png"]');

  // Wait for the "No" button and click it
  await page.waitForSelector('button.btn-secondary');
  await page.click('button.btn-secondary');

  console.log('Image clicked and button pressed successfully!');

  // Optionally close the browser
  // await browser.close();
})();

// input phone
<input type="text" name="phone" value="" autocomplete="off" placeholder="Mobile Number" class="fs-exclude"></input>

// input password
{/* <input type="password" name="psd" value="" autocomplete="off" placeholder="Password" class="fs-exclude"></input> */}