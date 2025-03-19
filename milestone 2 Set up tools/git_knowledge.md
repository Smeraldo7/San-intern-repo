# Git Knowledge

## Have you used Git before? If so, in what context?
Yes, I've used GitHub, primarily for managing repositories and collaborating on projects. While I haven't used Git directly yet, I’ve been working with the GitHub interface for tasks like cloning repos, creating pull requests, and pushing changes.

## Which Git client (if any) did you choose? Why?
I chose GitBash since it lets me perform Git operations directly through the terminal.

## What was the most interesting thing you learned about Git today?
When I tried to clone my intern repo to my PC using Git Bash, the clone succeeded, but the checkout failed due to a naming error (a semicolon) in some folder names. This caused the paths to be treated as invalid. To fix this, I used GitHub.dev to rename the folders, then pushed the changes to my branch and created a pull request to merge them into the main branch. After the merge, I was able to clone the repository successfully. I learned that Git handles folder names and paths case-sensitively and may also have issues with special characters like semicolons. Also that, we can rename folders using GitHub.dev to resolve such issues.