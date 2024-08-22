/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ConfigDepositPolicyType } from './ConfigDepositPolicyType';
/**
 * Collection of Deposit Policy Configurations of a hotel.
 * @export
 * @interface HotelConfigDepositPoliciesType
 */
export interface HotelConfigDepositPoliciesType {
    /**
     * Collection of Deposit Policy configurations of a hotel.
     * @type {Array<ConfigDepositPolicyType>}
     * @memberof HotelConfigDepositPoliciesType
     */
    depositPolicy?: Array<ConfigDepositPolicyType>;
    /**
     * Hotel code of the collection of Deposit Policy configurations.
     * @type {string}
     * @memberof HotelConfigDepositPoliciesType
     */
    hotelId?: string;
}
/**
 * Check if a given object implements the HotelConfigDepositPoliciesType interface.
 */
export declare function instanceOfHotelConfigDepositPoliciesType(value: object): boolean;
export declare function HotelConfigDepositPoliciesTypeFromJSON(json: any): HotelConfigDepositPoliciesType;
export declare function HotelConfigDepositPoliciesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelConfigDepositPoliciesType;
export declare function HotelConfigDepositPoliciesTypeToJSON(value?: HotelConfigDepositPoliciesType | null): any;
