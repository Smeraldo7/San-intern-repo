# Terminal knowledge

## Which terminal client did you choose? Why?
I chose Windows Terminal + PowerShell. (I currently have 4 profiles including Command prompt, Powershell,Azure cloud shell and VS Debug console.)

## What customizations (if any) did you make?
I changed the appearance: the color scheme, font and acrylic opacity. 

## What was the most useful command you learned today?
The most useful command I learned today was how to create a function (function gs { git status }) as an alternative to Set-Alias in PowerShell. I wanted to create an alias for git status, but PowerShell had two issues: first, I couldn't directly use Set-Alias gs "git status", and second, even after modifying $PROFILE, I still couldn't run the script due to script execution policies. I could have changed the policy, but I preferred not to due to security concerns.
