
const Log = {
  info: whatToLog => {
    console.info(`info: | ${whatToLog}`);
  },
  debug: whatToLog => {
    console.log(`debug: | ${whatToLog}`);
  },
  error: whatToLog => {
    console.error(`error: | ${whatToLog}`);
  }
};

export default Log;
