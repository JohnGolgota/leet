import { serveDir, serveFile } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
  const pathname = new URL(req.url).pathname;

  if (pathname === "/simple_file") {
    return serveFile(req, "./path/to/file.txt");
  }

  if (pathname.startsWith("/static")) {
    return serveDir(req, {
      fsRoot: "public",
      urlRoot: "static",
    });
  }

  return new Response("404: Not Found", {
    status: 404,
  });
});
