'use strict'

class IsQuestionFormCorrectlyFilled {

  *handle (request, response, next) {
    if (request.input('Entitled').length >= 10) {
        if (isArray(request.input('Categories')) || request.input('Categories').length >= 5) {
            if (isArray(request.input('Responses'))) {
                let reponses = request.input('Responses')
                if (reponses.length == 4) {
                    var thereIsAGoodAnswer = false
                    for (var i = 0; i < reponses.length; i++) {
                        var reponse = reponses[i]
                        if (!thereIsAGoodAnswer && reponse.isGoodAnswer) {
                            thereIsAGoodAnswer = true
                        } else if (thereIsAGoodAnswer && reponse.isGoodAnswer) {
                            thereIsAGoodAnswer = false
                            i = reponses.length
                        }
                    }

                    if (thereIsAGoodAnswer) {
                        return yield next
                    } else {
                        return response.partialContent("You should have 1 'isGoodAnswer' field set to true")
                    }
                } else {
                    return response.partialContent("Reponses array should have 4 reponses")
                }
            } else if (request.input('answer1').length >= 5 && request.input('answer2').length >= 5 && request.input('answer3').length >= 5 && request.input('answer4').length >= 5) {
                return yield next
            }
        } else {
            return response.partialContent("You should inquire at least 1 categorie (more than 5 characters)")
        }
    } else {
        return response.partialContent("Entitled is inferior to 10")
    }
  }
}

function isArray(what) {
  return Object.prototype.toString.call(what) === '[object Array]';
}

module.exports = IsQuestionFormCorrectlyFilled
