#!/usr/bin/env node

import terminalLink from "terminal-link";
import chalk from "chalk";

const printme = async (): Promise<void> => {
  try {
    console.log("\n\n");
    console.log(
      chalk.blue(`
            ░▒▓█▓▒░░▒▓█▓▒░ ░▒▓██████▓▒░ ░▒▓███████▓▒░░▒▓████████▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓████████▓▒░░▒▓█▓▒░░▒▓█▓▒░ ░▒▓██████▓▒░  
            ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ 
            ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░       ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░ 
            ░▒▓███████▓▒░ ░▒▓████████▓▒░░▒▓███████      ░▒▓█▓▒░    ░▒▓████████▓▒░░▒▓█▓▒░░▒▓███████▓▒░ ░▒▓██████▓▒░   ░▒▓██████▓▒░ ░▒▓████████▓▒░ 
            ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░          ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░ 
            ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░          ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░ 
            ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░  ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓████████▓▒░   ░▒▓█▓▒░    ░▒▓█▓▒░░▒▓█▓▒░ 
        `)
    );

    console.log(
      chalk.greenBright(
        terminalLink(
          "Visit my Github profile",
          "https://github.com/karthikeyaspace"
        )
      )
    );
    console.log(
      chalk.greenBright(
        terminalLink(
          "Connect with me on Linkedin ",
          "https://linkedin.com/in/karthikeyaveruturi"
        )
      )
    );
    console.log(
      chalk.greenBright(
        terminalLink("Follow me on X ", "https://x.com/karthikeyaspace")
      )
    );
    console.log("\n\n");
  } catch (error) {
    console.error(error);
  }
};

printme();
