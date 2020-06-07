/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
  if(document.querySelector("#same").checked)
    {
      var name=document.querySelector("#shippingName").value;
      var addresss=document.querySelector("#shippingZip").value;
      
      document.querySelector("#billingZip").value=addresss;
      document.querySelector("#billingName").value=name;
    }
  else
    {
      document.querySelector("#billingZip").value=" ";
      document.querySelector("#billingName").value=" ";
    }
    
}
