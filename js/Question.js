class Question {

  constructor() {
    this.title = createElement("h1")
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter Your Option")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)


    this.question = createElement("h3");

    this.option1 = createElement("h3");
    this.option2 = createElement("h3");
    this.option3 = createElement("h3");
    this.option4 = createElement("h3");

    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    //Add hide() for questions, options & input box





  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.

    this.message.html("Thank You, your answer has been submitted.");
    this.message.position(100,340);

    this.question.html("Question 1 : Who is the President Of America in 2021?");
    this.question.position(100,80);

    this.input1.position(150, 230);
    this.input2.position(490, 230);
    this.button.position(290, 300);

    this.option1.html("1:Joe Bidon");
    this.option1.position(100, 110);

    this.option2.html("2:Donald Trump");
    this.option2.position(100, 130);

    this.option3.html("3:Bill Clinton");
    this.option3.position(100, 150);

    this.option4.html("4:Jimmy Carter");
    this.option4.position(100, 170);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

    })


  }
}
