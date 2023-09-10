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
  content: [ './src/**/*.{html,js,jsx,ts,tsx}',],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Add all directives to our CSS into  ***index.css***

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Adding DARK mode with the current SO theme
  - first we need to create a Button and add the handle function to change the color.
  - we have the initial value in the useState with 'light' value;
  - To change throught themes we just need to aply the class Dark and add the dark conditions in each element that we want change.
  - With the use effect we are going to apply the class dark or remove

Here an example

```html
    <div className="h-screen flex justify-center items-center text-5xl bg-slate-500 dark:bg-black"
      >
        <button onClick={handleThemeColor} 
        className='bg-slate-200 text-black px-4 py-2 rounded hover:bg-slate-300  dark:bg-slate-600 dark:text-white dark:hover:bg-slate-900'> Change theme</button>
      </div>
```