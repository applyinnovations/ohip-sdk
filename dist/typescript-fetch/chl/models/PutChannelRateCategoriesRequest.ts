/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChannelRateCategoriesRateCategories } from './ChannelRateCategoriesRateCategories';
import {
    ChannelRateCategoriesRateCategoriesFromJSON,
    ChannelRateCategoriesRateCategoriesFromJSONTyped,
    ChannelRateCategoriesRateCategoriesToJSON,
} from './ChannelRateCategoriesRateCategories';
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
 * @interface PutChannelRateCategoriesRequest
 */
export interface PutChannelRateCategoriesRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PutChannelRateCategoriesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {ChannelRateCategoriesRateCategories}
     * @memberof PutChannelRateCategoriesRequest
     */
    rateCategories?: ChannelRateCategoriesRateCategories;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PutChannelRateCategoriesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PutChannelRateCategoriesRequest interface.
 */
export function instanceOfPutChannelRateCategoriesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PutChannelRateCategoriesRequestFromJSON(json: any): PutChannelRateCategoriesRequest {
    return PutChannelRateCategoriesRequestFromJSONTyped(json, false);
}

export function PutChannelRateCategoriesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutChannelRateCategoriesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'rateCategories': !exists(json, 'rateCategories') ? undefined : ChannelRateCategoriesRateCategoriesFromJSON(json['rateCategories']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PutChannelRateCategoriesRequestToJSON(value?: PutChannelRateCategoriesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'rateCategories': ChannelRateCategoriesRateCategoriesToJSON(value.rateCategories),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

