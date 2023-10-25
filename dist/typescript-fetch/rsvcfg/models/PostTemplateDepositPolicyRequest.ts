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
import type { ConfigDepositPolicyType } from './ConfigDepositPolicyType';
import {
    ConfigDepositPolicyTypeFromJSON,
    ConfigDepositPolicyTypeFromJSONTyped,
    ConfigDepositPolicyTypeToJSON,
} from './ConfigDepositPolicyType';
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
 * @interface PostTemplateDepositPolicyRequest
 */
export interface PostTemplateDepositPolicyRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostTemplateDepositPolicyRequest
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {ConfigDepositPolicyType}
     * @memberof PostTemplateDepositPolicyRequest
     */
    templateDepositPolicy?: ConfigDepositPolicyType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostTemplateDepositPolicyRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostTemplateDepositPolicyRequest interface.
 */
export function instanceOfPostTemplateDepositPolicyRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostTemplateDepositPolicyRequestFromJSON(json: any): PostTemplateDepositPolicyRequest {
    return PostTemplateDepositPolicyRequestFromJSONTyped(json, false);
}

export function PostTemplateDepositPolicyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostTemplateDepositPolicyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'templateDepositPolicy': !exists(json, 'templateDepositPolicy') ? undefined : ConfigDepositPolicyTypeFromJSON(json['templateDepositPolicy']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostTemplateDepositPolicyRequestToJSON(value?: PostTemplateDepositPolicyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'templateDepositPolicy': ConfigDepositPolicyTypeToJSON(value.templateDepositPolicy),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

