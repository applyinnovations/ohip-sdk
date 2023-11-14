/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ReservationId } from './ReservationId';
import type { RoutingInfoType } from './RoutingInfoType';
import type { RoutingInstructionsToChangeCriteriaComp } from './RoutingInstructionsToChangeCriteriaComp';
import type { RoutingInstructionsToChangeCriteriaFolio } from './RoutingInstructionsToChangeCriteriaFolio';
import type { RoutingInstructionsToChangeCriteriaRequest } from './RoutingInstructionsToChangeCriteriaRequest';
import type { RoutingInstructionsToChangeCriteriaRoom } from './RoutingInstructionsToChangeCriteriaRoom';
/**
 * Transactions and scheduled instructions included in this routing element will be replaced with the new element.
 * @export
 * @interface RoutingInstructionsToChangeCriteria
 */
export interface RoutingInstructionsToChangeCriteria {
    /**
     *
     * @type {RoutingInstructionsToChangeCriteriaComp}
     * @memberof RoutingInstructionsToChangeCriteria
     */
    comp?: RoutingInstructionsToChangeCriteriaComp;
    /**
     *
     * @type {RoutingInstructionsToChangeCriteriaFolio}
     * @memberof RoutingInstructionsToChangeCriteria
     */
    folio?: RoutingInstructionsToChangeCriteriaFolio;
    /**
     * Hotel context of the reservation.
     * @type {string}
     * @memberof RoutingInstructionsToChangeCriteria
     */
    hotelId?: string;
    /**
     *
     * @type {RoutingInfoType}
     * @memberof RoutingInstructionsToChangeCriteria
     */
    newRoutingInfo?: RoutingInfoType;
    /**
     * On a successful update, the transactions that are already posted in the guest's folio will be re-organized based on the configured instructions.
     * @type {boolean}
     * @memberof RoutingInstructionsToChangeCriteria
     */
    refreshFolio?: boolean;
    /**
     *
     * @type {RoutingInstructionsToChangeCriteriaRequest}
     * @memberof RoutingInstructionsToChangeCriteria
     */
    request?: RoutingInstructionsToChangeCriteriaRequest;
    /**
     *
     * @type {ReservationId}
     * @memberof RoutingInstructionsToChangeCriteria
     */
    reservationId?: ReservationId;
    /**
     * This flag indicates if postings that can be refreshed need to be part of the response when a routing instruction is created, updated or deleted.
     * @type {boolean}
     * @memberof RoutingInstructionsToChangeCriteria
     */
    retrievePostingsForRoomRouting?: boolean;
    /**
     *
     * @type {RoutingInstructionsToChangeCriteriaRoom}
     * @memberof RoutingInstructionsToChangeCriteria
     */
    room?: RoutingInstructionsToChangeCriteriaRoom;
}
/**
 * Check if a given object implements the RoutingInstructionsToChangeCriteria interface.
 */
export declare function instanceOfRoutingInstructionsToChangeCriteria(value: object): boolean;
export declare function RoutingInstructionsToChangeCriteriaFromJSON(json: any): RoutingInstructionsToChangeCriteria;
export declare function RoutingInstructionsToChangeCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingInstructionsToChangeCriteria;
export declare function RoutingInstructionsToChangeCriteriaToJSON(value?: RoutingInstructionsToChangeCriteria | null): any;