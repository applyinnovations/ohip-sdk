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
/**
 * Specifies the format mask for the parameter.
 * @export
 */
export declare const ParamFormatMaskType: {
    readonly None: "None";
    readonly Upper: "Upper";
    readonly Lower: "Lower";
};
export type ParamFormatMaskType = typeof ParamFormatMaskType[keyof typeof ParamFormatMaskType];
export declare function ParamFormatMaskTypeFromJSON(json: any): ParamFormatMaskType;
export declare function ParamFormatMaskTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParamFormatMaskType;
export declare function ParamFormatMaskTypeToJSON(value?: ParamFormatMaskType | null): any;
