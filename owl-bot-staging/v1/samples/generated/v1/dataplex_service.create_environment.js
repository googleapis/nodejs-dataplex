// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(parent, environmentId, environment) {
  // [START dataplex_v1_generated_DataplexService_CreateEnvironment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the parent lake:
   *  projects/{project_id}/locations/{location_id}/lakes/{lake_id}
   */
  // const parent = 'abc123'
  /**
   *  Required. Environment identifier.
   *  * Must contain only lowercase letters, numbers and hyphens.
   *  * Must start with a letter.
   *  * Must be between 1-63 characters.
   *  * Must end with a number or a letter.
   *  * Must be unique within the lake.
   */
  // const environmentId = 'abc123'
  /**
   *  Required. Environment resource.
   */
  // const environment = {}
  /**
   *  Optional. Only validate the request, but do not perform mutations.
   *  The default is false.
   */
  // const validateOnly = true

  // Imports the Dataplex library
  const {DataplexServiceClient} = require('@google-cloud/dataplex').v1;

  // Instantiates a client
  const dataplexClient = new DataplexServiceClient();

  async function callCreateEnvironment() {
    // Construct request
    const request = {
      parent,
      environmentId,
      environment,
    };

    // Run request
    const [operation] = await dataplexClient.createEnvironment(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateEnvironment();
  // [END dataplex_v1_generated_DataplexService_CreateEnvironment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
