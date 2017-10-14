"""
webserver.py

File that is the central location of code for your webserver.
"""
import requests
import os

from flask import Flask, request, render_template

# Create application, and point static path (where static resources like images, css, and js files are stored) to the
# "static folder"
app = Flask(__name__,static_url_path="/static")

@app.route('/')
def empty_index():
	return render_template("index.html") 

@app.route('/index')
def index():
	return render_template("index.html") 

@app.route('/about')
def aboutus():
	return render_template("Aboutus.html") 

@app.route('/contact')
def contact():
	notifications = []
	return render_template("contact.html", notifications=notifications)

@app.route('/blog/8-experiments-in-motivation')
def page1():
	return render_template("8-Experiments-in-Motivation.html") 

@app.route('/blog/a-mindful-shift-of-focus')
def page2():
	return render_template("A-Mindful-Shift-of-Focus.html") 

@app.route('/blog/how-to-develop-an-awesome-sense-of-direction')
def page3():
	return render_template("How-to-Develop-an-Awesome-Sense-of-Direction.html") 

@app.route('/blog/training-to-be-a-good-writer')
def page4():
	return render_template("Training-to-Be-a-Good-Writer.html")

@app.route('/blog/what-productivity-systems-wont-solve')
def page5():
	return render_template("What-Productivity-Systems-Won't-Solve.html")  

@app.route('/contact', methods=['POST'])
def send_email():
	name = request.form["name"]
	if name == "":
		return render_template("/contact", notifications=[])
	subject = request.form["subject"]
	email = request.form["email"]
	message = request.form["message"]
	full_msg = "Name: "+name + "\nSubject: " + subject + "\nEmail: " + email +"\nMessage: " + message
	notifications = []


	data = {
		'from': os.environ["INFO253_MAILGUN_FROM_EMAIL"],
		'to': os.environ["INFO253_MAILGUN_TO_EMAIL"],
		'subject': "You have a new message",
		'text': full_msg,
	}
	auth = (os.environ["INFO253_MAILGUN_USER"], os.environ["INFO253_MAILGUN_PASSWORD"])

	r = requests.post(
		'https://api.mailgun.net/v3/{}/messages'.format(os.environ["INFO253_MAILGUN_DOMAIN"]),
		auth=auth,
		data=data)

	if r.status_code == requests.codes.ok:
		notifications.append("Hi "+ name +", your message has been sent.")
	else:
		notifications.append("Hi "+ name +", your email was not sent. Please try again later.")

	return render_template("contact.html", notifications=notifications)



