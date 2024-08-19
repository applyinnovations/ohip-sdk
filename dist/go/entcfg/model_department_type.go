/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the DepartmentType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DepartmentType{}

// DepartmentType Type provides department information.
type DepartmentType struct {
	// Property Code where the department belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// Department Code.
	DepartmentCode *string `json:"departmentCode,omitempty"`
	DepartmentName *TranslationTextType30 `json:"departmentName,omitempty"`
	// Display Sequence for the department.
	DisplaySequence *int32 `json:"displaySequence,omitempty"`
	// Department email address.
	Email *string `json:"email,omitempty"`
}

// NewDepartmentType instantiates a new DepartmentType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDepartmentType() *DepartmentType {
	this := DepartmentType{}
	return &this
}

// NewDepartmentTypeWithDefaults instantiates a new DepartmentType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDepartmentTypeWithDefaults() *DepartmentType {
	this := DepartmentType{}
	return &this
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *DepartmentType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepartmentType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *DepartmentType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *DepartmentType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetDepartmentCode returns the DepartmentCode field value if set, zero value otherwise.
func (o *DepartmentType) GetDepartmentCode() string {
	if o == nil || IsNil(o.DepartmentCode) {
		var ret string
		return ret
	}
	return *o.DepartmentCode
}

// GetDepartmentCodeOk returns a tuple with the DepartmentCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepartmentType) GetDepartmentCodeOk() (*string, bool) {
	if o == nil || IsNil(o.DepartmentCode) {
		return nil, false
	}
	return o.DepartmentCode, true
}

// HasDepartmentCode returns a boolean if a field has been set.
func (o *DepartmentType) HasDepartmentCode() bool {
	if o != nil && !IsNil(o.DepartmentCode) {
		return true
	}

	return false
}

// SetDepartmentCode gets a reference to the given string and assigns it to the DepartmentCode field.
func (o *DepartmentType) SetDepartmentCode(v string) {
	o.DepartmentCode = &v
}

// GetDepartmentName returns the DepartmentName field value if set, zero value otherwise.
func (o *DepartmentType) GetDepartmentName() TranslationTextType30 {
	if o == nil || IsNil(o.DepartmentName) {
		var ret TranslationTextType30
		return ret
	}
	return *o.DepartmentName
}

// GetDepartmentNameOk returns a tuple with the DepartmentName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepartmentType) GetDepartmentNameOk() (*TranslationTextType30, bool) {
	if o == nil || IsNil(o.DepartmentName) {
		return nil, false
	}
	return o.DepartmentName, true
}

// HasDepartmentName returns a boolean if a field has been set.
func (o *DepartmentType) HasDepartmentName() bool {
	if o != nil && !IsNil(o.DepartmentName) {
		return true
	}

	return false
}

// SetDepartmentName gets a reference to the given TranslationTextType30 and assigns it to the DepartmentName field.
func (o *DepartmentType) SetDepartmentName(v TranslationTextType30) {
	o.DepartmentName = &v
}

// GetDisplaySequence returns the DisplaySequence field value if set, zero value otherwise.
func (o *DepartmentType) GetDisplaySequence() int32 {
	if o == nil || IsNil(o.DisplaySequence) {
		var ret int32
		return ret
	}
	return *o.DisplaySequence
}

// GetDisplaySequenceOk returns a tuple with the DisplaySequence field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepartmentType) GetDisplaySequenceOk() (*int32, bool) {
	if o == nil || IsNil(o.DisplaySequence) {
		return nil, false
	}
	return o.DisplaySequence, true
}

// HasDisplaySequence returns a boolean if a field has been set.
func (o *DepartmentType) HasDisplaySequence() bool {
	if o != nil && !IsNil(o.DisplaySequence) {
		return true
	}

	return false
}

// SetDisplaySequence gets a reference to the given int32 and assigns it to the DisplaySequence field.
func (o *DepartmentType) SetDisplaySequence(v int32) {
	o.DisplaySequence = &v
}

// GetEmail returns the Email field value if set, zero value otherwise.
func (o *DepartmentType) GetEmail() string {
	if o == nil || IsNil(o.Email) {
		var ret string
		return ret
	}
	return *o.Email
}

// GetEmailOk returns a tuple with the Email field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DepartmentType) GetEmailOk() (*string, bool) {
	if o == nil || IsNil(o.Email) {
		return nil, false
	}
	return o.Email, true
}

// HasEmail returns a boolean if a field has been set.
func (o *DepartmentType) HasEmail() bool {
	if o != nil && !IsNil(o.Email) {
		return true
	}

	return false
}

// SetEmail gets a reference to the given string and assigns it to the Email field.
func (o *DepartmentType) SetEmail(v string) {
	o.Email = &v
}

func (o DepartmentType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DepartmentType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.DepartmentCode) {
		toSerialize["departmentCode"] = o.DepartmentCode
	}
	if !IsNil(o.DepartmentName) {
		toSerialize["departmentName"] = o.DepartmentName
	}
	if !IsNil(o.DisplaySequence) {
		toSerialize["displaySequence"] = o.DisplaySequence
	}
	if !IsNil(o.Email) {
		toSerialize["email"] = o.Email
	}
	return toSerialize, nil
}

type NullableDepartmentType struct {
	value *DepartmentType
	isSet bool
}

func (v NullableDepartmentType) Get() *DepartmentType {
	return v.value
}

func (v *NullableDepartmentType) Set(val *DepartmentType) {
	v.value = val
	v.isSet = true
}

func (v NullableDepartmentType) IsSet() bool {
	return v.isSet
}

func (v *NullableDepartmentType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDepartmentType(val *DepartmentType) *NullableDepartmentType {
	return &NullableDepartmentType{value: val, isSet: true}
}

func (v NullableDepartmentType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDepartmentType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


