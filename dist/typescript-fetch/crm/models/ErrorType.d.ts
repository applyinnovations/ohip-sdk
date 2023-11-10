/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Standard way to indicate that an error occurred during the processing of an message. If the message successfully processes, but there are business errors, those errors should be passed in the warning element.
 * @export
 * @interface ErrorType
 */
export interface ErrorType {
    /**
     * If present, this refers to a table of coded values exchanged between applications to identify errors or warnings.
     * @type {string}
     * @memberof ErrorType
     */
    code?: string;
    /**
     * If present, this URL refers to an online description of the error that occurred.
     * @type {string}
     * @memberof ErrorType
     */
    docURL?: string;
    /**
     * Language identification.
     * @type {string}
     * @memberof ErrorType
     */
    language?: string;
    /**
     * An XPath expression that selects all the nodes whose data caused this error. Further, this expression should have an additional contraint which contains the data of the node. This will provide the offending data back to systems that cannot maintain the original message.
     * @type {string}
     * @memberof ErrorType
     */
    nodeList?: string;
    /**
     * If present, this attribute allows for batch processing and the identification of the record that failed amongst a group of records. This value may contain a concatenation of a unique failed transaction ID with specific record(s) associated with that transaction.
     * @type {string}
     * @memberof ErrorType
     */
    recordId?: string;
    /**
     * An abbreviated version of the error in textual format.
     * @type {string}
     * @memberof ErrorType
     */
    shortText?: string;
    /**
     * If present, recommended values are those enumerated in the ErrorRS, (NotProcessed Incomplete Complete Unknown) however, the data type is designated as string data, recognizing that trading partners may identify additional status conditions not included in the enumeration.
     * @type {string}
     * @memberof ErrorType
     */
    status?: string;
    /**
     * If present, this attribute may identify an unknown or misspelled tag that caused an error in processing. It is recommended that the Tag attribute use XPath notation to identify the location of a tag in the event that more than one tag of the same name is present in the document. Alternatively, the tag name alone can be used to identify missing data [Type=ReqFieldMissing].
     * @type {string}
     * @memberof ErrorType
     */
    tag?: string;
    /**
     * The Warning element MUST contain the Type attribute that uses a recommended set of values to indicate the warning type. The validating XSD can expect to accept values that it has NOT been explicitly coded for and process them by using Type ="Unknown".
     * @type {string}
     * @memberof ErrorType
     */
    type?: string;
    /**
     * Property Value
     * @type {string}
     * @memberof ErrorType
     */
    value?: string;
}
/**
 * Check if a given object implements the ErrorType interface.
 */
export declare function instanceOfErrorType(value: object): boolean;
export declare function ErrorTypeFromJSON(json: any): ErrorType;
export declare function ErrorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorType;
export declare function ErrorTypeToJSON(value?: ErrorType | null): any;
