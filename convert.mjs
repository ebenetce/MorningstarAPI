import { promises as fs } from 'fs';
import { convert } from '@scalar/postman-to-openapi';

async function convertPostmanToOpenAPI() {

  try {
    const postmanCollection = await fs.readFile('Morningstar Direct Web Services.postman_collection.json', 'utf-8');
    const result = await convert(postmanCollection);
    await fs.writeFile('result.yml', result, 'utf-8');
    console.log(result)
    console.log('Conversion successful!');

  } catch (error) {

    console.error('Error converting Postman collection:', error);

  }
}

convertPostmanToOpenAPI();