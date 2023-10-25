/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the ErrorType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ErrorType{}

// ErrorType Standard way to indicate that an error occurred during the processing of an OpenTravel message. If the message successfully processes, but there are business errors, those errors should be passed in the warning element.
type ErrorType struct {
	// If present, this refers to a table of coded values exchanged between applications to identify errors or warnings. Refer to OpenTravel Code List Error Codes (ERR).
	Code *string `json:"code,omitempty"`
	// If present, this URL refers to an online description of the error that occurred.
	DocURL *string `json:"docURL,omitempty"`
	// Language identification.
	Language *string `json:"language,omitempty"`
	// An XPath expression that selects all the nodes whose data caused this error. Further, this expression should have an additional contraint which contains the data of the node. This will provide the offending data back to systems that cannot maintain the original message.
	NodeList *string `json:"nodeList,omitempty"`
	// If present, this attribute allows for batch processing and the identification of the record that failed amongst a group of records. This value may contain a concatenation of a unique failed transaction ID with specific record(s) associated with that transaction.
	RecordId *string `json:"recordId,omitempty"`
	// An abbreviated version of the error in textual format.
	ShortText *string `json:"shortText,omitempty"`
	// If present, recommended values are those enumerated in the OTA_ErrorRS, (NotProcessed Incomplete Complete Unknown) however, the data type is designated as string data, recognizing that trading partners may identify additional status conditions not included in the enumeration.
	Status *string `json:"status,omitempty"`
	// If present, this attribute may identify an unknown or misspelled tag that caused an error in processing. It is recommended that the Tag attribute use XPath notation to identify the location of a tag in the event that more than one tag of the same name is present in the document. Alternatively, the tag name alone can be used to identify missing data [Type=ReqFieldMissing].
	Tag *string `json:"tag,omitempty"`
	// The Warning element MUST contain the Type attribute that uses a recommended set of values to indicate the warning type. The validating XSD can expect to accept values that it has NOT been explicitly coded for and process them by using Type =\"Unknown\". Refer to OpenTravel Code List Error Warning Type (EWT).
	Type *string `json:"type,omitempty"`
	// Property Value
	Value *string `json:"value,omitempty"`
}

// NewErrorType instantiates a new ErrorType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewErrorType() *ErrorType {
	this := ErrorType{}
	return &this
}

// NewErrorTypeWithDefaults instantiates a new ErrorType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewErrorTypeWithDefaults() *ErrorType {
	this := ErrorType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ErrorType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ErrorType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ErrorType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *ErrorType) SetCode(v string) {
	o.Code = &v
}

// GetDocURL returns the DocURL field value if set, zero value otherwise.
func (o *ErrorType) GetDocURL() string {
	if o == nil || IsNil(o.DocURL) {
		var ret string
		return ret
	}
	return *o.DocURL
}

// GetDocURLOk returns a tuple with the DocURL field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ErrorType) GetDocURLOk() (*string, bool) {
	if o == nil || IsNil(o.DocURL) {
		return nil, false
	}
	return o.DocURL, true
}

// HasDocURL returns a boolean if a field has been set.
func (o *ErrorType) HasDocURL() bool {
	if o != nil && !IsNil(o.DocURL) {
		return true
	}

	return false
}

// SetDocURL gets a reference to the given string and assigns it to the DocURL field.
func (o *ErrorType) SetDocURL(v string) {
	o.DocURL = &v
}

// GetLanguage returns the Language field value if set, zero value otherwise.
func (o *ErrorType) GetLanguage() string {
	if o == nil || IsNil(o.Language) {
		var ret string
		return ret
	}
	return *o.Language
}

// GetLanguageOk returns a tuple with the Language field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ErrorType) GetLanguageOk() (*string, bool) {
	if o == nil || IsNil(o.Language) {
		return nil, false
	}
	return o.Language, true
}

// HasLanguage returns a boolean if a field has been set.
func (o *ErrorType) HasLanguage() bool {
	if o != nil && !IsNil(o.Language) {
		return true
	}

	return false
}

// SetLanguage gets a reference to the given string and assigns it to the Language field.
func (o *ErrorType) SetLanguage(v string) {
	o.Language = &v
}

// GetNodeList returns the NodeList field value if set, zero value otherwise.
func (o *ErrorType) GetNodeList() string {
	if o == nil || IsNil(o.NodeList) {
		var ret string
		return ret
	}
	return *o.NodeList
}

// GetNodeListOk returns a tuple with the NodeList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ErrorType) GetNodeListOk() (*string, bool) {
	if o == nil || IsNil(o.NodeList) {
		return nil, false
	}
	return o.NodeList, true
}

// HasNodeList returns a boolean if a field has been set.
func (o *ErrorType) HasNodeList() bool {
	if o != nil && !IsNil(o.NodeList) {
		return true
	}

	return false
}

// SetNodeList gets a reference to the given string and assigns it to the NodeList field.
func (o *ErrorType) SetNodeList(v string) {
	o.NodeList = &v
}

// GetRecordId returns the RecordId field value if set, zero value otherwise.
func (o *ErrorType) GetRecordId() string {
	if o == nil || IsNil(o.RecordId) {
		var ret string
		return ret
	}
	return *o.RecordId
}

// GetRecordIdOk returns a tuple with the RecordId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ErrorType) GetRecordIdOk() (*string, bool) {
	if o == nil || IsNil(o.RecordId) {
		return nil, false
	}
	return o.RecordId, true
}

// HasRecordId returns a boolean if a field has been set.
func (o *ErrorType) HasRecordId() bool {
	if o != nil && !IsNil(o.RecordId) {
		return true
	}

	return false
}

// SetRecordId gets a reference to the given string and assigns it to the RecordId field.
func (o *ErrorType) SetRecordId(v string) {
	o.RecordId = &v
}

// GetShortText returns the ShortText field value if set, zero value otherwise.
func (o *ErrorType) GetShortText() string {
	if o == nil || IsNil(o.ShortText) {
		var ret string
		return ret
	}
	return *o.ShortText
}

// GetShortTextOk returns a tuple with the ShortText field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ErrorType) GetShortTextOk() (*string, bool) {
	if o == nil || IsNil(o.ShortText) {
		return nil, false
	}
	return o.ShortText, true
}

// HasShortText returns a boolean if a field has been set.
func (o *ErrorType) HasShortText() bool {
	if o != nil && !IsNil(o.ShortText) {
		return true
	}

	return false
}

// SetShortText gets a reference to the given string and assigns it to the ShortText field.
func (o *ErrorType) SetShortText(v string) {
	o.ShortText = &v
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *ErrorType) GetStatus() string {
	if o == nil || IsNil(o.Status) {
		var ret string
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ErrorType) GetStatusOk() (*string, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *ErrorType) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given string and assigns it to the Status field.
func (o *ErrorType) SetStatus(v string) {
	o.Status = &v
}

// GetTag returns the Tag field value if set, zero value otherwise.
func (o *ErrorType) GetTag() string {
	if o == nil || IsNil(o.Tag) {
		var ret string
		return ret
	}
	return *o.Tag
}

// GetTagOk returns a tuple with the Tag field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ErrorType) GetTagOk() (*string, bool) {
	if o == nil || IsNil(o.Tag) {
		return nil, false
	}
	return o.Tag, true
}

// HasTag returns a boolean if a field has been set.
func (o *ErrorType) HasTag() bool {
	if o != nil && !IsNil(o.Tag) {
		return true
	}

	return false
}

// SetTag gets a reference to the given string and assigns it to the Tag field.
func (o *ErrorType) SetTag(v string) {
	o.Tag = &v
}

// GetType returns the Type field value if set, zero value otherwise.
func (o *ErrorType) GetType() string {
	if o == nil || IsNil(o.Type) {
		var ret string
		return ret
	}
	return *o.Type
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ErrorType) GetTypeOk() (*string, bool) {
	if o == nil || IsNil(o.Type) {
		return nil, false
	}
	return o.Type, true
}

// HasType returns a boolean if a field has been set.
func (o *ErrorType) HasType() bool {
	if o != nil && !IsNil(o.Type) {
		return true
	}

	return false
}

// SetType gets a reference to the given string and assigns it to the Type field.
func (o *ErrorType) SetType(v string) {
	o.Type = &v
}

// GetValue returns the Value field value if set, zero value otherwise.
func (o *ErrorType) GetValue() string {
	if o == nil || IsNil(o.Value) {
		var ret string
		return ret
	}
	return *o.Value
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ErrorType) GetValueOk() (*string, bool) {
	if o == nil || IsNil(o.Value) {
		return nil, false
	}
	return o.Value, true
}

// HasValue returns a boolean if a field has been set.
func (o *ErrorType) HasValue() bool {
	if o != nil && !IsNil(o.Value) {
		return true
	}

	return false
}

// SetValue gets a reference to the given string and assigns it to the Value field.
func (o *ErrorType) SetValue(v string) {
	o.Value = &v
}

func (o ErrorType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ErrorType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.DocURL) {
		toSerialize["docURL"] = o.DocURL
	}
	if !IsNil(o.Language) {
		toSerialize["language"] = o.Language
	}
	if !IsNil(o.NodeList) {
		toSerialize["nodeList"] = o.NodeList
	}
	if !IsNil(o.RecordId) {
		toSerialize["recordId"] = o.RecordId
	}
	if !IsNil(o.ShortText) {
		toSerialize["shortText"] = o.ShortText
	}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	if !IsNil(o.Tag) {
		toSerialize["tag"] = o.Tag
	}
	if !IsNil(o.Type) {
		toSerialize["type"] = o.Type
	}
	if !IsNil(o.Value) {
		toSerialize["value"] = o.Value
	}
	return toSerialize, nil
}

type NullableErrorType struct {
	value *ErrorType
	isSet bool
}

func (v NullableErrorType) Get() *ErrorType {
	return v.value
}

func (v *NullableErrorType) Set(val *ErrorType) {
	v.value = val
	v.isSet = true
}

func (v NullableErrorType) IsSet() bool {
	return v.isSet
}

func (v *NullableErrorType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableErrorType(val *ErrorType) *NullableErrorType {
	return &NullableErrorType{value: val, isSet: true}
}

func (v NullableErrorType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableErrorType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


