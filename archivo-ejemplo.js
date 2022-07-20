Windows PowerShell
Copyright (C) Microsoft Corporation. Todos los derechos reservados.

Instale la versión más reciente de PowerShell para obtener nuevas características y mejoras. https://aka.ms/PSWindows

PS C:\Users\gtmri\Desktop> mkdir CarpetaHenry


    Directorio: C:\Users\gtmri\Desktop


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         20/7/2022     15:49                CarpetaHenry


PS C:\Users\gtmri\Desktop> cd CarpetaHenry
PS C:\Users\gtmri\Desktop\CarpetaHenry> git clone https://github.com/Mripoll-0/repositorio-henry.git
Cloning into 'repositorio-henry'...
warning: You appear to have cloned an empty repository.
PS C:\Users\gtmri\Desktop\CarpetaHenry> cd repositorio-henry
PS C:\Users\gtmri\Desktop\CarpetaHenry\repositorio-henry> touch archivo-ejemplo.js
PS C:\Users\gtmri\Desktop\CarpetaHenry\repositorio-henry> git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        archivo-ejemplo.js

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\gtmri\Desktop\CarpetaHenry\repositorio-henry> git add archivo-ejemplo.js
PS C:\Users\gtmri\Desktop\CarpetaHenry\repositorio-henry> git commit -m 'Agregado nuevo archivo, archivo-ejemplo.js'
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'gtmri@Exo.(none)')
PS C:\Users\gtmri\Desktop\CarpetaHenry\repositorio-henry> git config --global user.email "gtmripoll@gmail.com"
PS C:\Users\gtmri\Desktop\CarpetaHenry\repositorio-henry> git config --global user.name "Mripoll-0"
PS C:\Users\gtmri\Desktop\CarpetaHenry\repositorio-henry> git commit -m 'Agregado nuevo archivo, archivo-ejemplo.js'
[main (root-commit) a1fbb76] Agregado nuevo archivo, archivo-ejemplo.js
 1 file changed, 22 insertions(+)
 create mode 100644 archivo-ejemplo.js
PS C:\Users\gtmri\Desktop\CarpetaHenry\repositorio-henry> git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 643 bytes | 643.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Mripoll-0/repositorio-henry.git
 * [new branch]      main -> main
PS C:\Users\gtmri\Desktop\CarpetaHenry\repositorio-henry>