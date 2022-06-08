# r-hugo-theme
A simple Hugo theme suitable for a portfolio, documentation library, and blog.

[r-hugo-theme-demo](https://rafalkaron.github.io/r-hugo-theme-demo)

## Key features
* Responsive layout for desktops, tablets, mobile, and print
* A switch that controls light and dark modes
* Extensive, automatically generated site navigation that includes:
  * Section navigation (in this section)
  * Page navigation (on this page)
  * Breadcrumbs
  * Links to next and previous pages
  * Related links based on keywords
* Easily customizable contact info in the footer
* Blogging capabilites:
  * Categories
  * Tags
  * Estimated reading time

## Quick start
Set up a simple website that uses r-hug-theme with sample content.

### Prerequisites
* [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Install Hugo](https://gohugo.io/getting-started/quick-start/#step-1-install-hugo)

### Procedure
3. In the terminal, create a new site by entering `hugo new site {site_name}`  
**Where:** `{site_name}` is the name of the site that you want to create.
4. Enter the Hugo site directory by entering `cd {site_name}`
5. Initialize a Git repository by entering `git init`
6. Add the theme by entering `git submodule add https://rafalkaron.github.io/r-hugo-theme`
7. Move the files and folders from the `exampleSite` directory into the root folder of your site.
8. Run a local Hugo webserver by entering `hugo server`

### Postrequisites
* Preview your website by opening [http://localhost:1313/](http://localhost:1313/)

## Theme customization
You can customize the site by editing the `config.yaml` file. For reference, see the `# comments` in the `config.yaml` file.

For advanced customizations, feel free to fork the repository.
