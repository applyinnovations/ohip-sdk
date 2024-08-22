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
import type { RoutingInstructionType } from './RoutingInstructionType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Room routing type.
 * @export
 * @interface RoutingInstructionsToChangeCriteriaRoom
 */
export interface RoutingInstructionsToChangeCriteriaRoom {
    /**
     * Display Name for the guest.
     * @type {string}
     * @memberof RoutingInstructionsToChangeCriteriaRoom
     */
    guestDisplayName?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof RoutingInstructionsToChangeCriteriaRoom
     */
    guestNameId?: UniqueIDType;
    /**
     * Set of routing instructions associated to this routing type.
     * @type {Array<RoutingInstructionType>}
     * @memberof RoutingInstructionsToChangeCriteriaRoom
     */
    instructions?: Array<RoutingInstructionType>;
    /**
     *
     * @type {UniqueIDType}
     * @memberof RoutingInstructionsToChangeCriteriaRoom
     */
    reservationNameId?: UniqueIDType;
    /**
     * Room number to route the instructions.
     * @type {string}
     * @memberof RoutingInstructionsToChangeCriteriaRoom
     */
    roomNumber?: string;
}
/**
 * Check if a given object implements the RoutingInstructionsToChangeCriteriaRoom interface.
 */
export declare function instanceOfRoutingInstructionsToChangeCriteriaRoom(value: object): boolean;
export declare function RoutingInstructionsToChangeCriteriaRoomFromJSON(json: any): RoutingInstructionsToChangeCriteriaRoom;
export declare function RoutingInstructionsToChangeCriteriaRoomFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingInstructionsToChangeCriteriaRoom;
export declare function RoutingInstructionsToChangeCriteriaRoomToJSON(value?: RoutingInstructionsToChangeCriteriaRoom | null): any;
