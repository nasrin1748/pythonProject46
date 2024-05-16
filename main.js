let cm_editor;

function initCodeMirror() {
    window.editor = CodeMirror.fromTextArea(document.getElementById('ta'), {
      mode: { name: "javascript", json: true },
      lineWrapping: true,
      smartIndent: true,
      addModeClass: true,
      autoCloseTags: true,
      autoRefresh: true,
      lineNumbers: true
    });

    // create an instance.
    cm_editor = document.querySelector('.CodeMirror').CodeMirror;
  }

  window.addEventListener('load', function () { initCodeMirror(); })

  function get_textarea_value () {
    let val = cm_editor.getValue();		// retrieve values from the editor.
	return val;
  }
  function input() {
      const userInput = prompt("Please enter your name:");
      return userInput;

  }