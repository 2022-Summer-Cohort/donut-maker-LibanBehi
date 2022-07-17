 class DonutMaker{
 constructor(autoClickers, donutCount, donutMultiplier){
     this._autoClickers = autoClickers;
     this._donutCount = donutCount;
     this._donutMultiplier = donutMultiplier;
     this._autoClickersCost = 10;
     this._donutMultiplierCost = 10;
     
 }

 get donutCount(){
    return this._donutCount
 }
 get autoClickers(){
    return this._autoClickers
}
get donutMultiplier(){
   return this._donutMultiplier
}

bakeDonut(){
this._donutCount+= Math.pow(1.2, this._donutMultiplier);


}
 buyautoclicker(){
     if(this._donutCount>= this._autoClickersCost){
         this._donutCount-=10;
         this._autoClickers++;
         this._autoClickersCost*=1.1;
         
     }
 }
 buydonutmultiplier(){
     if(this._donutCount>= this._donutMultiplierCost){
         this._donutCount-=10;
         this._donutMultiplier++;
         this._donutMultiplierCost*=1.1;
         

     }
    }
resetBtn(){
     this._donutCount = 0;
     this._autoClickers = 0;
     this._donutMultiplier = 0;
     this._autoClickersCost = 10;
     this._donutMultiplierCost = 10;
     
     
}
   

 }

 
 export default DonutMaker;
