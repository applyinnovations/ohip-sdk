/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SystemErrorType } from './SystemErrorType';
import {
    SystemErrorTypeFromJSON,
    SystemErrorTypeFromJSONTyped,
    SystemErrorTypeToJSON,
} from './SystemErrorType';

/**
 * channel errors to be created.
 * @export
 * @interface ChannelErrorsErrors
 */
export interface ChannelErrorsErrors {
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof ChannelErrorsErrors
     */
    bookingChannelCode?: string;
    /**
     * Channel error details.
     * @type {Array<SystemErrorType>}
     * @memberof ChannelErrorsErrors
     */
    error?: Array<SystemErrorType>;
}

/**
 * Check if a given object implements the ChannelErrorsErrors interface.
 */
export function instanceOfChannelErrorsErrors(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelErrorsErrorsFromJSON(json: any): ChannelErrorsErrors {
    return ChannelErrorsErrorsFromJSONTyped(json, false);
}

export function ChannelErrorsErrorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelErrorsErrors {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingChannelCode': !exists(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'error': !exists(json, 'error') ? undefined : ((json['error'] as Array<any>).map(SystemErrorTypeFromJSON)),
    };
}

export function ChannelErrorsErrorsToJSON(value?: ChannelErrorsErrors | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingChannelCode': value.bookingChannelCode,
        'error': value.error === undefined ? undefined : ((value.error as Array<any>).map(SystemErrorTypeToJSON)),
    };
}

