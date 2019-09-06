import ScreenUi from "./ScreenUi";

export default class Validation extends ScreenUi{
    constructor(){
        super();
        this.$main=$(require("./validation.html"));
    }
}