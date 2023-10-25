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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { PostingsInfoType } from './PostingsInfoType';
import {
    PostingsInfoTypeFromJSON,
    PostingsInfoTypeFromJSONTyped,
    PostingsInfoTypeToJSON,
} from './PostingsInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object that lists the transactions that can be refreshed when a routing instruction set is refreshed.
 * @export
 * @interface PostingsForRefresh
 */
export interface PostingsForRefresh {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostingsForRefresh
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {PostingsInfoType}
     * @memberof PostingsForRefresh
     */
    postingsForRoomRouting?: PostingsInfoType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostingsForRefresh
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostingsForRefresh interface.
 */
export function instanceOfPostingsForRefresh(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostingsForRefreshFromJSON(json: any): PostingsForRefresh {
    return PostingsForRefreshFromJSONTyped(json, false);
}

export function PostingsForRefreshFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostingsForRefresh {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'postingsForRoomRouting': !exists(json, 'postingsForRoomRouting') ? undefined : PostingsInfoTypeFromJSON(json['postingsForRoomRouting']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostingsForRefreshToJSON(value?: PostingsForRefresh | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'postingsForRoomRouting': PostingsInfoTypeToJSON(value.postingsForRoomRouting),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

