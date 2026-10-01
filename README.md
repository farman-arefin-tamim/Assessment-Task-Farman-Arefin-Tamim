# ByteSpace

ByteSpace is a responsive learning platform for browsing practical courses and exploring course details. It is built with the Next.js App Router and uses a bold editorial interface, local course data, and locally bundled visual assets.

## Tech stack

- Next.js `16.3.6` with the App Router
- React `19.2.8`
- Tailwind CSS `4` with DaisyUI
- React Icons
- ESLint 9 with the Next.js configuration


## Prerequisites

Install the following before starting:

- Node.js 20.9 or newer
- npm 10 or newer (the project includes a `package-lock.json`)

No environment variables are required. All course data and images are stored in the repository.

## Run locally

1. Clone or download the repository and move into its root directory:
  ```bash
  https://github.com/farman-arefin-tamim/Assessment-Task-Farman-Arefin-Tamim
	```

	```bash
	cd Assessment-Task-Farman-Arefin-Tamim
	```

2. Install the dependencies:

	```bash
	npm install
	```

3. Start the development server:

	```bash
	npm run dev
	```

4. Open [http://localhost:3000](http://localhost:3000) in a browser.

The development server supports hot reload. Edit files under `src/` and the browser will update automatically.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Next.js development server. |
| `npm run lint` | Run ESLint across the project. |
| `npm run build` | Create an optimized production build. |
| `npm start` | Serve the latest production build. Run `npm run build` first. |

There is currently no automated test script or test framework configured.

Any unknown course slug is handled by the custom not-found page.

## Production build

Build and run the app locally in production mode:

```bash
npm run build
npm start
```

Then open [http://localhost:3000](http://localhost:3000). To use another port, set the `PORT` environment variable before starting the server, for example:

```bash
PORT=4000 npm start
```

The app can also be deployed to a Next.js-compatible host such as Vercel. Since the project has no environment variables or external services, no additional runtime configuration is needed for the current demo.

## Project structure

```text
src/
├── app/                         # App Router pages, layout, global styles, and 404 page
│   └── (main)/courses/          # Course browser and dynamic course detail route
├── components/
│   ├── course/                  # Course cards and grids
│   ├── course-detail/           # Detail hero, sidebar, tabs, and share action
│   ├── courses/                 # Course browser UI
│   ├── filters/                 # Search, category, level, and sort controls
│   ├── home/                    # Home page sections
│   ├── layout/                  # Navbar, navigation links, and footer
│   └── ui/                      # Reusable layout and display components
├── data/
│   ├── courses.json             # Course-card data and course slugs
│   └── courseDetails.js         # Derived detail-page content and reviews
└── fonts/                       # Bundled font files

public/images/                   # Local hero, course, avatar, brand, and shape assets
```

The `@/*` import alias points to `src/*`, as configured in `jsconfig.json`.

## Content and implementation notes

- The course browser reads from `src/data/courses.json`; update that file to change course-card data and generated course routes.
- Detailed course copy is derived in `src/data/courseDetails.js`.
- Course detail pages use `generateStaticParams`, so known course pages are generated from the local course list during the build.
- Most visual content is local, which keeps the app self-contained and avoids image-host configuration.
- Several controls are presentation placeholders in this demo. Sign in, join, cart, enrollment, creator pages, newsletter submission, and video playback are not connected to backend behavior yet.
- The home-page search and category controls are visual UI only; the functional search and filtering experience is available on `/courses`.
- The data file currently contains repeated course entries to populate the browser layout. These duplicates are rendered as repeated cards.



For a quick manual check, visit `/`, `/courses`, each course route listed above, and an invalid course URL. On `/courses`, verify search, category and level filters, sorting, and reset. On a course page, verify the tabs and share action.

