'use strict'

const Database = use('Database')
const Prism = require('prismjs');

class SiteController {

  * index (request, response) {
    const dbQuestions = yield Database('question')
    let code = JSON.stringify(dbQuestions)
    const html = Prism.highlight(code, Prism.languages.javascript)
    const view = yield response.view('index2', {questions: html})

    response.send(view)
  }

}

module.exports = SiteController
