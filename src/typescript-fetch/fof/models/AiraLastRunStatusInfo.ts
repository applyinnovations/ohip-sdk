/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Response of last execution status for AI Room Assignment
 * @export
 * @interface AiraLastRunStatusInfo
 */
export interface AiraLastRunStatusInfo {
    /**
     * Actual run status of an AI room assignment
     * @type {string}
     * @memberof AiraLastRunStatusInfo
     */
    actionValue?: string;
    /**
     * When the AI Room Assignment starts execution
     * @type {string}
     * @memberof AiraLastRunStatusInfo
     */
    insertDate?: string;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof AiraLastRunStatusInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Date time of updated status of an executions
     * @type {string}
     * @memberof AiraLastRunStatusInfo
     */
    updateDate?: string;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AiraLastRunStatusInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the AiraLastRunStatusInfo interface.
 */
export function instanceOfAiraLastRunStatusInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AiraLastRunStatusInfoFromJSON(json: any): AiraLastRunStatusInfo {
    return AiraLastRunStatusInfoFromJSONTyped(json, false);
}

export function AiraLastRunStatusInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AiraLastRunStatusInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionValue': !exists(json, 'actionValue') ? undefined : json['actionValue'],
        'insertDate': !exists(json, 'insertDate') ? undefined : json['insertDate'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'updateDate': !exists(json, 'updateDate') ? undefined : json['updateDate'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function AiraLastRunStatusInfoToJSON(value?: AiraLastRunStatusInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionValue': value.actionValue,
        'insertDate': value.insertDate,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'updateDate': value.updateDate,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

