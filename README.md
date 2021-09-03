# next-export-routing

## Goal

- run `next export`, serve the resulting `out` directory from a static web host
- be able to navigate directly to all three routes (or refresh the page if already there):
  - `/`
  - `/admin`
  - `/admin/user/[id]`

## Problem

SPA typically routing needs help from the web server, such as configuring it to rewrite all not-found requests to /index.html so the JavaScript routing can handle rendering the correct content. For projects mirroring this one, exported with both static and dynamic routes, this does not seem to work.

If you don't rewrite requests, static routes work but dynamic ones don't (404). If you do rewrite requests, all routes (upon refresh or direct navigation) render the home page (index route) even though the URL is right.

There may be some magic incantation involving Next.js features like `getStaticPaths`, `exportPathMap`, etc. that would make this work, but if so, I couldn't figure it out. The data represented by the dynamic path segment in this example is truly live and dynamic at runtime, it is untenable to know and statically export all values at build time.

## Try it

Note: the "real world" project that raised this issue is using IIS to serve the content, but I was able to replicate the issue here with `serve`.

No rewrites:

```
yarn serve
```

Or, rewrite all not-found requests to `index.html`:

```
yarn serve:single
```

Visit http://localhost:5000 in your browser, follow the links to arrive at `/admin/user/12345`, then reload the page.
