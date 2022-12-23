//bai 1
class Animal {
   constructor(name) {
      this.name = name
   }
}

class Rabbit extends Animal {
   constructor(name) {
      super()
      this.name = name
      this.created = Date.now()

   }
}

let rabbit = new Rabbit("White Rabbit")
//console.log(rabbit.name)

//bai 2 
class Clock {
   constructor({ template }) {
      this.template = template
   }

   render() {
      let date = new Date()

      let hours = date.getHours()
      if(hours < 10) hours = "0" + hours;

      let mins = date.getMinutes()
      if(mins < 10) mins = "0" + mins;

      let secs = date.getSeconds()
      if(secs < 10) secs = "0" + secs;

      let outputs = this.template
         .replace('h', hours)
         .replace('m', mins)
         .replace('s', secs)

      console.log(outputs)
   }

   stop() {
      clearInterval(this.timer)
   }

   start() {
      this.render()
      this.timer = setInterval(() => this.render(), 1000)
   }
}

let clock = new Clock({ template: "h:m:s"})
clock.start()
