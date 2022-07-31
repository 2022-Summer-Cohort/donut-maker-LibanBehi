class DonutMaker {
    constructor(autoClickers, donutCount, donutMultiplier) {
        this._autoClickers = autoClickers;
        this._donutCount = donutCount;
        this._donutMultiplier = donutMultiplier;
        this._autoClickersCost = 100;
        this._donutMultiplierCost = 10;

    }

    get donutCount() {
        return this._donutCount
    }
    get autoClickers() {
        return this._autoClickers
    }
    get donutMultiplier() {
        return this._donutMultiplier
    }
    get donutMultiplierCost(){
        return this._donutMultiplierCost
    }
    get autoClickersCost(){
        return this._autoClickersCost
    }

    bakeDonut() {
        this._donutCount += Math.pow(1.2, this._donutMultiplier);


    }
    buyautoclicker() {
        if (this._donutCount >= this._autoClickersCost) {
            this._donutCount -= this._autoClickersCost;
            this._autoClickers++;
            this._autoClickersCost *= 1.1;

        }
        else {
            alert("Not Enough Donuts!");

        }
    }
    buydonutmultiplier() {
        if (this._donutCount >= this._donutMultiplierCost) {
            this._donutCount -= this._donutMultiplierCost;
            this._donutMultiplier++;
            this._donutMultiplierCost *= 1.1;


        }
        else {
            alert("Not Enough Donuts!");
        }
    }
    resetBtn() {
        this._donutCount = 0;
        this._autoClickers = 0;
        this._donutMultiplier = 0;
        this._autoClickersCost = 100;
        this._donutMultiplierCost = 10;


    }


}


export default DonutMaker;
