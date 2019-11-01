# api-generator-cli
A command line interface to help on creating nodejs projects skeletons.

There is only one command so far that is `project:generate`. This will prompt some questions, then it will generate the project and install dependecies

# Installation
`npm install -g api-generator-cli`

# Usage
Open a terminal and type `api-generator-cli project:generate` or just `api-generator-cli pc`

Create a `.env` file and paste this code in:

```
# JSON web token (JWT) secret: this keeps our app's user authentication secure
# This secret should be a random 20-ish character string
JWT_SECRET ='p4sta.w1th-b0logn3s3-s@uce'

# Mongo DB
# Local development
MONGODB_URI='mongodb://localhost/bulletproof-nodejs'

# Port
PORT=3000

# Debug 
LOG_LEVEL='debug'
```