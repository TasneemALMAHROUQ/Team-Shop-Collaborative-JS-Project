# Team Shop — Collaborative JS Project

A small **vanilla JavaScript** app your team of three will build using **GitHub branches**.
It covers: **HTML/CSS**, **DOM** (Ch10), **Events** (Ch11), **Arrays/Loops** (Ch12), **If/Else & Functions**, and basic **Forms + RegEx**.
Bonus: practice **Git & GitHub** flow with branches and pull requests.

## App idea
A minimal “shop list” where users can:
- Add items (name, category, quantity) — with **validation**
- See items in a list and **toggle done** by clicking
- **Filter** by category and **search** by name
- See **stats** (totals per category via `reduce`)

## Roles & branches (suggested)
- **Student A — UI & Layout** → branch: `feature/ui`
  - Add tagline under title, adjust layout & styles in `styles.css`.
  - Improve list look (icons, spacing). Keep it simple.
- **Student B — Form & Validation** → branch: `feature/form-validation`
  - Enhance HTML form (`index.html`) and `validateItem()` in `app.js`.
  - Show friendly error messages and prevent invalid submit.
- **Student C — Filters & Storage** → branch: `feature/filters-storage`
  - Improve filter pills and search behavior in `app.js`.
  - **Stretch:** persist items in `localStorage` (load/save).

## How to run
Just open `index.html` in your browser.

## Repo setup (Git/GitHub)
```bash
# one time by the team lead
git init
git add .
git commit -m "chore: initial scaffold"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

Each student creates a branch and works independently:
```bash
# Student A
git checkout -b feature/ui
# ...edit files...
git add -A
git commit -m "feat(ui): header tagline and improved list styles"
git push -u origin feature/ui

# Student B
git checkout -b feature/form-validation
# ...edit files...
git add -A
git commit -m "feat(form): validation and error handling"
git push -u origin feature/form-validation

# Student C
git checkout -b feature/filters-storage
# ...edit files...
git add -A
git commit -m "feat(filters): search + category; add localStorage"
git push -u origin feature/filters-storage
```

Open **Pull Requests** on GitHub → request reviews → merge to `main`.

## Merge practice (optional conflict)
Try changing the `--brand` color in `styles.css` on two branches to create a **small merge conflict**. Resolve it together, then commit the merge.

## Mapping to chapters
- **DOM (Ch10):** `document.getElementById`, `createElement`, `classList`, `dataset`, `innerHTML`
- **Events (Ch11):** `addEventListener`, `click`, `submit`, `event delegation`
- **Arrays (Ch12):** `forEach`, `filter`, `reduce`, `findIndex`, `splice`
- **If/Else & Functions:** validation logic & helpers
- **Forms & RegEx:** HTML `pattern` + JS `RegExp` in `validateItem()`

## Done criteria (Definition of Done)
- Users can add valid items; invalid input shows clear error.
- List renders and can toggle **done** + remove an item.
- Filter & search work together.
- Stats update correctly on every change.
- Code passes quick manual test in the browser.
- Team merged all feature branches via Pull Requests.

## Stretch goals
- Persist items in `localStorage`.
- Add a price field and total cost (use `reduce`).
- Add category icons in the list.
