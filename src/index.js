
//Create stylesheets for each script in the same folder with the same naming (if necessary) and import it.
import "./index.css";
import _isAdmin from "./utils/uacCheck"; //an utility function for checking if an user is member of the uac group 'chayns manager'
import _admin from "./components/admin_view/admin"; //the class containing all the admin functions
import _user from "./components/user_view/user"; //containing the user functions

init();

const init = () => {

    "use strict";

    document.querySelector('#headline').innerHTML = `Hello World!`;
};
