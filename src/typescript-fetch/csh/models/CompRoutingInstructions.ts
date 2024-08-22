/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
import type { ResvRoutingInfoType } from './ResvRoutingInfoType';
import {
    ResvRoutingInfoTypeFromJSON,
    ResvRoutingInfoTypeFromJSONTyped,
    ResvRoutingInfoTypeToJSON,
} from './ResvRoutingInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object containing comp routing instructions for a reservation .
 * @export
 * @interface CompRoutingInstructions
 */
export interface CompRoutingInstructions {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof CompRoutingInstructions
     */
    links?: Array<InstanceLink>;
    /**
     * A comp routing info object
     * @type {Array<ResvRoutingInfoType>}
     * @memberof CompRoutingInstructions
     */
    resvRoutingInstructions?: Array<ResvRoutingInfoType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof CompRoutingInstructions
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the CompRoutingInstructions interface.
 */
export function instanceOfCompRoutingInstructions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompRoutingInstructionsFromJSON(json: any): CompRoutingInstructions {
    return CompRoutingInstructionsFromJSONTyped(json, false);
}

export function CompRoutingInstructionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompRoutingInstructions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'resvRoutingInstructions': !exists(json, 'resvRoutingInstructions') ? undefined : ((json['resvRoutingInstructions'] as Array<any>).map(ResvRoutingInfoTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function CompRoutingInstructionsToJSON(value?: CompRoutingInstructions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'resvRoutingInstructions': value.resvRoutingInstructions === undefined ? undefined : ((value.resvRoutingInstructions as Array<any>).map(ResvRoutingInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

