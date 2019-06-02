    // ## Array Cardio Day 2

    const people = [{
        name: 'Wes',
        year: 1988
      },
      {
        name: 'Kait',
        year: 1986
      },
      {
        name: 'Irv',
        year: 1970
      },
      {
        name: 'Lux',
        year: 2015
      }
    ];

    const comments = [{
        text: 'Love this!',
        id: 523423
      },
      {
        text: 'Super good',
        id: 823423
      },
      {
        text: 'You are the best',
        id: 2039842
      },
      {
        text: 'Ramen is my fav food ever',
        id: 123523
      },
      {
        text: 'Nice Nice Nice!',
        id: 542328
      }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?

    const currentYear = new Date().getFullYear()

    var isAdult = people.some(function (human) {
      const yearsOld = currentYear - human.year
      return yearsOld >= 19
    })

    console.log(isAdult)

    // Array.prototype.every() // is everyone 19 or older?

    var everyOne = people.every(function (human) {
      return currentYear - human.year > 19
    })

    console.log(everyOne)

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    var findComment = comments.find(
      function (comment) {
        if (comment.id === 823423) {
          console.log(comment.text)
          return comment.text
        }
        // return comment.id === 823423 ? comment.text : 'no'
      }
    )

    console.log(findComment)


    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const index = comments.findIndex(
      function (comment) {
        return comment.id === 823423
      }
    )

    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ]

    console.log(comments)
    console.log(newComments)


    // const arr = [10, 12, 15, 21];

    // for (var i = 0; i < arr.length; i++) {
    //   // передадим функции переменную i, в результате
    //   // у каждой функции будет доступ к правильному значению индекса

    //   setTimeout(function (i_local) {
    //       return function () {
    //         console.log('The index of this number is: ' + i_local);
    //       }
    //     } (i), 3000);

    // }