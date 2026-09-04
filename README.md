# Danny Kwong — academic portfolio

A responsive, static academic website for GitHub Pages. The live pages use plain
HTML, CSS, and JavaScript, with no third-party fonts, icon libraries, or build step.
The original page URLs are retained.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open http://127.0.0.1:4173.

## Where to edit

- `index.html`: homepage and profile summary.
- `pages/`: research, writing, teaching, beyond academia, CV, and contact.
- `css/styles.css`: shared layout, typography, responsive behaviour, and photo crop.
- `js/main.js`: accessible mobile navigation and email-copy control.
- `cv.pdf`: public August 2026 CV; the WhatsApp contact field has been removed.
- `profile.jpg`: supplied photograph, unchanged; framing is handled in CSS.

The public CV is based on the supplied August 2026 version. Unpublished manuscripts
are labelled as unpublished, not as accepted articles or current submissions.
Thesis links and community links are retained from the previous website.

Legacy Astro configuration and source fragments are not used by these static
pages. Preview the website directly as described above.

## Publishing

Review changes locally before pushing to the repository's publishing branch.
Confirm the branch and folder in GitHub Settings → Pages before changing the
deployment configuration. No deployment configuration was changed in this redesign.
