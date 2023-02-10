const http = require('http');
const app = require('./app')

app.set('port', process.env.PORT || 3003);
const server = http.createServer(app);

app.use((req, res, next) => {
    console.log('request received');
    next();
}
);

app.use((req, res, next) => {
    res.status(201);
    next();
}
);

app.use((req, res, next) => {
    res.json({message: 'Your request was successful'})
    next();
}
);

app.use((req, res, next) => {
    console.log('Response sent successfully');
}
);


Server.listen(process.env.PORT || 3003);