'use strict'

class IsQuestionFormFull {

  *handle (request, response, next) {
      if (request.input('Entitled') != null && request.input('Entitled') != "") {
          if (request.input('Categories') != null && request.input('Categories') != "" && request.input('Responses') == null) {
              if (request.input('answer1') != null && request.input('answer2') != null && request.input('answer3') != null && request.input('answer4') != null && request.input('good_answer') != null) {
                  if (request.input('answer1') != "" && request.input('answer2') != "" && request.input('answer3') != "" && request.input('answer4') != "" && request.input('good_answer') != "") {
                      return yield next
                  }
              }
          } else if (request.input('Categories') != null && request.input('Responses') != null) {
              return yield next
          }

          return response.partialContent("Form not full completed !")
      }

    response.noContent("Form is empty !")
  }

}

module.exports = IsQuestionFormFull
