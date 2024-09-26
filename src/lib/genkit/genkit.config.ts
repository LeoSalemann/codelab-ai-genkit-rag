/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { configureGenkit } from '@genkit-ai/core';
import { dotprompt } from '@genkit-ai/dotprompt';
import { firebase } from '@genkit-ai/firebase';
import { vertexAI } from '@genkit-ai/vertexai';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJoWaz5KI3sE3bHkyF2G1w6PEr25kUAxg",
  authDomain: "compass-codelab-2318b.firebaseapp.com",
  projectId: "compass-codelab-2318b",
  storageBucket: "compass-codelab-2318b.appspot.com",
  messagingSenderId: "1057432594892",
  appId: "1:1057432594892:web:3e40f5c188619b441c1569"
};

export const getProjectId = () => {
  return firebaseConfig.projectId;
};

export const config = configureGenkit({
  plugins: [
    firebase({
      projectId: getProjectId(),
      traceStore: { collection: 'traceStore' },
      flowStateStore: { collection: 'flowTraceStore' },
    }),
    vertexAI({
      projectId: getProjectId(),
      location: 'us-central1',
    }),
    dotprompt(),
  ],
  flowStateStore: 'firebase',
  traceStore: 'firebase',
  enableTracingAndMetrics: true,
  logLevel: 'debug',
  // promptDir: join(process.cwd(), 'public', 'prompts'), -- not working
});