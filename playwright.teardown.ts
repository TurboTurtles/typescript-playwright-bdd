console.log('Loading playwrightTeardown.ts...');

import { FullConfig } from '@playwright/test';
import fs from 'fs/promises';
import path from 'path';

export default async function globalTeardown(config: FullConfig) {
  const tempDirs = ['temp', 'downloads'];
  for (const dirName of tempDirs) {
    const tempDir = path.resolve(process.cwd(), dirName);
    try {
      await fs.access(tempDir);
      await fs.rm(tempDir, { recursive: true, force: true });
      console.log(`Cleaned up directory: ${tempDir}`);
    } catch (error: unknown) {
        const e = error as NodeJS.ErrnoException;
        if (e.code !== 'ENOENT') {
          console.warn(`Could not clean ${dirName}: ${e.message}`);
        }
    }
  }
  const when = new Date().toISOString();
  console.log(`Completed at: ${when}`);
  console.log();
}