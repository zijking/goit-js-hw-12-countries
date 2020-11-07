import { error, defaults } from '@pnotify/core';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

defaults.width = '400px';

export default function message() {
  error({
    title: 'Attention',
    text: 'Too many matches found. Please enter a more specific query !',
  });
}
