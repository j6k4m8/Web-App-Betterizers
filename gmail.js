
/*  Draft-Delete
|   When you hit Ctrl+Shift+3 (a derivative of
|   Gmail's existing Shift+3 to delete a message),
|   the current draft is deleted, even if you're
|   currently editing it.
|   Perfect for when you accidentally hit 'a' or 'r'.
*/
document.addEventListener('keyup', function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode == 51) {
        document.querySelectorAll('div.og.T-I-J3')[0].click();
    }
});
