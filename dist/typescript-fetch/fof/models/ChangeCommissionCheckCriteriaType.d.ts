/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { UniqueIDType } from './UniqueIDType';
/**
 * Base type for payment activity information
 * @export
 * @interface ChangeCommissionCheckCriteriaType
 */
export interface ChangeCommissionCheckCriteriaType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof ChangeCommissionCheckCriteriaType
     */
    bankAccountId?: UniqueIDType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ChangeCommissionCheckCriteriaType
     */
    batchId?: UniqueIDType;
    /**
     * New check no of commission check.
     * @type {number}
     * @memberof ChangeCommissionCheckCriteriaType
     */
    checkNo?: number;
    /**
     * Property of the commission record.
     * @type {string}
     * @memberof ChangeCommissionCheckCriteriaType
     */
    hotelId?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ChangeCommissionCheckCriteriaType
     */
    paymentId?: UniqueIDType;
}
/**
 * Check if a given object implements the ChangeCommissionCheckCriteriaType interface.
 */
export declare function instanceOfChangeCommissionCheckCriteriaType(value: object): boolean;
export declare function ChangeCommissionCheckCriteriaTypeFromJSON(json: any): ChangeCommissionCheckCriteriaType;
export declare function ChangeCommissionCheckCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeCommissionCheckCriteriaType;
export declare function ChangeCommissionCheckCriteriaTypeToJSON(value?: ChangeCommissionCheckCriteriaType | null): any;