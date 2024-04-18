/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the AssociatedBillInfoType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AssociatedBillInfoType{}

// AssociatedBillInfoType Associated Bill info.
type AssociatedBillInfoType struct {
	// The Fiscal Folio Bill Number(from a Fiscal System) of the original bill for which the Credit Bill is being generated.
	AssociatedBillFiscalBillNumber *string `json:"associatedBillFiscalBillNumber,omitempty"`
	// The folio type of the original bill for which the Credit Bill is being generated.
	AssociatedBillFolioType *string `json:"associatedBillFolioType,omitempty"`
	// The bill generation date of the original bill for which the Credit Bill is being generated.
	AssociatedBillGenerationDate *string `json:"associatedBillGenerationDate,omitempty"`
	// The bill number of the original bill for which the Credit Bill is being generated.
	AssociatedBillNumber *float32 `json:"associatedBillNumber,omitempty"`
	// The folio number queue(used in certain countries) of the original bill for which the Credit Bill is being generated.
	AssociatedBillQueueName *string `json:"associatedBillQueueName,omitempty"`
}

// NewAssociatedBillInfoType instantiates a new AssociatedBillInfoType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAssociatedBillInfoType() *AssociatedBillInfoType {
	this := AssociatedBillInfoType{}
	return &this
}

// NewAssociatedBillInfoTypeWithDefaults instantiates a new AssociatedBillInfoType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAssociatedBillInfoTypeWithDefaults() *AssociatedBillInfoType {
	this := AssociatedBillInfoType{}
	return &this
}

// GetAssociatedBillFiscalBillNumber returns the AssociatedBillFiscalBillNumber field value if set, zero value otherwise.
func (o *AssociatedBillInfoType) GetAssociatedBillFiscalBillNumber() string {
	if o == nil || IsNil(o.AssociatedBillFiscalBillNumber) {
		var ret string
		return ret
	}
	return *o.AssociatedBillFiscalBillNumber
}

// GetAssociatedBillFiscalBillNumberOk returns a tuple with the AssociatedBillFiscalBillNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociatedBillInfoType) GetAssociatedBillFiscalBillNumberOk() (*string, bool) {
	if o == nil || IsNil(o.AssociatedBillFiscalBillNumber) {
		return nil, false
	}
	return o.AssociatedBillFiscalBillNumber, true
}

// HasAssociatedBillFiscalBillNumber returns a boolean if a field has been set.
func (o *AssociatedBillInfoType) HasAssociatedBillFiscalBillNumber() bool {
	if o != nil && !IsNil(o.AssociatedBillFiscalBillNumber) {
		return true
	}

	return false
}

// SetAssociatedBillFiscalBillNumber gets a reference to the given string and assigns it to the AssociatedBillFiscalBillNumber field.
func (o *AssociatedBillInfoType) SetAssociatedBillFiscalBillNumber(v string) {
	o.AssociatedBillFiscalBillNumber = &v
}

// GetAssociatedBillFolioType returns the AssociatedBillFolioType field value if set, zero value otherwise.
func (o *AssociatedBillInfoType) GetAssociatedBillFolioType() string {
	if o == nil || IsNil(o.AssociatedBillFolioType) {
		var ret string
		return ret
	}
	return *o.AssociatedBillFolioType
}

// GetAssociatedBillFolioTypeOk returns a tuple with the AssociatedBillFolioType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociatedBillInfoType) GetAssociatedBillFolioTypeOk() (*string, bool) {
	if o == nil || IsNil(o.AssociatedBillFolioType) {
		return nil, false
	}
	return o.AssociatedBillFolioType, true
}

// HasAssociatedBillFolioType returns a boolean if a field has been set.
func (o *AssociatedBillInfoType) HasAssociatedBillFolioType() bool {
	if o != nil && !IsNil(o.AssociatedBillFolioType) {
		return true
	}

	return false
}

// SetAssociatedBillFolioType gets a reference to the given string and assigns it to the AssociatedBillFolioType field.
func (o *AssociatedBillInfoType) SetAssociatedBillFolioType(v string) {
	o.AssociatedBillFolioType = &v
}

// GetAssociatedBillGenerationDate returns the AssociatedBillGenerationDate field value if set, zero value otherwise.
func (o *AssociatedBillInfoType) GetAssociatedBillGenerationDate() string {
	if o == nil || IsNil(o.AssociatedBillGenerationDate) {
		var ret string
		return ret
	}
	return *o.AssociatedBillGenerationDate
}

// GetAssociatedBillGenerationDateOk returns a tuple with the AssociatedBillGenerationDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociatedBillInfoType) GetAssociatedBillGenerationDateOk() (*string, bool) {
	if o == nil || IsNil(o.AssociatedBillGenerationDate) {
		return nil, false
	}
	return o.AssociatedBillGenerationDate, true
}

// HasAssociatedBillGenerationDate returns a boolean if a field has been set.
func (o *AssociatedBillInfoType) HasAssociatedBillGenerationDate() bool {
	if o != nil && !IsNil(o.AssociatedBillGenerationDate) {
		return true
	}

	return false
}

// SetAssociatedBillGenerationDate gets a reference to the given string and assigns it to the AssociatedBillGenerationDate field.
func (o *AssociatedBillInfoType) SetAssociatedBillGenerationDate(v string) {
	o.AssociatedBillGenerationDate = &v
}

// GetAssociatedBillNumber returns the AssociatedBillNumber field value if set, zero value otherwise.
func (o *AssociatedBillInfoType) GetAssociatedBillNumber() float32 {
	if o == nil || IsNil(o.AssociatedBillNumber) {
		var ret float32
		return ret
	}
	return *o.AssociatedBillNumber
}

// GetAssociatedBillNumberOk returns a tuple with the AssociatedBillNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociatedBillInfoType) GetAssociatedBillNumberOk() (*float32, bool) {
	if o == nil || IsNil(o.AssociatedBillNumber) {
		return nil, false
	}
	return o.AssociatedBillNumber, true
}

// HasAssociatedBillNumber returns a boolean if a field has been set.
func (o *AssociatedBillInfoType) HasAssociatedBillNumber() bool {
	if o != nil && !IsNil(o.AssociatedBillNumber) {
		return true
	}

	return false
}

// SetAssociatedBillNumber gets a reference to the given float32 and assigns it to the AssociatedBillNumber field.
func (o *AssociatedBillInfoType) SetAssociatedBillNumber(v float32) {
	o.AssociatedBillNumber = &v
}

// GetAssociatedBillQueueName returns the AssociatedBillQueueName field value if set, zero value otherwise.
func (o *AssociatedBillInfoType) GetAssociatedBillQueueName() string {
	if o == nil || IsNil(o.AssociatedBillQueueName) {
		var ret string
		return ret
	}
	return *o.AssociatedBillQueueName
}

// GetAssociatedBillQueueNameOk returns a tuple with the AssociatedBillQueueName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AssociatedBillInfoType) GetAssociatedBillQueueNameOk() (*string, bool) {
	if o == nil || IsNil(o.AssociatedBillQueueName) {
		return nil, false
	}
	return o.AssociatedBillQueueName, true
}

// HasAssociatedBillQueueName returns a boolean if a field has been set.
func (o *AssociatedBillInfoType) HasAssociatedBillQueueName() bool {
	if o != nil && !IsNil(o.AssociatedBillQueueName) {
		return true
	}

	return false
}

// SetAssociatedBillQueueName gets a reference to the given string and assigns it to the AssociatedBillQueueName field.
func (o *AssociatedBillInfoType) SetAssociatedBillQueueName(v string) {
	o.AssociatedBillQueueName = &v
}

func (o AssociatedBillInfoType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AssociatedBillInfoType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AssociatedBillFiscalBillNumber) {
		toSerialize["associatedBillFiscalBillNumber"] = o.AssociatedBillFiscalBillNumber
	}
	if !IsNil(o.AssociatedBillFolioType) {
		toSerialize["associatedBillFolioType"] = o.AssociatedBillFolioType
	}
	if !IsNil(o.AssociatedBillGenerationDate) {
		toSerialize["associatedBillGenerationDate"] = o.AssociatedBillGenerationDate
	}
	if !IsNil(o.AssociatedBillNumber) {
		toSerialize["associatedBillNumber"] = o.AssociatedBillNumber
	}
	if !IsNil(o.AssociatedBillQueueName) {
		toSerialize["associatedBillQueueName"] = o.AssociatedBillQueueName
	}
	return toSerialize, nil
}

type NullableAssociatedBillInfoType struct {
	value *AssociatedBillInfoType
	isSet bool
}

func (v NullableAssociatedBillInfoType) Get() *AssociatedBillInfoType {
	return v.value
}

func (v *NullableAssociatedBillInfoType) Set(val *AssociatedBillInfoType) {
	v.value = val
	v.isSet = true
}

func (v NullableAssociatedBillInfoType) IsSet() bool {
	return v.isSet
}

func (v *NullableAssociatedBillInfoType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAssociatedBillInfoType(val *AssociatedBillInfoType) *NullableAssociatedBillInfoType {
	return &NullableAssociatedBillInfoType{value: val, isSet: true}
}

func (v NullableAssociatedBillInfoType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAssociatedBillInfoType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

