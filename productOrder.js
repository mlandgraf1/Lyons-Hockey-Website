$(function() {
    $("#shippingAddressCheck").click(function() {
        if ($(this).is(":checked")) {
            $("#shippingAddress").show();
        } else {
            $("#shippingAddress").hide();
        }
    })
})
