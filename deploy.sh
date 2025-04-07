#!/bin/bash

echo "Deploying to GitHub Pages..."

# Build the React app
npm run build

# Create .nojekyll file to prevent GitHub Pages from using Jekyll
touch build/.nojekyll

# Deploy to GitHub Pages using gh-pages
echo "Deploying to GitHub Pages with gh-pages"
npx gh-pages -d build 