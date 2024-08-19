/*
OPERA Cloud Sales Event Management API

APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evm

import (
	"encoding/json"
)

// checks if the BookingStatusDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BookingStatusDetailType{}

// BookingStatusDetailType Booking Status details of the business block.
type BookingStatusDetailType struct {
	BookingStatus *BookingStatusType `json:"bookingStatus,omitempty"`
	CatStatusType *BlockStatusTypeType `json:"catStatusType,omitempty"`
	// Indicates if catering event's spaces are deducted from inventory
	CateringDeductInventory *bool `json:"cateringDeductInventory,omitempty"`
	// Indicates if blocked rooms are deducted from inventory.
	DeductInventory *bool `json:"deductInventory,omitempty"`
	// Indicates if blocked rooms will be returned to availability or not.
	ReturnToInventory *bool `json:"returnToInventory,omitempty"`
	StatusType *BlockStatusTypeType `json:"statusType,omitempty"`
}

// NewBookingStatusDetailType instantiates a new BookingStatusDetailType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBookingStatusDetailType() *BookingStatusDetailType {
	this := BookingStatusDetailType{}
	return &this
}

// NewBookingStatusDetailTypeWithDefaults instantiates a new BookingStatusDetailType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBookingStatusDetailTypeWithDefaults() *BookingStatusDetailType {
	this := BookingStatusDetailType{}
	return &this
}

// GetBookingStatus returns the BookingStatus field value if set, zero value otherwise.
func (o *BookingStatusDetailType) GetBookingStatus() BookingStatusType {
	if o == nil || IsNil(o.BookingStatus) {
		var ret BookingStatusType
		return ret
	}
	return *o.BookingStatus
}

// GetBookingStatusOk returns a tuple with the BookingStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingStatusDetailType) GetBookingStatusOk() (*BookingStatusType, bool) {
	if o == nil || IsNil(o.BookingStatus) {
		return nil, false
	}
	return o.BookingStatus, true
}

// HasBookingStatus returns a boolean if a field has been set.
func (o *BookingStatusDetailType) HasBookingStatus() bool {
	if o != nil && !IsNil(o.BookingStatus) {
		return true
	}

	return false
}

// SetBookingStatus gets a reference to the given BookingStatusType and assigns it to the BookingStatus field.
func (o *BookingStatusDetailType) SetBookingStatus(v BookingStatusType) {
	o.BookingStatus = &v
}

// GetCatStatusType returns the CatStatusType field value if set, zero value otherwise.
func (o *BookingStatusDetailType) GetCatStatusType() BlockStatusTypeType {
	if o == nil || IsNil(o.CatStatusType) {
		var ret BlockStatusTypeType
		return ret
	}
	return *o.CatStatusType
}

// GetCatStatusTypeOk returns a tuple with the CatStatusType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingStatusDetailType) GetCatStatusTypeOk() (*BlockStatusTypeType, bool) {
	if o == nil || IsNil(o.CatStatusType) {
		return nil, false
	}
	return o.CatStatusType, true
}

// HasCatStatusType returns a boolean if a field has been set.
func (o *BookingStatusDetailType) HasCatStatusType() bool {
	if o != nil && !IsNil(o.CatStatusType) {
		return true
	}

	return false
}

// SetCatStatusType gets a reference to the given BlockStatusTypeType and assigns it to the CatStatusType field.
func (o *BookingStatusDetailType) SetCatStatusType(v BlockStatusTypeType) {
	o.CatStatusType = &v
}

// GetCateringDeductInventory returns the CateringDeductInventory field value if set, zero value otherwise.
func (o *BookingStatusDetailType) GetCateringDeductInventory() bool {
	if o == nil || IsNil(o.CateringDeductInventory) {
		var ret bool
		return ret
	}
	return *o.CateringDeductInventory
}

// GetCateringDeductInventoryOk returns a tuple with the CateringDeductInventory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingStatusDetailType) GetCateringDeductInventoryOk() (*bool, bool) {
	if o == nil || IsNil(o.CateringDeductInventory) {
		return nil, false
	}
	return o.CateringDeductInventory, true
}

// HasCateringDeductInventory returns a boolean if a field has been set.
func (o *BookingStatusDetailType) HasCateringDeductInventory() bool {
	if o != nil && !IsNil(o.CateringDeductInventory) {
		return true
	}

	return false
}

// SetCateringDeductInventory gets a reference to the given bool and assigns it to the CateringDeductInventory field.
func (o *BookingStatusDetailType) SetCateringDeductInventory(v bool) {
	o.CateringDeductInventory = &v
}

// GetDeductInventory returns the DeductInventory field value if set, zero value otherwise.
func (o *BookingStatusDetailType) GetDeductInventory() bool {
	if o == nil || IsNil(o.DeductInventory) {
		var ret bool
		return ret
	}
	return *o.DeductInventory
}

// GetDeductInventoryOk returns a tuple with the DeductInventory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingStatusDetailType) GetDeductInventoryOk() (*bool, bool) {
	if o == nil || IsNil(o.DeductInventory) {
		return nil, false
	}
	return o.DeductInventory, true
}

// HasDeductInventory returns a boolean if a field has been set.
func (o *BookingStatusDetailType) HasDeductInventory() bool {
	if o != nil && !IsNil(o.DeductInventory) {
		return true
	}

	return false
}

// SetDeductInventory gets a reference to the given bool and assigns it to the DeductInventory field.
func (o *BookingStatusDetailType) SetDeductInventory(v bool) {
	o.DeductInventory = &v
}

// GetReturnToInventory returns the ReturnToInventory field value if set, zero value otherwise.
func (o *BookingStatusDetailType) GetReturnToInventory() bool {
	if o == nil || IsNil(o.ReturnToInventory) {
		var ret bool
		return ret
	}
	return *o.ReturnToInventory
}

// GetReturnToInventoryOk returns a tuple with the ReturnToInventory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingStatusDetailType) GetReturnToInventoryOk() (*bool, bool) {
	if o == nil || IsNil(o.ReturnToInventory) {
		return nil, false
	}
	return o.ReturnToInventory, true
}

// HasReturnToInventory returns a boolean if a field has been set.
func (o *BookingStatusDetailType) HasReturnToInventory() bool {
	if o != nil && !IsNil(o.ReturnToInventory) {
		return true
	}

	return false
}

// SetReturnToInventory gets a reference to the given bool and assigns it to the ReturnToInventory field.
func (o *BookingStatusDetailType) SetReturnToInventory(v bool) {
	o.ReturnToInventory = &v
}

// GetStatusType returns the StatusType field value if set, zero value otherwise.
func (o *BookingStatusDetailType) GetStatusType() BlockStatusTypeType {
	if o == nil || IsNil(o.StatusType) {
		var ret BlockStatusTypeType
		return ret
	}
	return *o.StatusType
}

// GetStatusTypeOk returns a tuple with the StatusType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingStatusDetailType) GetStatusTypeOk() (*BlockStatusTypeType, bool) {
	if o == nil || IsNil(o.StatusType) {
		return nil, false
	}
	return o.StatusType, true
}

// HasStatusType returns a boolean if a field has been set.
func (o *BookingStatusDetailType) HasStatusType() bool {
	if o != nil && !IsNil(o.StatusType) {
		return true
	}

	return false
}

// SetStatusType gets a reference to the given BlockStatusTypeType and assigns it to the StatusType field.
func (o *BookingStatusDetailType) SetStatusType(v BlockStatusTypeType) {
	o.StatusType = &v
}

func (o BookingStatusDetailType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BookingStatusDetailType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BookingStatus) {
		toSerialize["bookingStatus"] = o.BookingStatus
	}
	if !IsNil(o.CatStatusType) {
		toSerialize["catStatusType"] = o.CatStatusType
	}
	if !IsNil(o.CateringDeductInventory) {
		toSerialize["cateringDeductInventory"] = o.CateringDeductInventory
	}
	if !IsNil(o.DeductInventory) {
		toSerialize["deductInventory"] = o.DeductInventory
	}
	if !IsNil(o.ReturnToInventory) {
		toSerialize["returnToInventory"] = o.ReturnToInventory
	}
	if !IsNil(o.StatusType) {
		toSerialize["statusType"] = o.StatusType
	}
	return toSerialize, nil
}

type NullableBookingStatusDetailType struct {
	value *BookingStatusDetailType
	isSet bool
}

func (v NullableBookingStatusDetailType) Get() *BookingStatusDetailType {
	return v.value
}

func (v *NullableBookingStatusDetailType) Set(val *BookingStatusDetailType) {
	v.value = val
	v.isSet = true
}

func (v NullableBookingStatusDetailType) IsSet() bool {
	return v.isSet
}

func (v *NullableBookingStatusDetailType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBookingStatusDetailType(val *BookingStatusDetailType) *NullableBookingStatusDetailType {
	return &NullableBookingStatusDetailType{value: val, isSet: true}
}

func (v NullableBookingStatusDetailType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBookingStatusDetailType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


