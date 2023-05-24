## Test scenario

Minimal reproduction scenario to test Serverside components & dynamic imports


3 pages are present 

### /app-router
* uses app router
* `use client` is never present

### /app-router-client
* uses app router
* `use client` is present in page.jsx


### /pages-router
* uses Pages router


----

Component is always included using

```  const Component = dynamic(() => import("../../components/TextBlock"));```

----
## Issue
css modules are not built; the class is present in the DOM, but no css is inside.

## Expected
Expected the correct behavior to appear when switching from pages router to app router, like stated in docs

https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#nextdynamic

`It behaves the same way in the app and pages directories to allow for incremental migration.`
