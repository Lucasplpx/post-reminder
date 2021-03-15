import { Notifier } from './Notifier.js';
import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';

const notifi = Notifier.notifi({
  title: 'Hora do Post',
  body: 'Crie algum conteúdo para ajudar a comunidade',
});

const App = {
  async start() {
    try {
      await Notifier.init();
      Emitter.on('countdown-start', notifi);

      Emitter.on('countdown-end', Timer.init);

      const time = 0.1 * 60;
      Timer.init(time);
    } catch (err) {
      console.log(err.message);
    }
  },
};

export { App };
