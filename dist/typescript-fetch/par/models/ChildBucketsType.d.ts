/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Defines children counts with Age Qualifying Group(Child Bucket) classification.
 * @export
 * @interface ChildBucketsType
 */
export interface ChildBucketsType {
    /**
     * Number of children classified under the first Age Qualifying Group(Child Bucket#1).
     * @type {number}
     * @memberof ChildBucketsType
     */
    bucket1Count?: number;
    /**
     * Number of children classified under the second Age Qualifying Group(Child Bucket#2).
     * @type {number}
     * @memberof ChildBucketsType
     */
    bucket2Count?: number;
    /**
     * Number of children classified under the third Age Qualifying Group(Child Bucket#3).
     * @type {number}
     * @memberof ChildBucketsType
     */
    bucket3Count?: number;
    /**
     * Number of children classified under the fourth Age Qualifying Group(Child Bucket#4).
     * @type {number}
     * @memberof ChildBucketsType
     */
    bucket4Count?: number;
    /**
     * Number of children classified under the fifth Age Qualifying Group(Child Bucket#5).
     * @type {number}
     * @memberof ChildBucketsType
     */
    bucket5Count?: number;
}
/**
 * Check if a given object implements the ChildBucketsType interface.
 */
export declare function instanceOfChildBucketsType(value: object): boolean;
export declare function ChildBucketsTypeFromJSON(json: any): ChildBucketsType;
export declare function ChildBucketsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChildBucketsType;
export declare function ChildBucketsTypeToJSON(value?: ChildBucketsType | null): any;
