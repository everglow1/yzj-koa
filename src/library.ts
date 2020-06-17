import Emitter from 'events'

export default class koa extends (Emitter as any) {
  public fn: any;
  constructor() {
    super();
    // this.fn;
  }

  use(fn:Function):void {
    this.fn = fn
  }

  listen() {

  }


}
