/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { TrackItActionConfigType } from './TrackItActionConfigType';
import {
    TrackItActionConfigTypeFromJSON,
    TrackItActionConfigTypeFromJSONTyped,
    TrackItActionConfigTypeToJSON,
} from './TrackItActionConfigType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for creating new Track it Actions.
 * @export
 * @interface TrackItActionsCriteria
 */
export interface TrackItActionsCriteria {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TrackItActionsCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * Track It Action Collection element.
     * @type {Array<TrackItActionConfigType>}
     * @memberof TrackItActionsCriteria
     */
    trackItActions?: Array<TrackItActionConfigType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TrackItActionsCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TrackItActionsCriteria interface.
 */
export function instanceOfTrackItActionsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrackItActionsCriteriaFromJSON(json: any): TrackItActionsCriteria {
    return TrackItActionsCriteriaFromJSONTyped(json, false);
}

export function TrackItActionsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackItActionsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'trackItActions': !exists(json, 'trackItActions') ? undefined : ((json['trackItActions'] as Array<any>).map(TrackItActionConfigTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TrackItActionsCriteriaToJSON(value?: TrackItActionsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'trackItActions': value.trackItActions === undefined ? undefined : ((value.trackItActions as Array<any>).map(TrackItActionConfigTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

