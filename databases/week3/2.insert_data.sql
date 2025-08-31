INSERT INTO `meals` (`title`, `description`, `location`, `when`, `max_reservations`, `price`, `created_date`) VALUES
('Italian Pasta Night', 'Enjoy a variety of homemade pasta dishes.', 'Rome', '2024-07-15 19:00:00', 10, 25.00, '2024-06-01'),
('Sushi Evening', 'Fresh sushi prepared by a professional chef.', 'Tokyo', '2024-07-20 18:30:00', 8, 40.00, '2024-06-02'),
('Vegan Delight', 'A selection of delicious vegan meals.', 'Berlin', '2024-07-18 20:00:00', 12, 30.00, '2024-06-03'),
('BBQ Feast', 'Grilled meats and vegetables with homemade sauces.', 'Austin', '2024-07-22 19:30:00', 15, 35.00, '2024-06-04'),
('French Bistro', 'Classic French dishes in a cozy setting.', 'Paris', '2024-07-25 20:00:00', 10, 45.00, '2024-06-05'),
('Seafood Extravaganza', 'Fresh seafood from the coast.', 'Sydney', '2024-07-28 19:00:00', 12, 50.00, '2024-06-06'),
('Mexican Fiesta', 'Spicy and flavorful Mexican cuisine.', 'Mexico City', '2024-07-30 18:00:00', 20, 28.00, '2024-06-07'),
('Indian Curry Night', 'A variety of traditional Indian curries.', 'Delhi', '2024-08-02 19:00:00', 18, 32.00, '2024-06-08'),
('Greek Taverna', 'Authentic Greek dishes and wines.', 'Athens', '2024-08-05 20:00:00', 14, 30.00, '2024-06-09'),
('Japanese Ramen', 'Warm and comforting ramen bowls.', 'Osaka', '2024-08-08 18:30:00', 10, 22.00, '2024-06-10'),
('Mediterranean Mezze', 'A variety of small dishes from the Mediterranean.', 'Istanbul', '2024-08-10 19:00:00', 16, 27.00, '2024-06-11'),
('Southern Soul Food', 'Comfort food from the American South.', 'New Orleans', '2024-08-12 19:30:00', 15, 25.00, '2024-06-12');

INSERT INTO `reservations` (`number_of_guests`, `meal_id`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES
(2, 1, '2024-06-10', '123-456-7890', 'Alice Johnson', 'alice@example.com'),
(4, 2, '2024-06-11', '234-567-8901', 'Bob Smith', 'bob@example.com'),
(1, 1, '2024-06-12', '345-678-9012', 'Carol White', 'carol@example.com'),
(3, 4, '2024-06-13', '456-789-0123', 'David Brown', 'david@example.com'),
(5, 5, '2024-06-14', '567-890-1234', 'Eva Green', 'eva@example.com'),
(2, 6, '2024-06-15', '678-901-2345', 'Frank Black', 'frank@example.com'),
(6, 7, '2024-06-16', '789-012-3456', 'Grace Lee', 'grace@example.com'),
(1, 8, '2024-06-17', '890-123-4567', 'Hank Miller', 'hank@example.com'),
(4, 1, '2024-06-18', '901-234-5678', 'Ivy Wilson', 'ivy@example.com'),
(2, 10, '2024-06-19', '012-345-6789', 'Jack Taylor', 'jack@example.com'),
(3, 1, '2024-06-20', '123-456-7891', 'Kara Davis', 'kara@example.com'),
(5, 12, '2024-06-21', '234-567-8902', 'Liam Harris', 'liam@example.com');

INSERT INTO `reviews` (`title`, `description`, `meal_id`, `stars`, `created_date`) VALUES
('Amazing Pasta', 'The pasta was cooked to perfection and the sauce was delicious.', 1, 5, '2024-06-20'),
('Fresh Sushi', 'The sushi was fresh and beautifully presented.', 2, 4, '2024-06-21'),
('Great Vegan Options', 'Loved the variety and taste of the vegan dishes.', 3, 3, '2024-06-22'),
('BBQ Heaven', 'The BBQ was smoky and tender, a real treat.', 4, 5, '2024-06-23'),
('French Elegance', 'Classic French cuisine done right.', 5, 4, '2024-06-24'),
('Seafood Delight', 'Fresh and flavorful seafood dishes.', 6, 2, '2024-06-25'),
('Spicy Mexican', 'Loved the bold flavors and spices.', 7, 4, '2024-06-26'),
('Curry Perfection', 'Rich and aromatic Indian curries.', 8, 4, '2024-06-27'),
('Greek Experience', 'Authentic and delicious Greek food.', 9, 4, '2024-06-28'),
('Ramen Comfort', 'Warm and satisfying ramen bowls.', 10, 3, '2024-06-29'),
('Mediterranean Feast', 'A wonderful variety of mezze dishes.', 11, 4, '2024-06-30'),
('Soul Food Love', 'Comfort food that warms the heart.', 12, 5, '2024-07-01');