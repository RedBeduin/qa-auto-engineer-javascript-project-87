### Hexlet tests and linter status:

[![Actions Status](https://github.com/RedBeduin/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/RedBeduin/qa-auto-engineer-javascript-project-87/actions)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=RedBeduin_qa-auto-engineer-javascript-project-87&metric=coverage)](https://sonarcloud.io/summary/new_code?id=RedBeduin_qa-auto-engineer-javascript-project-87)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=RedBeduin_qa-auto-engineer-javascript-project-87&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=RedBeduin_qa-auto-engineer-javascript-project-87)

###     Difference Generator
### Application to generate differences between two files, has option to set the format(--format, four kinds: default format("stylish"),"plain, "json", "stylish")

###    Algorythm of the installation
### 1.Open the project on Github, tap "Code", copy the URL
### 2.Open Ubuntu, type "git clone" and paste the URL
### 3.Move to the project directory, type "npm i" to create "node_modules" folder and install the difference generator application to your PC

###    Algorythm of the launch
### 1.Open Ubuntu and move to the project directory
### 2.Type "gendiff ./\_\_fixtures\_\_/file1.json ./\_\_fixtures\_\_/file2.json" and check that the result of the launch of the application(list of the differences between files) is displayed correctly. You can also add options, for example, if you want to see the result in plain format, you shall type "gendiff --format plain ...", or, if you need JSON format or stylish format, you can type "gendiff --format json ..." to recieve the result in JSON format and "gendiff --format stylish ..." to recieve the result in stylish format(which is default format). In addition, you can compare another files. To do that, you shall add another two files in JSON or YAML format in the "\_\_fixtures\_\_" directory and write the paths to the file as the parameters of the gendiff command, in other words, you need to fill your option and filepaths in "gendiff (option) (first filepath) (second filepath)" or leave the option empty to see the result in the stylish format, which is decided to be the default format. The filepath you enter can be absolute or relative.
