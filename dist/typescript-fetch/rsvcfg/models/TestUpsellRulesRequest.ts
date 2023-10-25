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
import type { ConfigTestUpsellRuleSearchType } from './ConfigTestUpsellRuleSearchType';
import {
    ConfigTestUpsellRuleSearchTypeFromJSON,
    ConfigTestUpsellRuleSearchTypeFromJSONTyped,
    ConfigTestUpsellRuleSearchTypeToJSON,
} from './ConfigTestUpsellRuleSearchType';
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
 * @interface TestUpsellRulesRequest
 */
export interface TestUpsellRulesRequest {
    /**
     * 
     * @type {ConfigTestUpsellRuleSearchType}
     * @memberof TestUpsellRulesRequest
     */
    criteria?: ConfigTestUpsellRuleSearchType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TestUpsellRulesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TestUpsellRulesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TestUpsellRulesRequest interface.
 */
export function instanceOfTestUpsellRulesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TestUpsellRulesRequestFromJSON(json: any): TestUpsellRulesRequest {
    return TestUpsellRulesRequestFromJSONTyped(json, false);
}

export function TestUpsellRulesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestUpsellRulesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : ConfigTestUpsellRuleSearchTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TestUpsellRulesRequestToJSON(value?: TestUpsellRulesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': ConfigTestUpsellRuleSearchTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

