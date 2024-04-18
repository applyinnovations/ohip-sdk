/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BookingStatusDetailType } from './BookingStatusDetailType';
import {
    BookingStatusDetailTypeFromJSON,
    BookingStatusDetailTypeFromJSONTyped,
    BookingStatusDetailTypeToJSON,
} from './BookingStatusDetailType';
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
 * Response object for FetchNextBlockStatus operation.
 * @export
 * @interface NextBlockStatus
 */
export interface NextBlockStatus {
    /**
     * Next booking status of the business block.
     * @type {Array<BookingStatusDetailType>}
     * @memberof NextBlockStatus
     */
    blockNextStatusList?: Array<BookingStatusDetailType>;
    /**
     * Next catering status of the business block.
     * @type {Array<BookingStatusDetailType>}
     * @memberof NextBlockStatus
     */
    cateringNextStatusList?: Array<BookingStatusDetailType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof NextBlockStatus
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof NextBlockStatus
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the NextBlockStatus interface.
 */
export function instanceOfNextBlockStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NextBlockStatusFromJSON(json: any): NextBlockStatus {
    return NextBlockStatusFromJSONTyped(json, false);
}

export function NextBlockStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): NextBlockStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockNextStatusList': !exists(json, 'blockNextStatusList') ? undefined : ((json['blockNextStatusList'] as Array<any>).map(BookingStatusDetailTypeFromJSON)),
        'cateringNextStatusList': !exists(json, 'cateringNextStatusList') ? undefined : ((json['cateringNextStatusList'] as Array<any>).map(BookingStatusDetailTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function NextBlockStatusToJSON(value?: NextBlockStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockNextStatusList': value.blockNextStatusList === undefined ? undefined : ((value.blockNextStatusList as Array<any>).map(BookingStatusDetailTypeToJSON)),
        'cateringNextStatusList': value.cateringNextStatusList === undefined ? undefined : ((value.cateringNextStatusList as Array<any>).map(BookingStatusDetailTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
