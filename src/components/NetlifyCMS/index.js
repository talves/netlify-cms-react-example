import React, { Component } from 'react';
import './setup'
import CMS, { init } from 'netlify-cms/dist/cms';
import 'netlify-cms/dist/cms.css';
import config from './data/config.json';
import AuthorsPreview from './components/AuthorsPreview';
import EditorYoutube from './components/EditorYoutube';

CMS.init = init;

class NetlifyCMS extends Component {
  componentDidMount () {
    console.log('CMS', CMS)
    CMS.init({config});
    // CMS.registerPreviewStyle('static/css/site.css');
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
