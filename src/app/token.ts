/**
 * Needs to be in a seperate file, so we do not create a cycle dependency.
 */

import { InjectionToken } from "@angular/core";

export const API_ENDPOINT = new InjectionToken<string>('API_ENDPOINT');