$(`.popupContainer`).hide();
$(`.standard`).addClass('chosenSizePizzaItem');
$(`.loose`).addClass('chosenSizePizzaItem');
$(`.allItem`).addClass('chosenFilterItem');

$(`.btnclose`).click(function(){
    $(`.popupContainer`).hide();
});

let priseProduct = 210;

$(`.standard`).click(function () {
    $(`.standard`).addClass('chosenSizePizzaItem');
    $(`.large`).removeClass('chosenSizePizzaItem');
    $(`.extralarge`).removeClass('chosenSizePizzaItem');
    $(`.thelargest`).removeClass('chosenSizePizzaItem');
    priseProduct = 210
    checkPrise();
    $(`.prise`).text(priseProduct);
});

$(`.large`).click(function () {
    $(`.standard`).removeClass('chosenSizePizzaItem');
    $(`.large`).addClass('chosenSizePizzaItem');
    $(`.extralarge`).removeClass('chosenSizePizzaItem');
    $(`.thelargest`).removeClass('chosenSizePizzaItem');
    priseProduct = 247
    checkPrise();
    $(`.prise`).text(priseProduct);
});

$(`.extralarge`).click(function () {
    $(`.standard`).removeClass('chosenSizePizzaItem');
    $(`.large`).removeClass('chosenSizePizzaItem');
    $(`.extralarge`).addClass('chosenSizePizzaItem');
    $(`.thelargest`).removeClass('chosenSizePizzaItem');
    priseProduct = 284
    checkPrise();
    $(`.prise`).text(priseProduct);
});

$(`.thelargest`).click(function () {
    $(`.standard`).removeClass('chosenSizePizzaItem');
    $(`.large`).removeClass('chosenSizePizzaItem');
    $(`.extralarge`).removeClass('chosenSizePizzaItem');
    $(`.thelargest`).addClass('chosenSizePizzaItem');
    priseProduct = 321
    checkPrise();
    $(`.prise`).text(priseProduct);
});

$(`.loose`).click(function () {
    $(`.loose`).addClass('chosenSizePizzaItem');
    $(`.thin`).removeClass('chosenSizePizzaItem');
    $(`.philadelphia`).removeClass('chosenSizePizzaItem');
    $(`.hotDog`).removeClass('chosenSizePizzaItem');
    
});

$(`.thin`).click(function () {
    $(`.loose`).removeClass('chosenSizePizzaItem');
    $(`.thin`).addClass('chosenSizePizzaItem');
    $(`.philadelphia`).removeClass('chosenSizePizzaItem');
    $(`.hotDog`).removeClass('chosenSizePizzaItem');
});

$(`.philadelphia`).click(function () {
    $(`.loose`).removeClass('chosenSizePizzaItem');
    $(`.thin`).removeClass('chosenSizePizzaItem');
    $(`.philadelphia`).addClass('chosenSizePizzaItem');
    $(`.hotDog`).removeClass('chosenSizePizzaItem');
});

$(`.hotDog`).click(function () {
    $(`.loose`).removeClass('chosenSizePizzaItem');
    $(`.thin`).removeClass('chosenSizePizzaItem');
    $(`.philadelphia`).removeClass('chosenSizePizzaItem');
    $(`.hotDog`).addClass('chosenSizePizzaItem');
});

$(`.allItem`).click(function () {
    $(`.allItem`).addClass('chosenFilterItem');
    $(`.saucesItems`).removeClass('chosenFilterItem');
    $(`.meatItems`).removeClass('chosenFilterItem');
    $(`.cheeseItems`).removeClass('chosenFilterItem');
    $(`.vegetablesItems`).removeClass('chosenFilterItem');
    $(`.saucesBox`).css(`display`, `flex`);
    $(`.meatBox`).css(`display`, `flex`);
    $(`.cheeseBox`).css(`display`, `flex`);
    $(`.vegetablesBox`).css(`display`, `flex`);
});

$(`.saucesItems`).click(function () {
    $(`.allItem`).removeClass('chosenFilterItem');
    $(`.saucesItems`).addClass('chosenFilterItem');
    $(`.meatItems`).removeClass('chosenFilterItem');
    $(`.cheeseItems`).removeClass('chosenFilterItem');
    $(`.vegetablesItems`).removeClass('chosenFilterItem');
    $(`.saucesBox`).css(`display`, `flex`);
    $(`.meatBox`).css(`display`, `none`);
    $(`.cheeseBox`).css(`display`, `none`);
    $(`.vegetablesBox`).css(`display`, `none`);
});

$(`.meatItems`).click(function () {
    $(`.allItem`).removeClass('chosenFilterItem');
    $(`.saucesItems`).removeClass('chosenFilterItem');
    $(`.meatItems`).addClass('chosenFilterItem');
    $(`.cheeseItems`).removeClass('chosenFilterItem');
    $(`.vegetablesItems`).removeClass('chosenFilterItem');
    $(`.saucesBox`).css(`display`, `none`);
    $(`.meatBox`).css(`display`, `flex`);
    $(`.cheeseBox`).css(`display`, `none`);
    $(`.vegetablesBox`).css(`display`, `none`);
});

$(`.cheeseItems`).click(function () {
    $(`.allItem`).removeClass('chosenFilterItem');
    $(`.saucesItems`).removeClass('chosenFilterItem');
    $(`.meatItems`).removeClass('chosenFilterItem');
    $(`.cheeseItems`).addClass('chosenFilterItem');
    $(`.vegetablesItems`).removeClass('chosenFilterItem');
    $(`.saucesBox`).css(`display`, `none`);
    $(`.meatBox`).css(`display`, `none`);
    $(`.cheeseBox`).css(`display`, `flex`);
    $(`.vegetablesBox`).css(`display`, `none`);
});

$(`.vegetablesItems`).click(function () {
    $(`.allItem`).removeClass('chosenFilterItem');
    $(`.saucesItems`).removeClass('chosenFilterItem');
    $(`.meatItems`).removeClass('chosenFilterItem');
    $(`.cheeseItems`).removeClass('chosenFilterItem');
    $(`.vegetablesItems`).addClass('chosenFilterItem');
    $(`.saucesBox`).css(`display`, `none`);
    $(`.meatBox`).css(`display`, `none`);
    $(`.cheeseBox`).css(`display`, `none`);
    $(`.vegetablesBox`).css(`display`, `flex`);
});

let numberProduct = 0;
$(`.prise`).text(priseProduct);
let checkPrise = function () {
    if ($('.standard').hasClass('chosenSizePizzaItem')) {
        if (numberProduct == 2) {
            priseProduct = 210
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 3) {
            priseProduct = 244
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 4) {
            priseProduct = 278
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 5) {
            priseProduct = 312
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 6) {
            priseProduct = 346
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 7) {
            priseProduct = 380
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 8) {
            priseProduct = 414
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 9) {
            priseProduct = 448
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 10) {
            priseProduct = 482
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 11) {
            priseProduct = 516
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 12) {
            priseProduct = 550
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 13) {
            priseProduct = 584
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 14) {
            priseProduct = 618
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 15) {
            priseProduct = 652
            $(`.prise`).text(priseProduct);
        }
    }else if ($('.large').hasClass('chosenSizePizzaItem')) {
        if (numberProduct == 2) {
            priseProduct = 247
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 3) {
            priseProduct = 285
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 4) {
            priseProduct = 323
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 5) {
            priseProduct = 361
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 6) {
            priseProduct = 399
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 7) {
            priseProduct = 437
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 8) {
            priseProduct = 475
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 9) {
            priseProduct = 513
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 10) {
            priseProduct = 551
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 11) {
            priseProduct = 589
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 12) {
            priseProduct = 627
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 13) {
            priseProduct = 665
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 14) {
            priseProduct = 703
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 15) {
            priseProduct = 741
            $(`.prise`).text(priseProduct);
        }
    }else if ($('.extralarge').hasClass('chosenSizePizzaItem')) {
        if (numberProduct == 2) {
            priseProduct = 284
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 3) {
            priseProduct = 326
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 4) {
            priseProduct = 368
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 5) {
            priseProduct = 410
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 6) {
            priseProduct = 452
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 7) {
            priseProduct = 494
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 8) {
            priseProduct = 536
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 9) {
            priseProduct = 578
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 10) {
            priseProduct = 620
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 11) {
            priseProduct = 662
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 12) {
            priseProduct = 704
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 13) {
            priseProduct = 746
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 14) {
            priseProduct = 788
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 15) {
            priseProduct = 830
            $(`.prise`).text(priseProduct);
        }
    }else if ($('.thelargest').hasClass('chosenSizePizzaItem')) {
        if (numberProduct == 2) {
            priseProduct = 321
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 3) {
            priseProduct = 367
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 4) {
            priseProduct = 413
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 5) {
            priseProduct = 459
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 6) {
            priseProduct = 505
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 7) {
            priseProduct = 551
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 8) {
            priseProduct = 597
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 9) {
            priseProduct = 643
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 10) {
            priseProduct = 689
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 11) {
            priseProduct = 735
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 12) {
            priseProduct = 781
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 13) {
            priseProduct = 827
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 14) {
            priseProduct = 873
            $(`.prise`).text(priseProduct);
        } else if (numberProduct == 15) {
            priseProduct = 919
            $(`.prise`).text(priseProduct);
        }
    }
}

let numberchesnochnyi = 0;
$(`.arrowchesnochnyiPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberalfredo == 0 && numbersousdomynos == 0 && numbersousbbk == 0) {
            if (numberchesnochnyi < 2) {
                numberProduct++;
                numberchesnochnyi++;
                $(`.amountIngredientchesnochnyi`).text(numberchesnochnyi);
            }
        }
    } else {
        $(`.popupContainer`).show();
    }

});

$(`.arrowchesnochnyiMinus`).click(function () {
    if (numberchesnochnyi > 0) {
        numberchesnochnyi--;
        numberProduct--;
        $(`.amountIngredientchesnochnyi`).text(numberchesnochnyi);
    }
});

let numberalfredo = 0;
$(`.arrowalfredoPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberchesnochnyi == 0 && numbersousdomynos == 0 && numbersousbbk == 0) {
            if (numberalfredo < 2) {
                numberProduct++;
                numberalfredo++;
                $(`.amountIngredientalfredo`).text(numberalfredo);
            }
        }
    } else {
        $(`.popupContainer`).show();
    }

});

$(`.arrowalfredoMinus`).click(function () {
    if (numberalfredo > 0) {
        numberalfredo--;
        numberProduct--;
        $(`.amountIngredientalfredo`).text(numberalfredo);
    }
});

let numbersousdomynos = 0;
$(`.arrowsousdomynosPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberalfredo == 0 && numberchesnochnyi == 0 && numbersousbbk == 0) {
            if (numbersousdomynos < 2) {
                numberProduct++;
                numbersousdomynos++;
                $(`.amountIngredientsousdomynos`).text(numbersousdomynos);
            }
        }
    } else {
        $(`.popupContainer`).show();
    }

});

$(`.arrowsousdomynosMinus`).click(function () {
    if (numbersousdomynos > 0) {
        numbersousdomynos--;
        numberProduct--;
        $(`.amountIngredientsousdomynos`).text(numbersousdomynos);
    }
});

let numbersousbbk = 0;
$(`.arrowsousbbkPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberalfredo == 0 && numbersousdomynos == 0 && numberchesnochnyi == 0) {
            if (numbersousbbk < 2) {
                numberProduct++;
                numbersousbbk++;
                $(`.amountIngredientsousbbk`).text(numbersousbbk);
            }
        }
    } else {
        $(`.popupContainer`).show();
    }

});

$(`.arrowsousbbkMinus`).click(function () {
    if (numbersousbbk > 0) {
        numbersousbbk--;
        numberProduct--;
        $(`.amountIngredientsousbbk`).text(numbersousbbk);
    }
});

let numbertyrkey = 0;
$(`.arrowtyrkeyPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbertyrkey < 3) {
            numberProduct++;
            numbertyrkey++;
            checkPrise();
            $(`.amountIngredienttyrkey`).text(numbertyrkey);
        }
    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowtyrkeyMinus`).click(function () {
    if (numbertyrkey > 0) {
        numbertyrkey--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredienttyrkey`).text(numbertyrkey);
    }
});

let numberchorizo = 0;
$(`.arrowchorizoPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberchorizo < 3) {
            numberProduct++;
            numberchorizo++;
            checkPrise();
            $(`.amountIngredientchorizo`).text(numberchorizo);
        }
    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowchorizoMinus`).click(function () {
    if (numberchorizo > 0) {
        numberchorizo--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientchorizo`).text(numberchorizo);
    }
});

let numberohotnichikolbaski = 0;
$(`.arrowohotnichikolbaskiPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberohotnichikolbaski < 3) {
            numberProduct++;
            numberohotnichikolbaski++;
            checkPrise();
            $(`.amountIngredientohotnichikolbaski`).text(numberohotnichikolbaski);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowohotnichikolbaskiMinus`).click(function () {
    if (numberohotnichikolbaski > 0) {
        numberohotnichikolbaski--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientohotnichikolbaski`).text(numberohotnichikolbaski);
    }
});

let numberkolbasky = 0;
$(`.arrowkolbaskyPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberkolbasky < 3) {
            numberProduct++;
            numberkolbasky++;
            checkPrise();
            $(`.amountIngredientkolbasky`).text(numberkolbasky);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowkolbaskyMinus`).click(function () {
    if (numberkolbasky > 0) {
        numberkolbasky--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientkolbasky`).text(numberkolbasky);
    }
});

let numberbifteliatyna = 0;
$(`.arrowbifteliatynaPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberbifteliatyna < 3) {
            numberProduct++;
            numberbifteliatyna++;
            checkPrise();
            $(`.amountIngredientbifteliatyna`).text(numberbifteliatyna);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowbifteliatynaMinus`).click(function () {
    if (numberbifteliatyna > 0) {
        numberbifteliatyna--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientbifteliatyna`).text(numberbifteliatyna);
    }
});

let numberlargevetchinanarez = 0;
$(`.arrowlargevetchinanarezPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberlargevetchinanarez < 3) {
            numberProduct++;
            numberlargevetchinanarez++;
            checkPrise();
            $(`.amountIngredientlargevetchinanarez`).text(numberlargevetchinanarez);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowlargevetchinanarezMinus`).click(function () {
    if (numberlargevetchinanarez > 0) {
        numberlargevetchinanarez--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientlargevetchinanarez`).text(numberlargevetchinanarez);
    }
});

let numberzavantazhennia = 0;
$(`.arrowzavantazhenniaPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberzavantazhennia < 3) {
            numberProduct++;
            numberzavantazhennia++;
            checkPrise();
            $(`.amountIngredientzavantazhennia`).text(numberzavantazhennia);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowzavantazhenniaMinus`).click(function () {
    if (numberzavantazhennia > 0) {
        numberzavantazhennia--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientzavantazhennia`).text(numberzavantazhennia);
    }
});

let numbertunets = 0;
$(`.arrowtunetsPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbertunets < 3) {
            numbertunets++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredienttunets`).text(numbertunets);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowtunetsMinus`).click(function () {
    if (numbertunets > 0) {
        numbertunets--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredienttunets`).text(numbertunets);
    }
});

let numberkolbaskimyunhenskie = 0;
$(`.arrowkolbaskimyunhenskiePlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberkolbaskimyunhenskie < 3) {
            numberProduct++;
            numberkolbaskimyunhenskie++;
            checkPrise();
            $(`.amountIngredientkolbaskimyunhenskie`).text(numberkolbaskimyunhenskie);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowkolbaskimyunhenskieMinus`).click(function () {
    if (numberkolbaskimyunhenskie > 0) {
        numberkolbaskimyunhenskie--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientkolbaskimyunhenskie`).text(numberkolbaskimyunhenskie);
    }
});

let numberpepp = 0;
$(`.arrowpeppPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberpepp < 3) {
            numberpepp++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientpepp`).text(numberpepp);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowpeppMinus`).click(function () {
    if (numberpepp > 0) {
        numberpepp--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientpepp`).text(numberpepp);
    }
});

let numbertirasdepollo = 0;
$(`.arrowtirasdepolloPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbertirasdepollo < 3) {
            numbertirasdepollo++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredienttirasdepollo`).text(numbertirasdepollo);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowtirasdepolloMinus`).click(function () {
    if (numbertirasdepollo > 0) {
        numbertirasdepollo--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredienttirasdepollo`).text(numbertirasdepollo);
    }
});

let numberchedder = 0;
$(`.arrowchedderPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberchedder < 3) {
            numberchedder++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientchedder`).text(numberchedder);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowchedderMinus`).click(function () {
    if (numberchedder > 0) {
        numberchedder--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientchedder`).text(numberchedder);
    }
});

let numbermozzarella = 0;
$(`.arrowmozzarellaPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbermozzarella < 3) {
            numbermozzarella++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientmozzarella`).text(numbermozzarella);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowmozzarellaMinus`).click(function () {
    if (numbermozzarella > 0) {
        numbermozzarella--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientmozzarella`).text(numbermozzarella);
    }
});

let numberdorblu = 0;
$(`.arrowdorbluPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberdorblu < 3) {
            numberdorblu++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientdorblu`).text(numberdorblu);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowdorbluMinus`).click(function () {
    if (numberdorblu > 0) {
        numberdorblu--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientdorblu`).text(numberdorblu);
    }
});

let numberparmezan = 0;
$(`.arrowparmezanPlus`).click(function () {
    console.log(numberProduct);
    if (numberProduct <= 14) {
        if (numberparmezan < 3) {
            numberparmezan++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientparmezan`).text(numberparmezan);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowparmezanMinus`).click(function () {
    console.log(numberProduct);
    if (numberparmezan > 0) {
        numberparmezan--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientparmezan`).text(numberparmezan);
    }
});

let numberfeta = 0;
$(`.arrowfetaPlus`).click(function () {
    console.log(numberProduct);
    if (numberProduct <= 14) {
        if (numberfeta < 3) {
            numberfeta++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientfeta`).text(numberfeta);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowfetaMinus`).click(function () {
    if (numberfeta > 0) {
        numberfeta--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientfeta`).text(numberfeta);
    }
});

let numbercherrytomatoes = 0;
$(`.arrowcherrytomatoesPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbercherrytomatoes < 3) {
            numbercherrytomatoes++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientcherrytomatoes`).text(numbercherrytomatoes);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowcherrytomatoesMinus`).click(function () {
    if (numbercherrytomatoes > 0) {
        numbercherrytomatoes--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientcherrytomatoes`).text(numbercherrytomatoes);
    }
});

let numbershpinat = 0;
$(`.arrowshpinatPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbershpinat < 3) {
            numbershpinat++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientshpinat`).text(numbershpinat);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowshpinatMinus`).click(function () {
    if (numbershpinat > 0) {
        numbershpinat--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientshpinat`).text(numbershpinat);
    }
});

let numberkhalapeno = 0;
$(`.arrowkhalapenoPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberkhalapeno < 3) {
            numberkhalapeno++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientkhalapeno`).text(numberkhalapeno);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowkhalapenoMinus`).click(function () {
    if (numberkhalapeno > 0) {
        numberkhalapeno--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientkhalapeno`).text(numberkhalapeno);
    }
});

let numbertomato = 0;
$(`.arrowtomatoPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbertomato < 3) {
            numbertomato++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredienttomato`).text(numbertomato);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowtomatoMinus`).click(function () {
    if (numbertomato > 0) {
        numbertomato--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredienttomato`).text(numbertomato);
    }
});

let numberhorchytsa = 0;
$(`.arrowhorchytsaPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberhorchytsa < 3) {
            numberhorchytsa++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredienthorchytsa`).text(numberhorchytsa);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowhorchytsaMinus`).click(function () {
    if (numberhorchytsa > 0) {
        numberhorchytsa--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredienthorchytsa`).text(numberhorchytsa);
    }
});

let numberolyvky = 0;
$(`.arrowolyvkyPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberolyvky < 3) {
            numberolyvky++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientolyvky`).text(numberolyvky);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowolyvkyMinus`).click(function () {
    if (numberolyvky > 0) {
        numberolyvky--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientolyvky`).text(numberolyvky);
    }
});

let numberpear = 0;
$(`.arrowpearPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberpear < 3) {
            numberpear++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientpear`).text(numberpear);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowpearMinus`).click(function () {
    if (numberpear > 0) {
        numberpear--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientpear`).text(numberpear);
    }
});

let numbermarinovannyeogurcy = 0;
$(`.arrowmarinovannyeogurcyPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbermarinovannyeogurcy < 3) {
            numbermarinovannyeogurcy++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientmarinovannyeogurcy`).text(numbermarinovannyeogurcy);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowmarinovannyeogurcyMinus`).click(function () {
    if (numbermarinovannyeogurcy > 0) {
        numbermarinovannyeogurcy--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientmarinovannyeogurcy`).text(numbermarinovannyeogurcy);
    }
});

let numberperets = 0;
$(`.arrowperetsPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberperets < 3) {
            numberperets++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientperets`).text(numberperets);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowperetsMinus`).click(function () {
    if (numberperets > 0) {
        numberperets--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientperets`).text(numberperets);
    }
});

let numberananasa = 0;
$(`.arrowananasaPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberananasa < 3) {
            numberananasa++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientananasa`).text(numberananasa);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowananasaMinus`).click(function () {
    if (numberananasa > 0) {
        numberananasa--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientananasa`).text(numberananasa);
    }
});

let numbershampinony = 0;
$(`.arrowshampinonyPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbershampinony < 3) {
            numbershampinony++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientshampinony`).text(numbershampinony);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowshampinonyMinus`).click(function () {
    if (numbershampinony > 0) {
        numbershampinony--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientshampinony`).text(numbershampinony);
    }
});

let numberluk = 0;
$(`.arrowlukPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberluk < 3) {
            numberluk++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientluk`).text(numberluk);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowlukMinus`).click(function () {
    if (numberluk > 0) {
        numberluk--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientluk`).text(numberluk);
    }
});

let numberkukurudzu = 0;
$(`.arrowkukurudzuPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numberkukurudzu < 3) {
            numberkukurudzu++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientkukurudzu`).text(numberkukurudzu);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowkukurudzuMinus`).click(function () {
    if (numberkukurudzu > 0) {
        numberkukurudzu--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientkukurudzu`).text(numberkukurudzu);
    }
});

let numbercrispy = 0;
$(`.arrowcrispyPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbercrispy < 3) {
            numbercrispy++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientcrispy`).text(numbercrispy);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowcrispyMinus`).click(function () {
    if (numbercrispy > 0) {
        numbercrispy--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientcrispy`).text(numbercrispy);
    }
});

let numbersousbbktop = 0;
$(`.arrowsousbbktopPlus`).click(function () {
    if (numberProduct <= 14) {
        if (numbersousbbktop < 1) {
            numbersousbbktop++;
            numberProduct++;
            checkPrise();
            $(`.amountIngredientsousbbktop`).text(numbersousbbktop);
        }

    } else {
        $(`.popupContainer`).show();
    }
});

$(`.arrowsousbbktopMinus`).click(function () {
    if (numbersousbbktop > 0) {
        numbersousbbktop--;
        numberProduct--;
        checkPrise();
        $(`.amountIngredientsousbbktop`).text(numbersousbbktop);
    }
});

$(`.resetBtn`).click(function(){
    numberchesnochnyi = 0;
    numberalfredo = 0;
    numbersousdomynos = 0;
    numbersousbbk = 0;
    numbertyrkey = 0;
    numberchorizo = 0;
    numberohotnichikolbaski = 0;
    numberkolbasky = 0;
    numberbifteliatyna = 0;
    numberlargevetchinanarez = 0;
    numberzavantazhennia = 0;
    numbertunets = 0;
    numberkolbaskimyunhenskie = 0;
    numberpepp = 0;
    numbertirasdepollo = 0;
    numberchedder = 0;
    numbermozzarella = 0;
    numberdorblu = 0;
    numberparmezan = 0;
    numberfeta = 0;
    numbercherrytomatoes = 0;
    numbershpinat = 0;
    numberkhalapeno = 0;
    numbertomato = 0;
    numberhorchytsa = 0;
    numberolyvky = 0;
    numberpear = 0;
    numbermarinovannyeogurcy = 0;
    numberperets = 0;
    numberananasa = 0;
    numbershampinony = 0;
    numberluk = 0;
    numberkukurudzu = 0;
    numbercrispy = 0;
    numbersousbbktop = 0;
    $(`.amountIngredientsousbbktop`).text(numbersousbbktop);
    $(`.amountIngredientcrispy`).text(numbercrispy);
    $(`.amountIngredientkukurudzu`).text(numberkukurudzu);
    $(`.amountIngredientluk`).text(numberluk);
    $(`.amountIngredientshampinony`).text(numbershampinony);
    $(`.amountIngredientananasa`).text(numberananasa);
    $(`.amountIngredientperets`).text(numberperets);
    $(`.amountIngredientmarinovannyeogurcy`).text(numbermarinovannyeogurcy);
    $(`.amountIngredientpear`).text(numberpear);
    $(`.amountIngredientolyvky`).text(numberolyvky);
    $(`.amountIngredienthorchytsa`).text(numberhorchytsa);
    $(`.amountIngredienttomato`).text(numbertomato);
    $(`.amountIngredientkhalapeno`).text(numberkhalapeno);
    $(`.amountIngredientshpinat`).text(numbershpinat);
    $(`.amountIngredientcherrytomatoes`).text(numbercherrytomatoes);
    $(`.amountIngredientfeta`).text(numberfeta);
    $(`.amountIngredientparmezan`).text(numberparmezan);
    $(`.amountIngredientdorblu`).text(numberdorblu);
    $(`.amountIngredientmozzarella`).text(numbermozzarella);
    $(`.amountIngredientchedder`).text(numberchedder);
    $(`.amountIngredienttirasdepollo`).text(numbertirasdepollo);
    $(`.amountIngredientpepp`).text(numberpepp);
    $(`.amountIngredientkolbaskimyunhenskie`).text(numberkolbaskimyunhenskie);
    $(`.amountIngredienttunets`).text(numbertunets);
    $(`.amountIngredientzavantazhennia`).text(numberzavantazhennia);
    $(`.amountIngredientlargevetchinanarez`).text(numberlargevetchinanarez);
    $(`.amountIngredientbifteliatyna`).text(numberbifteliatyna);
    $(`.amountIngredientkolbasky`).text(numberkolbasky);
    $(`.amountIngredientohotnichikolbaski`).text(numberohotnichikolbaski);
    $(`.amountIngredientchorizo`).text(numberchorizo);
    $(`.amountIngredienttyrkey`).text(numbertyrkey);
    $(`.amountIngredientsousbbk`).text(numbersousbbk);
    $(`.amountIngredientsousdomynos`).text(numbersousdomynos);
    $(`.amountIngredientalfredo`).text(numberalfredo);
    $(`.amountIngredientchesnochnyi`).text(numberchesnochnyi);
    priseProduct = 210;
    $(`.prise`).text(priseProduct);
    numberProduct = 0;
    $(`.standard`).addClass('chosenSizePizzaItem');
    $(`.large`).removeClass('chosenSizePizzaItem');
    $(`.extralarge`).removeClass('chosenSizePizzaItem');
    $(`.thelargest`).removeClass('chosenSizePizzaItem');
    $(`.loose`).addClass('chosenSizePizzaItem');
    $(`.thin`).removeClass('chosenSizePizzaItem');
    $(`.philadelphia`).removeClass('chosenSizePizzaItem');
    $(`.hotDog`).removeClass('chosenSizePizzaItem');
});