'use babel';
/* flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

class FlowService {

  findDefinition(
    file: NuclideUri,
    currentContents: string,
    line: number,
    column: number
  ): Promise<?{file:NuclideUri; line:number; column:number}> {
    return Promise.reject('Not implemented');
  }

  findDiagnostics(
    file: NuclideUri
  ): Promise<
      Array<{
        message: Array<{
          path: NuclideUri; descr: string; code: number; line: number; endline: number; start: number; end: number;
        }>
      }>>
  {
    return Promise.reject('Not implemented');
  }

  getAutocompleteSuggestions(
    file: NuclideUri,
    currentContents: string,
    line: number,
    column: number,
    prefix: string
  ): Promise<mixed> {
    return Promise.reject('Not implemented');
  }
}

module.exports = FlowService;
