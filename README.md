# IETEC Project

> **The event has concluded and we received second place.**

This website was done for the [IETE Chennai](http://ietechennai.in/) website design contest conducted in Tamil Nadu by [IETE](http://ietechennai.in/) on 06/09/2023 by the collective effort of [Sajay Prakash](https://github.com/sajayprakash/), [Purushothaman](https://github.com/purushothaman7) and Sanjeev. 

## Stack:
- React.js
- Tailwind CSS

## How to run the page

Make sure you have npm and pnpm installed.

- Clone this repo

```bash
git clone https://github.com/sajayprakash/IETE-Project
```

- Go into the repo folder using terminal (You can use vscode's integrated terminal)

```bash
cd IETE-Project
```

- Install dependencies

```bash
pnpm install
```

- Run the server

```bash
pnpm dev
```

## How to edit source code

- Go into the "src" folder and edit the files.

```bash
cd src
```

- The **components** folder contains all the components used in the website (Eg: Navbar, Footer).

- **App.jsx** contains the main code for the website that will be rendered. It calls the components and renders them. Example:
  ```jsx
  return (
    <>
      <Navbar /> /* This will render the Navbar component */
      <Intro /> /* This will render the Intro component */
    </>
  );
  ```
- **Assets** folder contains all the images and other files used in the website.
