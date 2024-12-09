#!/usr/bin/env node

import terminalLink from "terminal-link";
import chalk from "chalk";

const BASE_URL = "https://api.itskv.me";

const fetchData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/npx/me`).then((res) => res.json());
    if (res.success) {
      return res.data;
    }
    throw new Error("Failed to fetch data");
  } catch (error) {
    console.log(error);
  }
};

const printRepo = (repo: {
  name: string;
  description: string;
  url: string;
}) => {
  console.log(
    chalk.blueBright(
      `-> ${chalk.redBright(repo.name)} - ${terminalLink("", repo.url)}`
    )
  );
  console.log(
    chalk.yellowBright(
      `   ${repo.description ? repo.description : "Still working on it"}\n`
    )
  );
};

const printSocial = (social: { name: string; url: string }) => {
  console.log(
    chalk.greenBright(`${social.name} - ${terminalLink("", social.url)}`)
  );
};

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

    console.log("\nMy preferred stack: ");
    console.log(chalk.greenBright("TypeScript"));
    console.log(chalk.greenBright("GO\n"));

    const github = await fetchData();

    const { profile, recentRepos: repos, commits } = github;

    console.log(terminalLink("@" + profile.username, profile.url));
    console.log(chalk.yellow(profile.name));
    console.log(chalk.cyan(profile.bio));
    console.log(chalk.red(profile.repos) + chalk.greenBright(" repositories"));
    console.log(chalk.red(commits) + chalk.greenBright(" contributions"));

    console.log(chalk.bold("\n📜 my recent projects:"));

    repos.forEach(
      (repo: { name: string; description: string; url: string }) => {
        printRepo(repo);
      }
    );

    console.log("\n");

    printSocial({ name: "Github", url: "https://github.com/karthikeyaspace" });
    printSocial({ name: "X", url: "https://x.com/karthikeyaspace" });
    printSocial({
      name: "LinkedIn",
      url: "https://linkedin.com/in/karthikeyaveruturi",
    });

    console.log("\n");
  } catch (error) {
    console.error(error);
  }
};

printme();
