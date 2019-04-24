# keyninja-test-app

I've used Node/Express and MongoDB for this basic app. I've also used Pug/Jade as a templating engine to render basic templates onto the webpage. I'm using some Bootstrap classes on html elements for the styling.

## Home Page

This is the application's home page. As we can see, it has a simple NavBar at the top with two options: 'Home' and 'Add Customer'. At the bottom, we have a list of Customers. Their details are being rendered out after being queried from the local instance of MongoDB. 

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-test-app/master/resources/home_page.jpg)

## Adding a New Customer

If we click on the 'Add Customer' button in the NavBar, we are taken to a different template that allows us to enter details for a new customer. Suppose we want to enter details for a customer called Michael Wang:

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-test-app/master/resources/add_customer_page.jpg)

Once we press the 'Submit' button, we are taken back to the homepage, where we can see the newly added user in the list (as the last entry):

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-test-app/master/resources/add_customer_submit.jpg)

## Updating Customer Details

Suppose that we want to change the details for 'Nikola Tesla'. We press the edit button, and that takes us to a new page. We can see the fields are populated with values that this Customer currently holds:

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-test-app/master/resources/edit_customer_details.jpg)

We change these values. We rename 'Nikola Tesla' to 'Elon Musk', and change the email address:

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-test-app/master/resources/edit_customer_details_presubmit.jpg)

After we press the 'Submit' button, we are again redirected to the main page, where we can now see that the changes have been updated:

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-test-app/master/resources/edit_customer_details_submit.jpg)

## Removing a Customer

Now, suppose that we want to remove the customer 'Martin Scorsese'. Clicking on the customer's name will show us their details:

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-test-app/master/resources/delete_customer.jpg)

We can click on the delete button. This will delete this customer, and redirect us back to the home page. We can now see that Scorsese is gone:

![alt text](https://raw.githubusercontent.com/AtifFarooq/keyninja-test-app/master/resources/delete_customer_post.jpg)

