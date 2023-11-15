/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RestrictionControlType } from './RestrictionControlType';
import type { RestrictionStatusType } from './RestrictionStatusType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * Indicates Restriction set applicable for the date range.
 * @export
 * @interface RestrictionSetType
 */
export interface RestrictionSetType {
    /**
     * Indicates the action performed on restriction
     * @type {string}
     * @memberof RestrictionSetType
     */
    actionType?: string;
    /**
     *
     * @type {TimeSpanType}
     * @memberof RestrictionSetType
     */
    actualTimeSpan?: TimeSpanType;
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof RestrictionSetType
     */
    end?: string;
    /**
     *
     * @type {boolean}
     * @memberof RestrictionSetType
     */
    friday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RestrictionSetType
     */
    monday?: boolean;
    /**
     * Indicates whether the Closed restriction is flagged as On Request.
     * @type {boolean}
     * @memberof RestrictionSetType
     */
    onRequest?: boolean;
    /**
     *
     * @type {RestrictionControlType}
     * @memberof RestrictionSetType
     */
    restrictionControl?: RestrictionControlType;
    /**
     *
     * @type {RestrictionStatusType}
     * @memberof RestrictionSetType
     */
    restrictionStatus?: RestrictionStatusType;
    /**
     *
     * @type {boolean}
     * @memberof RestrictionSetType
     */
    saturday?: boolean;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof RestrictionSetType
     */
    start?: string;
    /**
     *
     * @type {boolean}
     * @memberof RestrictionSetType
     */
    sunday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RestrictionSetType
     */
    thursday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RestrictionSetType
     */
    tuesday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof RestrictionSetType
     */
    wednesday?: boolean;
}
/**
 * Check if a given object implements the RestrictionSetType interface.
 */
export declare function instanceOfRestrictionSetType(value: object): boolean;
export declare function RestrictionSetTypeFromJSON(json: any): RestrictionSetType;
export declare function RestrictionSetTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestrictionSetType;
export declare function RestrictionSetTypeToJSON(value?: RestrictionSetType | null): any;
