import ScreenUi from "./ScreenUi";

export default class SelectDuree extends ScreenUi{
    constructor(){
        super();
        let me=this;
        this.$main=$(require("./selectDuree.html"));
    }

}