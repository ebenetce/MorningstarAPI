// convert.mjs
import { promises as fs } from 'fs';
import { convert } from '@scalar/postman-to-openapi';
import yaml from 'js-yaml';

async function convertPostmanToOpenAPI() {

  try {
    // Read the Postman collection file
    const postmanCollection = await fs.readFile('Morningstar Direct Web Services.postman_collection.json', 'utf-8');

    // Convert the Postman collection to OpenAPI
    const result = await convert(JSON.parse(postmanCollection));
    console.log('Conversion successful!');

    // Convert the OpenAPI object to a YAML string
    const yamlString = yaml.dump(result);

    // Output the result to a file
    await fs.writeFile('morningstar.yml', yamlString, 'utf-8');    

  } catch (error) {

    console.error('Error converting Postman collection:', error);

  }
}

convertPostmanToOpenAPI();