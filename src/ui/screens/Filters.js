import ScreenUi from "./ScreenUi";

export default class Filters extends ScreenUi{
    constructor(){
        super();
        this.$main=$(require("./filters.html"));
        this.$main.data("obj",this);
    }
}