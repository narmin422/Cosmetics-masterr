let blogs = [
    {
        id: 11,
        title: 'The Ultimate Guide to Skincare Routine for Glowing Skin',
        author: 'Emma Watson',
        date: 'April 15, 2024',
        mainImg: 'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?cs=srgb&dl=pexels-jhong-pascua-1062908-3018845.jpg&fm=jpg',
        mainDesc: ['Achieving radiant and glowing skin is not just about genetics; it\'s also about having a consistent skincare routine. Follow these simple steps to unlock your skin\'s natural radiance and achieve a healthy, luminous complexion that glows from within.',
            'Start by cleansing your skin with a gentle yet effective cleanser to remove impurities, excess oil, and makeup. Choose a cleanser suited to your skin type, whether it\'s dry, oily, or combination, and cleanse morning and night to keep your skin fresh and clean.',
            'After cleansing, apply a hydrating toner to rebalance your skin\'s pH levels and prepare it for the next steps in your skincare routine. Look for toners infused with ingredients like hyaluronic acid, rose water, or witch hazel to hydrate, soothe, and refine your skin.',
            'Next, treat your skin with targeted serums or treatments to address specific concerns such as acne, dark spots, or fine lines. Incorporate ingredients like vitamin C, retinol, or niacinamide into your skincare routine to brighten, firm, and improve the overall appearance of your skin.',
            'Finish your skincare routine with a nourishing moisturizer to lock in hydration and protect your skin from environmental stressors. Choose a moisturizer with SPF for daytime use to shield your skin from the sun\'s harmful UV rays and prevent premature aging.',
            'View more skincare tips and tricks.'],
        tags: ['Skincare', 'Beauty', 'Glowing Skin'],
        companionTags: ['Radiant Skin', 'Healthy Skin', 'Beauty Tips']
    },
    {
        id: 12,
        title: '10 Must-Have Makeup Products Every Woman Should Own',
        author: 'Jennifer Lopez',
        date: 'July 8, 2024',
        mainImg: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWN8ZW58MHx8MHx8fDA%3D',
        mainDesc: ['Building a versatile makeup collection is essential for every woman who loves to experiment with different looks and styles. From everyday essentials to statement-making favorites, these 10 must-have makeup products will elevate your beauty game and empower you to express your unique personality through makeup.',
            '1. Foundation: Achieve a flawless complexion with the right foundation that matches your skin tone and type. Whether you prefer sheer, medium, or full coverage, there\'s a foundation formula for every skin concern and preference.',
            '2. Concealer: Banish dark circles, blemishes, and imperfections with a creamy concealer that provides coverage where you need it most. Opt for a lightweight formula that blends seamlessly into your skin for a natural-looking finish.',
            '3. Mascara: Open up your eyes and define your lashes with a volumizing mascara that adds length, volume, and curl to your lashes. Choose a waterproof formula for long-lasting wear that withstands sweat, tears, and humidity.',
            '4. Eyeshadow Palette: Create endless eye looks with a versatile eyeshadow palette that features a range of shades and finishes. From neutral mattes to shimmering metallics, the possibilities are endless with the right eyeshadow palette in your makeup arsenal.',
            'View more makeup essentials.'],
        tags: ['Makeup', 'Beauty', 'Essentials'],
        companionTags: ['Beauty Products', 'Makeup Tips', 'Cosmetics']
    },
    {
        id: 13,
        title: 'Haircare 101: Tips for Healthy and Luscious Locks',
        author: 'Beyoncé Knowles',
        date: 'September 22, 2024',
        mainImg: 'https://t4.ftcdn.net/jpg/02/73/55/33/360_F_273553300_sBBxIPpLSn5iC5vC8FwzFh6BJDKvUeaC.jpg',
        mainDesc: ['Achieving healthy, luscious locks is not just about using the right hair products; it\'s also about adopting a holistic approach to haircare that nourishes your hair from the inside out. Follow these expert tips to maintain your mane and keep your locks looking their best day in and day out.',
            'Start by identifying your hair type and understanding its unique needs and concerns. Whether you have straight, curly, or textured hair, there\'s a haircare routine that\'s tailored to your specific hair type and texture.',
            'Invest in high-quality haircare products that are formulated with nourishing ingredients and free from harsh chemicals and sulfates. Look for shampoos, conditioners, and styling products that address your hair concerns and promote healthy hair growth and vitality.',
            'Limit heat styling and embrace your hair\'s natural texture to prevent damage and breakage. Use heat protectant sprays and serums when using hot tools like blow dryers, flat irons, and curling wands to minimize heat damage and keep your hair looking healthy and shiny.',
            'View more haircare advice and inspiration.'],
        tags: ['Haircare', 'Beauty', 'Healthy Hair'],
        companionTags: ['Haircare Tips', 'Hair Products', 'Hair Health']
    },
    {
        id: 14,
        title: 'New Blog Title',
        author: 'Author Name',
        date: 'May 22, 2024',
        mainImg: 'https://images.pexels.com/photos/9656930/pexels-photo-9656930.jpeg?auto=compress&cs=tinysrgb&w=600',
        mainDesc: ['Achieving healthy, luscious locks is not just about using the right hair products; it\'s also about adopting a holistic approach to haircare that nourishes your hair from the inside out. Follow these expert tips to maintain your mane and keep your locks looking their best day in and day out.',
        'Start by identifying your hair type and understanding its unique needs and concerns. Whether you have straight, curly, or textured hair, there\'s a haircare routine that\'s tailored to your specific hair type and texture.',
        'Invest in high-quality haircare products that are formulated with nourishing ingredients and free from harsh chemicals and sulfates. Look for shampoos, conditioners, and styling products that address your hair concerns and promote healthy hair growth and vitality.',
        'Limit heat styling and embrace your hair\'s natural texture to prevent damage and breakage. Use heat protectant sprays and serums when using hot tools like blow dryers, flat irons, and curling wands to minimize heat damage and keep your hair looking healthy and shiny.',
        'View more haircare advice and inspiration.'],
        tags: ['Haircare Tips', 'Hair Products'],
        companionTags: ['CompanionTag1', 'CompanionTag2']
    }, 
       {
        id: 15,
        title: 'Nail Care Essentials: Tips for Healthy and Beautiful Nails',
        author: 'Ariana Grande',
        date: 'June 12, 2024',
        mainImg: 'https://images.pexels.com/photos/1540408/pexels-photo-1540408.jpeg?auto=compress&cs=tinysrgb&w=600',
        mainDesc: [
            'Beautiful nails are a sign of good health and hygiene. Follow these essential nail care tips to keep your nails looking their best.',
            'Start by keeping your nails clean and dry. This prevents bacteria and fungi from growing under your nails, which can lead to infections.',
            'Trim your nails regularly and file them to a shape that suits you. Avoid cutting them too short to prevent ingrown nails.',
            'Moisturize your nails and cuticles regularly. Use a good hand cream and cuticle oil to keep them hydrated.',
            'Avoid biting your nails or using them as tools. This can cause them to break and weaken over time.',
            'View more nail care tips and tricks.'
        ],
        tags: ['Nail Care', 'Beauty', 'Healthy Nails'],
        companionTags: ['Nail Tips', 'Nail Health', 'Nail Products']
    },
    {
        id: 16,
        title: 'Natural Beauty: Embracing Your Natural Hair Texture',
        author: 'Solange Knowles',
        date: 'August 5, 2024',
        mainImg: 'https://images.pexels.com/photos/1722868/pexels-photo-1722868.jpeg?auto=compress&cs=tinysrgb&w=600',
        mainDesc: [
            'Embracing your natural hair texture is a powerful way to express your identity and beauty. Here are some tips to help you love and care for your natural hair.',
            'Start by understanding your hair type. Knowing whether your hair is straight, wavy, curly, or coily will help you choose the right products and techniques.',
            'Moisturize regularly to keep your hair healthy and hydrated. Use leave-in conditioners, oils, and creams to lock in moisture.',
            'Avoid heat styling as much as possible. Embrace your natural texture and use protective styles to prevent damage.',
            'Be gentle with your hair. Use a wide-tooth comb or your fingers to detangle, and avoid harsh brushing.',
            'View more natural hair care tips and inspiration.'
        ],
        tags:['Nail Care', 'Beauty', 'Healthy Nails'],
        companionTags: ['Nail Tips', 'Nail Health', 'Nail Products']
    },
    {
        id: 17,
        title: 'Natural Beauty:  Hair Texture',
        author: 'Solange Adams',
        date: 'August 5, 2024',
        mainImg: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        mainDesc: [
            'Embracing your natural hair texture is a powerful way to express your identity and beauty. Here are some tips to help you love and care for your natural hair.',
            'Start by understanding your hair type. Knowing whether your hair is straight, wavy, curly, or coily will help you choose the right products and techniques.',
            'Moisturize regularly to keep your hair healthy and hydrated. Use leave-in conditioners, oils, and creams to lock in moisture.',
            'Avoid heat styling as much as possible. Embrace your natural texture and use protective styles to prevent damage.',
            'Be gentle with your hair. Use a wide-tooth comb or your fingers to detangle, and avoid harsh brushing.',
            'View more natural hair care tips and inspiration.'
        ],
        tags: ['Haircare Tips', 'Hair Products'],
        companionTags: ['Nail Tips', 'Nail Health', 'Nail Products']
    }
];

export default blogs;
