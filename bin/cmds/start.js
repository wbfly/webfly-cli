#!bin
/**
 * Created by lamallam on 13/09/2017.
 */
 import { exec } from "child_process";
 
 export default function start ()  {
   console.log("Starting application ...");
   exec("npm start", function (error, stdout, stderr) {
     console.log(stdout);
     if (error) console.log(error);
     if (stderr) console.log(stderr);
   });
 };
 start()