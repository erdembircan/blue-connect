const { exec } = require('child_process');
const { EOL } = require('os');
const cli = require('./clitools.js');
const { devices } = require('../devices.json');

const devicePList = devices.map((d, i) => `${i}:[${d.name}]`).join(EOL);

cli.sayLine(devicePList);
cli.ask(`${EOL}select your device to connect${EOL}`, (index) => {
  const selectedDevice = devices[Number(index)];
  cli.sayLine(`${selectedDevice.name} is selected`);
  cli.sayLine('connecting...');

  exec(`echo -e "connect ${selectedDevice.mac}" | bluetoothctl`);
});
