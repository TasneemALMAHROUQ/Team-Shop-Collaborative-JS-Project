const STORAGE_KEY = 'team-shop-items-v1';


function updateStats(){
const out = $('#stats-output');
const totals = state.items.reduce((acc,it)=>{
acc[it.category] = (acc[it.category]||0) + Number(it.quantity);
return acc;
},{});
if(Object.keys(totals).length === 0){ out.innerHTML = '<small class="muted">No stats yet</small>'; return; }
out.innerHTML = Object.entries(totals).map(([cat,num])=>`<div><strong>${cat}</strong>: ${num}</div>`).join('');
}


function addItem(data){ const item = { id: generateId(), name: data.name.trim(), category: data.category, quantity: Number(data.quantity), price: data.price ? Number(data.price) : 0, done: false }; state.items.unshift(item); saveItems(); renderList(); }
function toggleDone(id){ const idx = state.items.findIndex(i=>i.id===id); if(idx>-1){ state.items[idx].done = !state.items[idx].done; saveItems(); renderList(); } }
function removeItem(id){ const idx = state.items.findIndex(i=>i.id===id); if(idx>-1){ state.items.splice(idx,1); saveItems(); renderList(); } }


function init(){
loadItems(); renderList();
const form = $('#item-form');
const search = $('#search-input');
const pills = $('#filter-pills');
const list = $('#item-list');
const errorsBox = $('#form-errors');


form.addEventListener('submit', e => {
e.preventDefault();
errorsBox.textContent = '';
const formData = new FormData(form);
const data = {
name: formData.get('name'),
category: formData.get('category'),
quantity: formData.get('quantity'),
price: (formData.get('price')||'').trim()
};
const errs = validateItem(data);
if(errs.length){ errorsBox.innerHTML = errs.map(x=>`<div>• ${x}</div>`).join(''); return; }
addItem(data);
form.reset();
form.querySelector('[name=quantity]').value = 1;
form.querySelector('[name=name]').focus();
});


list.addEventListener('click', e => {
const li = e.target.closest('.item'); if(!li) return; const id = li.dataset.id;
if(e.target.classList.contains('toggle')){ toggleDone(id); }
if(e.target.classList.contains('remove')){ if(confirm('Remove this item?')) removeItem(id); }
});


pills.addEventListener('click', e => { const btn = e.target.closest('.pill'); if(!btn) return; pills.querySelectorAll('.pill').forEach(p=>p.classList.remove('active')); btn.classList.add('active'); state.filter = btn.dataset.cat; renderList(); });
search.addEventListener('input', e => { state.search = e.target.value; renderList(); });
}


document.addEventListener('DOMContentLoaded', init);