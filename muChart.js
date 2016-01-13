/**
 * Created by hlthi and ... on 19.12.2015.
 *
 * App name = muChart
 *
 * Copyright 2015 Muhammet Ozturk and Ebubekir and Ozlem Aydýn
 *
 * Please all code's above detailed comment .
 * Please variable names are  meaningful.
 * Please don't write spagagetti code - Read:https://en.wikipedia.org/wiki/Spaghetti_code
 *
 * Tips:
 * -Undefined is Not Null.
 * -Use  len = arr.lenght; (i = 0; i < len; i++) instead of (i = 0; i < arr.lenght; i++)
 * -If use one more time use obj = document.getElementById("demo"); instead of
 * document.getElementById("demo");
 * -
 */

"use strict";

var muChart = {};

/**
 *
 * @param graphType line,bar,pasta graph
 * @param ctx   CanvasRenderingContext2D
 * @param chartData data to be drawn
 */
var drawGraph = function(graphType,ctx,chartData){
    if(graphType === "line"){
        drawLineGraph(ctx,chartData);
    }

    return ;
}

/**
 *
 * @param ctx CanvasRenderingContext2D
 * @param chartData data to be drawn
 */
var drawLineGraph = function(ctx,chartData){
    drawScale(ctx,chartData);

}

/**
 * Calculate and draw a scale
 * @param ctx CanvasRenderingContext2D
 * @param chartData data to be drawn,
 * @problems We need text line 6 px ?
 */
var drawScale = function (ctx,chartData) {
    var yLabelInt = muChartUtil.stringToIntArray(chartData.yLabel);
    var maxValue = muChartUtil.max(chartData.yLabel);

    //ylabelInt.length == 0 already controlled

    var rowNumber = (yLabelInt.length)/3*2+1;
    var columnNumber = chartData.xLabel.length;

    //for y axis
    var increasingValue = Math.floor(maxValue/rowNumber) ;

     /*h////////////////
     ///////////////////
     //////////////////v
     */
    var horizonalLineStartPoint = {x: 50,y: 40};
    var verticalLineStartPoint = {x: ctx.width - horizonalLineStartPoint.x, y: ctx.height-horizonalLineStartPoint.y };


    //draw horizontal line
    //ýf x label dont have any data it is big problem
    var spaceHorizontal = ctx.width - horizonalLineStartPoint.x*2;

    // horizontal line space pixel
    spaceHorizontal /= columnNumber;

    for(var i = 0,pixel = 0 ; i< columnNumber ; i++, pixel+=spaceHorizontal) {
        //horizontal line
        ctx.beginPath();
        ctx.moveTo(horizonalLineStartPoint.x + pixel  , horizonalLineStartPoint.y +2 );
        ctx.lineTo(horizonalLineStartPoint.x + pixel, verticalLineStartPoint.y  + 2);
        ctx.font = "20px Arial";
        ctx.strokeText(chartData.xLabel[i],horizonalLineStartPoint.x + pixel - 15 , verticalLineStartPoint.y + 25,spaceHorizontal);
        ctx.stroke();
    }

    //draw verticalLine
    var spaceVertical = ctx.width - horizonalLineStartPoint.y*2;

    // vertical line space pixel
    spaceVertical /= rowNumber;
    for(var i = 0,pixel = 0,yValue = 0 ; i< columnNumber ; i++, pixel+=spaceVertical) {
        //horizontal line
        ctx.beginPath();
        ctx.moveTo(verticalLineStartPoint.x - 5 , verticalLineStartPoint.y - pixel);
        ctx.lineTo(horizonalLineStartPoint.x - 5  , verticalLineStartPoint.y - pixel);
        ctx.stroke();
        ctx.font = "20px Arial";
        ctx.strokeText("ydd",horizonalLineStartPoint.x-50,verticalLineStartPoint.y - pixel + 5,40);
    }

    drawText(ctx,chartData,spaceHorizontal,spaceVertical,increasingValue);
};

var drawText = function (ctx,chartData,spaceHorizontal,spaceVertical,increasingValue){
    //for(var i = 0 ; i)
};

//Util Methods
var  muChartUtil ={};

/**
 * Find max Number
 * @param dataArray
 * @returns {number} return max,if there a problem return NULL
 */
muChartUtil.max = function (dataArray){

    //control is this a array
    if(!muChartUtil.isArray(dataArray)) {
        console.log(dataArray," this is not a array,oww no huge problem in there.");
        return null;
    }

    var len = dataArray.length;
    for(var i= 1,max = dataArray[0] ; i<len ; i++){
        if(dataArray[i] > max)
            max = dataArray[i];
    }

    return max;
}

/**
 * Find min number
 * @param dataArray
 * @returns return max,if there a problem return NULL
 */
muChartUtil.min = function (dataArray){
    //control is this a array
    if(!muChartUtil.isArray(dataArray)) {
        console.log(dataArray," this is not a array,oww no huge problem in there.");
        return null;
    }

    var len = dataArray.length;
    for(var i= 1,min = dataArray[0] ; i<len ; i++){
        if(dataArray[i] < min)
            min = dataArray[i];
    }

    return min;
}

/**
 * Fastest solution
 * (No make test,please careful this function)
 * if dataArray is a array return true,other false
 * @param dataArray
 * @returns {boolean}
 */
muChartUtil.isArray = function(dataArray){
    return dataArray instanceof  Array;
}

/**
 *
 * @param stringArray
 */
muChartUtil.stringToIntArray = function (stringArray) {
    if(!muChartUtil.isArray(stringArray)) {
        console.log(stringArray," this is not a array,oww no, huge problem in there.");
        return;
    }

    var len = stringArray.length;

    if(len == 0){
        console.log("I don't see any value in this array man !");
        return;
    }

    var intArray = [];
    for(var i = 0 ; i<len ; i++){
        intArray[i] = parseInt(stringArray[i]);
    }

    return intArray;

};


