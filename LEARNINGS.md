1. What is the function of the following technologies in your assignment:

HTML -  HTML (Hypertext Markup Language) tells the Web browser how to display a page's text and images for the user. It has different markups that lets users to separate content, create boxes or other customizations to display their text.

CSS - A styling sheet where various attributes of presentation like size, font type, size, visibility, color etc., can be set based on elements or id or class names. Gives flexibility when all elements need the same styling and also enables changing the style at one place instead of changing it in every page.

JavaScript - Javascript is a dynamic computer programming language. It has client-side script to interact with the user and make dynamic pages such as to display changes based on selection or button clicks without reloading the page or displaying data from API's.

Python - Facilitates usage of Flask framework which is python based. Allows user to specify the functions to be carried out when a route/path is accessed and facilitates POST and GET requests.

Flask - A Python microframework that makes building web servers and API's easier. It enables hosting the webpage to a server with minimal boiler plate code.

HTTP - The Hypertext Transfer Protocol (HTTP) enables communications between clients and servers via a request-response protocol. A client (browser) submits an HTTP request to the server; then the server returns a response to the client. The response contains status information about the request and may also contain the requested content.

GET and POST requests - These are the commonly used methods for request-response between a client and server. GET requests data from a specified resource using a query string (name/value pairs) sent in the URL. POST submits data to be processed to a specified resource with the query string (name/value pairs) sent in the HTTP message body of a POST.
__________________________________________________________________________________________________________________________________________

2. How does HTML, CSS, and JavaScript work together in the browser for this assignment?

HTML displays the content on the web page based on the markup elements and CSS works together with it to style/change visibility/specify size,color etc., to the various elements based on their names, id or classes according to user preferences. Javascript allows performing some functions on the client side dynamically based on some events and also allows overriding/adding of CSS preferences and can also add HTML elements to the web page. In this case, the div element in the HTML has a property visibility which is defaulted to hidden on page load but if comments are present in the local storage, javascript renders the div element visible by overriding the visibility set in CSS.
__________________________________________________________________________________________________________________________________________
3. How does Python and Flask work together in the server for this assignment?

Flask is a framework that enables building the web server for our application and python facilitates this by importing the fask framework and the various functions associated with it to customize the events that needs to be performed. In this case, the web pages are rendered when a path is encountered and API call to mailgun is made, an email is sent and based on sucess or failure of sending email message the message is passed on to the response object.
__________________________________________________________________________________________________________________________________________
4. List all of the possible GET and POST requests that your server returns a response for and describes what happens for each GET and POST request

The following are the GET requests that renders the html page given in the return statement. It does not have any specific requests and returns only the html page as a response. - /index, /contact, /about, /blog/8-experiments-in-motivation, 
/blog/a-mindful-shift-of-focus, /blog/how-to-develop-an-awesome-sense-of-direction, /blog/training-to-be-a-good-writer, 
/blog/what-productivity-systems-wont-solve

There is only one POST request in this assignment - /contact where the contents of a form are sent over a http body as a request if the fields are all present. The request is handled by flask, where tasks specified within the python function is performed. In this case, email is sent via a API call and if the request was successfull as indicated by a success code then a message is sent as a parameter via the response when rendering the html page specified in the return statement.
__________________________________________________________________________________________________________________________________________