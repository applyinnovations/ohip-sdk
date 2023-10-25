/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CustomChargeGuestInfoType } from './CustomChargeGuestInfoType';
import {
    CustomChargeGuestInfoTypeFromJSON,
    CustomChargeGuestInfoTypeFromJSONTyped,
    CustomChargeGuestInfoTypeToJSON,
} from './CustomChargeGuestInfoType';

/**
 * Contains Custom Charge Exemption information for a day.
 * @export
 * @interface CustomChargeExemptionDateType
 */
export interface CustomChargeExemptionDateType {
    /**
     * Contains Custom Charge Exemption date.
     * @type {Date}
     * @memberof CustomChargeExemptionDateType
     */
    date?: Date;
    /**
     * List of guests.
     * @type {Array<CustomChargeGuestInfoType>}
     * @memberof CustomChargeExemptionDateType
     */
    guests?: Array<CustomChargeGuestInfoType>;
    /**
     * Contains number of Custom Charge Exemption for a day.
     * @type {number}
     * @memberof CustomChargeExemptionDateType
     */
    quantity?: number;
}

/**
 * Check if a given object implements the CustomChargeExemptionDateType interface.
 */
export function instanceOfCustomChargeExemptionDateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomChargeExemptionDateTypeFromJSON(json: any): CustomChargeExemptionDateType {
    return CustomChargeExemptionDateTypeFromJSONTyped(json, false);
}

export function CustomChargeExemptionDateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomChargeExemptionDateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'guests': !exists(json, 'guests') ? undefined : ((json['guests'] as Array<any>).map(CustomChargeGuestInfoTypeFromJSON)),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
    };
}

export function CustomChargeExemptionDateTypeToJSON(value?: CustomChargeExemptionDateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0,10)),
        'guests': value.guests === undefined ? undefined : ((value.guests as Array<any>).map(CustomChargeGuestInfoTypeToJSON)),
        'quantity': value.quantity,
    };
}

