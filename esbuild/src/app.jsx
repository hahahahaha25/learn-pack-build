import * as React from "react";
import * as Server from "react-dom/server";

let Greet = () => <h1>Hello, esbuild!</h1>;
console.log(Server.renderToString(<Greet />));
