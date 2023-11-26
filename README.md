# CopyPaste
A Twine 2 Proofing Story Format that cuts it.

<img src="dist/icon.svg" width="33%" height="33%">

## Introduction
CopyPaste was created with cross-tool story development in mind and aims to facilitate extracting content from Twine 2 (including passage titles) for easy use in tools such as Obsidian and LLMs.

### News
- Versino 1.2.0 released! Content in parentheses is now excluded (this is aimed at logic blocks).
- New since version 1.1.7: CopyPaste now always excludes passages with an ```EXCLUDE``` tag.
- New since version 1.1.6: This version comes with a new toggle button to switch between excluding ```TODO``` passages and showing only ```TODO``` passages.
#### Roadmap
- Toggle button to include exclude logic blocks
- Select custom tags to include/exclude

### Features
- CopyPaste allows you to exclude passages from being displayed during proofing. Simply add an ```EXCLUDE``` tag to the passages you want to exclude.
- Add a ```TODO``` tag to be able to toggle between excluding ```TODO``` passages and excluding everything else. Use the new toggle button at the top right!
- The passage titles are selectable and come with ```##```, making them recognizable as titles by other tools.

## User's Guide

### Installation
1. Launch Twine 2 and navigate to the Twine tab. Click on Story Formats and then on Add.
2. Copy and paste the link to [format.js](https://cocoknight.com/CopyPaste/dist/format.js) into the Add form and click Add. CopyPaste should now appear as one of your Current Story Formats.
3. Select it and click Use to Proof Stories.

### Usage
1. Open your Story.
2. (Optional) Tag passages you want to exclude from proofing with an ```EXCLUDE``` tag.
3. (Optional) Tag passages you want to toggle with a ```TODO``` tag.
4. While working on your story, go to the Build tab and click on Proof to use CopyPaste.
5. Your story will appear in your browser, ready to copy and paste into the tool of your choice.
6. Use the new toggle button at the top right of the page to invert the ```TODO``` passage exclusion.

## Developer's Guide
If you want to work with the source, clone the repository and use Node to compile the data from src by executing ```node compile.js```. This will create the format.js file in dist.

Have fun!
