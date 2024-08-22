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
/**
 * Data Card System
 * @export
 */
export declare const IfcMenuTypeType: {
    readonly Cas: "Cas";
    readonly Kss: "Kss";
    readonly Mbs: "Mbs";
    readonly Pbx: "Pbx";
    readonly Pos: "Pos";
    readonly Vss: "Vss";
    readonly Dcs: "Dcs";
};
export type IfcMenuTypeType = typeof IfcMenuTypeType[keyof typeof IfcMenuTypeType];
export declare function IfcMenuTypeTypeFromJSON(json: any): IfcMenuTypeType;
export declare function IfcMenuTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IfcMenuTypeType;
export declare function IfcMenuTypeTypeToJSON(value?: IfcMenuTypeType | null): any;
