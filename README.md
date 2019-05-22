# Webpack Issue #9159

This repo contains the code to demonstrate the issue #9159 which I've created for webpack project.

## Issue
I've used webpack to build my project normally up to v4.31.0. When upgrade to v4.32.0 & v4.32.1, the app has been broken when using production mode. Development mode is fine.

Chasing down the problem, I've found out that:
- In development mode, the compiled files were identical
- In production mode:
  - The comment blocks were removed (perhaps due to config changes, but I haven't found no changes relevant in release note yet)
  - webpack minified this piece of code differently in v4.32.0 & v4.32.1:

```javascript
export { routerMiddleware } from 'connected-react-router';
```
I spotted this problem by searching for `@@router/CALL_HISTORY_METHOD`, which yeilds 2 occurrences in v4.31.0 but only 1 in the other twos

To help webpack maintainers understand the issue better, I've extracted the problem code to this folder

## Folder structure
`packages` folder contains 3 children which install 3 different versions of webpack:
- 4.31.0
- 4.32.0
- 4.32.1

### Structure of child folder
The three share the same structure:
- source: source code
- config: webpack config
- build: compiled files of both development & production modes

### Scripts
In each child folder, there are 2 scripts:
- develop: Compile in development mode
- build: Compile in production mode

Hope it helps!
