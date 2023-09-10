# PRE- requisites
- Create a new project ```npm create vite```
- Select JS o TS.

# Install TAILWIND
- You can check the documentation for more info [tailwind](https://tailwindcss.com/docs/installation)
- Install Tailwind `yarn add tailwindcss -D`
- Init tailwind create a config file; execute
- 
  ```bash 
   npx tailwindcss init -p 
  ``` 
  
  you should see the **tailwind.js** file and ***postcss.config.js*** file. 
- Config the template paths in the config file
add the available files for content
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Add all directives to our CSS