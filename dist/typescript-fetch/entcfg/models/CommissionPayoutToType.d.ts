/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
export declare const CommissionPayoutToType: {
    readonly TravelAgent: "TravelAgent";
    readonly Source: "Source";
    readonly TravelAgentSource: "TravelAgentSource";
    readonly None: "None";
};
export type CommissionPayoutToType = typeof CommissionPayoutToType[keyof typeof CommissionPayoutToType];
export declare function CommissionPayoutToTypeFromJSON(json: any): CommissionPayoutToType;
export declare function CommissionPayoutToTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommissionPayoutToType;
export declare function CommissionPayoutToTypeToJSON(value?: CommissionPayoutToType | null): any;
