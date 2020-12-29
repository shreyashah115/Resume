var app = angular
  .module("resume", [])
  .controller("personCtrl", function ($scope) {
    $scope.personInfo = {
      name: "Shreya Shah",
      description: "software engineer",
      email: {
        text: "shreyashah115@gmail.com",
        url: "mailto:shreyashah115@gmail.com",
      },
      phone: {
        text: "+91 8140442188",
      },
      social: [
        {
          url: "https://github.com/shreyashah115",
          icon: "fa-github fa-lg",
        },
        {
          url: "https://www.linkedin.com/in/shreya115",
          icon: "fa-linkedin fa-lg",
        },
        {
          url: "https://twitter.com/shreyanow",
          icon: "fa-twitter fa-lg",
        },
        {
          url: "https://medium.com/@shreyashah115",
          icon: "fa-medium fa-lg",
        },
      ],
    };
  })
  .controller("educationCtrl", function ($scope) {
    $scope.schools = [
      {
        name: "Bits Edu Campus",
        program: "Bachelor of Engineering - Computer Science and Engineering",
        city: "",
        state: "Gujarat Technological University",
        dates: "2013 - 2017",
        cgpa: "8.06 CGPA",
      },
    ];
  })
  .controller("languagesCtrl", function ($scope) {
    $scope.languages = [
      {
        types: ["Python", "JavaScript", "Html"],
      },
      {
        types: ["Golang", "CSS", "MySQL"],
      },
      {
        types: ["C", "JSON", "jQuery"],
      },
    ];
  })
  .controller("toolsCtrl", function ($scope) {
    $scope.tools = [
      {
        types: ["Flask", "Git", "Django"],
      },
      {
        types: ["Tailwind CSS", "ReactJS", "NodeJS"],
      },
      {
        types: ["Bootstrap", "MongoDB", "Kubernetes"],
      },
    ];
  })
  .controller("organizationCtrl", function ($scope) {
    $scope.organizations = [
      {
        name: "Verloop",
        url: "https://verloop.io/",
        positions: [
          {
            title: "Forward Deployed Engineer",
            responsibilities: [
              "Developed a dashboard for Verloop using MeteorJS and GoLang, which generated and displayed different analysis and calculations related to the chatbot conversations on Verloop’s platform.",
              "Integrated Verloop’s chatbot for more than 35 clients’ systems as per the requirements gathered from the client.",
              "Developed webhooks and integrated them with REST APIs using the Flask framework.",
              "Implemented Redis and Celery for multiple chatbot flows.",
              "Created a service using gRPC and Flask to send out WhatsApp messages and update the delivery status notification.",
              "Maintained and updated a service called Heimdall which stores the data of recurring users in a mysql DB and assigns the previous chat agents to them — created using gRPC and Flask.",
              "Delegated and assigned tasks to the teammates meanwhile helped the team with various issues and improvisations.",
              "Handled continuous integration and refactoring of old Python code to enhance and increase the scalability of the system.",
              "Scheduled and monitored deployments on Google Cloud Platform using Kubernetes.",
              "Co-ordinated and headed meetings with various clients to discuss their Chatbot requirements along with providing solutions.",
            ],
          },
        ],
        dates: "February 2019 - September 2020",
      },
      {
        name: "Frappe Technologies, Pvt. Ltd.",
        url: "https://frappe.io/",
        positions: [
          {
            title: "Software Engineer",
            responsibilities: [
              "Developed and designed features for their flagship open source   product - ERPNext, which is built on their home ground JS framework - Frappe.",
              "A hands-on experience with Frappe framework  which is a full stack web application framework written in Python, Javascript, HTML/CSS with MySQL as the backend.",
              "Wrote UI test cases (in JavaScript) as well as Unit test cases (in Python) to test and debug features, documented scripts and features.",
              "Identified and communicated technical problems, processes and solutions.",
              "Assisted in the collection and documentation of user requirements.",
              "One of the key members in the development of their eagerly awaited and massive release - ERPNext version 11.",
              "Version control with Git.",
            ],
          },
        ],
        dates: "August 2017 - December 2018",
      },
    ];
  })
  .controller("projectsCtrl", function ($scope) {
    $scope.projects = [
      {
        name: "Chatbot for ordering Pizza",
        url: "https://chatbot.shreyanow.space",
        description:
          "Developed a chatbot which chats with the user, takes orders for pizza, provides tracking number which can be further used to track the order placed. Used Django framework along with SQLite database to store details and vanilla JavaScript for the UI, deployed on the server using Nginx.",
      },
      {
        name: "Expense Manager App",
        url: "https://github.com/shreyashah115/Expenso",
        description:
          "Developed under the MEAN Stack environment along with CSS and Bootstrap\
			framework, calculates your daily expenses, stores them in the database and\
			retrieves it for you to manage your budget.",
      },
      {
        name: "Inventory Management",
        url: "https://github.com/shreyashah115/InventoryApp",
        description:
          "Developed using the Flask web framework, Html and AngularJS, like a simple point on sale system, which helps the shop owner to add, modify and remove the products, along with an option to view the updated amount of products ",
      },
      {
        name: "Credit card reader using webcam",
        description:
          "Developed for a design engineering project, payments for online transactions could be done using webcam which recognizes the user's face using OpenCV, matches with the MySQL database and authorizes the payment.",
      },
      {
        name: "Business meetings, conferences and complaints management",
        description:
          "Developed using .net MVC architecture for the web application and also\
			created an android app along with it. Used to manage the employee details\
			and database in a company.",
      },
      {
        name: "Contact list App",
        url: "https://github.com/shreyashah115/Contactlistapp",
        description:
          "Developed under the MEAN Stack environment, stores details of a contact,\
			allows to edit, update and delete.",
      },
    ];
  });
