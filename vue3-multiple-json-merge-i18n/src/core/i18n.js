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
