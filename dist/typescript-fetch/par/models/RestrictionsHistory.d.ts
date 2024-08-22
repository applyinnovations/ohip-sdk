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
import type { FetchRestrictionsHistoryRSType } from './FetchRestrictionsHistoryRSType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for searching restrictions history.
 * @export
 * @interface RestrictionsHistory
 */
export interface RestrictionsHistory {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RestrictionsHistory
     */
    links?: Array<InstanceLink>;
    /**
     *
     * @type {FetchRestrictionsHistoryRSType}
     * @memberof RestrictionsHistory
     */
    restrictionsHistory?: FetchRestrictionsHistoryRSType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RestrictionsHistory
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RestrictionsHistory interface.
 */
export declare function instanceOfRestrictionsHistory(value: object): boolean;
export declare function RestrictionsHistoryFromJSON(json: any): RestrictionsHistory;
export declare function RestrictionsHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestrictionsHistory;
export declare function RestrictionsHistoryToJSON(value?: RestrictionsHistory | null): any;
