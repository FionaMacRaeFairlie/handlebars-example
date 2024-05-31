// Importing libraries
const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');

// Importing files
const routes = require('./routes/handlers');


// Sending static files with Express 
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

const hbs = expbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/mainLayout'), // change layout folder name
    partialsDir: path.join(__dirname, 'views/partials'), // change partials folder name

    // create custom express handlebars helpers
    helpers: {

        list: function(value, options) {
            let out = "<ul class='list-group'>";
            for (let i = 0; i < value.length; i++) {
                out = out + "<li class='list-group-item'>" +  options.fn(value[i]) + "</li>";
            }
            return out + "</ul>";
        },

        ifEquals: function(arg1, arg2, options) {
            return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
        },

        ifPass: function(arg1, arg2, arg3, options) {
               return   ((parseInt(arg2) >=40) && (arg1 == arg3))? options.fn(this) : options.inverse(this);
            ;
        },

        ifFail: function(arg1, arg2, arg3, options) {
            return   ((parseInt(arg2) <40) && (arg1 == arg3))? options.fn(this) : options.inverse(this);
         ;
     }
    }
});



// Express Handlebars Configuration
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// Configure Routes
app.use('/', routes);


app.listen(3000, () => {
    console.log('Server is starting at port ', 3000);
});