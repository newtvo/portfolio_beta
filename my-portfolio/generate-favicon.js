const fs = require('fs');
const sharp = require('sharp');

// SVG content for the favicon - Minimalist & Sleek Design
const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <!-- Subtle gradient background -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
    </linearGradient>
    
    <!-- Glow effect for the letter -->
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background with subtle gradient -->
  <rect width="100" height="100" rx="20" fill="url(#bgGrad)"/>
  
  <!-- Minimal geometric accent - top right corner -->
  <path d="M 80 0 L 100 0 L 100 20 Q 100 0 80 0" fill="#2dd4bf" opacity="0.15"/>
  
  <!-- Modern letter N with geometric design -->
  <g filter="url(#glow)">
    <!-- Simplified, geometric N -->
    <path d="M 30 30 L 30 70 L 35 70 L 35 45 L 65 70 L 70 70 L 70 30 L 65 30 L 65 55 L 35 30 Z" 
          fill="#2dd4bf" 
          stroke="#5eead4" 
          stroke-width="0.5"/>
  </g>
  
  <!-- Subtle bottom accent line -->
  <line x1="25" y1="82" x2="75" y2="82" stroke="#2dd4bf" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
</svg>
`;

async function generateFavicons() {
  try {
    const svgBuffer = Buffer.from(svgContent);

    // Generate 32x32 PNG (standard favicon size)
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile('public/favicon-32x32.png');
    
    console.log('✅ Generated favicon-32x32.png');

    // Generate 16x16 PNG (smaller favicon)
    await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toFile('public/favicon-16x16.png');
    
    console.log('✅ Generated favicon-16x16.png');

    // Generate 180x180 PNG (Apple touch icon)
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile('public/apple-touch-icon.png');
    
    console.log('✅ Generated apple-touch-icon.png');

    // For ICO format, we'll use the 32x32 PNG as the ICO file
    // (Modern browsers accept PNG as .ico extension)
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile('public/favicon.ico');
    
    console.log('✅ Generated favicon.ico');

    console.log('\n🎉 All favicon files generated successfully!');
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
  }
}

generateFavicons();
