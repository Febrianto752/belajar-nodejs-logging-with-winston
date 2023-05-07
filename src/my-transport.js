import TransportStream from "winston-transport";

export class MyTransport extends TransportStream {
  constructor(option) {
    super(option);
  }

  log(info, next) {
    console.log(`${new Date()} : ${info.level} : ${info.message}`);
    next();
  }
}
