let db;

export default class TodoService {

  constructor() {
    this.initializeDB();
  }

  initializeDB() {
    db = new Dexie('todoDB');

    db.version(1).stores({
      tasks: '++id,description'
    });

    db.on('populate', async () => {
      console.log('It runs only once!');
      await db.tasks.bulkPut([
        { description: 'Learn JavaScript', done: false },
        { description: 'Learn TypeScript', done: false },
        { description: 'Learn PWA', done: false },
        { description: 'Learn Java', done: false }
      ]);
    });
  }

  getAll() {
    return db.tasks.toArray();
  }
}
