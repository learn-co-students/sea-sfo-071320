class ResponsesController < ApplicationController
    before_action :define_question, :define_response, :number_correct, :message

    def define_question
        @question = Question.order("RANDOM()").limit(1)[0]
    end

    def define_response
        @questionResponse = Response.new({ question: @question })
    end

    def create
        # Memoization
        session[:number_correct] ||= 0
        response = Response.create(response_params)

        if response.question.correct_answer == response.answer
            session[:number_correct] = session[:number_correct] + 1
            flash[:message] = "Nice job!"
        else
            flash[:message] = "Try again!"
        end

        redirect_to '/random-question'
    end

    def message
        @message = flash[:message]
    end

    def number_correct
        @number_correct = session[:number_correct]
    end

    def reset
        session[:number_correct] = 0
    end

    def response_params
        params.require(:response).permit(:answer_id, :question_id)
    end
end


session = { number_correct: 4 }
