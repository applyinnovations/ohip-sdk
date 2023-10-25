/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InfluenceCodeType } from './InfluenceCodeType';
import {
    InfluenceCodeTypeFromJSON,
    InfluenceCodeTypeFromJSONTyped,
    InfluenceCodeTypeToJSON,
} from './InfluenceCodeType';
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
 * @interface PutInfluenceCodesRequest
 */
export interface PutInfluenceCodesRequest {
    /**
     * List of Influence Codes.
     * @type {Array<InfluenceCodeType>}
     * @memberof PutInfluenceCodesRequest
     */
    influenceCodes?: Array<InfluenceCodeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PutInfluenceCodesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PutInfluenceCodesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PutInfluenceCodesRequest interface.
 */
export function instanceOfPutInfluenceCodesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PutInfluenceCodesRequestFromJSON(json: any): PutInfluenceCodesRequest {
    return PutInfluenceCodesRequestFromJSONTyped(json, false);
}

export function PutInfluenceCodesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutInfluenceCodesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'influenceCodes': !exists(json, 'influenceCodes') ? undefined : ((json['influenceCodes'] as Array<any>).map(InfluenceCodeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PutInfluenceCodesRequestToJSON(value?: PutInfluenceCodesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'influenceCodes': value.influenceCodes === undefined ? undefined : ((value.influenceCodes as Array<any>).map(InfluenceCodeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

