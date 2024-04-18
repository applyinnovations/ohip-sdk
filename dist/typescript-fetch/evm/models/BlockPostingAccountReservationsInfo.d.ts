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
import type { BlockPostingReservationsType } from './BlockPostingReservationsType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response object for retrieving block Posting account reservations.
 * @export
 * @interface BlockPostingAccountReservationsInfo
 */
export interface BlockPostingAccountReservationsInfo {
    /**
     * Fetch block's posting account reservations information.
     * @type {Array<BlockPostingReservationsType>}
     * @memberof BlockPostingAccountReservationsInfo
     */
    blockPostingAccountReservations?: Array<BlockPostingReservationsType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof BlockPostingAccountReservationsInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success elementSpace to define a business error.
     * @type {Array<WarningType>}
     * @memberof BlockPostingAccountReservationsInfo
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the BlockPostingAccountReservationsInfo interface.
 */
export declare function instanceOfBlockPostingAccountReservationsInfo(value: object): boolean;
export declare function BlockPostingAccountReservationsInfoFromJSON(json: any): BlockPostingAccountReservationsInfo;
export declare function BlockPostingAccountReservationsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockPostingAccountReservationsInfo;
export declare function BlockPostingAccountReservationsInfoToJSON(value?: BlockPostingAccountReservationsInfo | null): any;