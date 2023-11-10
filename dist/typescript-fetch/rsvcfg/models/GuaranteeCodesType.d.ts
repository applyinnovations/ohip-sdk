/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { GuaranteeConfigType } from './GuaranteeConfigType';
/**
 * The Collection of Guarantee Codes Type.
 * @export
 * @interface GuaranteeCodesType
 */
export interface GuaranteeCodesType {
    /**
     * Guarantee Code details.
     * @type {Array<GuaranteeConfigType>}
     * @memberof GuaranteeCodesType
     */
    guaranteeCode?: Array<GuaranteeConfigType>;
    /**
     * Hotel code for fetched template Guarantee Codes.
     * @type {string}
     * @memberof GuaranteeCodesType
     */
    hotelId?: string;
}
/**
 * Check if a given object implements the GuaranteeCodesType interface.
 */
export declare function instanceOfGuaranteeCodesType(value: object): boolean;
export declare function GuaranteeCodesTypeFromJSON(json: any): GuaranteeCodesType;
export declare function GuaranteeCodesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuaranteeCodesType;
export declare function GuaranteeCodesTypeToJSON(value?: GuaranteeCodesType | null): any;
