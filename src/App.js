import { Notifier } from './Notifier.js';
import { Timer } from './Timer.js';

const App = {
  async start() {
    try {
      const time = 0.1 * 60;
      Timer.init(time);
      await Notifier.init();
      Notifier.notifi({
        title: 'Hora do Post',
        body: 'Crie algum conteúdo para ajudar a comunidade',
      });
    } catch (err) {
      console.log(err.message);
    }
  },
};

export { App };
