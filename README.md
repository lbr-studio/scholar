# Academic Portfolio Website

Personal academic portfolio website for Latif Bukari Rashid.

The website presents selected information about my academic background, research interests, publications, curriculum vitae, professional activities, and contact channels.

## Project structure

- `index.html` — website content and structure
- `styles.css` — shared styling and responsive design
- `script.js` — animations and interactive behaviour
- `robots.txt` — search-engine crawling instructions
- `LICENSE.txt` — copyright and permitted-use terms
- Image files — photographs and visual assets used by the website
- PDF files — downloadable documents linked from the website

## Running locally

Keep all required files in their existing relative locations, then open `index.html` in a web browser.

For more reliable local testing, serve the folder through a local web server or a code editor's live-preview extension.

## Deployment

The website is a static site and can be deployed through services such as GitHub Pages, Cloudflare Pages, or Netlify.

The main entry file must remain named `index.html`.

## Search visibility

The current `robots.txt` file asks compliant search engines not to crawl the website. The HTML should also contain the following element inside `<head>` while the website is intended to remain unlisted:

```html
<meta name="robots" content="noindex, nofollow">
```

These instructions discourage search indexing but do not provide authentication or prevent access by someone who has the website URL.

## Copyright

Copyright © 2026 Latif Bukari Rashid. All rights reserved.

See `LICENSE.txt` for the complete terms governing this repository and its contents.
