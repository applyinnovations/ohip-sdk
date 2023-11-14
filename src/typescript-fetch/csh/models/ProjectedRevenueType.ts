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
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';

/**
 * Information about projected catering and room revenue for the reservation.
 * @export
 * @interface ProjectedRevenueType
 */
export interface ProjectedRevenueType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ProjectedRevenueType
     */
    projectedCateringRevenue?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ProjectedRevenueType
     */
    projectedRoomRevenue?: CurrencyAmountType;
    /**
     * Number of room nights for the reservation.
     * @type {number}
     * @memberof ProjectedRevenueType
     */
    roomNights?: number;
}

/**
 * Check if a given object implements the ProjectedRevenueType interface.
 */
export function instanceOfProjectedRevenueType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProjectedRevenueTypeFromJSON(json: any): ProjectedRevenueType {
    return ProjectedRevenueTypeFromJSONTyped(json, false);
}

export function ProjectedRevenueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectedRevenueType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectedCateringRevenue': !exists(json, 'projectedCateringRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['projectedCateringRevenue']),
        'projectedRoomRevenue': !exists(json, 'projectedRoomRevenue') ? undefined : CurrencyAmountTypeFromJSON(json['projectedRoomRevenue']),
        'roomNights': !exists(json, 'roomNights') ? undefined : json['roomNights'],
    };
}

export function ProjectedRevenueTypeToJSON(value?: ProjectedRevenueType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'projectedCateringRevenue': CurrencyAmountTypeToJSON(value.projectedCateringRevenue),
        'projectedRoomRevenue': CurrencyAmountTypeToJSON(value.projectedRoomRevenue),
        'roomNights': value.roomNights,
    };
}
