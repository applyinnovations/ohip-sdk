/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { IdentificationInfoType } from './IdentificationInfoType';
import {
    IdentificationInfoTypeFromJSON,
    IdentificationInfoTypeFromJSONTyped,
    IdentificationInfoTypeToJSON,
} from './IdentificationInfoType';

/**
 * List of identification of the customer.
 * @export
 * @interface CustomerTypeIdentifications
 */
export interface CustomerTypeIdentifications {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof CustomerTypeIdentifications
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof CustomerTypeIdentifications
     */
    hasMore?: boolean;
    /**
     * Collection of detailed information on the identification of the customer.
     * @type {Array<IdentificationInfoType>}
     * @memberof CustomerTypeIdentifications
     */
    identificationInfo?: Array<IdentificationInfoType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof CustomerTypeIdentifications
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the CustomerTypeIdentifications interface.
 */
export function instanceOfCustomerTypeIdentifications(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerTypeIdentificationsFromJSON(json: any): CustomerTypeIdentifications {
    return CustomerTypeIdentificationsFromJSONTyped(json, false);
}

export function CustomerTypeIdentificationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerTypeIdentifications {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'identificationInfo': !exists(json, 'identificationInfo') ? undefined : ((json['identificationInfo'] as Array<any>).map(IdentificationInfoTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function CustomerTypeIdentificationsToJSON(value?: CustomerTypeIdentifications | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'identificationInfo': value.identificationInfo === undefined ? undefined : ((value.identificationInfo as Array<any>).map(IdentificationInfoTypeToJSON)),
        'totalResults': value.totalResults,
    };
}

