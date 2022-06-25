# r-hugo-theme

A simple Hugo theme suitable for a portfolio, documentation library, or blog. See [r-hugo-theme-demo](https://rafalkaron.github.io/r-hugo-theme-demo).
<img width="920" alt="r-hugo-theme-desktop-light" src="https://user-images.githubusercontent.com/45826759/175793931-f7810c7e-1ce9-438c-98f7-ee9c9a75536b.png"><img width="320" alt="r-hugo-theme-mobile-dark" src="https://user-images.githubusercontent.com/45826759/175793933-db7448a7-fd96-474c-8073-c05a09d6b7db.png">
<img width="320" alt="r-hugo-theme-mobile-light" src="https://user-images.githubusercontent.com/45826759/175793934-9d00a991-8e40-4c5d-8149-540c93b462cf.png">


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
* Blogging capabilities:
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
7. Move the files and folders from the `example-site` directory into the root folder of your site.
8. Run a local Hugo webserver by entering `hugo server`

### Postrequisites

* Preview your website by opening [http://localhost:1313/](http://localhost:1313/)

## Theme customization

You can further customize the site by editing the `config.yaml` file. For more information, see the [Hugo documentation](https://gohugo.io/documentation/).
