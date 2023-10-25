/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { LinkReservationsCriteriaResponseInstruction } from './LinkReservationsCriteriaResponseInstruction';
import {
    LinkReservationsCriteriaResponseInstructionFromJSON,
    LinkReservationsCriteriaResponseInstructionFromJSONTyped,
    LinkReservationsCriteriaResponseInstructionToJSON,
} from './LinkReservationsCriteriaResponseInstruction';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PostReservationLinksByExtIdRequest
 */
export interface PostReservationLinksByExtIdRequest {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof PostReservationLinksByExtIdRequest
     */
    linkToReservationId?: UniqueIDType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostReservationLinksByExtIdRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof PostReservationLinksByExtIdRequest
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {LinkReservationsCriteriaResponseInstruction}
     * @memberof PostReservationLinksByExtIdRequest
     */
    responseInstruction?: LinkReservationsCriteriaResponseInstruction;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostReservationLinksByExtIdRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostReservationLinksByExtIdRequest interface.
 */
export function instanceOfPostReservationLinksByExtIdRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostReservationLinksByExtIdRequestFromJSON(json: any): PostReservationLinksByExtIdRequest {
    return PostReservationLinksByExtIdRequestFromJSONTyped(json, false);
}

export function PostReservationLinksByExtIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostReservationLinksByExtIdRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'linkToReservationId': !exists(json, 'linkToReservationId') ? undefined : UniqueIDTypeFromJSON(json['linkToReservationId']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'responseInstruction': !exists(json, 'responseInstruction') ? undefined : LinkReservationsCriteriaResponseInstructionFromJSON(json['responseInstruction']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostReservationLinksByExtIdRequestToJSON(value?: PostReservationLinksByExtIdRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'linkToReservationId': UniqueIDTypeToJSON(value.linkToReservationId),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'responseInstruction': LinkReservationsCriteriaResponseInstructionToJSON(value.responseInstruction),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

