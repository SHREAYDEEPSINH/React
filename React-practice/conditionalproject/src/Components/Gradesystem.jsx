import React from 'react'

function Gradesystem({marks}) {

    if ( marks >= 0 && marks < 35){
        return ("Fail")
    }
    else if( marks >= 35  && marks <= 50){
        return ("Grade E")
    }
    else if( marks >50  && marks <= 60){
        return ("Grade D")
    }
    else if( marks >60  && marks <= 70){
        return ("Grade C")
    }
    else if( marks >70  && marks <= 80){
        return ("Grade B")
    }
    else if( marks >80  && marks <= 100){
        return ("Grade A")
    }
    else{
        return ("Invalid Marks")
    }
    
}

export default Gradesystem