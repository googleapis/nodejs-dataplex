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

function main(parent) {
  // [START dataplex_v1_generated_DataplexService_ListSessions_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the parent environment:
   *  projects/{project_number}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}
   */
  // const parent = 'abc123'
  /**
   *  Optional. Maximum number of sessions to return. The service may return fewer than
   *  this value. If unspecified, at most 10 sessions will be returned. The
   *  maximum value is 1000; values above 1000 will be coerced to 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. Page token received from a previous `ListSessions` call. Provide this to
   *  retrieve the subsequent page. When paginating, all other parameters
   *  provided to `ListSessions` must match the call that provided the page
   *  token.
   */
  // const pageToken = 'abc123'

  // Imports the Dataplex library
  const {DataplexServiceClient} = require('@google-cloud/dataplex').v1;

  // Instantiates a client
  const dataplexClient = new DataplexServiceClient();

  async function callListSessions() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dataplexClient.listSessionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListSessions();
  // [END dataplex_v1_generated_DataplexService_ListSessions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
