/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { OutOfOrderServiceReasonType } from './OutOfOrderServiceReasonType';
import {
    OutOfOrderServiceReasonTypeFromJSON,
    OutOfOrderServiceReasonTypeFromJSONTyped,
    OutOfOrderServiceReasonTypeToJSON,
} from './OutOfOrderServiceReasonType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for creating new out of order/service reasons for hotels.
 * @export
 * @interface OutOfOrderServiceReasonsCriteria
 */
export interface OutOfOrderServiceReasonsCriteria {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof OutOfOrderServiceReasonsCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * out of order/service reason details.
     * @type {Array<OutOfOrderServiceReasonType>}
     * @memberof OutOfOrderServiceReasonsCriteria
     */
    outOfOrderServiceReasons?: Array<OutOfOrderServiceReasonType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof OutOfOrderServiceReasonsCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the OutOfOrderServiceReasonsCriteria interface.
 */
export function instanceOfOutOfOrderServiceReasonsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OutOfOrderServiceReasonsCriteriaFromJSON(json: any): OutOfOrderServiceReasonsCriteria {
    return OutOfOrderServiceReasonsCriteriaFromJSONTyped(json, false);
}

export function OutOfOrderServiceReasonsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): OutOfOrderServiceReasonsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'outOfOrderServiceReasons': !exists(json, 'outOfOrderServiceReasons') ? undefined : ((json['outOfOrderServiceReasons'] as Array<any>).map(OutOfOrderServiceReasonTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function OutOfOrderServiceReasonsCriteriaToJSON(value?: OutOfOrderServiceReasonsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'outOfOrderServiceReasons': value.outOfOrderServiceReasons === undefined ? undefined : ((value.outOfOrderServiceReasons as Array<any>).map(OutOfOrderServiceReasonTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

