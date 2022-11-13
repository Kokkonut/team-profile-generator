const generateManager = (manager) => {
    return `
    <div class="row">
    <div class="col s12 m4">
      <div class="card small blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${manager.name}</span>
          <p>Role: ${manager.role}</p>
          <p>ID: ${manager.id}</p>
          <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
          <p>Office Phone: ${manager.officeNum}
        </div>
      </div>
    </div>
  </div>
  `
};

const generateEngineer = (engineer) => {
    return `
    <div class="row">
    <div class="col s12 m4">
      <div class="card small blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${engineer.name}</span>
          <p>Role: ${engineer.role}</p>
          <p>ID: ${engineer.id}</p>
          <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
          <p>GitHub: ${manager.git}
        </div>
      </div>
    </div>
  </div>
  `
};

const generateIntern = (intern) => {
    return `
    <div class="row">
    <div class="col s12 m4">
      <div class="card small blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${intern.name}</span>
          <p>Role: ${intern.role}</p>
          <p>ID: ${intern.id}</p>
          <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
          <p>School: ${intern.school}
        </div>
      </div>
    </div>
  </div>
  `
};

const generateHTML = (managers, engineers, interns) => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <title>Team profile viewer</title>

<body>
    <header>
        <nav>
            <div class="nav-wrapper green darken-4">
                <a href="#" class="brand-logo">Team Profile Generator</a>
            </div>
        </nav>
    </header>

    <main>
        <div class="row">
            <div class="col s12 m4">
                <div class='teal'>Manager</div>
                <div class='teal lighten-5'>
                    ${managers.map(generateManager).join}
                </div>
            </div>
            <div class="col s12 m4">
                <div class='light-green'>Engieer</div>
                <div class='light-green lighten-5'>
                    ${engineers.map(generateEngineer).join}
                </div>
            </div>
            <div class="col s12 m4">
                <div class='yellow'>Intern</div>
                <div class='yellow lighten-5'>
                    ${interns.map(generateIntern).join}
                </div>
            </div>
        </div>
    </main>



    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>

</html>
    `
}