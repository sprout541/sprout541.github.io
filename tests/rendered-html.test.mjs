import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Ariele Radford's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Ariele Radford — Full-stack developer \+ Nurse<\/title>/i);
  assert.match(html, /I build marketing websites,/);
  assert.match(html, /subscription systems/);
  assert.match(html, /Haven/);
  assert.match(html, /Rust Director/);
  assert.match(html, /src="\/rust-director-console\.png"/);
  assert.match(html, /Rust Director desktop server manager/);
  assert.match(html, /TC Base Repair/);
  assert.match(html, /src="\/tc-base-repair\.png"/);
  assert.match(html, /TC Base Repair panel in Rust/);
  assert.match(html, /Developer \+ Nurse/);
  assert.match(html, /Skip to content/);
  assert.match(html, /href="https:\/\/myhaven\.pet"/);
  assert.match(html, /property="og:image"/);
  assert.match(html, /https:\/\/sprout541\.github\.io\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("removes the disposable starter and keeps approved claims", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/rust-director-console.png", import.meta.url));
  await access(new URL("../public/tc-base-repair.png", import.meta.url));

  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview/);
  assert.doesNotMatch(layout, /codex-preview|Starter Project/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(page, /60-day trial/);
  assert.match(page, /Stripe Checkout/);
  assert.match(page, /automatically calculating and consuming the required resources/);
  assert.doesNotMatch(
    page,
    /Built for the whole journey|Update once|thoughtful interfaces|coherent journey|full-featured|more efficiently|Human needs, translated/i,
  );
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /:focus-visible/);
});
