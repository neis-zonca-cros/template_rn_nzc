/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const readline = require('readline');

// Fonction pour demander une entrée à l'utilisateur
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your app name: ', appName => {
  rl.question('Enter your app slug: ', appSlug => {
    // Lire et modifier le fichier app.json
    const appJsonPath = './app.json';
    const appJson = JSON.parse(fs.readFileSync(appJsonPath, 'utf8'));
    appJson.expo.name = appName;
    appJson.expo.slug = appSlug;
    fs.writeFileSync(appJsonPath, JSON.stringify(appJson, null, 2));
    console.log(`Updated app.json with name: ${appName} and slug: ${appSlug}`);

    const packageJsonPath = './package.json';
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    packageJson.name = appSlug;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`Updated package.json with name: ${appSlug}`);

    rl.close();
  });
});
