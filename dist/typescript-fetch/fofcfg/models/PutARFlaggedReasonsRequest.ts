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
import type { ARFlaggedReasonType } from './ARFlaggedReasonType';
import {
    ARFlaggedReasonTypeFromJSON,
    ARFlaggedReasonTypeFromJSONTyped,
    ARFlaggedReasonTypeToJSON,
} from './ARFlaggedReasonType';
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
 * 
 * @export
 * @interface PutARFlaggedReasonsRequest
 */
export interface PutARFlaggedReasonsRequest {
    /**
     * List of the Flagged Reason to be configured or fetched
     * @type {Array<ARFlaggedReasonType>}
     * @memberof PutARFlaggedReasonsRequest
     */
    aRFlaggedReasons?: Array<ARFlaggedReasonType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PutARFlaggedReasonsRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PutARFlaggedReasonsRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PutARFlaggedReasonsRequest interface.
 */
export function instanceOfPutARFlaggedReasonsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PutARFlaggedReasonsRequestFromJSON(json: any): PutARFlaggedReasonsRequest {
    return PutARFlaggedReasonsRequestFromJSONTyped(json, false);
}

export function PutARFlaggedReasonsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutARFlaggedReasonsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aRFlaggedReasons': !exists(json, 'aRFlaggedReasons') ? undefined : ((json['aRFlaggedReasons'] as Array<any>).map(ARFlaggedReasonTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PutARFlaggedReasonsRequestToJSON(value?: PutARFlaggedReasonsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aRFlaggedReasons': value.aRFlaggedReasons === undefined ? undefined : ((value.aRFlaggedReasons as Array<any>).map(ARFlaggedReasonTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

