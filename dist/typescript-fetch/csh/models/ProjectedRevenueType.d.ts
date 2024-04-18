/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
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
export declare function instanceOfProjectedRevenueType(value: object): boolean;
export declare function ProjectedRevenueTypeFromJSON(json: any): ProjectedRevenueType;
export declare function ProjectedRevenueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectedRevenueType;
export declare function ProjectedRevenueTypeToJSON(value?: ProjectedRevenueType | null): any;