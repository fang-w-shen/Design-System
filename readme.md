# Ascension Technologies
## Schema Design System


[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)

---

**Glossary**

1. [Installation](#installation)
2. [Design System Build](#design-system-build)
3. [Editing Schema](#editing-schema)
4. [Contribution Checklist](#contribution-check-list)

---

This is the official AT Design System ~ Schema! We use this repository as the central source of truth on how Ascesnion Web Applications should look and behave. This documentation site is a Zurb Foundation Framework with a Gulp-powered build system along with these other features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript module bundling with webpack
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (Version 6 or greater recommended, tested with 6.11.4 and 8.12.0)
- [Git](https://git-scm.com/)

This template can be installed with the Foundation CLI, or downloaded and set up manually.

### Using the CLI

Install the Foundation CLI with this command:

```bash
npm install foundation-cli --global
```

### Clone the Repo
In the command line, navigate to the directory on the computer where the design system should live and clone the repository

```bash
git clone https://github.ascension.org/agroom/at-design-system.git
```

Now `cd` to your project name and to start your project run 

```bash
foundation watch
```

If you run into problems, it might be due to Node Modules not being found. In this case run

```bash
npm install
```
and then `foundation watch` again


## Design System Build

The design system utilizes Node, Bower, Yarn, and Gulp as part of the overall build process for local development. Always look at the `gulpefile.babel.js` to understand how the static documentation website is generated. Here are the basics:

Schema uses the overall Foundation Framework to build the docs. This includes libraries like Panini and StyleSherpa that are included in the framework. Panini happens to be a much more sophisticated page templating system because it uses Handlebars whereas StyleSherpa only parses markdown files into a one page styleguide. The Gulp file has been modified to reflect this change.

Once the local environment is running on the computer all changes should be viewable immediately. Most files are being "watched" for changes and when they are saved it automatically rebuilds everything and refreshes all browser connections. ✨ 

#### Zurb Panini
The [Panini library](https://foundation.zurb.com/sites/docs/panini.html) is used to grab files within the "layouts", "partials", and "pages" directories. These partial files are then built into completed flat static files which make up the final site "/docs". Panini functions are located in `gulpefile.babel.js`. 

#### Zurb StyleSherpa
The [StyleSherpa library](https://foundation.zurb.com/sites/docs/style-sherpa.html) uses the Panini library, but also features one unique function, "html escaping" and code highlighting. In order to document and display code examples within the docs, the code examples must be escaped into HTML characters and then highlighted using highlight.js. Finally, these code examples are delivered in the docs via an iframe. Panini functions are located in `gulpefile.babel.js`.

**Please open all issues with the Zurb Framework on the main [Foundation for Sites](https://github.com/zurb/foundation-sites/issues) repo.**

### Code Examples

Utlizing Zurb StyleSherpa, we create individual markdown files located in `styleguide/filename.md"`. Each markdown file is then parsed into an individual flat html file using `src/styleguide/code-block-template.html`. Currently these functions are written individually in `gulpefile.babel.js`. for each file instead of the whole directory. This will need to be cleaned up (with a developer's help). Once this part of the process is complete, we call a code block html file into the docs site by using an iFrame (there could be a better way of doing this).

### DS Styling
The design system mainly uses Schema for the interface styles and layout. The only exception is the left side navigation for the design system docs. This is so that the navigation of the design system never interferes with the example of the design system itself (😎). All content located in the right section of the design system docs uses Schema, including the grid system. The design system navigation is collapsible so that the 1400px Container size of Schema can be displayed just as it would appear in a web application. The CSS for the design system docs is located here: `src/assets/css/styleguide.css`. Using the funtions that exist within Zurb's default Gulp file, the CSS for the design system is copied over to `/docs/assets/css/styleguide.css` and finally referenced in the head of the design system templates `src/layouts/default.html`

### DS Navigation System
The navigation system for the design system uses a partial template located here `src/partials/navigation.html`. At this time this file is being manually maintained. If a new page needs to be added, this is the location to add the html and links using the same code in this file as the example. In the future, this section could be automated to create a nav item for each page within the pages directory. 

### Template System
Panini uses the [Handlebars](http://handlebarsjs.com/) templating language to build the final flat files. The design system page template system uses a very similar implementation as documented by Zurb and works as follows:

- [Base Layout](https://github.ascension.org/agroom/at-design-system/blob/master/src/layouts/default.html) `src/layouts/default.html` 
  - [Header](https://github.ascension.org/agroom/at-design-system/blob/master/src/layouts/default.html) `src/partials/header.html`
  - [Content](https://github.ascension.org/agroom/at-design-system/tree/master/src/pages) `src/pages` each file in this directory is placed in the `{> body}` section of the main template.
  - [Navigation](https://github.ascension.org/agroom/at-design-system/blob/master/src/partials/navigation.html) `src/partials/navigation.html`

## Editing Schema
Remember, Schema *is* the design system itself. When editing the the core of the system the code changes not only affect what is displayed locally, but also every web applicatin using Schema. In other words, be careful! 🙏 ~ Obviously any changes would have to be a pull request and merged with master, but it's still important to understand what is being edited and the impact of any changes.

As mentioned several times already, Schema uses the Zurb Foundation framework as its' backbone. As a best practice, **we never** edit any core SASS or Javascript files for Zurb or any other Node Modules used in the project. That said, Schema uses a few simple imports to modify and extend the Foundation framework to Ascension's needs, while at the same time keeping the very core of Foundation unmodified and easily updated.

Using the Zurb Framework architecture here's how Schema all comes together:

- Zurb Site
	- [app.css](https://github.ascension.org/agroom/at-design-system/blob/master/src/assets/scss/app.scss) - Main include file that gets all of Zurb core SASS, Settings, and any other imports we want.
	- [_settings.scss](https://github.ascension.org/agroom/at-design-system/blob/master/src/assets/scss/_settings.scss) - SASS Variables for customizing Foundation UI out of the box.
	- [/global/custom_utilities.scss](https://github.ascension.org/agroom/at-design-system/blob/master/src/assets/scss/global/_custom-utilities.scss) - All of the CSS used to customize Foundation to look and work like Schema's design.

All of the above files can be edited without damaging the Foundation framework. Any edits to app.css should include only new imports as needed. If any Foundation imports are removed it will break the build.

#### Creating a New Page
New pages should only be created to deliver content to the design system documentation site. To create a new page, there are several options such as copy/paste/rename of an existing page or simply creating a new page. We'll leave that part up to you.

A page is an HTML file with the inner content for that page. This content gets inserted into the `{> body}` default.html layout template and is rendered into a static HTML page.

1. Create a new HTML Page
2. Change the [title tag](https://github.ascension.org/agroom/at-design-system/blob/master/src/pages/colors.html#L2) at the start of the page 
3. Enter the content for the new page
4. Save the new page

The moment the new page is saved, the "watch" task in Gulp will re-run the entire build locally, to the docs site, and then refresh all connected browsers. It is at this point that the new page is accessible via /page-name.html, however it needs to be added to the main navigation system to become fully accessible.


#### Creating a New Navigation Tab
The design system's navigation system lives on the left side of the user inteface. It is a fixed position and collapsible panel that is designed to allow the user to navigate the design system but also not interfere with the grid system and live examples in the right side content area of the interface. 

At this time the navigation system is manually maintained. Meaning, for each new page that is created (or any other important content links) the developer needs to manually add the HTML to the [partial file](https://github.ascension.org/agroom/at-design-system/blob/master/src/partials/navigation.html).

In the future, we would like a developer help to modify the Gulp file so that it looks for any new page created and then adds a new menu item for each. It's not clear if Handlebars or Panini can accomplish this, but it will certainly help minimize maintainence. 

#### Creating a New Code Example
To read how code examples are generated read [here](#code-examples). To create a new code example, create a new markdown file. There are several options such as copy/paste/rename of an existing markdown file or simply creating a new file from scratch. We'll leave that part up to you. To create a new code example, follow these steps:

1. Create a new markdown `.md` file and place it in the `/src/styleguide` directory. Name it with something that makes sense.
	* for some reason Panini requires a "styleguide" directory in order to run, thus the weird folder name.
2. Add the code you want to display. [Example](https://github.ascension.org/agroom/at-design-system/blob/master/src/styleguide/code-grid--intro.md)
3. Update the Gulp file following [this pattern](https://github.ascension.org/agroom/at-design-system/blob/master/gulpfile.babel.js#L89). 🤢 This needs to be reworked to convert all files in one directory instead of one by one. Help!
4. Restart local environment `foundation watch`.
5. Embed the new code example into a page via an iframe. [Example](https://github.ascension.org/agroom/at-design-system/blob/master/src/pages/grid.html#L26)

## Contribution Check List
If you would like to contribute code to the Schema Design System please follow these steps.

1. Run the design system locally
2. Clone master
3. Create a new branch
4. Make changes
5. Check all Responsive view port sizes for quality assurance
6. Check all Browsers for quality assurance
5. Commit changes
6. Push Branch
7. Create a pull request
8. Grab a coffee and feel appreciated for your contribution ☕️
