// Simple script to generate placeholder logo PNG files
// Run with: node scripts/generate-logos.js
// Note: This requires a graphics library. For now, use SVG files or replace with actual logos.

const fs = require('fs');
const path = require('path');

// Create simple SVG files as placeholders (can be converted to PNG later)
const darkLogo = `<svg width="360" height="120" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="120" fill="#2B2B2B"/>
  <text x="180" y="70" font-family="serif" font-size="32" fill="#FFFFFF" text-anchor="middle" font-weight="bold">Studio SDK</text>
</svg>`;

const lightLogo = `<svg width="360" height="120" xmlns="http://www.w3.org/2000/svg">
  <rect width="360" height="120" fill="#FFFFFF"/>
  <text x="180" y="70" font-family="serif" font-size="32" fill="#2B2B2B" text-anchor="middle" font-weight="bold">Studio SDK</text>
</svg>`;

const publicDir = path.join(__dirname, '..', 'public');
fs.writeFileSync(path.join(publicDir, 'logo-dark.svg'), darkLogo);
fs.writeFileSync(path.join(publicDir, 'logo-light.svg'), lightLogo);

console.log('Logo SVG files created. Please convert to PNG or replace with actual logo files.');
