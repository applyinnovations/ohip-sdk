/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Event order distribution information.
 * @export
 * @interface EventOrderType
 */
export interface EventOrderType {
    /**
     * Indicates if the Banquet Event Orders have been distributed.
     * @type {boolean}
     * @memberof EventOrderType
     */
    distributed?: boolean;
    /**
     * This indicates which exchange rate date will be used for blocks when printing Banquet Event Orders. When the Distributed attribute is true this contains the date stamp of when the Distributed attribute was updated. When Distributed attribute is false, this is left blank. This date can also be taken into consideration as the 'Exchange Rate Date' when, for instance, converting catering revenue to base currency.
     * @type {string}
     * @memberof EventOrderType
     */
    distributedDate?: string;
    /**
     * This indicates which exchange rate date will be used for blocks when printing Banquet Event Orders. When the Distributed attribute is true this contains the date/time stamp of when the Distributed attribute was updated. When Distributed attribute is false, this is left blank. This date can also be taken into consideration as the 'Exchange Rate Date' when, for instance, converting catering revenue to base currency.
     * @type {string}
     * @memberof EventOrderType
     */
    distributedDateTime?: string;
}

/**
 * Check if a given object implements the EventOrderType interface.
 */
export function instanceOfEventOrderType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventOrderTypeFromJSON(json: any): EventOrderType {
    return EventOrderTypeFromJSONTyped(json, false);
}

export function EventOrderTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventOrderType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'distributed': !exists(json, 'distributed') ? undefined : json['distributed'],
        'distributedDate': !exists(json, 'distributedDate') ? undefined : json['distributedDate'],
        'distributedDateTime': !exists(json, 'distributedDateTime') ? undefined : json['distributedDateTime'],
    };
}

export function EventOrderTypeToJSON(value?: EventOrderType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'distributed': value.distributed,
        'distributedDate': value.distributedDate,
        'distributedDateTime': value.distributedDateTime,
    };
}

