/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Validations type record returned after Validations are done.
 * @export
 * @interface ResGuaranteeType
 */
export interface ResGuaranteeType {
    /**
     * Guarantee Code.
     * @type {string}
     * @memberof ResGuaranteeType
     */
    guaranteeCode?: string;
    /**
     * Guarantee Code.
     * @type {boolean}
     * @memberof ResGuaranteeType
     */
    onHold?: boolean;
    /**
     * Guarantee Code.
     * @type {string}
     * @memberof ResGuaranteeType
     */
    shortDescription?: string;
}
/**
 * Check if a given object implements the ResGuaranteeType interface.
 */
export declare function instanceOfResGuaranteeType(value: object): boolean;
export declare function ResGuaranteeTypeFromJSON(json: any): ResGuaranteeType;
export declare function ResGuaranteeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResGuaranteeType;
export declare function ResGuaranteeTypeToJSON(value?: ResGuaranteeType | null): any;