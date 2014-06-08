/*  Ctrl+Enter to Send
|   When you disable enter-to-send in
|   MightyText, there's no keyboard shortcut
|   to send. This adds Ctrl+Enter keybinding
|   to send a message.
*/
document.addEventListener('keyup', function(e) {
    if (e.ctrlKey && e.keyCode == 13) {
        document.querySelectorAll('.sendButton.mightyButton')[0].click();
    }
});
