questions =
{
  "official": {
    "pro_data_sample": [

    ]
  },
  "data_path": {

  }
}

const fs = require('fs')
let file_path = '/home/eavelar/dev/eavelardev.github.io/data/data_questions_tmp.json'

fs.writeFileSync(file_path, JSON.stringify(questions, null, 2));
