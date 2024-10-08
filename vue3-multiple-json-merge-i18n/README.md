
# I18n Structure Combining JSON Files with Vue.js
This project provides a basic framework for developers who want to add multi-language support using Vue.js. The project uses `vue-i18n` and `vite` to create a framework that combines translation files from different languages.

## What Does It Do?

- The project provides multilingual support with the `vue-i18n` library.
- It allows you to store your translation files in an organized way and combines translations from different languages into a single i18n instance.
- It offers a fast and efficient development experience using `vite`.

## How to use it

1. Clone or download the project.
2. Run `npm install` in the terminal to install the dependencies.
3. Configure the i18n instance by inspecting the `src/core/i18n.js` file.
4. Organize your translation files under the `locales` folder.

## Who is it for?

- Developers who want to add multi-language support using Vue.js.
- Those who want to quickly and efficiently merge translation files.
- Developers who want to use `vite` in their projects.

This project contains a framework for adding multi-language support using vue-i18n and vite. Below is a sample code that merges translation files in different languages and creates the i18n instance.

Installation
You can use the following command to install project dependencies:
```bash
npm install
```
Usage
You can browse to src/i18n.js to create the i18n instance. This file supports en and en languages and concatenates the corresponding JSON files.

`/src/core/i18n.js`
``javascript
import { createI18n } from "vue-i18n";

const imports = {
  en: import.meta.glob(`@/locales/en/*.json`, {
    eager: true,
    import: "default",
  }),
  tr: import.meta.glob(`@/locales/tr/*.json`, {
    eager: true,
    import: "default",
  }),
};

// The keys of the 'imports' object represent the supported languages in the project.
const locales = Object.keys(imports);

// Function to retrieve all messages
const getLocaleMessages = () =>
  // Using the reduce function to gather messages for each language
  locales.reduce(
    // The first parameter 'messages' is the main object where we combine messages for each language
    (messages, locale) => ({
      // Copy the messages from the previous language using the spread operator
      ...messages,
      // Combine messages for the current language
      [locale]: Object.values(imports[locale]).reduce(
        // The first parameter 'message' is a temporary object to combine messages for the current language
        (message, current) => ({ ...message, ...current }),
        {}
      ),
    }),
    // Starting with an empty object
    {}
  );

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: "tr", // set locale
  fallbackLocale: "en", // set fallback locale
  messages: getLocaleMessages() || [],
  // If you need to specify other options, you can set other options
  // ...
});


export default i18n;
```

Language Files
You can store your translation files under the locales folder. Create a separate folder for each language and add the corresponding JSON files inside this folder.

`src/locales`
```src
src
|-- locales
| |-- en
| | |-- home.json
| | |-- about.json
| |-- tr
| | |-- home.json
| | |-- about.json
```

Contribution
If you want to contribute to the project, please feel free to send a pull request. Any feedback and suggestions are welcome.


Sources 
https://vitejs.dev/guide/features#glob-import
https://vue-i18n.intlify.dev/guide/
