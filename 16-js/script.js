function calculateSellerPayments(stores) {
    const results = [];
    stores.forEach((store) => {
        const storeNumber = store.storeNumber;
        const salesAmount = store.salesAmount;

        let amountPaid;
        if (salesAmount<=500000){
            amountPaid = 3;
        }else if (salesAmount > 500000 && salesAmount < 700000){
            amountPaid = 5;
        }else {
            amountPaid = 0;
        }
        results.push({
            storeNumber,
            salesAmount,
            amountPaid,
        });
    });
    const maxSalesStore = results.reduce((prev, curr) =>{
return prev.salesAmount > curr.salesAmount ? prev : curr;
    });
    console.log("Store Number | Sales Amount | Amount Paid");
    console.log("--------------------------------------");
    results.forEach((results)=>{
        console.log(
            `${results.storeNumber} | ${results.salesAmount} | ${results.amountPaid}`

        );
    });
    console.log("");
    console.log(`Store with the most sales: ${maxSalesStore.storeNumber}`);
}