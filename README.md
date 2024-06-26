# Frontend Documentation
### Overview
This documentation provides an overview of the Angular frontend application that works with a backend Express.js server to handle form submissions.
### Prerequisites
<ul>
<li>Node.js</li>
<li>npm (Node Package Manager)</li>
<li>Angular CLI installed globally (npm install -g @angular/cli).</li>
<li>TailwindCSS installed and configured in your Angular project.</li>
<li>The backend server running (as described in the backend documentation).</li>
</ul>

### Project Structure
<pre>
<code>
SHIVSKILL
├── backend
│   ├──node_modules
│   ├── .env
│   ├── package.json
│   ├── server.js
│   └── ...
├── platform
│   ├── .angular
│   ├── .vscode
│   ├── node_modules
│   ├── public
│   ├── src
│   │   ├── app
│   │   │   ├── components
│   │   │   │   ├── auth
│   │   │   │   │   ├── join-us
│   │   │   │   │   │   ├── join-us.component.ts
│   │   │   │   │   │   ├── join-us.component.html
│   │   │   │   │   │   ├── join-us.component.css
│   │   │   │   ├── services
│   │   │   │   │   ├── join-us.service.ts
│   │   │   ├── main.ts
│   │   │   └── ...
│   ├── angular.json
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.spec.json
│   └── ...
├── package-lock.json
└── package.json
</code>
</pre>

## Setup Instructions
### Install Angular CLI (if not already installed):
### bash
<pre>
<code>
npm install -g @angular/cli
</code>
</pre>
#### Install dependencies:
<pre>
<code>
cd path/to/SHIVSKILL/platform
npm install
</code>
</pre>
#### Configure TailwindCSS:
<ul>
<li>Ensure tailwind.config.js is correctly set up in your project.</li>
<li>Include Tailwind directives in your main CSS file (e.g., styles.css</li>
</ul>

#### Run Angular application:
<pre>
<code>
ng serve
</code>
</pre>

### Additional Information
#### Backend
The backend server is built using Express.js.
The server handles form submissions and stores them in a MySQL database.
Environment variables are used to configure database connection details and the server port.
#### Frontend
The frontend is built using Angular 17 and TailwindCSS.
The JoinusComponent handles the form submission.
The JoinUsService sends the form data to the backend server.
<hr>

By following this documentation, you should be able to set up, configure, and run both the backend and frontend parts of the SHIVSKILL project.
