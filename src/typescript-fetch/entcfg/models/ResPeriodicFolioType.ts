/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Information regarding periodic folios set on the reservation.
 * @export
 * @interface ResPeriodicFolioType
 */
export interface ResPeriodicFolioType {
    /**
     * Latest date when a direct bill settlement was automatically done using the "Direct Bill Batch Folios" option.
     * @type {string}
     * @memberof ResPeriodicFolioType
     */
    lastSettlementDate?: string;
    /**
     * Latest date when a folio was printed using the "Periodic Batch Folios" option
     * @type {string}
     * @memberof ResPeriodicFolioType
     */
    lastFolioDate?: string;
    /**
     * Frequency in number of days when folios should be printed for this reservation.
     * @type {number}
     * @memberof ResPeriodicFolioType
     */
    frequency?: number;
}

/**
 * Check if a given object implements the ResPeriodicFolioType interface.
 */
export function instanceOfResPeriodicFolioType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResPeriodicFolioTypeFromJSON(json: any): ResPeriodicFolioType {
    return ResPeriodicFolioTypeFromJSONTyped(json, false);
}

export function ResPeriodicFolioTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResPeriodicFolioType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastSettlementDate': !exists(json, 'lastSettlementDate') ? undefined : json['lastSettlementDate'],
        'lastFolioDate': !exists(json, 'lastFolioDate') ? undefined : json['lastFolioDate'],
        'frequency': !exists(json, 'frequency') ? undefined : json['frequency'],
    };
}

export function ResPeriodicFolioTypeToJSON(value?: ResPeriodicFolioType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastSettlementDate': value.lastSettlementDate,
        'lastFolioDate': value.lastFolioDate,
        'frequency': value.frequency,
    };
}

