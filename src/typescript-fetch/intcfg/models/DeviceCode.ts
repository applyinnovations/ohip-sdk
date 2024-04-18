/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const DeviceCode = {
    TtiScannerMobile: 'TtiScannerMobile',
    TtiScannerDesktop: 'TtiScannerDesktop',
    SamsotechScanner: 'SamsotechScanner',
    GenScannerDesktop: 'GenScannerDesktop',
    GenScannerMobile: 'GenScannerMobile',
    ChipAndPin: 'ChipAndPin',
    FiscalTerminal: 'FiscalTerminal',
    Device: 'Device'
} as const;
export type DeviceCode = typeof DeviceCode[keyof typeof DeviceCode];


export function DeviceCodeFromJSON(json: any): DeviceCode {
    return DeviceCodeFromJSONTyped(json, false);
}

export function DeviceCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceCode {
    return json as DeviceCode;
}

export function DeviceCodeToJSON(value?: DeviceCode | null): any {
    return value as any;
}
