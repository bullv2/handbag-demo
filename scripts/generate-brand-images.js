const fs = require('fs');
const { createCanvas } = require('canvas');

// List of brands and their associated colors
const brands = [
  { name: 'hermes', color: '#F37021', textColor: '#FFFFFF' }, // Orange
  { name: 'chanel', color: '#000000', textColor: '#FFFFFF' }, // Black
  { name: 'lv', color: '#A36B35', textColor: '#FFFFFF' },     // Brown
  { name: 'dior', color: '#2C2C2C', textColor: '#FFFFFF' },   // Dark gray
  { name: 'gucci', color: '#006C3A', textColor: '#FFFFFF' },  // Green
  { name: 'celine', color: '#000000', textColor: '#FFFFFF' }, // Black
  { name: 'fendi', color: '#F4B51E', textColor: '#000000' },  // Yellow
  { name: 'loewe', color: '#0077C8', textColor: '#FFFFFF' },  // Blue
  { name: 'ysl', color: '#000000', textColor: '#FFFFFF' },    // Black
  { name: 'prada', color: '#000000', textColor: '#FFFFFF' },  // Black
  { name: 'balenciaga', color: '#000000', textColor: '#FFFFFF' }, // Black
  { name: 'mcm', color: '#B4975A', textColor: '#FFFFFF' },    // Gold
];

// Image dimensions
const width = 200;
const height = 200;

// Output directory
const outputDir = '../assets/images/brands';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Create images for each brand
brands.forEach((brand) => {
  // Create canvas
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = brand.color;
  ctx.fillRect(0, 0, width, height);

  // Add brand name text
  ctx.font = 'bold 30px Arial';
  ctx.fillStyle = brand.textColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(brand.name.toUpperCase(), width / 2, height / 2);

  // Save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`${outputDir}/${brand.name}.png`, buffer);

  console.log(`Created ${brand.name}.png`);
});

console.log('All brand images generated successfully!'); 