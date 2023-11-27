# CopyPaste
A Twine 2 Proofing Story Format that cuts it. Filter passages by tag.

<img src="dist/icon.svg" width="33%" height="33%">

## Introduction
CopyPaste was created with cross-tool story development in mind and aims to facilitate extracting content from Twine 2 (including passage titles) for easy use in tools such as Obsidian and LLMs.

### News
- Version 1.2.7 released! New filter menu added that you can use with any of your tags!
- Since 1.2.0 released: Content in parentheses is now excluded (this is aimed at logic blocks).
#### Roadmap
- Toggle button to include exclude logic blocks

### Features
- CopyPaste allows you to filter (by tag) the passages to be displayed during proofing.
- The passage titles are selectable and come with ```##```, making them recognizable as titles by other tools.
- Logic blocks are not displayed. (In fact, any content in parentheses is not being displayed.)

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
5. Use the new filter menu to include/exclude passages by tag.

## Developer's Guide
If you want to work with the source, clone the repository and use Node to compile the data from src by executing ```node compile.js```. This will create the format.js file in dist.

Have fun!
