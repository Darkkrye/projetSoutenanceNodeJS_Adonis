'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Routes helps you in defining http endpoints/urls which will be used
| by outside world to interact with your application. Adonis has a
| lean and rich router to support various options out of the box.
|
*/
const Route = use('Route')

//Route.get('/', 'HomeController.index')

Route.group('api', function () {

    Route.get('/question/:number', 'QuestionController.getQuestion')
    Route.get('/questions/:number?', 'QuestionController.getQuestions')
    Route.post('/questions/add', 'QuestionController.add').as('addQuestion').middlewares(['IsQuestionFormFull', 'IsQuestionFormCorrectlyFilled'])

}).prefix('/api')

Route.group('site', function() {

    Route.get('/', 'SiteController.index').as('home')

})
