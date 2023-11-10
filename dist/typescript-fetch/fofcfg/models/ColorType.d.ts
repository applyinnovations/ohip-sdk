/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Color configuration type. This color configuration provides a visual category of entities.
 * @export
 */
export declare const ColorType: {
    readonly Red: "Red";
    readonly DarkRed: "DarkRed";
    readonly Green: "Green";
    readonly DarkGreen: "DarkGreen";
    readonly LightGreen: "LightGreen";
    readonly Orange: "Orange";
    readonly White: "White";
    readonly Yellow: "Yellow";
    readonly DarkYellow: "DarkYellow";
    readonly Purple: "Purple";
    readonly Brown: "Brown";
    readonly Gray: "Gray";
    readonly Aqua: "Aqua";
    readonly Chocolate: "Chocolate";
    readonly Blue: "Blue";
    readonly LightBlue: "LightBlue";
    readonly DarkBlue: "DarkBlue";
    readonly Cyan: "Cyan";
    readonly DarkCyan: "DarkCyan";
    readonly Magenta: "Magenta";
    readonly DarkMagenta: "DarkMagenta";
    readonly Black: "Black";
};
export type ColorType = typeof ColorType[keyof typeof ColorType];
export declare function ColorTypeFromJSON(json: any): ColorType;
export declare function ColorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColorType;
export declare function ColorTypeToJSON(value?: ColorType | null): any;
