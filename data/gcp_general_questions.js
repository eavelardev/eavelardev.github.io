questions =
{
  "qwiklabs": [
    {
      "id": "qwiklabs_may_w3_1",
      "domain": [],
      "intro": [],
      "body": [
        "You are working on creating a data transformation pipeline with cloud dataprep. As you are cleaning the data, you want to change the datatype of a column to string. Where do you navigate on the console?"
      ],
      "open": false,
      "options": [
        {
          "option": ["rowtype"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["data type>column"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["Change type>String"],
          "answer": true,
          "explanation": []
        },
        {
          "option": ["columntype"],
          "answer": false,
          "explanation": []
        }
      ],
      "feedback": [],
      "references": [],
      "date": ""
    },
    {
      "id": "qwiklabs_may_w3_2",
      "domain": [],
      "intro": [],
      "body": [
        "You are working on creating a data transformation pipeline with Cloud Dataprep. As you are cleaning the data, Your team has informed you there may be duplicate session values included in the source dataset. Where do you navigate on the console?"
      ],
      "open": false,
      "options": [
        {
          "option": ["Filter rows>Remove duplicate rows"],
          "answer": true,
          "explanation": []
        },
        {
          "option": ["Remove>Rows"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["Rows>Delete"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["Column>Delete"],
          "answer": false,
          "explanation": []
        }
      ],
      "feedback": [],
      "references": [],
      "date": ""
    },
    {
      "id": "qwiklabs_may_w3_3",
      "domain": [],
      "intro": [],
      "body": [
        "You are working on omnibond: creating an HPC environment in google cloud with cloudycluster. You are on HPC job execution, you have created a sample job and launched it and now you check the status of the job. Which command will you use?"
      ],
      "open": true,
      "options": [
        {
          "option": ["ccqstat"],
          "answer": true,
          "explanation": []
        },
        {
          "option": ["showstat"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["getstat"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["allstat"],
          "answer": false,
          "explanation": []
        }
      ],
      "feedback": [],
      "references": [],
      "date": ""
    },
    {
      "id": "qwiklabs_may_w3_4",
      "domain": [],
      "intro": [],
      "body": [
        "You are working on omnibond: creating an HPC environment in google cloud with cloudycluster. You are on HPC job execution, you want to delete the environment. Where will you navigate to do so?"
      ],
      "open": false,
      "options": [
        {
          "option": ["HPC>Delete Environment"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["Administration > Remove Control Instance and Database> Delete"],
          "answer": true,
          "explanation": []
        },
        {
          "option": ["HPC> Remove"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["Environment>Delete"],
          "answer": false,
          "explanation": []
        }
      ],
      "feedback": [],
      "references": [],
      "date": ""
    },
    {
      "id": "qwiklabs_may_w4_1",
      "domain": [],
      "intro": [],
      "body": ["What would you call a repository for Splunk data?"],
      "open": false,
      "options": [
        {
          "option": ["node"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["repo"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["branch"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["index"],
          "answer": true,
          "explanation": []
        }
      ],
      "feedback": [],
      "references": [],
      "date": ""
    },
    {
      "id": "qwiklabs_may_w4_2",
      "domain": [],
      "intro": [],
      "body": ["What is a fast and efficient way to send data over HTTP (or HTTPS) to Splunk Cloud from a logging source such as Splunk Connect for Kubernetes (SC4K) or the Splunk Dataflow template?"],
      "open": false,
      "options": [
        {
          "option": ["Pub/sub topic"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["HTTP Event Collector"],
          "answer": true,
          "explanation": []
        },
        {
          "option": ["HTTP Log Collector"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["splunk pipeline"],
          "answer": false,
          "explanation": []
        }
      ],
      "feedback": [],
      "references": [],
      "date": ""
    },
    {
      "id": "qwiklabs_may_w4_3",
      "domain": [],
      "intro": [],
      "body": ["What does SOAR stand for?"],
      "open": false,
      "options": [
        {
          "option": ["Secure Object Automation Record"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["None of these"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["Security Orchestration, Automation, and Response"],
          "answer": true,
          "explanation": []
        },
        {
          "option": ["Secure Object Authenticate Respond"],
          "answer": false,
          "explanation": []
        }
      ],
      "feedback": [],
      "references": [],
      "date": ""
    },
    {
      "id": "qwiklabs_may_w4_4",
      "domain": [],
      "intro": [],
      "body": ["Which among the following is a type of Alert trigger?"],
      "open": false,
      "options": [
        {
          "option": ["Defender health"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["Container runtime"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["Access"],
          "answer": false,
          "explanation": []
        },
        {
          "option": ["All of these"],
          "answer": true,
          "explanation": []
        }
      ],
      "feedback": [],
      "references": [],
      "date": ""
    }
  ]
}

const fs = require('fs')
let file_path = '/home/eavelar/dev/eavelardev.github.io/data/gcp_general_questions_tmp.json'

fs.writeFileSync(file_path, JSON.stringify(questions, null, 2));
