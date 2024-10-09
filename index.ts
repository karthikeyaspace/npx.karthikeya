#!/usr/bin/env node

import terminalLink from "terminal-link";
import chalk from "chalk";
import { Octokit } from "@octokit/rest";

const username = "karthikeyaspace";
const octokit = new Octokit();

const n = 7;

const printme = async (): Promise<void> => {
  try {
    console.log("\n");
    console.log(
      chalk.blue(`
            
██╗  ██╗ █████╗ ██████╗ ████████╗██╗  ██╗██╗██╗  ██╗███████╗██╗   ██╗ █████╗ 
██║ ██╔╝██╔══██╗██╔══██╗╚══██╔══╝██║  ██║██║██║ ██╔╝██╔════╝╚██╗ ██╔╝██╔══██╗
█████╔╝ ███████║██████╔╝   ██║   ███████║██║█████╔╝ █████╗   ╚████╔╝ ███████║
██╔═██╗ ██╔══██║██╔══██╗   ██║   ██╔══██║██║██╔═██╗ ██╔══╝    ╚██╔╝  ██╔══██║
██║  ██╗██║  ██║██║  ██║   ██║   ██║  ██║██║██║  ██╗███████╗   ██║   ██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝                                                     

        `)
    );

    const { data: user } = await octokit.users.getByUsername({
      username: username,
    });

    console.log(chalk.bold("\n📊 gitHub stats:"));
    console.log(chalk.greenBright("@" + user.login));
    console.log(chalk.greenBright(user.public_repos + " repositories"));

    console.log(chalk.bold("\n📜 my recent projects:"));

    const printTopNRepos = async (n: number) => {
      const { data: repos } = await octokit.repos.listForUser({
        username: username,
        sort: "updated",
        per_page: n,
      });
      repos.forEach((repo, index) => {
        console.log(
          chalk.blueBright(
            `-> ${chalk.redBright(repo.name)} - ${terminalLink(
              "",
              repo.html_url
            )}`
          )
        );
        console.log(
          chalk.yellowBright(
            `   ${
              repo.description ? repo.description : "Still working on it"
            }\n`
          )
        );
      });
    };

    await printTopNRepos(Number(n));

    console.log("\n\n");
    console.log(
      chalk.greenBright(
        terminalLink(
          "Visit my Github profile",
          chalk.blueBright("https://github.com/karthikeyaspace")
        )
      )
    );
    console.log(
      chalk.greenBright(
        terminalLink(
          "View my portfolio",
          chalk.blueBright("https://kv3.vercel.app")
        )
      )
    );
    console.log(
      chalk.greenBright(
        terminalLink(
          "Connect with me on Linkedin ",
          chalk.blueBright("https://linkedin.com/in/karthikeyaveruturi")
        )
      )
    );
    console.log(
      chalk.greenBright(
        terminalLink(
          "Follow me on X ",
          chalk.blueBright("https://x.com/karthikeyaspace")
        )
      )
    );
    console.log("\n\n");
  } catch (error) {
    console.error(error);
  }
};

printme();
