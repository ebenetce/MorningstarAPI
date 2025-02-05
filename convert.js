import { convert } from '@scalar/postman-to-openapi';

async function convertPostmanToOpenAPI() {

  try {
    // Read the Postman collection file
    const postmanCollection = await fs.readFile('PostmantoCollection.json', 'utf-8');

    // Convert the Postman collection to OpenAPI
    const result = await convert(JSON.parse(postmanCollection));
    console.log(result)
    console.log('Conversion successful!');

  } catch (error) {

    console.error('Error converting Postman collection:', error);

  }
}

convertPostmanToOpenAPI();