/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { RoomRoutingRefreshCriteriaType } from './RoomRoutingRefreshCriteriaType';
import {
    RoomRoutingRefreshCriteriaTypeFromJSON,
    RoomRoutingRefreshCriteriaTypeFromJSONTyped,
    RoomRoutingRefreshCriteriaTypeToJSON,
} from './RoomRoutingRefreshCriteriaType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * The request object for processing refreshing of a routing instruction set. This operation transfers the postings to the respective reservation as per the routing instruction set which is created, edited, deleted or refreshed.
 * @export
 * @interface RoomRoutingRefresh
 */
export interface RoomRoutingRefresh {
    /**
     * 
     * @type {Links}
     * @memberof RoomRoutingRefresh
     */
    links?: Links;
    /**
     * 
     * @type {RoomRoutingRefreshCriteriaType}
     * @memberof RoomRoutingRefresh
     */
    roomRoutingRefreshCriteria?: RoomRoutingRefreshCriteriaType;
    /**
     * 
     * @type {WarningsType}
     * @memberof RoomRoutingRefresh
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the RoomRoutingRefresh interface.
 */
export function instanceOfRoomRoutingRefresh(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomRoutingRefreshFromJSON(json: any): RoomRoutingRefresh {
    return RoomRoutingRefreshFromJSONTyped(json, false);
}

export function RoomRoutingRefreshFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomRoutingRefresh {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'roomRoutingRefreshCriteria': !exists(json, 'roomRoutingRefreshCriteria') ? undefined : RoomRoutingRefreshCriteriaTypeFromJSON(json['roomRoutingRefreshCriteria']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function RoomRoutingRefreshToJSON(value?: RoomRoutingRefresh | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'roomRoutingRefreshCriteria': RoomRoutingRefreshCriteriaTypeToJSON(value.roomRoutingRefreshCriteria),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
