/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
     * @type {Date}
     * @memberof ResPeriodicFolioType
     */
    lastFolioDate?: Date;
    /**
     * Latest date when a direct bill settlement was automatically done using the "Direct Bill Batch Folios" option.
     * @type {Date}
     * @memberof ResPeriodicFolioType
     */
    lastSettlementDate?: Date;
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
        'lastFolioDate': !exists(json, 'lastFolioDate') ? undefined : (new Date(json['lastFolioDate'])),
        'lastSettlementDate': !exists(json, 'lastSettlementDate') ? undefined : (new Date(json['lastSettlementDate'])),
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
        'lastFolioDate': value.lastFolioDate === undefined ? undefined : (value.lastFolioDate.toISOString().substr(0,10)),
        'lastSettlementDate': value.lastSettlementDate === undefined ? undefined : (value.lastSettlementDate.toISOString().substr(0,10)),
    };
}

