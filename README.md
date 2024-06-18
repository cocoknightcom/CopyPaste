# CopyPaste
A Twine 2 Proofing Story Format that cuts it. Filter passages by tag.

<img src="dist/icon.svg" width="33%" height="33%">

## Introduction
CopyPaste was created with cross-tool story development in mind and aims to facilitate extracting content from Twine 2 (including passage titles) for easy use in tools such as Obsidian and LLMs.

### News
- Latest version: 1.4.4
- Since 1.4.4: Toggling logic blocks now supports SugarCube
- Since 1.4.2: Logic blocks are now prettier and don't leave unwanted line breaks behind when toggled off.
- Since 1.3.5: Logic blocks can now be toggled using the switch at the bottom of the filter menu.
- Since 1.2.7: New filter menu added that you can use with any of your tags!

### Features
- CopyPaste allows you to filter (by tag) the passages to be displayed during proofing.
- The passage titles are selectable and come with ```##```, making them recognizable as titles by other tools.
- Logic blocks can be toggled using the switch at the bottom of the filter menu. (In fact, any content in parentheses or ```<<>>``` is toggled. Let me know if you encounter issues with this feature.)

## User's Guide

### Installation
1. Launch Twine 2 and navigate to the Twine tab. Click on Story Formats and then on Add.
2. Copy and paste the link to [format.js](https://cocoknight.com/CopyPaste/dist/format.js) into the Add form and click Add. CopyPaste should now appear as one of your Current Story Formats.
3. Select it and click Use to Proof Stories.

### Usage
1. Open your Story.
2. (Optional) Add tags to your passages.
3. While working on your story, go to the Build tab and click on Proof to use CopyPaste.
4. Your story will appear in your browser, ready to copy and paste into the tool of your choice.
5. Use the filter menu to include/exclude passages by tag. Use the switch at the bottom of the filter menu to toggle logic blocks.

## Developer's Guide
If you want to work with the source, clone the repository and use Node to compile the data from src by executing ```node compile.js```. This will create the format.js file in dist.

Have fun!
