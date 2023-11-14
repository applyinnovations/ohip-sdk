/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Provides information about Exemptions.
 * @export
 * @interface CustomChargeExemptionConfigType
 */
export interface CustomChargeExemptionConfigType {
    /**
     * Exemption Desciption
     * @type {string}
     * @memberof CustomChargeExemptionConfigType
     */
    description?: string;
    /**
     * Date till the Exemption will be effective.
     * @type {Date}
     * @memberof CustomChargeExemptionConfigType
     */
    endDate?: Date;
    /**
     * Exemption
     * @type {string}
     * @memberof CustomChargeExemptionConfigType
     */
    exemption?: string;
    /**
     * Code of the Hotel.
     * @type {string}
     * @memberof CustomChargeExemptionConfigType
     */
    hotelId?: string;
    /**
     * Date when this Exemption is Inactive
     * @type {Date}
     * @memberof CustomChargeExemptionConfigType
     */
    inactiveDate?: Date;
    /**
     * Indicator that tells whether to include inactive Custom Charge Ememptions.
     * @type {boolean}
     * @memberof CustomChargeExemptionConfigType
     */
    includeInactive?: boolean;
    /**
     * Exemption Percentage
     * @type {number}
     * @memberof CustomChargeExemptionConfigType
     */
    percentage?: number;
    /**
     * Flag specifying if custom charge exemptions is property level or not.
     * @type {boolean}
     * @memberof CustomChargeExemptionConfigType
     */
    propertyExemption?: boolean;
    /**
     * Date when this Exemption will be effective
     * @type {Date}
     * @memberof CustomChargeExemptionConfigType
     */
    startDate?: Date;
}

/**
 * Check if a given object implements the CustomChargeExemptionConfigType interface.
 */
export function instanceOfCustomChargeExemptionConfigType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomChargeExemptionConfigTypeFromJSON(json: any): CustomChargeExemptionConfigType {
    return CustomChargeExemptionConfigTypeFromJSONTyped(json, false);
}

export function CustomChargeExemptionConfigTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomChargeExemptionConfigType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'exemption': !exists(json, 'exemption') ? undefined : json['exemption'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'inactiveDate': !exists(json, 'inactiveDate') ? undefined : (new Date(json['inactiveDate'])),
        'includeInactive': !exists(json, 'includeInactive') ? undefined : json['includeInactive'],
        'percentage': !exists(json, 'percentage') ? undefined : json['percentage'],
        'propertyExemption': !exists(json, 'propertyExemption') ? undefined : json['propertyExemption'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}

export function CustomChargeExemptionConfigTypeToJSON(value?: CustomChargeExemptionConfigType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substring(0,10)),
        'exemption': value.exemption,
        'hotelId': value.hotelId,
        'inactiveDate': value.inactiveDate === undefined ? undefined : (value.inactiveDate.toISOString().substring(0,10)),
        'includeInactive': value.includeInactive,
        'percentage': value.percentage,
        'propertyExemption': value.propertyExemption,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substring(0,10)),
    };
}
