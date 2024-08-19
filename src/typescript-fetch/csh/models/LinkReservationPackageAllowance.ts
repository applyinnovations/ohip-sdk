/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
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
 * Method to create package allowance link from a source reservation to the target reservation.
 * @export
 * @interface LinkReservationPackageAllowance
 */
export interface LinkReservationPackageAllowance {
    /**
     * If set to TRUE, the source reservation contributes its allowance(s) to the linked allowance pool and is able to draw from the allowances of the target reservation and/or any other source rooms linked to the target room.
     * @type {boolean}
     * @memberof LinkReservationPackageAllowance
     */
    consumeSharedAllowances?: boolean;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof LinkReservationPackageAllowance
     */
    hotelId?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof LinkReservationPackageAllowance
     */
    linkFromReservationId?: UniqueIDType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof LinkReservationPackageAllowance
     */
    linkToReservationId?: UniqueIDType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof LinkReservationPackageAllowance
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof LinkReservationPackageAllowance
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the LinkReservationPackageAllowance interface.
 */
export function instanceOfLinkReservationPackageAllowance(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LinkReservationPackageAllowanceFromJSON(json: any): LinkReservationPackageAllowance {
    return LinkReservationPackageAllowanceFromJSONTyped(json, false);
}

export function LinkReservationPackageAllowanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkReservationPackageAllowance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'consumeSharedAllowances': !exists(json, 'consumeSharedAllowances') ? undefined : json['consumeSharedAllowances'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'linkFromReservationId': !exists(json, 'linkFromReservationId') ? undefined : UniqueIDTypeFromJSON(json['linkFromReservationId']),
        'linkToReservationId': !exists(json, 'linkToReservationId') ? undefined : UniqueIDTypeFromJSON(json['linkToReservationId']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function LinkReservationPackageAllowanceToJSON(value?: LinkReservationPackageAllowance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'consumeSharedAllowances': value.consumeSharedAllowances,
        'hotelId': value.hotelId,
        'linkFromReservationId': UniqueIDTypeToJSON(value.linkFromReservationId),
        'linkToReservationId': UniqueIDTypeToJSON(value.linkToReservationId),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

