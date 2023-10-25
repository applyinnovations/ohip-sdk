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
import type { GUINumberRule } from './GUINumberRule';
import {
    GUINumberRuleFromJSON,
    GUINumberRuleFromJSONTyped,
    GUINumberRuleToJSON,
} from './GUINumberRule';
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
 * @interface PutGUINumberRulesRequest
 */
export interface PutGUINumberRulesRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PutGUINumberRulesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * List of GUI number rules
     * @type {Array<GUINumberRule>}
     * @memberof PutGUINumberRulesRequest
     */
    rules?: Array<GUINumberRule>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PutGUINumberRulesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PutGUINumberRulesRequest interface.
 */
export function instanceOfPutGUINumberRulesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PutGUINumberRulesRequestFromJSON(json: any): PutGUINumberRulesRequest {
    return PutGUINumberRulesRequestFromJSONTyped(json, false);
}

export function PutGUINumberRulesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutGUINumberRulesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'rules': !exists(json, 'rules') ? undefined : ((json['rules'] as Array<any>).map(GUINumberRuleFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PutGUINumberRulesRequestToJSON(value?: PutGUINumberRulesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'rules': value.rules === undefined ? undefined : ((value.rules as Array<any>).map(GUINumberRuleToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

