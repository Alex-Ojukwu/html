function mydoc(something)  {
            
            document.getElementById("demo").innerHTML = "the added solution of sum1 and sum2 = "+something;
        }

        function mycalc(sum1,sum2, callback) {
           let sum = sum1 + sum2;
            callback(sum); //for this callback the parameter of something in 
        }

        mycalc(5,19,mydoc);

        function display(some) {
            document.getElementById("semo").innerHTML = some;
        }

        let promises = new Promise (  function (myResolve,myReject)  {
            let x = 12;

            if(x==12){
                myResolve("Accepted");
            }else{
                myReject("failed");
            }

          
        });

        promises.then(
            (success) => { display(success)},
            function(fail) { display(fail)}
        )

        let promo = new Promise((pass, fail) => {
            setTimeout(function() {
                pass("VeryDarkMan");
            },3000)
        })

        promo.then(
            function (success) {
                document.getElementById("emo").innerHTML = success;
            }
        )

        
        //without reject
        async function myProject() {
            let mydevs = new Promise(function(resolution) {
                resolution("PORTABLE");
                
            });

            document.getElementById("nemo").innerHTML = await mydevs;
            
        }

        myProject();

        async function myops() {
let pomo = new Promise ( function(good) {
    setTimeout(function() {
        good("ekong");
    }, 4000)
});

document.getElementById("code").innerHTML = await pomo;
}

myops();

       