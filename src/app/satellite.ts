import { stringify } from 'querystring';

export class Satellite {
    name: string;
    type: string;
    orbitType: string;
    launchDate: string;
    operational: boolean;
    

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning(){
        if(this.type.toLowerCase() == "space debris"){
            return true;
        }else{
            return false;
        }
    }
}
