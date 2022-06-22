// SELECT MAIN HEADER IMAGE
const header = document.querySelector('.header-image');
// SELECT HTML ICON
const htmlIcon = document.getElementById('html-icon');
// GET HTML CERTIFICATE
const htmlModal = document.querySelector('.html-modal');
// SELECT JAVASCRIPT ICON
const javaScriptIcon = document.getElementById('javascript-icon');
// GET JAVASCRIPT CERTIFICATE
const javaScriptModal = document.querySelector('.javascript-modal');
// GET BOOTSTRAP ICON
const bootStrapIcon = document.getElementById('bootstrap-icon');
// GET BOOTSTRAP CERTIFICATE
const bootStrapModal = document.querySelector('.bootstrap-modal');
// GET PYTHON ICON
const pythonIcon = document.getElementById('python-icon');
// GET PYTHON CERTIFICATE
const pythonModal = document.querySelector('.python-modal');
// GET SQL ICON
const sqlIcon = document.getElementById('sql-icon');
// GET SQL CERTIFICATE
const sqlModal = document.querySelector('.sql-modal');
// GET REACT ICON
const reactIcon = document.getElementById('react-icon');
// GET REACT CERTIFICATE
const reactModal = document.querySelector('.react-modal');
// SELECT CLOSE-CONTAINER HTML
const closeButtonHtml = document.querySelector('.close-btn-html');
// SELECT CLOSE-BTN-JAVASCRIPT
const closeButtonJavascript = document.querySelector('.close-btn-javascript');
// SELECT CLOSE-BTN-BOOTSTRAP
const closeButtonBootstrap = document.querySelector('.close-btn-bootstrap');
// SELECT CLOSE-BTN-PYTHON
const closeButtonPython = document.querySelector('.close-btn-python');
// SELECT CLOSE-BTN-SQL
const closeButtonSql = document.querySelector('.close-btn-sql');
// SELECT CLOSE-BTN-REACT
const closeButtonReact = document.querySelector('.close-btn-react');

// ADD EVENT LISTENER TO HTML ICON
htmlIcon.addEventListener('click', () => {
    console.log('clicked')
    if (htmlModal.style.display != "grid"){
        htmlModal.style.display = "grid"
        header.style.display = 'none'
    }else {
        htmlModal.style.display = "none"
        header.style.display = 'grid'
    }
});
// ADD EVENT LISTENER TO JAVASCRIPT ICON
javaScriptIcon.addEventListener('click', () => {
    console.log('clicked')
    if (javaScriptModal.style.display != "grid"){
        javaScriptModal.style.display = "grid"
        header.style.display = 'none'
    }else {
        javaScriptModal.style.display = "none"
        header.style.display = 'grid'
    }
});
// ADD EVENT LISTENER TO BOOTSTRAP ICON
bootStrapIcon.addEventListener('click', () => {
    console.log('clicked')
    if (bootStrapModal.style.display != "grid"){
        bootStrapModal.style.display = "grid"
        header.style.display = 'none'
    }else {
        bootStrapModal.style.display = "none"
        header.style.display = 'grid'
    }
});
// ADD EVENT LISTENER TO PYTHON ICON
pythonIcon.addEventListener('click', () => {
    console.log('clicked')
    if (pythonModal.style.display != "grid"){
        pythonModal.style.display = "grid"
        header.style.display = 'none'
    }else {
        pythonModal.style.display = "none"
        header.style.display = 'grid'
    }
});
// ADD EVENT LISTENER TO SQL ICON
sqlIcon.addEventListener('click', () => {
    console.log('clicked')
    if (sqlModal.style.display != "grid"){
        sqlModal.style.display = "grid"
        header.style.display = 'none'
    }else {
        sqlModal.style.display = "none"
        header.style.display = 'grid'
    }
});
// ADD EVENT LISTENER TO REACT ICON
reactIcon.addEventListener('click', () => {
    console.log('clicked')
    if (reactModal.style.display != "grid"){
        reactModal.style.display = "grid"
        header.style.display = 'none'
    }else {
        reactModal.style.display = "none"
        header.style.display = 'grid'
    }
});
// ADD EVENT LISTENER TO CLOSE-BTN HTML
closeButtonHtml.addEventListener('click', () => {
    console.log('close-btn clicked');
    if (htmlModal.style.display != "none"){
        htmlModal.style.display = "none"
        header.style.display = 'grid'
    }
});
// ADD EVENT LISTENER TO CLOSE-BTN-JAVASCRIPT
closeButtonJavascript.addEventListener('click', () => {
    console.log('close-btn clicked');
    if (javaScriptModal.style.display != "none"){
        javaScriptModal.style.display = "none"
        header.style.display = 'grid'
    }
});
// ADD EVENT LISTENER TO CLOSE-BTN-BOOTSTRAP
closeButtonBootstrap.addEventListener('click', () => {
    console.log('close-btn clicked');
    if (bootStrapModal.style.display != "none"){
        bootStrapModal.style.display = "none"
        header.style.display = 'grid'
    }
});
// ADD EVENT LISTENER TO CLOSE-BTN-PYTHON
closeButtonPython.addEventListener('click', () => {
    console.log('close-btn clicked');
    if (pythonModal.style.display != "none"){
        pythonModal.style.display = "none"
        header.style.display = 'grid'
    }
});
// ADD EVENT LISTENER TO CLOSE-BTN-SQL
closeButtonSql.addEventListener('click', () => {
    console.log('close-btn clicked');
    if (sqlModal.style.display != "none"){
        sqlModal.style.display = "none"
        header.style.display = 'grid'
    }
});
// ADD EVENT LISTENER TO CLOSE-BTN-SQL
closeButtonReact.addEventListener('click', () => {
    console.log('close-btn clicked');
    if (reactModal.style.display != "none"){
        reactModal.style.display = "none"
        header.style.display = 'grid'
    }
});

       
    
        
       