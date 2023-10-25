/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GuaranteeCodeScheduleType } from './GuaranteeCodeScheduleType';
import {
    GuaranteeCodeScheduleTypeFromJSON,
    GuaranteeCodeScheduleTypeFromJSONTyped,
    GuaranteeCodeScheduleTypeToJSON,
} from './GuaranteeCodeScheduleType';
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
 * Changes the Guarantee Code schedule based on the details provided by the request.
 * @export
 * @interface GuaranteeCodeScheduleToBeChanged
 */
export interface GuaranteeCodeScheduleToBeChanged {
    /**
     * 
     * @type {GuaranteeCodeScheduleType}
     * @memberof GuaranteeCodeScheduleToBeChanged
     */
    guaranteeCodeSchedule?: GuaranteeCodeScheduleType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof GuaranteeCodeScheduleToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof GuaranteeCodeScheduleToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the GuaranteeCodeScheduleToBeChanged interface.
 */
export function instanceOfGuaranteeCodeScheduleToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GuaranteeCodeScheduleToBeChangedFromJSON(json: any): GuaranteeCodeScheduleToBeChanged {
    return GuaranteeCodeScheduleToBeChangedFromJSONTyped(json, false);
}

export function GuaranteeCodeScheduleToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuaranteeCodeScheduleToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guaranteeCodeSchedule': !exists(json, 'guaranteeCodeSchedule') ? undefined : GuaranteeCodeScheduleTypeFromJSON(json['guaranteeCodeSchedule']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function GuaranteeCodeScheduleToBeChangedToJSON(value?: GuaranteeCodeScheduleToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guaranteeCodeSchedule': GuaranteeCodeScheduleTypeToJSON(value.guaranteeCodeSchedule),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

