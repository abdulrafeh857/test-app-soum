const getProductCategories = () => {
  // just a mock function to simulate API call
  const categories = {
    status: 200,
    data: [
      {
        category: 'Mobile Phones',
        description: '125 models available in stock',
        brands: [
          {
            brand: 'Apple',
            description: '50 models available in stock',
            models: [
              {
                model: 'iPhone 8',
                variants: ['64GB', '128GB', '256GB']
              },
              {
                model: 'iPhone X',
                variants: ['64GB', '256GB']
              }
            ]
          },
          {
            brand: 'Samsung',
            description: '75 models available in stock',
            models: [
              {
                model: 'Galaxy S9',
                variants: ['64GB', '128GB']
              }
            ]
          }
        ]
      },
      {
        category: 'Watches',
        description: '50 models available in stock',
        brands: [
          {
            brand: 'Apple',
            description: '50 models available in stock',
            models: [
              {
                model: 'Apple Watch Series 4',
                variants: ['40mm', '44mm']
              }
            ]
          }
        ]
      },
      {
        category: 'Laptops',
        description: '75 models available in stock',
        brands: [
          {
            brand: 'Apple',
            description: '50 models available in stock',
            models: [
              {
                model: 'MacBook Pro',
                variants: ['13-inch', '15-inch']
              },
              {
                model: 'MacBook Air',
                variants: ['8GB RAM', '16GB RAM']
              }
            ]
          },
          {
            brand: 'Dell',
            description: '25 models available in stock',
            models: [
              {
                model: 'XPS 13',
                variants: ['8GB RAM', '16GB RAM']
              },
              {
                model: 'XPS 15',
                variants: ['8GB RAM', '16GB RAM']
              }
            ]
          }
        ]
      }
    ]
  };

  return categories;
};

export default getProductCategories;
