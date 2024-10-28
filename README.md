# Restaurant

This is a restaurant website that showcases the homepage, menu, and contact information.

## Installation

**Clone the repository:**

```bash
git clone https://github.com/Cooladx/Restaurant
cd <repository-name>
```

Do the following:

` npm install `

installs all dependencies in the repo that I have included. You can take a look at package.json for the devDependencies.

make sure to make a folder called dist in the root directory of the repo folder so files can be exported into there for output with webpack.

Now that you can run the project, run

` npx webpack `

then if you want to change in action the page while adding your own images, run

`  npx webpack serve `

(hosts a live server page on port 8000, you can change this port in the webpack.config.js file.)
