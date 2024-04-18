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
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response type for the start task room service. Can contain errors or warnings.
 * @export
 * @interface ServiceTime
 */
export interface ServiceTime {
    /**
     * Total time in seconds spent in servicing the room.
     * @type {number}
     * @memberof ServiceTime
     */
    elapsedTime?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ServiceTime
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ServiceTime
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ServiceTime interface.
 */
export function instanceOfServiceTime(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ServiceTimeFromJSON(json: any): ServiceTime {
    return ServiceTimeFromJSONTyped(json, false);
}

export function ServiceTimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceTime {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'elapsedTime': !exists(json, 'elapsedTime') ? undefined : json['elapsedTime'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ServiceTimeToJSON(value?: ServiceTime | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'elapsedTime': value.elapsedTime,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
