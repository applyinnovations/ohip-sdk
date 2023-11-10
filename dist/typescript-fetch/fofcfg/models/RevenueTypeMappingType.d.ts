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
import type { CateringOnlyType } from './CateringOnlyType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Type used for Revenue Type mapping.
 * @export
 * @interface RevenueTypeMappingType
 */
export interface RevenueTypeMappingType {
    /**
     *
     * @type {CateringOnlyType}
     * @memberof RevenueTypeMappingType
     */
    cateringOnly?: CateringOnlyType;
    /**
     * Provides information about the Event Type.
     * @type {string}
     * @memberof RevenueTypeMappingType
     */
    eventType?: string;
    /**
     * Hotel Code to which the Revenue Type Mapping belongs to.
     * @type {string}
     * @memberof RevenueTypeMappingType
     */
    hotelId?: string;
    /**
     * Provides information about the Revenue Type.
     * @type {string}
     * @memberof RevenueTypeMappingType
     */
    revenueType?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof RevenueTypeMappingType
     */
    revenueTypeMappingId?: UniqueIDType;
    /**
     * Service Charge for the Revenue Type.
     * @type {number}
     * @memberof RevenueTypeMappingType
     */
    serviceCharge?: number;
    /**
     * Service Charge for the Revenue Type.
     * @type {string}
     * @memberof RevenueTypeMappingType
     */
    serviceChargeCalulationMethod?: string;
    /**
     * Service Charge for the Revenue Type.
     * @type {string}
     * @memberof RevenueTypeMappingType
     */
    serviceChargeTrxCode?: string;
    /**
     * Provides information about the Space/Location for the Revenue Type.
     * @type {string}
     * @memberof RevenueTypeMappingType
     */
    space?: string;
    /**
     * Transaction code for the Revenue Type.
     * @type {string}
     * @memberof RevenueTypeMappingType
     */
    transactionCode?: string;
}
/**
 * Check if a given object implements the RevenueTypeMappingType interface.
 */
export declare function instanceOfRevenueTypeMappingType(value: object): boolean;
export declare function RevenueTypeMappingTypeFromJSON(json: any): RevenueTypeMappingType;
export declare function RevenueTypeMappingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueTypeMappingType;
export declare function RevenueTypeMappingTypeToJSON(value?: RevenueTypeMappingType | null): any;
