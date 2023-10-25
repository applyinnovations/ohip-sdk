/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChannelErrorsErrors } from './ChannelErrorsErrors';
import {
    ChannelErrorsErrorsFromJSON,
    ChannelErrorsErrorsFromJSONTyped,
    ChannelErrorsErrorsToJSON,
} from './ChannelErrorsErrors';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for creating channel errors.
 * @export
 * @interface ChannelErrors
 */
export interface ChannelErrors {
    /**
     * 
     * @type {ChannelErrorsErrors}
     * @memberof ChannelErrors
     */
    errors?: ChannelErrorsErrors;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelErrors
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChannelErrors interface.
 */
export function instanceOfChannelErrors(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelErrorsFromJSON(json: any): ChannelErrors {
    return ChannelErrorsFromJSONTyped(json, false);
}

export function ChannelErrorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelErrors {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': !exists(json, 'errors') ? undefined : ChannelErrorsErrorsFromJSON(json['errors']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChannelErrorsToJSON(value?: ChannelErrors | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': ChannelErrorsErrorsToJSON(value.errors),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

