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
/**
 * Information about a Printer which can be used to print a Folio.
 * @export
 * @interface FolioPrinterType
 */
export interface FolioPrinterType {
    /**
     * The Printer Device name.
     * @type {string}
     * @memberof FolioPrinterType
     */
    device?: string;
    /**
     * Folio Queue name for which this printer is being used.
     * @type {string}
     * @memberof FolioPrinterType
     */
    folioQueueName?: string;
    /**
     * The Folio Type for which this printer is being used.
     * @type {string}
     * @memberof FolioPrinterType
     */
    folioType?: string;
    /**
     * Description of the Printer
     * @type {string}
     * @memberof FolioPrinterType
     */
    printerName?: string;
}

/**
 * Check if a given object implements the FolioPrinterType interface.
 */
export function instanceOfFolioPrinterType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FolioPrinterTypeFromJSON(json: any): FolioPrinterType {
    return FolioPrinterTypeFromJSONTyped(json, false);
}

export function FolioPrinterTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioPrinterType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'device': !exists(json, 'device') ? undefined : json['device'],
        'folioQueueName': !exists(json, 'folioQueueName') ? undefined : json['folioQueueName'],
        'folioType': !exists(json, 'folioType') ? undefined : json['folioType'],
        'printerName': !exists(json, 'printerName') ? undefined : json['printerName'],
    };
}

export function FolioPrinterTypeToJSON(value?: FolioPrinterType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'device': value.device,
        'folioQueueName': value.folioQueueName,
        'folioType': value.folioType,
        'printerName': value.printerName,
    };
}

