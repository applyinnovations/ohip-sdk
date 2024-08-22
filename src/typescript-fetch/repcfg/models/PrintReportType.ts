/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Report Master Data Management API
 * APIs catering to the managing export master data configuration in a hotel.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PrintDestinationType } from './PrintDestinationType';
import {
    PrintDestinationTypeFromJSON,
    PrintDestinationTypeFromJSONTyped,
    PrintDestinationTypeToJSON,
} from './PrintDestinationType';

/**
 * Details to print or send report to printer, email or fax.
 * @export
 * @interface PrintReportType
 */
export interface PrintReportType {
    /**
     * 
     * @type {PrintDestinationType}
     * @memberof PrintReportType
     */
    destination?: PrintDestinationType;
    /**
     * Number of copies to be printed or sent.
     * @type {number}
     * @memberof PrintReportType
     */
    copies?: number;
    /**
     * Indicates whether report has already been sent or not.
     * @type {boolean}
     * @memberof PrintReportType
     */
    sent?: boolean;
}

/**
 * Check if a given object implements the PrintReportType interface.
 */
export function instanceOfPrintReportType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PrintReportTypeFromJSON(json: any): PrintReportType {
    return PrintReportTypeFromJSONTyped(json, false);
}

export function PrintReportTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrintReportType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'destination': !exists(json, 'destination') ? undefined : PrintDestinationTypeFromJSON(json['destination']),
        'copies': !exists(json, 'copies') ? undefined : json['copies'],
        'sent': !exists(json, 'sent') ? undefined : json['sent'],
    };
}

export function PrintReportTypeToJSON(value?: PrintReportType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'destination': PrintDestinationTypeToJSON(value.destination),
        'copies': value.copies,
        'sent': value.sent,
    };
}

