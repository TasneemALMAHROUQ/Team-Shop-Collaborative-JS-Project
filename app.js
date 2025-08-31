// Team Shop — Student A UI only
// Covers: DOM (Ch10), Events (Ch11), Arrays/Loops (Ch12)

// ---------- Data (Student A only) ----------
const items = [
  { name: 'Apple', type: 'fruit', qty: 3, done: false },
  { name: 'Banana', type: 'fruit', qty: 5, done: false },
  { name: 'Carrot', type: 'veg',   qty: 2, done: false },
  { name: 'Bread',  type: 'other', qty: 1, done: false },
];

// ---------- DOM references ----------
const listEl = document.getElementById('list');
const stats = {
  total:  document.getElementById('totalCount'),
  fruit:  document.getElementById('fruitCount'),
  veg:    document.getElementById('vegCount'),
  other:  document.getElementById('otherCount')
};

// ---------- Render function ----------
function render() {
  listEl.innerHTML = '';

  items.forEach(item => {
    const li = document.createElement('li');
    // Student A: add shopping cart icon
    li.textContent = `🛒 ${item.name} (${item.type}) — x${item.qty}`;
    li.dataset.name = item.name;

    if(item.done) li.classList.add('complete');

    listEl.appendChild(li);
  });

  // Student A: simple stats
  const counts = items.reduce((acc, it) => {
    acc[it.type] = (acc[it.type] || 0) + 1;
    return acc;
  }, {});

  stats.total.textContent = `Total: ${items.length}`;
  stats.fruit.textContent = `Fruit: ${counts.fruit || 0}`;
  stats.veg.textContent   = `Veg: ${counts.veg || 0}`;
  stats.other.textContent = `Other: ${counts.other || 0}`;
}

// ---------- Toggle done on click ----------
listEl.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI'){
    const name = e.target.dataset.name;
    const idx = items.findIndex(i => i.name === name);
    if(idx !== -1){
      items[idx].done = !items[idx].done;
      e.target.classList.toggle('complete');
    }
  }
});

// Initial render
render();
