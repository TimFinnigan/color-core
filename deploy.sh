#!/bin/bash

echo "Deploying to GitHub Pages..."

# Create a temporary build directory
mkdir -p build

# Copy all necessary files to the build directory
cp index.html build/
cp main-app.html build/
cp app.html build/
cp 404.html build/
cp -r static build/
cp favicon.ico build/
cp logo192.png build/
cp logo512.png build/
cp manifest.json build/
cp robots.txt build/
cp asset-manifest.json build/

# Create .nojekyll file to prevent GitHub Pages from using Jekyll
touch build/.nojekyll

# Create a simple index.html file if it doesn't exist (this is our backup)
if [ ! -f build/index.html ]; then
  cp main-app.html build/index.html
fi

# Remove any README.md that might be confusing GitHub Pages
rm -f build/README.md

# Deploy to GitHub Pages using gh-pages
echo "Deploying to GitHub Pages with gh-pages"
npx gh-pages -d build 