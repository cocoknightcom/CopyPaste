const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const distDir = path.join(__dirname, 'dist');

const htmlContent = fs.readFileSync(path.join(srcDir, 'index.html'), 'utf-8');
const cssContent = fs.readFileSync(path.join(srcDir, 'style.css'), 'utf-8');
const jsContent = fs.readFileSync(path.join(srcDir, 'script.js'), 'utf-8');

const formattedHTML = htmlContent
    .replace('{{CSS}}', `<style>\n${cssContent}\n</style>`)
    .replace('{{JAVASCRIPT}}', `<script>\n${jsContent}\n</script>`)

const formatObject = {
    name: "CopyPaste",
    version: "1.1.0",
    url: "https://github.com/cocoknightcom/CopyPaste",
    author: "cocoknightcom",
    description: "A Twine 2 Proofing Story Format that cuts it. Exclude passages with a TODO tag.",
    license: "MIT",
    image: "../icon.svg",
    proofing: true,
    source: formattedHTML
};

const formatFileContent = `window.storyFormat(${JSON.stringify(formatObject, null, 4)});`;

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

fs.writeFileSync(path.join(distDir, 'format.js'), formatFileContent, 'utf-8');

console.log('Compilation complete.');