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
import type { ColorDefinitionType } from './ColorDefinitionType';
import type { ColorType } from './ColorType';
/**
 * Information of reservation display color, determined based on OPERA parameter RESERVATION_COLOR_DEFINITION
 * @export
 * @interface ReservationDisplayColorInfoType
 */
export interface ReservationDisplayColorInfoType {
    /**
     *
     * @type {ColorDefinitionType}
     * @memberof ReservationDisplayColorInfoType
     */
    colorDefinition?: ColorDefinitionType;
    /**
     * Description populated based on DisplayColor.
     * @type {string}
     * @memberof ReservationDisplayColorInfoType
     */
    colorDescription?: string;
    /**
     *
     * @type {ColorType}
     * @memberof ReservationDisplayColorInfoType
     */
    displayColor?: ColorType;
}
/**
 * Check if a given object implements the ReservationDisplayColorInfoType interface.
 */
export declare function instanceOfReservationDisplayColorInfoType(value: object): boolean;
export declare function ReservationDisplayColorInfoTypeFromJSON(json: any): ReservationDisplayColorInfoType;
export declare function ReservationDisplayColorInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationDisplayColorInfoType;
export declare function ReservationDisplayColorInfoTypeToJSON(value?: ReservationDisplayColorInfoType | null): any;
