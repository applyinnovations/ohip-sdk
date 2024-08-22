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
import type { ResvRoutingCriteriaTypeComp } from './ResvRoutingCriteriaTypeComp';
import {
    ResvRoutingCriteriaTypeCompFromJSON,
    ResvRoutingCriteriaTypeCompFromJSONTyped,
    ResvRoutingCriteriaTypeCompToJSON,
} from './ResvRoutingCriteriaTypeComp';
import type { ResvRoutingCriteriaTypeFolio } from './ResvRoutingCriteriaTypeFolio';
import {
    ResvRoutingCriteriaTypeFolioFromJSON,
    ResvRoutingCriteriaTypeFolioFromJSONTyped,
    ResvRoutingCriteriaTypeFolioToJSON,
} from './ResvRoutingCriteriaTypeFolio';
import type { ResvRoutingCriteriaTypeRequest } from './ResvRoutingCriteriaTypeRequest';
import {
    ResvRoutingCriteriaTypeRequestFromJSON,
    ResvRoutingCriteriaTypeRequestFromJSONTyped,
    ResvRoutingCriteriaTypeRequestToJSON,
} from './ResvRoutingCriteriaTypeRequest';
import type { ResvRoutingCriteriaTypeRoom } from './ResvRoutingCriteriaTypeRoom';
import {
    ResvRoutingCriteriaTypeRoomFromJSON,
    ResvRoutingCriteriaTypeRoomFromJSONTyped,
    ResvRoutingCriteriaTypeRoomToJSON,
} from './ResvRoutingCriteriaTypeRoom';

/**
 * A routing info object can either be of type Folio OR of type Room with its corresponding object.
 * @export
 * @interface RoutingInfoType
 */
export interface RoutingInfoType {
    /**
     * 
     * @type {ResvRoutingCriteriaTypeComp}
     * @memberof RoutingInfoType
     */
    comp?: ResvRoutingCriteriaTypeComp;
    /**
     * 
     * @type {ResvRoutingCriteriaTypeFolio}
     * @memberof RoutingInfoType
     */
    folio?: ResvRoutingCriteriaTypeFolio;
    /**
     * On a successful update, the transactions that are already posted in the guest's folio will be re-organized based on the configured instructions.
     * @type {boolean}
     * @memberof RoutingInfoType
     */
    refreshFolio?: boolean;
    /**
     * 
     * @type {ResvRoutingCriteriaTypeRequest}
     * @memberof RoutingInfoType
     */
    request?: ResvRoutingCriteriaTypeRequest;
    /**
     * 
     * @type {ResvRoutingCriteriaTypeRoom}
     * @memberof RoutingInfoType
     */
    room?: ResvRoutingCriteriaTypeRoom;
}

/**
 * Check if a given object implements the RoutingInfoType interface.
 */
export function instanceOfRoutingInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoutingInfoTypeFromJSON(json: any): RoutingInfoType {
    return RoutingInfoTypeFromJSONTyped(json, false);
}

export function RoutingInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comp': !exists(json, 'comp') ? undefined : ResvRoutingCriteriaTypeCompFromJSON(json['comp']),
        'folio': !exists(json, 'folio') ? undefined : ResvRoutingCriteriaTypeFolioFromJSON(json['folio']),
        'refreshFolio': !exists(json, 'refreshFolio') ? undefined : json['refreshFolio'],
        'request': !exists(json, 'request') ? undefined : ResvRoutingCriteriaTypeRequestFromJSON(json['request']),
        'room': !exists(json, 'room') ? undefined : ResvRoutingCriteriaTypeRoomFromJSON(json['room']),
    };
}

export function RoutingInfoTypeToJSON(value?: RoutingInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comp': ResvRoutingCriteriaTypeCompToJSON(value.comp),
        'folio': ResvRoutingCriteriaTypeFolioToJSON(value.folio),
        'refreshFolio': value.refreshFolio,
        'request': ResvRoutingCriteriaTypeRequestToJSON(value.request),
        'room': ResvRoutingCriteriaTypeRoomToJSON(value.room),
    };
}

