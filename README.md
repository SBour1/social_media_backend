# Social Media BackEnd
  

  ## Description
  
  Back end functionality for a social media application. Includes operations to Create, Add, Delete, and Update Users, add and delete friends. Users can also add thoughts that their friends can react to.
  
  ## Table of Contents (Optional)
  
  * [Installation](#installation)
  * [Usage](#usage)
   
  * [Contribute](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command: 

  npm i

  ## Usage

  Walk Through Video: https://drive.google.com/file/d/1RoNDLbjpTjEj1ytGXh9FZTguePjdkn8f/view

  The following routes can be used in Insomnia:

  Get all users: GET api/users
  Create a user: POST api/users
  Get user by ID: GET api/users/:id
  Update a user: POST api/users/:id
  Delete a user: DELETE api/users/:id
  Add a friend: POST api/users/:userId/friends/:friendId
  Delete a friend: DELETE api/users/:userId/friends/:friendId

  Get all thoughts: GET api/thoughts
  Create a thought: POST api/thoughts
  Get a thought by ID: GET api/thoughts/:id
  Update a thought: POST api/thoughts/:id
  Delete a thought: DELETE api/thoughts/:id
  Add a reaction: POST api/thoughts/:thoughtId/reactions
  Delete a reaction: DELETE api/thoughts/:thoughtId/reactions

  ## How to Contribute
  
  

  ## Testing
  
  To run tests, run the following command:

  npm test
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at bourpower@gmail.com. You can find more of my work at [Sbour1](https://github.com/Sbour1/).
  
