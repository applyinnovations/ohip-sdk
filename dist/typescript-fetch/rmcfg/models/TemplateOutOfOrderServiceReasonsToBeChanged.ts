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
import type { TemplateOutOfOrderServiceReasonType } from './TemplateOutOfOrderServiceReasonType';
import {
    TemplateOutOfOrderServiceReasonTypeFromJSON,
    TemplateOutOfOrderServiceReasonTypeFromJSONTyped,
    TemplateOutOfOrderServiceReasonTypeToJSON,
} from './TemplateOutOfOrderServiceReasonType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for modifying template out of order/service reasons.
 * @export
 * @interface TemplateOutOfOrderServiceReasonsToBeChanged
 */
export interface TemplateOutOfOrderServiceReasonsToBeChanged {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof TemplateOutOfOrderServiceReasonsToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Template of out of order/service reason details.
     * @type {Array<TemplateOutOfOrderServiceReasonType>}
     * @memberof TemplateOutOfOrderServiceReasonsToBeChanged
     */
    templateOutOfOrderServiceReasons?: Array<TemplateOutOfOrderServiceReasonType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplateOutOfOrderServiceReasonsToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the TemplateOutOfOrderServiceReasonsToBeChanged interface.
 */
export function instanceOfTemplateOutOfOrderServiceReasonsToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateOutOfOrderServiceReasonsToBeChangedFromJSON(json: any): TemplateOutOfOrderServiceReasonsToBeChanged {
    return TemplateOutOfOrderServiceReasonsToBeChangedFromJSONTyped(json, false);
}

export function TemplateOutOfOrderServiceReasonsToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateOutOfOrderServiceReasonsToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'templateOutOfOrderServiceReasons': !exists(json, 'templateOutOfOrderServiceReasons') ? undefined : ((json['templateOutOfOrderServiceReasons'] as Array<any>).map(TemplateOutOfOrderServiceReasonTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function TemplateOutOfOrderServiceReasonsToBeChangedToJSON(value?: TemplateOutOfOrderServiceReasonsToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'templateOutOfOrderServiceReasons': value.templateOutOfOrderServiceReasons === undefined ? undefined : ((value.templateOutOfOrderServiceReasons as Array<any>).map(TemplateOutOfOrderServiceReasonTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

