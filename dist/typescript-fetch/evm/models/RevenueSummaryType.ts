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
 * Summary information pertaining to revenue like Room, Food and Beverage, Catering, Other, Catering Other and Total Revenue.
 * @export
 * @interface RevenueSummaryType
 */
export interface RevenueSummaryType {
    /**
     * 
     * @type {number}
     * @memberof RevenueSummaryType
     */
    cateringOtherRevenue?: number;
    /**
     * 
     * @type {number}
     * @memberof RevenueSummaryType
     */
    cateringRevenue?: number;
    /**
     * 
     * @type {number}
     * @memberof RevenueSummaryType
     */
    foodAndBeverageRevenue?: number;
    /**
     * 
     * @type {number}
     * @memberof RevenueSummaryType
     */
    nonRevenue?: number;
    /**
     * 
     * @type {number}
     * @memberof RevenueSummaryType
     */
    otherRevenue?: number;
    /**
     * 
     * @type {number}
     * @memberof RevenueSummaryType
     */
    roomRevenue?: number;
    /**
     * 
     * @type {number}
     * @memberof RevenueSummaryType
     */
    totalRevenue?: number;
}

/**
 * Check if a given object implements the RevenueSummaryType interface.
 */
export function instanceOfRevenueSummaryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RevenueSummaryTypeFromJSON(json: any): RevenueSummaryType {
    return RevenueSummaryTypeFromJSONTyped(json, false);
}

export function RevenueSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueSummaryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cateringOtherRevenue': !exists(json, 'cateringOtherRevenue') ? undefined : json['cateringOtherRevenue'],
        'cateringRevenue': !exists(json, 'cateringRevenue') ? undefined : json['cateringRevenue'],
        'foodAndBeverageRevenue': !exists(json, 'foodAndBeverageRevenue') ? undefined : json['foodAndBeverageRevenue'],
        'nonRevenue': !exists(json, 'nonRevenue') ? undefined : json['nonRevenue'],
        'otherRevenue': !exists(json, 'otherRevenue') ? undefined : json['otherRevenue'],
        'roomRevenue': !exists(json, 'roomRevenue') ? undefined : json['roomRevenue'],
        'totalRevenue': !exists(json, 'totalRevenue') ? undefined : json['totalRevenue'],
    };
}

export function RevenueSummaryTypeToJSON(value?: RevenueSummaryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cateringOtherRevenue': value.cateringOtherRevenue,
        'cateringRevenue': value.cateringRevenue,
        'foodAndBeverageRevenue': value.foodAndBeverageRevenue,
        'nonRevenue': value.nonRevenue,
        'otherRevenue': value.otherRevenue,
        'roomRevenue': value.roomRevenue,
        'totalRevenue': value.totalRevenue,
    };
}

