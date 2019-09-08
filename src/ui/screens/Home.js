/**
 *
 */
import ScreenUi from "./ScreenUi";

export default class Home extends ScreenUi{
    constructor(){
        super();
        this.$main=$(require("./home.html"));
        this.$main.data("obj",this);
    }
}