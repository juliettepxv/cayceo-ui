import ScreenUi from "./ScreenUi";
import Ui from "../Ui";

export default class Filters extends ScreenUi{
    constructor(){
        //todo intégrer filters (tags) au process
        super();
        this.$main=$(require("./filters.html"));
        this.$main.data("obj",this);
        this.on(Ui.EVENT_ADDED_TO_STAGE,function(){
            ui.nav.displayHome(true,false);
            ui.nav.displayBack(true,"selectCasques");
            ui.nav.displayDashboard(true);
        });

        $body.on("click","[category]",function(){
            ui.screens.films.category=$(this).attr("category");
            ui.screens.films.show("from-right");
        });

        /**
         * @type {*[]}
         */
        this.categories=[];
        //this.addCategory("autres");
    }

    addCategory(category){
        if(this.categories.indexOf(category) === -1){
            this.categories.push(category);
            let $cat=$(require("../components/category-btn.html"));
            $cat.find("span").text(category);
            $cat.attr("category",category);
            this.$main.find("[categories]").append($cat);
        }


    }

}