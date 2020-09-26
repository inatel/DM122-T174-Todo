const db = new Dexie('todoDB');

db.version(1).stores({
  tasks: '++id,description,done'
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

async function list() {
  db.tasks.each(task => console.log(task));

  const taskTypeScript = await db.tasks.get(2);
  taskTypeScript.done = true;
  db.tasks.put(taskTypeScript);

  const tasksDone = await db.tasks
    .where('description').equals('Learn Java').first();
  console.log('Query', tasksDone);
}

list();