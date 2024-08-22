/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { NegotiatedProfileType } from './NegotiatedProfileType';
import {
    NegotiatedProfileTypeFromJSON,
    NegotiatedProfileTypeFromJSONTyped,
    NegotiatedProfileTypeToJSON,
} from './NegotiatedProfileType';

/**
 * Negotiated rate details
 * @export
 * @interface NegotiatedRateType
 */
export interface NegotiatedRateType {
    /**
     * Hotel Code.
     * @type {string}
     * @memberof NegotiatedRateType
     */
    hotelId?: string;
    /**
     * Collection of Negotiated profiles.
     * @type {Array<NegotiatedProfileType>}
     * @memberof NegotiatedRateType
     */
    negotiatedProfile?: Array<NegotiatedProfileType>;
    /**
     * Rate plan code.
     * @type {string}
     * @memberof NegotiatedRateType
     */
    ratePlanCode?: string;
}

/**
 * Check if a given object implements the NegotiatedRateType interface.
 */
export function instanceOfNegotiatedRateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NegotiatedRateTypeFromJSON(json: any): NegotiatedRateType {
    return NegotiatedRateTypeFromJSONTyped(json, false);
}

export function NegotiatedRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NegotiatedRateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'negotiatedProfile': !exists(json, 'negotiatedProfile') ? undefined : ((json['negotiatedProfile'] as Array<any>).map(NegotiatedProfileTypeFromJSON)),
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
    };
}

export function NegotiatedRateTypeToJSON(value?: NegotiatedRateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'negotiatedProfile': value.negotiatedProfile === undefined ? undefined : ((value.negotiatedProfile as Array<any>).map(NegotiatedProfileTypeToJSON)),
        'ratePlanCode': value.ratePlanCode,
    };
}

