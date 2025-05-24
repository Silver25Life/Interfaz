import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const ROOT = `${Deno.cwd()}/frontend`;

serve(async (req) => {
  const url = new URL(req.url);
  const path = decodeURIComponent(url.pathname);
  let filePath = `${ROOT}${path === "/" ? "/index.html" : path}`;

  try {
    const file = await Deno.readFile(filePath);
    const contentType = getContentType(filePath);
    return new Response(file, {
      headers: {
        "content-type": contentType,
      },
    });
  } catch (_) {
    return new Response("Archivo no encontrado", { status: 404 });
  }
});

function getContentType(filePath: string): string {
  if (filePath.endsWith(".html")) return "text/html";
  if (filePath.endsWith(".css")) return "text/css";
  if (filePath.endsWith(".js")) return "application/javascript";
  if (filePath.endsWith(".png")) return "image/png";
  if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg"))
    return "image/jpeg";
  if (filePath.endsWith(".webp")) return "image/webp";
  return "text/plain";
}
