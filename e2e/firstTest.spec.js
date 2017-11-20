describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should say hello after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('yoyo!'))).toBeVisible();
  });

})
