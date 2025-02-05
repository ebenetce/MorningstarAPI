import { promises as fs } from 'fs';
import { convert } from '@scalar/postman-to-openapi';

async function convertPostmanToOpenAPI() {
  try {
    // Read the Postman collection file
    const postmanCollection = await fs.readFile('PostmantoCollection.json', 'utf-8');

    // Convert the Postman collection to OpenAPI
    const result = await convert(JSON.parse(postmanCollection));

    // Output the result to a file
    await fs.writeFile('result.yml', result, 'utf-8');

    console.log('Conversion successful!');
  } catch (error) {
    console.error('Error converting Postman collection:', error);
  }
}

convertPostmanToOpenAPI();