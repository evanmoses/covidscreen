const puppeteer = require('puppeteer');

// eslint-disable-next-line no-unused-expressions
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', {
    timeout: 10000,
    waitUntil: 'networkidle0',
  });

  const randomTemp = (Math.floor(Math.random() * (368 - 360) + 360) / 10).toString();
  const today = new Date().toLocaleDateString('en-US');

  const form = await page.$('form');
  const formName = await (await form.getProperty('id')).jsonValue();
  const formSuffix = formName.slice(12);
  console.log(formSuffix);
  console.log(randomTemp);

  await page.$eval('input[name="quform_2_6"]', (el) => el.value = 'Luka');
  await page.$eval('input[name="quform_2_9"]', (el) => el.value = 'Moses');
  await page.type('input[name="quform_2_43"]', today);
  await page.type('input[name="quform_2_14"]', randomTemp);
  await page.$eval('input[name="quform_2_40"]', (el) => el.value = 'Jessica');
  await page.$eval('input[name="quform_2_42"]', (el) => el.value = '416.455.8966');

  await page.click(`#quform_2_21_${formSuffix}_2`);
  await page.click(`#quform_2_17_${formSuffix}_2`);
  await page.click(`#quform_2_24_${formSuffix}_2`);
  await page.click(`#quform_2_26_${formSuffix}_2`);

  await page.click(`#quform_2_28_${formSuffix}_2`);
  await page.click(`#quform_2_29_${formSuffix}_2`);
  await page.click(`#quform_2_30_${formSuffix}_2`);
  await page.click(`#quform_2_31_${formSuffix}_2`);
  await page.click(`#quform_2_32_${formSuffix}_2`);

  await page.click(`#quform_2_34_${formSuffix}_2`);
  await page.click(`#quform_2_35_${formSuffix}_2`);
  await page.click(`#quform_2_36_${formSuffix}_2`);
  await page.click(`#quform_2_37_${formSuffix}_2`);

  await page.click('.quform-submit');

  try {
    await page.waitForSelector('.quform-success-message-animate', { visible: true });
    console.log('Form successfully submitted');
  } catch (e) {
    console.log(e);
  } finally {
    await browser.close();
  }
})();
