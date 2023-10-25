/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the CancellationDetailsType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CancellationDetailsType{}

// CancellationDetailsType This type holds information regarding booking status change to Cancel/ Lost.
type CancellationDetailsType struct {
	CancellationCode *CodeDescriptionType `json:"cancellationCode,omitempty"`
	// Date on which block was canceled.
	CancellationDate *string `json:"cancellationDate,omitempty"`
	// Cancellation information provided by the customer.
	CancellationInfo *string `json:"cancellationInfo,omitempty"`
	CancellationNumber *UniqueIDType `json:"cancellationNumber,omitempty"`
	// Alternate destination where the business is being taken.
	Destination *string `json:"destination,omitempty"`
	// Holds the name of the property or competitor brand business was lost to.
	LostToProperty *string `json:"lostToProperty,omitempty"`
}

// NewCancellationDetailsType instantiates a new CancellationDetailsType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCancellationDetailsType() *CancellationDetailsType {
	this := CancellationDetailsType{}
	return &this
}

// NewCancellationDetailsTypeWithDefaults instantiates a new CancellationDetailsType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCancellationDetailsTypeWithDefaults() *CancellationDetailsType {
	this := CancellationDetailsType{}
	return &this
}

// GetCancellationCode returns the CancellationCode field value if set, zero value otherwise.
func (o *CancellationDetailsType) GetCancellationCode() CodeDescriptionType {
	if o == nil || IsNil(o.CancellationCode) {
		var ret CodeDescriptionType
		return ret
	}
	return *o.CancellationCode
}

// GetCancellationCodeOk returns a tuple with the CancellationCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancellationDetailsType) GetCancellationCodeOk() (*CodeDescriptionType, bool) {
	if o == nil || IsNil(o.CancellationCode) {
		return nil, false
	}
	return o.CancellationCode, true
}

// HasCancellationCode returns a boolean if a field has been set.
func (o *CancellationDetailsType) HasCancellationCode() bool {
	if o != nil && !IsNil(o.CancellationCode) {
		return true
	}

	return false
}

// SetCancellationCode gets a reference to the given CodeDescriptionType and assigns it to the CancellationCode field.
func (o *CancellationDetailsType) SetCancellationCode(v CodeDescriptionType) {
	o.CancellationCode = &v
}

// GetCancellationDate returns the CancellationDate field value if set, zero value otherwise.
func (o *CancellationDetailsType) GetCancellationDate() string {
	if o == nil || IsNil(o.CancellationDate) {
		var ret string
		return ret
	}
	return *o.CancellationDate
}

// GetCancellationDateOk returns a tuple with the CancellationDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancellationDetailsType) GetCancellationDateOk() (*string, bool) {
	if o == nil || IsNil(o.CancellationDate) {
		return nil, false
	}
	return o.CancellationDate, true
}

// HasCancellationDate returns a boolean if a field has been set.
func (o *CancellationDetailsType) HasCancellationDate() bool {
	if o != nil && !IsNil(o.CancellationDate) {
		return true
	}

	return false
}

// SetCancellationDate gets a reference to the given string and assigns it to the CancellationDate field.
func (o *CancellationDetailsType) SetCancellationDate(v string) {
	o.CancellationDate = &v
}

// GetCancellationInfo returns the CancellationInfo field value if set, zero value otherwise.
func (o *CancellationDetailsType) GetCancellationInfo() string {
	if o == nil || IsNil(o.CancellationInfo) {
		var ret string
		return ret
	}
	return *o.CancellationInfo
}

// GetCancellationInfoOk returns a tuple with the CancellationInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancellationDetailsType) GetCancellationInfoOk() (*string, bool) {
	if o == nil || IsNil(o.CancellationInfo) {
		return nil, false
	}
	return o.CancellationInfo, true
}

// HasCancellationInfo returns a boolean if a field has been set.
func (o *CancellationDetailsType) HasCancellationInfo() bool {
	if o != nil && !IsNil(o.CancellationInfo) {
		return true
	}

	return false
}

// SetCancellationInfo gets a reference to the given string and assigns it to the CancellationInfo field.
func (o *CancellationDetailsType) SetCancellationInfo(v string) {
	o.CancellationInfo = &v
}

// GetCancellationNumber returns the CancellationNumber field value if set, zero value otherwise.
func (o *CancellationDetailsType) GetCancellationNumber() UniqueIDType {
	if o == nil || IsNil(o.CancellationNumber) {
		var ret UniqueIDType
		return ret
	}
	return *o.CancellationNumber
}

// GetCancellationNumberOk returns a tuple with the CancellationNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancellationDetailsType) GetCancellationNumberOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.CancellationNumber) {
		return nil, false
	}
	return o.CancellationNumber, true
}

// HasCancellationNumber returns a boolean if a field has been set.
func (o *CancellationDetailsType) HasCancellationNumber() bool {
	if o != nil && !IsNil(o.CancellationNumber) {
		return true
	}

	return false
}

// SetCancellationNumber gets a reference to the given UniqueIDType and assigns it to the CancellationNumber field.
func (o *CancellationDetailsType) SetCancellationNumber(v UniqueIDType) {
	o.CancellationNumber = &v
}

// GetDestination returns the Destination field value if set, zero value otherwise.
func (o *CancellationDetailsType) GetDestination() string {
	if o == nil || IsNil(o.Destination) {
		var ret string
		return ret
	}
	return *o.Destination
}

// GetDestinationOk returns a tuple with the Destination field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancellationDetailsType) GetDestinationOk() (*string, bool) {
	if o == nil || IsNil(o.Destination) {
		return nil, false
	}
	return o.Destination, true
}

// HasDestination returns a boolean if a field has been set.
func (o *CancellationDetailsType) HasDestination() bool {
	if o != nil && !IsNil(o.Destination) {
		return true
	}

	return false
}

// SetDestination gets a reference to the given string and assigns it to the Destination field.
func (o *CancellationDetailsType) SetDestination(v string) {
	o.Destination = &v
}

// GetLostToProperty returns the LostToProperty field value if set, zero value otherwise.
func (o *CancellationDetailsType) GetLostToProperty() string {
	if o == nil || IsNil(o.LostToProperty) {
		var ret string
		return ret
	}
	return *o.LostToProperty
}

// GetLostToPropertyOk returns a tuple with the LostToProperty field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CancellationDetailsType) GetLostToPropertyOk() (*string, bool) {
	if o == nil || IsNil(o.LostToProperty) {
		return nil, false
	}
	return o.LostToProperty, true
}

// HasLostToProperty returns a boolean if a field has been set.
func (o *CancellationDetailsType) HasLostToProperty() bool {
	if o != nil && !IsNil(o.LostToProperty) {
		return true
	}

	return false
}

// SetLostToProperty gets a reference to the given string and assigns it to the LostToProperty field.
func (o *CancellationDetailsType) SetLostToProperty(v string) {
	o.LostToProperty = &v
}

func (o CancellationDetailsType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CancellationDetailsType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CancellationCode) {
		toSerialize["cancellationCode"] = o.CancellationCode
	}
	if !IsNil(o.CancellationDate) {
		toSerialize["cancellationDate"] = o.CancellationDate
	}
	if !IsNil(o.CancellationInfo) {
		toSerialize["cancellationInfo"] = o.CancellationInfo
	}
	if !IsNil(o.CancellationNumber) {
		toSerialize["cancellationNumber"] = o.CancellationNumber
	}
	if !IsNil(o.Destination) {
		toSerialize["destination"] = o.Destination
	}
	if !IsNil(o.LostToProperty) {
		toSerialize["lostToProperty"] = o.LostToProperty
	}
	return toSerialize, nil
}

type NullableCancellationDetailsType struct {
	value *CancellationDetailsType
	isSet bool
}

func (v NullableCancellationDetailsType) Get() *CancellationDetailsType {
	return v.value
}

func (v *NullableCancellationDetailsType) Set(val *CancellationDetailsType) {
	v.value = val
	v.isSet = true
}

func (v NullableCancellationDetailsType) IsSet() bool {
	return v.isSet
}

func (v *NullableCancellationDetailsType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCancellationDetailsType(val *CancellationDetailsType) *NullableCancellationDetailsType {
	return &NullableCancellationDetailsType{value: val, isSet: true}
}

func (v NullableCancellationDetailsType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCancellationDetailsType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


