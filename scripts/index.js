const inquirer = require("inquirer");
const { Command } = require("commander");
const program = new Command();
const fs = require("fs");

program.version("version 0.0.1");

program
  .option("-c, --create <name>", "create project")
  .command("create <name>")
  .action((dir) => {
    console.log("Creating Project %s", dir);
    fs.mkdir(`${dir}`, { recursive: true }, (err) => {
      if (err) throw err;
      inquirer
        .prompt([
          {
            type: "rawlist",
            name: "typeProject",
            message: "What type of project?",
            choices: [
              "just Nodejs",
              "Vue/Nodejs",
              "Angular/Nodejs",
              "React/Nodejs",
            ],
          },
        ])
        .then((answer) => {
          if (answer.typeProject === "just Nodejs") {
            fs.mkdir(`${dir}/app`, { recursive: true }, (err) => {
              if (err) throw err;
              fs.writeFile(`${dir}/app/index.html`, "", (err) => {
                if (err) throw err;
              });
            });
            fs.mkdir(`${dir}/assets`, { recursive: true }, (err) => {
              if (err) throw err;
              fs.mkdir(`${dir}/assets/js`, { recursive: true }, (err) => {
                if (err) throw err;
              });
              fs.mkdir(`${dir}/assets/css`, { recursive: true }, (err) => {
                if (err) throw err;
              });
            });
            fs.mkdir(`${dir}/public`, { recursive: true }, (err) => {
              if (err) throw err;
            });
            fs.mkdir(`${dir}/src`, { recursive: true }, (err) => {
              if (err) throw err;
              fs.writeFile(`${dir}/src/server.js`, "", (err) => {
                if (err) throw err;
              });
            });
            fs.mkdir(`${dir}/test`, { recursive: true }, (err) => {
              if (err) throw err;
              fs.writeFile(`${dir}/test/test.js`, "", (err) => {
                if (err) throw err;
              });
            });
            fs.mkdir(`${dir}/views`, { recursive: true }, (err) => {
              if (err) throw err;
            });
            console.log("Ready projects");
          } else {
            console.log("in building...");
          }
        });
    });
  });

program.parse(process.argv);
