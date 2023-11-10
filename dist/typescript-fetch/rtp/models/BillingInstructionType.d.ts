/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Configured Billing Instruction which represents a set of Transaction Codes.
 * @export
 * @interface BillingInstructionType
 */
export interface BillingInstructionType {
    /**
     * Unique identifier for the Billing Instruction.
     * @type {string}
     * @memberof BillingInstructionType
     */
    billingCode?: string;
    /**
     * Billing Instruction code description.
     * @type {string}
     * @memberof BillingInstructionType
     */
    desc?: string;
    /**
     * Hotel context of the Billing Instruction.
     * @type {string}
     * @memberof BillingInstructionType
     */
    hotelId?: string;
    /**
     * This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer.
     * @type {number}
     * @memberof BillingInstructionType
     */
    routingInstructionsId?: number;
}
/**
 * Check if a given object implements the BillingInstructionType interface.
 */
export declare function instanceOfBillingInstructionType(value: object): boolean;
export declare function BillingInstructionTypeFromJSON(json: any): BillingInstructionType;
export declare function BillingInstructionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingInstructionType;
export declare function BillingInstructionTypeToJSON(value?: BillingInstructionType | null): any;
