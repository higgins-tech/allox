const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'index.html');
let content = fs.readFileSync(targetFile, 'utf8');

// Regex to find <a> tags and <button> tags that don't have id="hamburger"
const aRegex = /<a(\s+[^>]*)?>/gi;
const buttonRegex = /<button(\s+[^>]*)?>/gi;

content = content.replace(aRegex, (match, p1) => {
    // Check if class already exists
    if (!p1) p1 = '';
    
    // Check if class attribute exists
    const classMatch = p1.match(/class=(['"])(.*?)\1/);
    if (classMatch) {
        if (!classMatch[2].includes('connect-button')) {
            const newClass = `class=$1${classMatch[2]} connect-button$1`;
            return `<a${p1.replace(/class=(['"])(.*?)\1/, newClass)}>`;
        }
    } else {
        return `<a${p1} class="connect-button">`;
    }
    return match;
});

content = content.replace(buttonRegex, (match, p1) => {
    if (!p1) p1 = '';
    
    // Skip if hamburger
    if (p1.includes('hamburger')) {
        return match;
    }
    
    const classMatch = p1.match(/class=(['"])(.*?)\1/);
    if (classMatch) {
         if (!classMatch[2].includes('connect-button')) {
            const newClass = `class=$1${classMatch[2]} connect-button$1`;
            return `<button${p1.replace(/class=(['"])(.*?)\1/, newClass)}>`;
        }
    } else {
        return `<button${p1} class="connect-button">`;
    }
    return match;
});

fs.writeFileSync(targetFile, content);
console.log('Successfully updated index.html');
