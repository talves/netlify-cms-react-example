import React, { Component } from 'react';
import './setup'
import CMS, { init } from 'netlify-cms';
import 'netlify-cms/dist/cms.css';
import config from './data/config.json';
import FileSystemBackend from './components/FileSystemBackend';
import AuthorsPreview from './components/AuthorsPreview';
import EditorYoutube from './components/EditorYoutube';

CMS.init = init;

class NetlifyCMS extends Component {
  componentDidMount () {
    console.log(`CMS [${process.env.NODE_ENV}]`, CMS, )
    if (process.env.NODE_ENV === 'development') {
      config.backend = {
        "name": "file-system",
        "api_root": "http://localhost:3000/api"
      }
      CMS.registerBackend('file-system', FileSystemBackend);
    }
    CMS.init({config});
    CMS.registerPreviewTemplate('authors', AuthorsPreview);
    CMS.registerEditorComponent(EditorYoutube);
  }
  render() {
    return (
      <div id="nc-root" />
    );
  }
}

export default NetlifyCMS;
