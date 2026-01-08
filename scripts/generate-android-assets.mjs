import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const androidResDir = join(rootDir, 'android/app/src/main/res');

// Icon sizes for each density
const iconSizes = [
  { density: 'mdpi', size: 48 },
  { density: 'hdpi', size: 72 },
  { density: 'xhdpi', size: 96 },
  { density: 'xxhdpi', size: 144 },
  { density: 'xxxhdpi', size: 192 },
];

// Splash screen sizes (portrait)
const splashPortrait = [
  { density: 'mdpi', width: 320, height: 480 },
  { density: 'hdpi', width: 480, height: 800 },
  { density: 'xhdpi', width: 720, height: 1280 },
  { density: 'xxhdpi', width: 1080, height: 1920 },
  { density: 'xxxhdpi', width: 1440, height: 2560 },
];

// Splash screen sizes (landscape)
const splashLandscape = [
  { density: 'mdpi', width: 480, height: 320 },
  { density: 'hdpi', width: 800, height: 480 },
  { density: 'xhdpi', width: 1280, height: 720 },
  { density: 'xxhdpi', width: 1920, height: 1080 },
  { density: 'xxxhdpi', width: 2560, height: 1440 },
];

async function ensureDir(dir) {
  try {
    await mkdir(dir, { recursive: true });
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
}

async function generateIcons() {
  console.log('Generating app icons...');
  const iconPath = join(rootDir, 'icon.png');

  for (const { density, size } of iconSizes) {
    const outputDir = join(androidResDir, `mipmap-${density}`);
    await ensureDir(outputDir);

    // Standard icon
    await sharp(iconPath)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(join(outputDir, 'ic_launcher.png'));

    // Round icon (same for now, Android will clip it)
    await sharp(iconPath)
      .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(join(outputDir, 'ic_launcher_round.png'));

    console.log(`  ✓ mipmap-${density}: ${size}x${size}`);
  }

  // Generate adaptive icon foreground (larger with padding)
  // Adaptive icons use 108dp with 72dp safe zone (66% inner area)
  const adaptiveSizes = [
    { density: 'mdpi', size: 108 },
    { density: 'hdpi', size: 162 },
    { density: 'xhdpi', size: 216 },
    { density: 'xxhdpi', size: 324 },
    { density: 'xxxhdpi', size: 432 },
  ];

  console.log('\nGenerating adaptive icon foreground layers...');
  for (const { density, size } of adaptiveSizes) {
    const outputDir = join(androidResDir, `mipmap-${density}`);
    await ensureDir(outputDir);

    // Create foreground with the icon centered in the safe zone (66% of total)
    const iconSize = Math.round(size * 0.66);
    const padding = Math.round((size - iconSize) / 2);

    await sharp(iconPath)
      .resize(iconSize, iconSize, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .extend({
        top: padding,
        bottom: padding,
        left: padding,
        right: padding,
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(join(outputDir, 'ic_launcher_foreground.png'));

    console.log(`  ✓ mipmap-${density}/ic_launcher_foreground: ${size}x${size}`);
  }
}

async function generateSplashScreens() {
  console.log('\nGenerating portrait splash screens...');
  const splashPath = join(rootDir, 'splash.png');

  for (const { density, width, height } of splashPortrait) {
    const outputDir = join(androidResDir, `drawable-port-${density}`);
    await ensureDir(outputDir);

    await sharp(splashPath)
      .resize(width, height, { fit: 'cover', position: 'center' })
      .png()
      .toFile(join(outputDir, 'splash.png'));

    console.log(`  ✓ drawable-port-${density}: ${width}x${height}`);
  }

  console.log('\nGenerating landscape splash screens...');
  for (const { density, width, height } of splashLandscape) {
    const outputDir = join(androidResDir, `drawable-land-${density}`);
    await ensureDir(outputDir);

    // For landscape, we'll create a version that works well rotated
    await sharp(splashPath)
      .resize(width, height, { fit: 'cover', position: 'center' })
      .png()
      .toFile(join(outputDir, 'splash.png'));

    console.log(`  ✓ drawable-land-${density}: ${width}x${height}`);
  }

  // Also copy to default drawable folder
  const defaultDir = join(androidResDir, 'drawable');
  await ensureDir(defaultDir);
  await sharp(splashPath)
    .resize(480, 800, { fit: 'cover', position: 'center' })
    .png()
    .toFile(join(defaultDir, 'splash.png'));
  console.log('  ✓ drawable (default): 480x800');
}

async function main() {
  console.log('=== Generating Android Assets ===\n');

  try {
    await generateIcons();
    await generateSplashScreens();
    console.log('\n=== All assets generated successfully! ===');
  } catch (error) {
    console.error('Error generating assets:', error);
    process.exit(1);
  }
}

main();
