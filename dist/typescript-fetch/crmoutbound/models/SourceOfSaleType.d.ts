/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Point of Sale of reservation. Identifies the entity/channel who made the reservation.
 * @export
 * @interface SourceOfSaleType
 */
export interface SourceOfSaleType {
    /**
     * Type of entity/channel who made the reservation..
     * @type {string}
     * @memberof SourceOfSaleType
     */
    sourceType?: string;
    /**
     * The entity/channel who made the reservation.
     * @type {string}
     * @memberof SourceOfSaleType
     */
    sourceCode?: string;
}
/**
 * Check if a given object implements the SourceOfSaleType interface.
 */
export declare function instanceOfSourceOfSaleType(value: object): boolean;
export declare function SourceOfSaleTypeFromJSON(json: any): SourceOfSaleType;
export declare function SourceOfSaleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceOfSaleType;
export declare function SourceOfSaleTypeToJSON(value?: SourceOfSaleType | null): any;
