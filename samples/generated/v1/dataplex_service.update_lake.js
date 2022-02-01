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

function main(updateMask, lake) {
  // [START dataplex_v1_generated_DataplexService_UpdateLake_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Mask of fields to update.
   */
  // const updateMask = {}
  /**
   *  Required. Update description.
   *  Only fields specified in `update_mask` are updated.
   */
  // const lake = {}
  /**
   *  Optional. Only validate the request, but do not perform mutations.
   *  The default is false.
   */
  // const validateOnly = true

  // Imports the Dataplex library
  const {DataplexServiceClient} = require('@google-cloud/dataplex').v1;

  // Instantiates a client
  const dataplexClient = new DataplexServiceClient();

  async function callUpdateLake() {
    // Construct request
    const request = {
      updateMask,
      lake,
    };

    // Run request
    const [operation] = await dataplexClient.updateLake(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateLake();
  // [END dataplex_v1_generated_DataplexService_UpdateLake_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
