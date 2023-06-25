import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import * as express from "express"
import * as path from "path"
import * as logger from "morgan";
import * as cookieParser from "cookie-parser";
import * as engine from "ejs";

//router
import {IndexRouter} from "./router/indexroute"
import {UsersRouter} from "./router/usersroute"




AppDataSource.initialize().then(async () => {

    var app = express();
    app.engine("ejs",engine);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', IndexRouter);
    app.use('/users', UsersRouter);
    app.listen(3000);
    
}).catch(error => console.log(error))

