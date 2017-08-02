import axios from 'axios';
import React, { Component } from 'react';

class Fetch_word extends Component {
  constructor() {
    super();
    this.state= {
      word: ''
    }
  }

formSubmit(e){
  e.preventDefault();
  let language = this.refs.language.value;
  let text = (this.refs.textToTranslate.value === undefined) ? '' : this.refs.textToTranslate.value;
  const ROOT_URL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170529T004258Z.f2f6140e4d851c6f.4f854bb562a6fe84aa4c0de15d4c4a5b2eb2e3a7`;
  const url = `${ROOT_URL}&text=` + text + `&lang=en-` + language ;
  axios.get(url).then((response) => {
    let translatedText = (response.data.text[0] === undefined) ? '' : response.data.text[0];
    this.setState({word: translatedText});
  });
}

  render() {
    return (
      <div id="translateBody">
        <h4>Please enter a word or phrase (in English)</h4>
        <div className="row TranslateForm">
          <div className="col-md-6 col-md-offset-3 translator">
            <form className="well form-inline" onSubmit={this.formSubmit} id="transform">
            <input id="inputPhrase" className="form-control" type="text" ref="textToTranslate" placeholder="Enter a word or phrase" />
              <select id="selectedLanguage" className="form-control" ref="language">
                <option value="ar">Arabic</option>
                <option value="zh">Chinese</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="he">Hebrew</option>
                <option value="is">Icelandic</option>
                <option value="id">Indonesian</option>
                <option value="ja">Japanese</option>
                <option value="la">Latin</option>
                <option value="ms">Malay</option>
                <option value="ru">Russian</option>
                <option value="es">Spanish</option>
                <option value="th">Thai</option>
              </select>
              <input type="submit" className="btn btn-primary" value="Translate" ref="a" onClick={this.formSubmit.bind(this)} />
            </form>
          </div>
        </div>
        <p className="text-success" id="translatedWord">{this.state.word}</p>
      </div>
    );
  }
}

export default Fetch_word;
