/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ContractTransactionType } from './ContractTransactionType';
import type { NumberRangeType } from './NumberRangeType';
/**
 * Holds Contract Range per number of Properties, Rooms or reservations information.
 * @export
 * @interface ContractRangeInformationType
 */
export interface ContractRangeInformationType {
    /**
     *
     * @type {NumberRangeType}
     * @memberof ContractRangeInformationType
     */
    contractRange?: NumberRangeType;
    /**
     *
     * @type {ContractTransactionType}
     * @memberof ContractRangeInformationType
     */
    contractTransaction?: ContractTransactionType;
    /**
     * Holds No of months calculated while generating statements for Maintenance Fee type.
     * @type {number}
     * @memberof ContractRangeInformationType
     */
    months?: number;
    /**
     * Holds No of reservations range for Transaction Fee type.
     * @type {number}
     * @memberof ContractRangeInformationType
     */
    range?: number;
}
/**
 * Check if a given object implements the ContractRangeInformationType interface.
 */
export declare function instanceOfContractRangeInformationType(value: object): boolean;
export declare function ContractRangeInformationTypeFromJSON(json: any): ContractRangeInformationType;
export declare function ContractRangeInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContractRangeInformationType;
export declare function ContractRangeInformationTypeToJSON(value?: ContractRangeInformationType | null): any;
