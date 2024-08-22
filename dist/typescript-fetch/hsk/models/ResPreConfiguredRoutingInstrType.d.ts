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
import type { AuthorizerInfoType } from './AuthorizerInfoType';
import type { ResProfileTypeType } from './ResProfileTypeType';
/**
 * Instruction to attach Pre-Configured Routing Instructions to a Reservation.
 * @export
 * @interface ResPreConfiguredRoutingInstrType
 */
export interface ResPreConfiguredRoutingInstrType {
    /**
     *
     * @type {AuthorizerInfoType}
     * @memberof ResPreConfiguredRoutingInstrType
     */
    authorizerInfo?: AuthorizerInfoType;
    /**
     *
     * @type {ResProfileTypeType}
     * @memberof ResPreConfiguredRoutingInstrType
     */
    profileType?: ResProfileTypeType;
    /**
     * Promotion Code with attached Complimentary Routing.
     * @type {string}
     * @memberof ResPreConfiguredRoutingInstrType
     */
    promotionCode?: string;
    /**
     * Rate Code with attached Routing Instruction.
     * @type {string}
     * @memberof ResPreConfiguredRoutingInstrType
     */
    ratePlanCode?: string;
}
/**
 * Check if a given object implements the ResPreConfiguredRoutingInstrType interface.
 */
export declare function instanceOfResPreConfiguredRoutingInstrType(value: object): boolean;
export declare function ResPreConfiguredRoutingInstrTypeFromJSON(json: any): ResPreConfiguredRoutingInstrType;
export declare function ResPreConfiguredRoutingInstrTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResPreConfiguredRoutingInstrType;
export declare function ResPreConfiguredRoutingInstrTypeToJSON(value?: ResPreConfiguredRoutingInstrType | null): any;
