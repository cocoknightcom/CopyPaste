document.addEventListener('DOMContentLoaded', function () {
    // Create a filter list
    var filterList = document.createElement('div');
    filterList.classList.add('filter-list');

    // Fetch available tags from tw-tag elements
    var availableTags = [];
    var tagElements = document.querySelectorAll('tw-tag');
    tagElements.forEach(function (tagElement) {
        availableTags.push(tagElement.getAttribute('name'));
    });
    
    // Create CopyPaste Icon
    var iconImage = document.createElement('div');
    iconImage.innerHTML = '<?xml version="1.0" encoding="UTF-8"?><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 174.6 159.2"><rect class="st1" width="174.6" height="159.2"/><g class="st0"><g><g><path d="M54.1,44.3c.9-2.7,2.1-6.1,4.9-7.3,3-1.3,6.6.3,8.9,2.2,5.5,4.6,8.5,11.8,15.7,14.1-.3-1-.5-2.1-.8-3.1-1.8,1.5-3.6,3-5.5,4.5-1.8,1.5-3,2.9-2.8,5.3.3,3.3.9,6.5,1.4,9.8.5,3.6,1.1,7.2,1.4,10.8.2,1.6.3,3.2.3,4.8,0,.6-.1,1.4,0,2,0,0,0,.2,0,.3.3-.4.6-.9.9-1.3-.2.1.8-1.1.4-.1,0,0-.1,0-.2,0-.5.2.3,0,0,0-.3,0-.5,0-.8,0-.7,0-1.4,0-2.1,0-2,0-4,0-6,0-4.8,0-9.5-.1-14.3-.2-2.9,0-5.8-.1-8.7-.2l1.9,1.9c.5-11.1,1.3-22.4,3-33.4.6-3.5,1.2-7,2.2-10.4.7-2.3-2.9-3.3-3.6-1-2.1,6.6-2.8,13.7-3.6,20.6-.7,6.7-1.2,13.4-1.6,20.1,0,1.4-.2,2.8-.2,4.1,0,1,.9,1.9,1.9,1.9,7.2.2,14.5.4,21.7.4,3.4,0,6.9.2,10.3-.2.5,0,1.1-.1,1.5-.4,1.3-.8,1-2.6,1-3.9,0-3.5-.5-7.1-1-10.6-.5-4-1.2-8-1.8-12.1-.1-.7-.2-1.4-.3-2.1-.2-1.3-.3-2,.8-2.9,2.1-1.8,4.2-3.5,6.3-5.3,1.1-1,.4-2.7-.8-3.1-3.7-1.2-6.3-4.2-8.6-7.1-2.5-3.1-5.1-6.5-8.8-8.3-3.4-1.7-7.6-2.2-11,0-3.2,2-4.6,5.6-5.8,9-.7,2.3,2.9,3.3,3.6,1Z"/><path d="M67.3,51.2c2.4,0,2.4-3.8,0-3.8s-2.4,3.8,0,3.8h0Z"/></g><g><path d="M124.1,43.3c-1.1-3.4-2.6-7-5.8-9-3.3-2.1-7.6-1.6-11,0-3.7,1.8-6.3,5.2-8.8,8.3-2.4,2.9-5,6-8.6,7.1-1.2.4-2,2.2-.8,3.1,1.8,1.5,3.6,3,5.5,4.5.8.6,1.8,1.2,1.8,2.2,0,.7-.1,1.5-.2,2.2-.5,3.4-1,6.9-1.5,10.3-.5,3.7-1,7.3-1.3,11-.1,1.5-.2,3-.1,4.5,0,1.1.5,1.9,1.6,2.2,1.1.3,2.4.3,3.5.3,2,0,3.9,0,5.9,0,4.8,0,9.7,0,14.5-.2,3,0,6-.1,9.1-.2,1,0,1.9-.8,1.9-1.9-.5-11.5-1.4-23-3.2-34.4-.5-3.5-1.1-7-2.2-10.4-.7-2.3-4.4-1.3-3.6,1,2,6.4,2.8,13.3,3.5,20,.7,6.5,1.2,13.1,1.6,19.6,0,1.4.2,2.8.2,4.1l1.9-1.9c-7.1.2-14.2.4-21.2.4-3.5,0-7,0-10.5-.2-.5,0,.4.2-.1,0,0,0-.1,0-.1,0,0,0,.3.1.4.1-.2-.1.6,1.9.9,1.1.1-.6,0-1.4,0-2,0-.8,0-1.6.1-2.4.2-3.5.7-7.1,1.2-10.6.5-3.7,1.2-7.5,1.7-11.2.1-1.1.3-2.2,0-3.3-.3-1.1-1.1-2-2-2.7-2-1.7-4.1-3.4-6.2-5.1-.3,1-.5,2.1-.8,3.1,7.3-2.3,10.3-9.5,15.7-14.1,2.3-2,5.9-3.5,8.9-2.2,2.9,1.2,4,4.5,4.9,7.3.7,2.3,4.3,1.3,3.6-1Z"/><path d="M107.2,51.2c2.4,0,2.4-3.8,0-3.8s-2.4,3.8,0,3.8h0Z"/></g></g><text transform="translate(26.6 117)"><tspan x="0" y="0">COPYPASTE</tspan></text></g></svg>'
    filterList.appendChild(iconImage);
    filterList.appendChild(document.createElement('hr'));

    // Create "Activate All" button
    var activateAllButton = document.createElement('button');
    activateAllButton.textContent = 'All';
    filterList.classList.add('filter-button');
    activateAllButton.addEventListener('click', function () {
        toggleAllCheckboxes(true);
    });
    filterList.appendChild(activateAllButton);

    // Create "Activate None" button
    var activateNoneButton = document.createElement('button');
    activateNoneButton.textContent = 'None';
    filterList.classList.add('filter-button');
    activateNoneButton.addEventListener('click', function () {
        toggleAllCheckboxes(false);
    });
    filterList.appendChild(activateNoneButton);
    filterList.appendChild(document.createElement('br'));

    // Create "Activate Untagged" checkbox
    var activateUntaggedCheckbox = document.createElement('input');
    activateUntaggedCheckbox.type = 'checkbox';
    activateUntaggedCheckbox.id = 'activateUntaggedCheckbox';
    activateUntaggedCheckbox.checked = true;
    var untaggedLabel = document.createElement('label');
    untaggedLabel.htmlFor = 'activateUntaggedCheckbox';
    untaggedLabel.textContent = 'Untagged';
    filterList.appendChild(activateUntaggedCheckbox);
    filterList.appendChild(untaggedLabel);
    filterList.appendChild(document.createElement('br'));

    // Create checkboxes for each tag
    availableTags.forEach(function (tag) {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'tagCheckbox_' + tag;
        checkbox.value = tag;
        checkbox.checked = true; // All tags are active by default

        var label = document.createElement('label');
        label.htmlFor = 'tagCheckbox_' + tag;
        label.textContent = tag;

        filterList.appendChild(checkbox);
        filterList.appendChild(label);
        filterList.appendChild(document.createElement('br'));
    });

    filterList.appendChild(document.createElement('hr'));

    // Create a fun toggle button
    var logicToggleButton = document.createElement('div');
    logicToggleButton.classList.add('toggle-button');

    // Create label for the toggle
    var logicToggleLabel = document.createElement('span');
    logicToggleLabel.textContent = 'Logic Blocks';
    logicToggleLabel.style.marginLeft = '8px';

    // Wrap toggle in a container
    var toggleContainer = document.createElement('div');
    toggleContainer.classList.add('toggle-container');
    toggleContainer.style.marginBottom = '8px';

    // Append label and toggle to container
    toggleContainer.appendChild(logicToggleButton);
    toggleContainer.appendChild(logicToggleLabel);

    // Create the switch handle
    var logicSwitchHandle = document.createElement('div');
    logicSwitchHandle.classList.add('toggle-handle');

    // Append the handle to the toggle button
    logicToggleButton.appendChild(logicSwitchHandle);

    logicToggleButton.dataset.showCodeBlocks = 'false'; // start in "off" position

    logicToggleButton.addEventListener('click', function () {
        var showCodeBlocks = logicToggleButton.dataset.showCodeBlocks === 'true';
        showCodeBlocks = !showCodeBlocks;  // toggle the state

        logicToggleButton.dataset.showCodeBlocks = showCodeBlocks.toString();

        toggleExtractStrings();

        logicSwitchHandle.style.transform = showCodeBlocks ? 'translateX(18px)' : 'translateX(0)';
    });

    filterList.appendChild(toggleContainer);

    // Create theme toggle container similar to logic blocks toggle
    var themeToggleContainer = document.createElement('div');
    themeToggleContainer.classList.add('toggle-container');
    themeToggleContainer.style.cursor = 'pointer';

    // Create label for theme toggle
    var themeLabel = document.createElement('span');
    themeLabel.textContent = 'Dark Mode';
    themeLabel.style.marginLeft = '8px';

    // Create toggle button element
    var themeToggleButton = document.createElement('div');
    themeToggleButton.classList.add('toggle-button');
    themeToggleButton.id = 'themeToggleButton'; // assign id for event handling

    // Create switch handle inside toggle button
    var themeSwitchHandle = document.createElement('div');
    themeSwitchHandle.classList.add('toggle-handle');

    // Append handle to toggle button
    themeToggleButton.appendChild(themeSwitchHandle);

    // Append label and toggle button to the container
    themeToggleContainer.appendChild(themeToggleButton);
    themeToggleContainer.appendChild(themeLabel);

    filterList.appendChild(themeToggleContainer);

    document.body.appendChild(filterList);

    // Function to apply theme
    function applyTheme(isDark) {
        if (isDark) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
        // Save preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Load saved preference or match system
    let isDarkMode = false;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        isDarkMode = savedTheme === 'dark';
        applyTheme(isDarkMode);
        if (isDarkMode) {
            themeSwitchHandle.style.transform = 'translateX(18px)';
        } else {
            themeSwitchHandle.style.transform = 'translateX(0)';
        }
    } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        isDarkMode = prefersDark;
        applyTheme(isDarkMode);
        themeSwitchHandle.style.transform = isDarkMode ? 'translateX(18px)' : 'translateX(0)';
    }

    // Function to toggle all checkboxes
    function toggleAllCheckboxes(checked) {
        filterList.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
            checkbox.checked = checked;
        });

        // Trigger the filter based on the updated checkboxes
        var selectedCheckboxes = Array.from(filterList.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
        filterElements(selectedCheckboxes, activateUntaggedCheckbox.checked);
    }

    // Function to toggle extracting strings in parentheses
    function toggleExtractStrings() {
        // Toggle the state
        extractStrings = !extractStrings;

        // Trigger the filter based on the updated state
        var selectedCheckboxes = Array.from(filterList.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
        filterElements(selectedCheckboxes, activateUntaggedCheckbox.checked);
    }

    // Variable to store the state of extracting strings in parentheses
    var extractStrings = true;
    
    function wrapNestedDelimiters(input, hide) {
        let output = '';
        let depthParentheses = 0;
        let depthAngleBrackets = 0;
        let display = '';
        let skipWhitespace = false;
        let codeContent = '';
    
        if (hide) {
            display = ' style="display: none !important"';
        }
    
        function escapeHtml(str) {
            return str.replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/>/g, '&gt;');
        }
    
        for (let i = 0; i < input.length; i++) {
            let char = input[i];
            if (char === '(') {
                if (depthParentheses === 0 && depthAngleBrackets === 0) {
                    codeContent = '';
                }
                depthParentheses++;
                codeContent += char;
                skipWhitespace = false; // Reset the flag when an opening parenthesis is encountered
            } else if (char === ')') {
                depthParentheses--;
                codeContent += char;
                if (depthParentheses === 0 && depthAngleBrackets === 0) {
                    output += '<code' + display + '>' + escapeHtml(codeContent) + '</code>';
                    skipWhitespace = true; // Set the flag to skip whitespace before the next line break
                }
            } else if (char === '<' && input[i + 1] === '<') {
                if (depthAngleBrackets === 0 && depthParentheses === 0) {
                    codeContent = '';
                }
                depthAngleBrackets++;
                codeContent += '<<';
                i++; // Skip the next '<' character
                skipWhitespace = false; // Reset the flag when an opening angle bracket is encountered
            } else if (char === '>' && input[i + 1] === '>') {
                depthAngleBrackets--;
                codeContent += '>>';
                i++; // Skip the next '>' character
                if (depthAngleBrackets === 0 && depthParentheses === 0) {
                    output += '<code' + display + '>' + escapeHtml(codeContent) + '</code>';
                    skipWhitespace = true; // Set the flag to skip whitespace before the next line break
                }
            } else if (char === '\n' || char === '\r') {
                if (hide && skipWhitespace) {
                    continue; // Skip line break and preceding whitespace when hide is true
                }
                output += char;
                skipWhitespace = false; // Reset the flag when a line break is encountered
            } else if (char === ' ' || char === '\t') {
                if (skipWhitespace) {
                    continue; // Skip whitespace if the flag is set
                }
                if (depthParentheses > 0 || depthAngleBrackets > 0) {
                    codeContent += char;
                } else {
                    output += char;
                }
            } else {
                if (depthParentheses > 0 || depthAngleBrackets > 0) {
                    codeContent += char;
                } else {
                    output += char;
                }
                skipWhitespace = false; // Reset the flag when a non-whitespace character is encountered
            }
        }
    
        return output;
    }    

    // Function to filter elements based on selected tags and untagged option
    function filterElements(selectedTags, includeUntagged) {
        // Remove existing h2 and p elements
        document.querySelectorAll('.content h2, .content p').forEach(function (element) {
            element.parentNode.removeChild(element);
        });

        // Iterate over tw-passagedata elements
        var passages = document.querySelectorAll('tw-passagedata');
        passages.forEach(function (passage) {
            var passageTags = passage.getAttribute('tags');

            if ((passageTags && selectedTags.some(tag => passageTags.includes(tag))) || (!passageTags && includeUntagged)) {
                // Get the 'name' attribute value
                var passageName = passage.getAttribute('name');

                // Extract strings in parentheses and remove them from the content if enabled
                var passageContent = passage.textContent;
                passageContent = wrapNestedDelimiters(passageContent, extractStrings);

                // Trim leading and trailing whitespace and line breaks
                passageContent = passageContent.trim();

                // Replace plain text line breaks with HTML line breaks
                passageContent = passageContent.replace(/\n/g, '<br>');

                // Create an h2 element
                var h2 = document.createElement('h2');
                h2.textContent = '## ' + passageName;

                // Create a new p element
                var p = document.createElement('p');
                p.innerHTML = passageContent;

                // Get the 'content' div
                var contentDiv = document.querySelector('.content');

                // Append the h2 and p elements to the 'content' div
                contentDiv.appendChild(h2);
                contentDiv.appendChild(p);
            }
        });
    }

    // Initial execution with all tags and untagged selected
    var selectedCheckboxes = Array.from(filterList.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    filterElements(selectedCheckboxes, activateUntaggedCheckbox.checked);

    // Add change event listener to the checkboxes, untagged option, and extract strings toggle
    filterList.addEventListener('change', function (event) {
        var selectedCheckboxes = Array.from(filterList.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
        filterElements(selectedCheckboxes, activateUntaggedCheckbox.checked);
    });
    // Add event listener for theme toggle
    themeToggleButton.addEventListener('click', function () {
        isDarkMode = !isDarkMode;
        applyTheme(isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        // Animate switch handle
        themeSwitchHandle.style.transform = isDarkMode ? 'translateX(18px)' : 'translateX(0)';
    });
});