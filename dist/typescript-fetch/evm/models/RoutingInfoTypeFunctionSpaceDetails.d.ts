/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RoutingInstructionType } from './RoutingInstructionType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Room routing type.
 * @export
 * @interface RoutingInfoTypeFunctionSpaceDetails
 */
export interface RoutingInfoTypeFunctionSpaceDetails {
    /**
     * Display Name for the guest.
     * @type {string}
     * @memberof RoutingInfoTypeFunctionSpaceDetails
     */
    guestDisplayName?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof RoutingInfoTypeFunctionSpaceDetails
     */
    guestNameId?: UniqueIDType;
    /**
     * Set of routing instructions associated to this routing type.
     * @type {Array<RoutingInstructionType>}
     * @memberof RoutingInfoTypeFunctionSpaceDetails
     */
    instructions?: Array<RoutingInstructionType>;
    /**
     *
     * @type {UniqueIDType}
     * @memberof RoutingInfoTypeFunctionSpaceDetails
     */
    reservationNameId?: UniqueIDType;
    /**
     * Room number to route the instructions.
     * @type {string}
     * @memberof RoutingInfoTypeFunctionSpaceDetails
     */
    roomId?: string;
}
/**
 * Check if a given object implements the RoutingInfoTypeFunctionSpaceDetails interface.
 */
export declare function instanceOfRoutingInfoTypeFunctionSpaceDetails(value: object): boolean;
export declare function RoutingInfoTypeFunctionSpaceDetailsFromJSON(json: any): RoutingInfoTypeFunctionSpaceDetails;
export declare function RoutingInfoTypeFunctionSpaceDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingInfoTypeFunctionSpaceDetails;
export declare function RoutingInfoTypeFunctionSpaceDetailsToJSON(value?: RoutingInfoTypeFunctionSpaceDetails | null): any;