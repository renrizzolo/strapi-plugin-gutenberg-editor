# Strapi plugin gutenberg-editor

Replaces the Strapi WYSIWYG editor with the WordPress Gutenberg editor.
This is a proof of concept. It might be a little broken, there is no undo/redo, etc.

### Requirements 
In order to transform the blocks to/from html, the blocks JSON needs to be saved to a separate field.
You must add a JSON field titled `gutenberg_blocks` to your content type.

### Usage:
- Add a wysiwyg field to your content type
- Add a JSON field titled `gutenberg_blocks` to your content type.
- When editing your content, click the Open Gutenberg Editor button
- Your changes are automatically saved to the `gutenberg_blocks` JSON field. This is so the gutenberg structure can be fed back in to the editor from your saved state (converting the saved html output back to gutenberg is unreliable).
- You can use the html output of your rich text content type in your front end as normal.

You might want to copy the blocks css from wordpress core and include it in your frontend: /wp-includes/css/dist/block-library/style.css.