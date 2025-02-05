import { convert } from '@scalar/postman-to-openapi';

async function convertPostmanToOpenAPI() {

  try {
    const result = await convert('Morningstar Direct Web Services.postman_collection.json');
    console.log(result)
    console.log('Conversion successful!');

  } catch (error) {

    console.error('Error converting Postman collection:', error);

  }
}

convertPostmanToOpenAPI();