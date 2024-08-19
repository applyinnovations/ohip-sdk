/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { NegotiatedType } from './NegotiatedType';
import {
    NegotiatedTypeFromJSON,
    NegotiatedTypeFromJSONTyped,
    NegotiatedTypeToJSON,
} from './NegotiatedType';

/**
 * List of profile negotiated rates.
 * @export
 * @interface CompanyProfileTypeNegotiatedRates
 */
export interface CompanyProfileTypeNegotiatedRates {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof CompanyProfileTypeNegotiatedRates
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof CompanyProfileTypeNegotiatedRates
     */
    hasMore?: boolean;
    /**
     * Collection of Detailed information on profile negotiated rates.
     * @type {Array<NegotiatedType>}
     * @memberof CompanyProfileTypeNegotiatedRates
     */
    negotiatedRate?: Array<NegotiatedType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof CompanyProfileTypeNegotiatedRates
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the CompanyProfileTypeNegotiatedRates interface.
 */
export function instanceOfCompanyProfileTypeNegotiatedRates(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompanyProfileTypeNegotiatedRatesFromJSON(json: any): CompanyProfileTypeNegotiatedRates {
    return CompanyProfileTypeNegotiatedRatesFromJSONTyped(json, false);
}

export function CompanyProfileTypeNegotiatedRatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyProfileTypeNegotiatedRates {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'negotiatedRate': !exists(json, 'negotiatedRate') ? undefined : ((json['negotiatedRate'] as Array<any>).map(NegotiatedTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function CompanyProfileTypeNegotiatedRatesToJSON(value?: CompanyProfileTypeNegotiatedRates | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'negotiatedRate': value.negotiatedRate === undefined ? undefined : ((value.negotiatedRate as Array<any>).map(NegotiatedTypeToJSON)),
        'totalResults': value.totalResults,
    };
}

