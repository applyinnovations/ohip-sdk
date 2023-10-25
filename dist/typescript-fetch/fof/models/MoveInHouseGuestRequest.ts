/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MoveInHouseGuestCriteria } from './MoveInHouseGuestCriteria';
import {
    MoveInHouseGuestCriteriaFromJSON,
    MoveInHouseGuestCriteriaFromJSONTyped,
    MoveInHouseGuestCriteriaToJSON,
} from './MoveInHouseGuestCriteria';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface MoveInHouseGuestRequest
 */
export interface MoveInHouseGuestRequest {
    /**
     * 
     * @type {MoveInHouseGuestCriteria}
     * @memberof MoveInHouseGuestRequest
     */
    criteria?: MoveInHouseGuestCriteria;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof MoveInHouseGuestRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MoveInHouseGuestRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the MoveInHouseGuestRequest interface.
 */
export function instanceOfMoveInHouseGuestRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MoveInHouseGuestRequestFromJSON(json: any): MoveInHouseGuestRequest {
    return MoveInHouseGuestRequestFromJSONTyped(json, false);
}

export function MoveInHouseGuestRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoveInHouseGuestRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : MoveInHouseGuestCriteriaFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function MoveInHouseGuestRequestToJSON(value?: MoveInHouseGuestRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': MoveInHouseGuestCriteriaToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

