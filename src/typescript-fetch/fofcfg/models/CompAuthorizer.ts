/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CompAuthorizerType } from './CompAuthorizerType';
import {
    CompAuthorizerTypeFromJSON,
    CompAuthorizerTypeFromJSONTyped,
    CompAuthorizerTypeToJSON,
} from './CompAuthorizerType';
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
 * @interface CompAuthorizer
 */
export interface CompAuthorizer {
    /**
     * 
     * @type {CompAuthorizerType}
     * @memberof CompAuthorizer
     */
    criteria?: CompAuthorizerType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CompAuthorizer
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CompAuthorizer
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CompAuthorizer interface.
 */
export function instanceOfCompAuthorizer(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompAuthorizerFromJSON(json: any): CompAuthorizer {
    return CompAuthorizerFromJSONTyped(json, false);
}

export function CompAuthorizerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompAuthorizer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : CompAuthorizerTypeFromJSON(json['criteria']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CompAuthorizerToJSON(value?: CompAuthorizer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': CompAuthorizerTypeToJSON(value.criteria),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

