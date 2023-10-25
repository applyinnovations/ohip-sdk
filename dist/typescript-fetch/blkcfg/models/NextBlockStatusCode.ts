/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { NextBlockStatusCodeType } from './NextBlockStatusCodeType';
import {
    NextBlockStatusCodeTypeFromJSON,
    NextBlockStatusCodeTypeFromJSONTyped,
    NextBlockStatusCodeTypeToJSON,
} from './NextBlockStatusCodeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for change block status code flow. Batch insert/update/delete of next status code list of a particular status code.
 * @export
 * @interface NextBlockStatusCode
 */
export interface NextBlockStatusCode {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof NextBlockStatusCode
     */
    links?: Array<InstanceLink>;
    /**
     * Block status code with its next configured and/or available status codes.
     * @type {Array<NextBlockStatusCodeType>}
     * @memberof NextBlockStatusCode
     */
    nextBlockStatusCodeList?: Array<NextBlockStatusCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof NextBlockStatusCode
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the NextBlockStatusCode interface.
 */
export function instanceOfNextBlockStatusCode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NextBlockStatusCodeFromJSON(json: any): NextBlockStatusCode {
    return NextBlockStatusCodeFromJSONTyped(json, false);
}

export function NextBlockStatusCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NextBlockStatusCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'nextBlockStatusCodeList': !exists(json, 'nextBlockStatusCodeList') ? undefined : ((json['nextBlockStatusCodeList'] as Array<any>).map(NextBlockStatusCodeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function NextBlockStatusCodeToJSON(value?: NextBlockStatusCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'nextBlockStatusCodeList': value.nextBlockStatusCodeList === undefined ? undefined : ((value.nextBlockStatusCodeList as Array<any>).map(NextBlockStatusCodeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

