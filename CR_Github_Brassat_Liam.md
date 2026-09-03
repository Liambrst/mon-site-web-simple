# TP Git & GitHub — Mon site web simple

**Auteur :** Liam Brassat  
**Date :** 03/09/2026  
**Dépôt GitHub :** [mon-site-web-simple](https://github.com/Liambrst/mon-site-web-simple)

---

## 2. Git et GitHub

* **Git** permet de gérer l'évolution d'un projet grâce à son historique de versions.
* **GitHub** permet de stocker des dépôts Git à distance et de collaborer à plusieurs.

---

## 3. Les principales commandes

| Commande | Rôle |
| :--- | :--- |
| `git init` | Crée un nouveau dépôt Git dans le dossier courant |
| `git add` | Ajoute des fichiers à la zone d'attente (*staging*) |
| `git commit` | Enregistre un instantané du *staging* dans l'historique local |
| `git push` | Envoie les commits locaux vers le dépôt distant |
| `git pull` | Récupère les commits distants et les fusionne dans la branche locale |
| `git clone` | Copie un dépôt distant entier sur la machine pour la première fois |

---

## 4. Publication du projet

### a. Créer le dépôt local

```bash
git init

## b. Associez le dêpot distant

```bash
git remote add origin [https://github.com/Liambrst/mon-site-wweb-simple.git](https://github.com/Liambrst/mon-site-wweb-simple.git)

### c. Envoyer le projet

```bash
git add .
git commit -m "Premier commit"
git push -u origin main

# 5. Modification du projet

---

## Processus de mise à jour

### 1. Vérifier les modifications

##Avant d'ajouter des fichiers, vérifiez l'état du travail :

```bash
git status

## Explication : Affiche les fichiers modifiés, ajoutés ou supprimés par rapport au dernier commit

```bash
git diff

## Explication : Montre précisément les lignes ajoutées (en vert) ou supprimées (en rouge) dans les fichiers modifiés.

## 2. Préparer les modifications
Placez les fichiers modifiés dans la zone de staging :

```bash
git add README.md

## Explication : Place le fichier README.md dans la zone de staging (index) : il sera inclus dans le prochain commit.

### 3. Créer le commit
## Enregistrez les changements dans l'historique local :

```bash
git commit -m "docs: ajout de la description du projet"

## Explication : Enregistre un nouvel instantané dans l'historique local avec un message descriptif explicite.

### 4. Envoyer vers GitHub
Synchronisez le dépôt local avec le serveur distant :

```bash
git push

## Explication : Transmet le commit au dépôt distant origin/main

