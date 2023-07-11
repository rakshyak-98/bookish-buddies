# Project guid-lines

## Source Control Management (SCM)
- add new feature
    1. create a branch from backend-main or frontend-main name the branch prefix (feature-) ex: <b>feature-feature-name</b>.
        ```bash
        git switch backend-main
        git branch feature-feature-name
        gti checkout feature-feature-name
        ```
    2. raise a pull request to the base backend-main or frontend-main to feature branch.
        - goto [link](https://github.com/rakshyak-98/bookish-buddies/pulls)
        - create new pull request
        - base (from which you have created branch)
        - compare (your new feature branch name )
    3. request review to other collaborator.
    4. wait for review approval.
    5. merge you branch (need review request to be approved by at-least one reviewers).
- add new issue
    1. goto [link](https://github.com/rakshyak-98/bookish-buddies/issues)
    2. add new issue, 
        - Title (error message).
        - copy paste the full length error message
## Code Lay-out