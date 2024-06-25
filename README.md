# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Links

- Solution URL: [Click to view solution](https://your-solution-url.com)
- Live Site URL: [Click to view live site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://react.dev/) - JS library
- [Tailwindcss](https://tailwindcss.com/) - For styles

### What I learned

```js
const isSubsetOf = (arr1, arr2) =>
  [...arr2].every((item) => arr1.includes(item));

function removeFilter(filterWord) {
  const newCategories = [...categories].filter(
    (category) => category !== filterWord,
  );

  const retrievedJobsData = [...jobsCache].filter((job) =>
    isSubsetOf(
      [job.role, job.level, ...job.languages, ...job.tools],
      newCategories,
    ),
  );

  dispatch({
    type: "remove-filter",
    payload: {
      newCategories,
      jobs: retrievedJobsData,
    },
  });
}
```

### Continued development

Please suggest any area that I should improve on.

### Useful resources

- [Tailwind official website](https://tailwindcss.com/) - This served as a reference for using tailwind to style my project.
- [React Js Official Website](https://react.dev/) - This served as a reference whenever I am confused on the react syntax to use.

## Author

- Frontend Mentor - [@collinstyk](https://www.frontendmentor.io/profile/collinstyk)
- Twitter - [@dozie_jr](https://x.com/dozie_jr?t=xoii2xr6b7fBUghaFEajnw&s=09)
