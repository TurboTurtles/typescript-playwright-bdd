console.log('Loading playwrightTeardown.ts...');

import { FullConfig } from '@playwright/test';
import fs from 'fs/promises';
import path from 'path';

export default async function globalTeardown(config: FullConfig) {
  const tempDir = path.resolve(process.cwd(), 'temp');
  try {
    const files = await fs.readdir(tempDir);
    await Promise.all(files.map(file => fs.unlink(path.join(tempDir, file))));
    console.log(`Cleaned up ${files.length} temp files in ${tempDir}`);
  } catch (error: unknown) {
    const e = error as NodeJS.ErrnoException;
    if (e.code !== 'ENOENT') {
      console.warn(`Could not clean temp: ${e.message}`);
    }
  }
  const when = new Date().toISOString();
  console.log(`Completed at: ${when}`);
  console.log();
}
