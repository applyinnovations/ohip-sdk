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
/**
 * 
 * @export
 * @interface CopyRatePlansResponseTypeCopyResponseInner
 */
export interface CopyRatePlansResponseTypeCopyResponseInner {
    /**
     * Hotel Code from which rate plans are being copied.
     * @type {string}
     * @memberof CopyRatePlansResponseTypeCopyResponseInner
     */
    hotelId?: string;
    /**
     * Rate Code from which rate plans are being copied.
     * @type {string}
     * @memberof CopyRatePlansResponseTypeCopyResponseInner
     */
    rateCode?: string;
    /**
     * Hotel Code where the rate plans are being copied.
     * @type {string}
     * @memberof CopyRatePlansResponseTypeCopyResponseInner
     */
    targetHotelCode?: string;
    /**
     * Response text with this copy.
     * @type {string}
     * @memberof CopyRatePlansResponseTypeCopyResponseInner
     */
    text?: string;
}

/**
 * Check if a given object implements the CopyRatePlansResponseTypeCopyResponseInner interface.
 */
export function instanceOfCopyRatePlansResponseTypeCopyResponseInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyRatePlansResponseTypeCopyResponseInnerFromJSON(json: any): CopyRatePlansResponseTypeCopyResponseInner {
    return CopyRatePlansResponseTypeCopyResponseInnerFromJSONTyped(json, false);
}

export function CopyRatePlansResponseTypeCopyResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyRatePlansResponseTypeCopyResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'targetHotelCode': !exists(json, 'targetHotelCode') ? undefined : json['targetHotelCode'],
        'text': !exists(json, 'text') ? undefined : json['text'],
    };
}

export function CopyRatePlansResponseTypeCopyResponseInnerToJSON(value?: CopyRatePlansResponseTypeCopyResponseInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'rateCode': value.rateCode,
        'targetHotelCode': value.targetHotelCode,
        'text': value.text,
    };
}
