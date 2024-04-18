/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface MarketCodeInfoType
 */
export interface MarketCodeInfoType {
    /**
     * 
     * @type {string}
     * @memberof MarketCodeInfoType
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof MarketCodeInfoType
     */
    hotelId?: string;
    /**
     * 
     * @type {string}
     * @memberof MarketCodeInfoType
     */
    marketCode?: string;
    /**
     * 
     * @type {string}
     * @memberof MarketCodeInfoType
     */
    marketGroup?: string;
}

/**
 * Check if a given object implements the MarketCodeInfoType interface.
 */
export function instanceOfMarketCodeInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MarketCodeInfoTypeFromJSON(json: any): MarketCodeInfoType {
    return MarketCodeInfoTypeFromJSONTyped(json, false);
}

export function MarketCodeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketCodeInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'marketCode': !exists(json, 'marketCode') ? undefined : json['marketCode'],
        'marketGroup': !exists(json, 'marketGroup') ? undefined : json['marketGroup'],
    };
}

export function MarketCodeInfoTypeToJSON(value?: MarketCodeInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'hotelId': value.hotelId,
        'marketCode': value.marketCode,
        'marketGroup': value.marketGroup,
    };
}
