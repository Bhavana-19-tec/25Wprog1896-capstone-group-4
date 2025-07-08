🔄 Updated cart.php:

    Displayed all products in cart with quantity, price, and total.

    Added "Remove" button for each product.

    Linked remove action to new remove_from_cart.php.

➕ Added new file remove_from_cart.php:

    Handles deletion of individual cart items using user_id and product_id.

    Redirects back to cart.php after removal.

🛍️ Implemented full checkout.php flow:

    Shows cart summary with item names, quantities, and pricing.

    Added shipping form (Name + Address).

    On submit:

        Inserts order into orders table.

        Adds all items into order_items.

        Clears cart after successful order.

        Shows success/failure message accordingly.

🧱 Updated orders table in SQL:

    Added missing columns: customer_name, address, total_amount.

🐛 Fixed runtime errors:

    bind_param() errors from missing DB fields.

    SQL execution errors (unknown columns).

🎨 Improved UI/UX:

    Styled buttons for Remove, Continue Shopping, Checkout.

    Added conditional display for empty cart state.

    Formatted prices and totals using number_format().

🗃️ Updated database (Ikart.sql) and exported final working version.
