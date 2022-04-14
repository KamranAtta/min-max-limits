// Initialize the application
EcwidApp.init({
    app_id: "custom-app-71585715-1", 
    autoloadedflag: true, 
    autoheight: true
    });

Ecwid.OnPageLoaded.add(function(page){
    console.log("Current page is of type: " + page.type);
    if(page.type == "PRODUCT"){
        var checkout = document.querySelector('.form-control__button');
        console.log('Value:::', checkout);

        checkout.addEventListener('click', function(event) {
            console.log('Button is clickedddddd!!!!!!!!!!!!!!!!!!!!!!');

            // const span = document.getElementsByClassName('details-product-attribute__value');
            const parent = document.querySelector('.details-product-attribute');
            const quantitySet = parseInt(parent.querySelector('.details-product-attribute__value').textContent);

            var quantity = parseInt(document.getElementById("qty-field").value);
            console.log('Clicked!!');
            console.log('quantityset!!', quantitySet);
            console.log('Quantity!!', quantity);

            if (!quantity || quantity < quantitySet) {
                event.preventDefault();
                alert('Please add equal to or more items than minimum quantity');
                // document.querySelector('.a-card').style.display = 'block';
            }
        });
    }
});
