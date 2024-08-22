/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Information regarding periodic folios set on the reservation.
 * @export
 * @interface ResPeriodicFolioType
 */
export interface ResPeriodicFolioType {
    /**
     * Frequency in number of days when folios should be printed for this reservation.
     * @type {number}
     * @memberof ResPeriodicFolioType
     */
    frequency?: number;
    /**
     * Latest date when a folio was printed using the "Periodic Batch Folios" option
     * @type {string}
     * @memberof ResPeriodicFolioType
     */
    lastFolioDate?: string;
    /**
     * Latest date when a direct bill settlement was automatically done using the "Direct Bill Batch Folios" option.
     * @type {string}
     * @memberof ResPeriodicFolioType
     */
    lastSettlementDate?: string;
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
        
        'frequency': !exists(json, 'frequency') ? undefined : json['frequency'],
        'lastFolioDate': !exists(json, 'lastFolioDate') ? undefined : json['lastFolioDate'],
        'lastSettlementDate': !exists(json, 'lastSettlementDate') ? undefined : json['lastSettlementDate'],
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
        
        'frequency': value.frequency,
        'lastFolioDate': value.lastFolioDate,
        'lastSettlementDate': value.lastSettlementDate,
    };
}

