/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the ServiceRequestCodeType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ServiceRequestCodeType{}

// ServiceRequestCodeType Service request code details.
type ServiceRequestCodeType struct {
	// Code for the service request
	Code *string `json:"code,omitempty"`
	// Department code for the service request
	DeptCode *string `json:"deptCode,omitempty"`
	// Description for the service request
	Description *string `json:"description,omitempty"`
	// Service request is editable or not.
	Editable *bool `json:"editable,omitempty"`
	// Hotel code for the service request
	HotelId *string `json:"hotelId,omitempty"`
	// Tells service request is active or not
	Inactive *bool `json:"inactive,omitempty"`
}

// NewServiceRequestCodeType instantiates a new ServiceRequestCodeType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewServiceRequestCodeType() *ServiceRequestCodeType {
	this := ServiceRequestCodeType{}
	return &this
}

// NewServiceRequestCodeTypeWithDefaults instantiates a new ServiceRequestCodeType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewServiceRequestCodeTypeWithDefaults() *ServiceRequestCodeType {
	this := ServiceRequestCodeType{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ServiceRequestCodeType) GetCode() string {
	if o == nil || IsNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ServiceRequestCodeType) GetCodeOk() (*string, bool) {
	if o == nil || IsNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ServiceRequestCodeType) HasCode() bool {
	if o != nil && !IsNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *ServiceRequestCodeType) SetCode(v string) {
	o.Code = &v
}

// GetDeptCode returns the DeptCode field value if set, zero value otherwise.
func (o *ServiceRequestCodeType) GetDeptCode() string {
	if o == nil || IsNil(o.DeptCode) {
		var ret string
		return ret
	}
	return *o.DeptCode
}

// GetDeptCodeOk returns a tuple with the DeptCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ServiceRequestCodeType) GetDeptCodeOk() (*string, bool) {
	if o == nil || IsNil(o.DeptCode) {
		return nil, false
	}
	return o.DeptCode, true
}

// HasDeptCode returns a boolean if a field has been set.
func (o *ServiceRequestCodeType) HasDeptCode() bool {
	if o != nil && !IsNil(o.DeptCode) {
		return true
	}

	return false
}

// SetDeptCode gets a reference to the given string and assigns it to the DeptCode field.
func (o *ServiceRequestCodeType) SetDeptCode(v string) {
	o.DeptCode = &v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *ServiceRequestCodeType) GetDescription() string {
	if o == nil || IsNil(o.Description) {
		var ret string
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ServiceRequestCodeType) GetDescriptionOk() (*string, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *ServiceRequestCodeType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given string and assigns it to the Description field.
func (o *ServiceRequestCodeType) SetDescription(v string) {
	o.Description = &v
}

// GetEditable returns the Editable field value if set, zero value otherwise.
func (o *ServiceRequestCodeType) GetEditable() bool {
	if o == nil || IsNil(o.Editable) {
		var ret bool
		return ret
	}
	return *o.Editable
}

// GetEditableOk returns a tuple with the Editable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ServiceRequestCodeType) GetEditableOk() (*bool, bool) {
	if o == nil || IsNil(o.Editable) {
		return nil, false
	}
	return o.Editable, true
}

// HasEditable returns a boolean if a field has been set.
func (o *ServiceRequestCodeType) HasEditable() bool {
	if o != nil && !IsNil(o.Editable) {
		return true
	}

	return false
}

// SetEditable gets a reference to the given bool and assigns it to the Editable field.
func (o *ServiceRequestCodeType) SetEditable(v bool) {
	o.Editable = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ServiceRequestCodeType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ServiceRequestCodeType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ServiceRequestCodeType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ServiceRequestCodeType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetInactive returns the Inactive field value if set, zero value otherwise.
func (o *ServiceRequestCodeType) GetInactive() bool {
	if o == nil || IsNil(o.Inactive) {
		var ret bool
		return ret
	}
	return *o.Inactive
}

// GetInactiveOk returns a tuple with the Inactive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ServiceRequestCodeType) GetInactiveOk() (*bool, bool) {
	if o == nil || IsNil(o.Inactive) {
		return nil, false
	}
	return o.Inactive, true
}

// HasInactive returns a boolean if a field has been set.
func (o *ServiceRequestCodeType) HasInactive() bool {
	if o != nil && !IsNil(o.Inactive) {
		return true
	}

	return false
}

// SetInactive gets a reference to the given bool and assigns it to the Inactive field.
func (o *ServiceRequestCodeType) SetInactive(v bool) {
	o.Inactive = &v
}

func (o ServiceRequestCodeType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ServiceRequestCodeType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !IsNil(o.DeptCode) {
		toSerialize["deptCode"] = o.DeptCode
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Editable) {
		toSerialize["editable"] = o.Editable
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Inactive) {
		toSerialize["inactive"] = o.Inactive
	}
	return toSerialize, nil
}

type NullableServiceRequestCodeType struct {
	value *ServiceRequestCodeType
	isSet bool
}

func (v NullableServiceRequestCodeType) Get() *ServiceRequestCodeType {
	return v.value
}

func (v *NullableServiceRequestCodeType) Set(val *ServiceRequestCodeType) {
	v.value = val
	v.isSet = true
}

func (v NullableServiceRequestCodeType) IsSet() bool {
	return v.isSet
}

func (v *NullableServiceRequestCodeType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableServiceRequestCodeType(val *ServiceRequestCodeType) *NullableServiceRequestCodeType {
	return &NullableServiceRequestCodeType{value: val, isSet: true}
}

func (v NullableServiceRequestCodeType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableServiceRequestCodeType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

