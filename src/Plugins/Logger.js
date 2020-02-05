
const Log = {
  info: whatToLog => {
    console.info(whatToLog);
  },
  debug: whatToLog => {
    console.log(whatToLog);
  },
  error: whatToLog => {
    console.error(whatToLog);
  }
};

export default Log;
