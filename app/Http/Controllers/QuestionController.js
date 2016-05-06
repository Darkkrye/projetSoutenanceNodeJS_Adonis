'use strict'

const Database = use('Database')

class QuestionController {

  * getQuestions (request, response) {
      const min = 1
      let max = yield Database('question').count()
      max = max[0]["count(*)"]
      const number = request.param('number', 5)

      const numbers = []
      const questions = [];

      for (var i = 0; i < number; i++) {
          numbers.push(Math.floor(Math.random() * (max - min + 1)) + min)
      }

      for (var i = 0; i < numbers.length; i++) {
          const question = yield Database('question').where('id', numbers[i])
          questions.push(outputFormat(question[0]))
      }

      response.ok(questions)
  }

  * getQuestion (request, response) {
      const number = request.param('number')

      try {
          const question = yield Database('question').where('id', number)
          return response.ok(outputFormat(question[0]))
      }
      catch(err) {
          return response.notFound("Question not found !")
      }
  }

  * add (request, response) {
      if (request.input('Responses') == null) {

          const numberGoodAnswer = request.input('good_answer')

          let entitled = request.input('Entitled')
          if (entitled.substr(entitled.length - 1) != "?") {
              entitled += " ?"
          }

          let insertQuestion = {
              "Entitled": entitled,
              "Categories": request.input('Categories'),
              "Answer1": request.input('answer1'),
              "Answer2": request.input('answer2'),
              "Answer3": request.input('answer3'),
              "Answer4": request.input('answer4'),
              "GoodAnswer": request.input('answer' + numberGoodAnswer)
          }

          if (request.input('imageLink') != null)
            insertQuestion["imageLink"] = request.input('imageLink')

          yield Database('question').insert(insertQuestion)

          response.route('home')
      } else {
          let insertQuestion = {}

          let entitled = request.input('Entitled')
          if (entitled.substr(entitled.length - 1) != "?") {
              entitled += " ?"
          }
          insertQuestion["Entitled"] = entitled

          if (request.input('imageLink') != null)
            insertQuestion["imageLink"] = request.input('imageLink')

          const categories = request.input('Categories')
          let insertCategories = ""
          categories.forEach(function(categorie) {
              insertCategories += categorie.name
              insertCategories += ", "
          })
          insertCategories = insertCategories.slice(0, -2);
          insertQuestion["Categories"] = insertCategories

          const responses = request.input('Responses')
          insertQuestion["Answer1"] = responses[0].Title
          insertQuestion["Answer2"] = responses[1].Title
          insertQuestion["Answer3"] = responses[2].Title
          insertQuestion["Answer4"] = responses[3].Title

          if (responses[0].isGoodAnswer) {
              insertQuestion["GoodAnswer"] = responses[0].Title
          } else if (responses[1].isGoodAnswer) {
              insertQuestion["GoodAnswer"] = responses[1].Title
          } else if (responses[2].isGoodAnswer) {
              insertQuestion["GoodAnswer"] = responses[2].Title
          } else if (responses[3].isGoodAnswer) {
              insertQuestion["GoodAnswer"] = responses[3].Title
          }

          yield Database('question').insert(insertQuestion)

          response.ok(insertQuestion)
      }
  }

}

function isArray(what) {
  return Object.prototype.toString.call(what) === '[object Array]';
}

function outputFormat(question) {
    let outputQuestion = {
        "Id": question.id,
        "Entitled": question.Entitled
    }

    if (question.imageLink != null) {
        outputQuestion["imageLink"] = question.imageLink
    }

    let categories = []
    let questionCategories = question.Categories.split(", ")
    for (var i = 0; i < questionCategories.length; i++) {
        categories.push({"name": questionCategories[i]})
    }
    outputQuestion["Categories"] = categories

    let responses = []
    if (question.Answer1 == question.GoodAnswer) { responses.push({"Title": question.Answer1, "isGoodAnswer": true}) } else { responses.push({"Title": question.Answer1, "isGoodAnswer": false}) }
    if (question.Answer2 == question.GoodAnswer) { responses.push({"Title": question.Answer2, "isGoodAnswer": true}) } else { responses.push({"Title": question.Answer2, "isGoodAnswer": false}) }
    if (question.Answer3 == question.GoodAnswer) { responses.push({"Title": question.Answer3, "isGoodAnswer": true}) } else { responses.push({"Title": question.Answer3, "isGoodAnswer": false}) }
    if (question.Answer4 == question.GoodAnswer) { responses.push({"Title": question.Answer4, "isGoodAnswer": true}) } else { responses.push({"Title": question.Answer4, "isGoodAnswer": false}) }
    outputQuestion["Responses"] = responses

    return outputQuestion
}

module.exports = QuestionController
