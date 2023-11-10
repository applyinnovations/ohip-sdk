/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RoutingInfoTypeComp } from './RoutingInfoTypeComp';
import type { RoutingInfoTypeFolio } from './RoutingInfoTypeFolio';
import type { RoutingInfoTypeRequest } from './RoutingInfoTypeRequest';
import type { RoutingInfoTypeRoom } from './RoutingInfoTypeRoom';
/**
 * A routing info object can either be of type Folio OR of type Room with its corresponding object.
 * @export
 * @interface RoutingInfoType
 */
export interface RoutingInfoType {
    /**
     *
     * @type {RoutingInfoTypeComp}
     * @memberof RoutingInfoType
     */
    comp?: RoutingInfoTypeComp;
    /**
     *
     * @type {RoutingInfoTypeFolio}
     * @memberof RoutingInfoType
     */
    folio?: RoutingInfoTypeFolio;
    /**
     * On a successful update, the transactions that are already posted in the guest's folio will be re-organized based on the configured instructions.
     * @type {boolean}
     * @memberof RoutingInfoType
     */
    refreshFolio?: boolean;
    /**
     *
     * @type {RoutingInfoTypeRequest}
     * @memberof RoutingInfoType
     */
    request?: RoutingInfoTypeRequest;
    /**
     *
     * @type {RoutingInfoTypeRoom}
     * @memberof RoutingInfoType
     */
    room?: RoutingInfoTypeRoom;
}
/**
 * Check if a given object implements the RoutingInfoType interface.
 */
export declare function instanceOfRoutingInfoType(value: object): boolean;
export declare function RoutingInfoTypeFromJSON(json: any): RoutingInfoType;
export declare function RoutingInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingInfoType;
export declare function RoutingInfoTypeToJSON(value?: RoutingInfoType | null): any;
