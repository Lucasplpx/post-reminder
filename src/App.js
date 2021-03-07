import { Notifier } from './Notifier.js';

const App = {
  async start() {
    try {
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
