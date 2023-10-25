/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ErrorType } from './ErrorType';
import {
    ErrorTypeFromJSON,
    ErrorTypeFromJSONTyped,
    ErrorTypeToJSON,
} from './ErrorType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Collection of error and warning if any.
 * @export
 * @interface UpdateRoomKeys
 */
export interface UpdateRoomKeys {
    /**
     * An error that occurred during the processing of a message.
     * @type {Array<ErrorType>}
     * @memberof UpdateRoomKeys
     */
    errors?: Array<ErrorType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof UpdateRoomKeys
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the UpdateRoomKeys interface.
 */
export function instanceOfUpdateRoomKeys(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateRoomKeysFromJSON(json: any): UpdateRoomKeys {
    return UpdateRoomKeysFromJSONTyped(json, false);
}

export function UpdateRoomKeysFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRoomKeys {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ErrorTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function UpdateRoomKeysToJSON(value?: UpdateRoomKeys | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ErrorTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

