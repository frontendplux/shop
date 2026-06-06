<?php
  class Main{
        public function __construct($conn){
            $this->conn=$conn;
        }

public function homePage()
{
    // Categories
    $stmtCategory = $this->conn->prepare("
        SELECT *
        FROM categories
        WHERE parent_id IS NULL
        ORDER BY id DESC
    ");

    $stmtCategory->execute();
    $resultCategory = $stmtCategory->get_result()->fetch_all(MYSQLI_ASSOC);

    // Promotions
    $stmtPromotion = $this->conn->prepare("
        SELECT *
        FROM promotional
        WHERE start_date <= NOW()
        AND end_date >= NOW()
        ORDER BY id DESC
    ");

    $stmtPromotion->execute();
    $promotions = $stmtPromotion->get_result()->fetch_all(MYSQLI_ASSOC);

    $promotionData = [];

    foreach ($promotions as $promotion) {

        $stmtProducts = $this->conn->prepare("
            SELECT
                p.id,
                p.name,
                p.slug,
                p.price,
                p.images,
                p.category_id,
                c.name AS category_name,
                c.slug AS category_slug
            FROM products p
            LEFT JOIN categories c
                ON c.slug = p.category_id
            WHERE p.promotional_price = ?
            AND p.status = 'active'
            ORDER BY p.id DESC
        ");

        $stmtProducts->bind_param(
            "s",
            $promotion['slug']
        );

        $stmtProducts->execute();

        $products = $stmtProducts
            ->get_result()
            ->fetch_all(MYSQLI_ASSOC);

        foreach ($products as &$product) {

            $price = (float)$product['price'];
            $discount = (float)$promotion['discount_percentage'];

            $discountAmount = ($price * $discount) / 100;
            $salePrice = $price - $discountAmount;

            $product['sale_price'] = round($salePrice, 2);
            $product['off_percentage'] = $discount;

            if (!empty($product['images'])) {
                $product['images'] = json_decode(
                    $product['images'],
                    true
                );
            } else {
                $product['images'] = [];
            }
        }

        $promotionData[] = [
            'id' => $promotion['id'],
            'title' => $promotion['title'],
            'slug' => $promotion['slug'],
            'description' => $promotion['description'],
            'discount_percentage' => $promotion['discount_percentage'],
            'start_date' => $promotion['start_date'],
            'end_date' => $promotion['end_date'],
            'products' => $products
        ];
    }

    return [
        'success' => true,
        'message' => 'Home page data retrieved successfully.',
        'data' => [
            'category' => $resultCategory,
            'promotions' => $promotionData
        ]
    ];
}


  }