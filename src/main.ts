import { log } from "deps";
import { App } from "../types.ts";

export function createApp(app: App): App {
  const newApp: App = {
    name: app.name,
    version: app.version || "0.1.0",
    description: app.description || "Aplication created with 'wink'",
    authors: app.authors,
    cmd: app.cmd || Deno.args,
  };

  if (newApp.cmd?.length === 1 && newApp.cmd![0] === "--authors") {
    printAuthors(newApp);
  } else if (newApp.cmd?.length === 1 && newApp.cmd![0] === "--help") {
    printHelp(newApp);
  }

  return newApp;
}

export function printHelp(app: App) {
  const message = `
${app.name} - ${app.version}
${app.description}
  `;

  console.log(message);
}

export function printAuthors(app: App) {
  let authors = "";

  if (app.authors !== undefined) {
    for (const author of app.authors) {
      authors += `  ${author}\n`;
    }
  } else {
    log.error("Cannot get authors");
    return;
  }

  const message = `
${app.name} - ${app.version}
${app.description}
${authors !== "" ? `\nAUTHORS:\n${authors}` : null}
`;
  console.log(message);
}
