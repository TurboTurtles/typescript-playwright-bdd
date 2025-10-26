console.log('Loading hooks.ts...');
import { Before, After, Status, setDefaultTimeout } from '@cucumber/cucumber';
import type { ITestCaseHookParameter } from '@cucumber/cucumber';
import { CustomWorld } from './world';

setDefaultTimeout(10_000);

Before(async function (this: CustomWorld) {
  await this.init();
});

After(
  async function (
    this: CustomWorld,
    { result }: ITestCaseHookParameter
  ) {
    // if (result?.status === Status.FAILED) {
      const png = await this.page.screenshot();
      this.attach(png, 'image/png');
    // }

    const video = this.page.video();
    if (video) {
      const videoPath = await video.path();
      this.attach(`Video recording: ${videoPath}`);
    }

    // tear down
    await this.cleanup();
  }
);
