describe('Android Elements Tests', () => {
  it('Find element by accessibility id', async () => {
    const appOption = await $('~App');
    await appOption.click();

    const actionBar = await $('~Action Bar');
    await expect(actionBar).toBeExisting();
  });
  it('Find element by class name', async () => {
    const className = await $('android.widget.TextView');
    await expect(className).toHaveText('API Demos');
  });

  it('Find element by Xpath', async () => {
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

    await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();

    await $('//android.widget.TextView[@text="Command two"]').click();

    const textAssertion = await $('//android.widget.TextView');
    await expect(textAssertion).toHaveText('You selected: 1 , Command two');
  });

  it('Find elements by UIAutomartor', async () => {
    await $('~App').click();

    await $('android=new UiSelector().textContains("Alert")').click();
  });

  it('Find multiple elements', async () => {
    const expectedList = [
      'API Demos',
      "Access'ibility",
      'Accessibility',
      'Animation',
      'App',
      'Content',
      'Graphics',
      'Media',
      'NFC',
      'OS',
      'Preference',
      'Text',
      'Views',
    ];
    const actualList = [];

    const textList = await $$('//android.widget.TextView');

    for (const element of textList) {
      actualList.push(await element.getText());
    }

    await expect(actualList).toEqual(expectedList);
  });

  it.only('Input text field', async () => {
    await $('~Views').click();
    await $('~Auto Complete').click();
    await $('~1. Screen Top').click();

    const input = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
    await input.addValue('Canada');
    await expect(input).toHaveText('Canada');
  });
});
