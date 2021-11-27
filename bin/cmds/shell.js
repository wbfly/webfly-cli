import cp from 'child_process';


export default function guess() {
  
  const n = cp.fork("bin/cmds/init.js");

  n.on('message', (m) => {
  console.log('PARENT got message:', m);
  });

// Causes the child to print: CHILD got message: { hello: 'world' }
  n.send({ hello: 'world' });
}

guess()

