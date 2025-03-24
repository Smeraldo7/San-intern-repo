# Git Understanding

## What makes a good commit message?
- It should clearly state what the commit does.
- Include a summary and details (if needed):  First line- short summary. Additional lines- more context if necessary.
- If relevant, link to issue numbers (e.g., Fixes #143)
- It should follow a consistent format

## How does a clear commit message help in team collaboration?

- It'll make code reviews easier when changes can be quickly understood.
- Clear messages help trace issues faster.
– New team members can understand project history(Smoother onboarding).
- Efficient version control (useful when reverting or cherry-picking commits)

## How can poor commit messages cause issues later?

- Harder to track changes.
- Unclear history makes troubleshooting difficult.
- Hard to resolve conflicts if commit intent is unclear.
- Without meaningful commit messages, long-term maintainability suffers.


# git bisect

## What does git bisect do?
git bisect helps us find the commit that introduced a bug by performing a binary search through the commit history.
We specify a "bad" commit (where the bug exists) and a "good" commit (where the bug doesn't exist). Git then checks out the middle commit in the range for us to test.
We continue marking commits as "good" or "bad," and Git narrows down the range until it identifies the problematic commit.

## When would you use it in a real-world debugging situation?
- When its not sure which commit introduced the bug
-When the bug appears after a series of changes, and manually reviewing all commits would be too time-consuming.

## How does it compare to manually reviewing commits?
git bisect is much faster because it halves the number of commits to check with each step (binary search), whereas manual review requires checking each commit one by one.

# Staging vs committing

## What is the difference between staging and committing?
Staging prepares changes by adding them to the staging area, allowing us to review and organize them before committing. Committing finalizes the staged changes, records them in the Git repository as a snapshot, and makes them part of the project’s history.

## Why does Git separate these two steps?
- The separation gives us control over which changes we want to commit and when.
- It reduces the chances of committing unwanted changes or mistakes.

## When would you want to stage changes without committing?
- when we want to stage certain changes without committing all changes in the working directory.
- when we're fixing bugs in multiple files but want to commit fixes for one file first, staging helps us manage that process.


#  Branching & Team Collaboration

## Why is pushing directly to main problematic?
- It introduces the risk of breaking the main codebase
- It makes it harder to track changes and understand the history of updates

## How do branches help with reviewing code?
- Isolating changes, so reviewers can focus on specific features or fixes.
- Allowing testing in a separate environment before merging into main.
-Preventing interference with other ongoing work on the main branch.

## What happens if two people edit the same file on different branches?
When merging, a merge conflict will occur if changes overlap.Git will ask to resolve the conflict manually, keeping only one version of the changes.This needs to be resolved before the merge can be completed successfully.

### Merging conflict -> :3

#