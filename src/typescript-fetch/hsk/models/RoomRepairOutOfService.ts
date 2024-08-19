/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { RoomRepairOutOfServiceCriteria } from './RoomRepairOutOfServiceCriteria';
import {
    RoomRepairOutOfServiceCriteriaFromJSON,
    RoomRepairOutOfServiceCriteriaFromJSONTyped,
    RoomRepairOutOfServiceCriteriaToJSON,
} from './RoomRepairOutOfServiceCriteria';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface RoomRepairOutOfService
 */
export interface RoomRepairOutOfService {
    /**
     * 
     * @type {RoomRepairOutOfServiceCriteria}
     * @memberof RoomRepairOutOfService
     */
    criteria?: RoomRepairOutOfServiceCriteria;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RoomRepairOutOfService
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomRepairOutOfService
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RoomRepairOutOfService interface.
 */
export function instanceOfRoomRepairOutOfService(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomRepairOutOfServiceFromJSON(json: any): RoomRepairOutOfService {
    return RoomRepairOutOfServiceFromJSONTyped(json, false);
}

export function RoomRepairOutOfServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomRepairOutOfService {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : RoomRepairOutOfServiceCriteriaFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RoomRepairOutOfServiceToJSON(value?: RoomRepairOutOfService | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': RoomRepairOutOfServiceCriteriaToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

