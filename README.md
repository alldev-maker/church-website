## Welcome To Church Notes Web

### Branch Prefixes

    - bugfix/ 
    - feature/
    - hotfix/
    - release/


Example: 
Ticket: Create a reusable Textarea input.
Branch: `feature/textarea-input`





### Commits

Always use active tense. 

Example: If you commit some code that adds a new button. Say:

"Adds new button to the text area input"

If you fix a bug that was causing an issues say:

"Fixes bug that cause the textarea not to update when the button was presses".

This way we know what each commit does.


### Pull Requests

When you have a completed a ticket. Create a new Pull Request.

`feature/textarea-input` > `master`


### Ready to Deploy
    - npm run build
    - firebase deploy

