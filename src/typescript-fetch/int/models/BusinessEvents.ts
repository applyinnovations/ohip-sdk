/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Processor API
 * APIs to get Business Events generated in OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BusinessEventDataType } from './BusinessEventDataType';
import {
    BusinessEventDataTypeFromJSON,
    BusinessEventDataTypeFromJSONTyped,
    BusinessEventDataTypeToJSON,
} from './BusinessEventDataType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Provides business event message dequeued from BE queue as response
 * @export
 * @interface BusinessEvents
 */
export interface BusinessEvents {
    /**
     * List of BusinessEvents dequeued for given external system
     * @type {Array<BusinessEventDataType>}
     * @memberof BusinessEvents
     */
    businessEventData?: Array<BusinessEventDataType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof BusinessEvents
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {WarningsType}
     * @memberof BusinessEvents
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the BusinessEvents interface.
 */
export function instanceOfBusinessEvents(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BusinessEventsFromJSON(json: any): BusinessEvents {
    return BusinessEventsFromJSONTyped(json, false);
}

export function BusinessEventsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BusinessEvents {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'businessEventData': !exists(json, 'businessEventData') ? undefined : ((json['businessEventData'] as Array<any>).map(BusinessEventDataTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function BusinessEventsToJSON(value?: BusinessEvents | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'businessEventData': value.businessEventData === undefined ? undefined : ((value.businessEventData as Array<any>).map(BusinessEventDataTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
