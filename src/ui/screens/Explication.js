import ScreenUi from "./ScreenUi";

export default class Explication extends ScreenUi{
    constructor(){
        super();
        this.$main=$(require("./explication.html"));
    }
}