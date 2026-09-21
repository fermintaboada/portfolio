import puppeteer from "puppeteer-core";

const CHROME = String.raw`C:\Program Files\Google\Chrome\Application\chrome.exe`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  defaultViewport: { width: 1440, height: 900 },
  args: ["--hide-scrollbars"],
});

/** Alto, cantidad de palabras y densidad de texto de una página. */
async function medir(url, etiqueta) {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
  await sleep(5000);
  const alto = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < alto; y += 600) {
    await page.evaluate((t) => window.scrollTo({ top: t, behavior: "instant" }), y);
    await sleep(220);
  }
  const datos = await page.evaluate(() => {
    const texto = (document.body.innerText || "").replace(/\s+/g, " ").trim();
    const palabras = texto ? texto.split(" ").length : 0;
    return {
      alto: document.body.scrollHeight,
      palabras,
      pantallas: +(document.body.scrollHeight / window.innerHeight).toFixed(1),
    };
  });
  console.log(
    `${etiqueta.padEnd(34)} ${String(datos.alto).padStart(6)}px  ${String(datos.pantallas).padStart(5)} pantallas  ${String(datos.palabras).padStart(5)} palabras`,
  );
  await page.close();
  return datos;
}

console.log("página                                  alto      scroll      texto");
console.log("-".repeat(78));
await medir("https://www.iserre.site/", "REFERENCIA · iserre (todo)");
console.log("-".repeat(78));
await medir("https://fermin-taboada.vercel.app/", "NUESTRO · home");
await medir("https://fermin-taboada.vercel.app/proyectos/upscale-lab", "NUESTRO · caso Upscale Lab");
await medir("https://fermin-taboada.vercel.app/proyectos/boleto-click", "NUESTRO · caso Boleto Click");
await medir("https://fermin-taboada.vercel.app/proyectos/q-golf", "NUESTRO · caso Q-Golf");
await medir("https://fermin-taboada.vercel.app/proyectos/barras-nomades", "NUESTRO · caso Barras Nómades");
await medir("https://fermin-taboada.vercel.app/proyectos/petotatts", "NUESTRO · caso peto.tatts");

await browser.close();
