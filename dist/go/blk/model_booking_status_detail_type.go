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

// checks if the BookingStatusDetailType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BookingStatusDetailType{}

// BookingStatusDetailType Booking Status details of the business block.
type BookingStatusDetailType struct {
	// Indicates if business blocks with this status will be allowed for pickup or not.
	AllowPickup *bool `json:"allowPickup,omitempty"`
	BookingStatus *BookingStatusType `json:"bookingStatus,omitempty"`
	CancellationType *BlockCancellationTypeType `json:"cancellationType,omitempty"`
	// Indicates if catering event's spaces are deducted from inventory
	CatDeductInventory *bool `json:"catDeductInventory,omitempty"`
	CatStatusType *BlockStatusTypeType `json:"catStatusType,omitempty"`
	// Indicates if blocked rooms are deducted from inventory.
	DeductInventory *bool `json:"deductInventory,omitempty"`
	// Default reservation type for the booking status.
	DefaultReservationType *string `json:"defaultReservationType,omitempty"`
	// Parent status of the booking status, if one exists.
	ParentBookingStatus *string `json:"parentBookingStatus,omitempty"`
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

// GetAllowPickup returns the AllowPickup field value if set, zero value otherwise.
func (o *BookingStatusDetailType) GetAllowPickup() bool {
	if o == nil || IsNil(o.AllowPickup) {
		var ret bool
		return ret
	}
	return *o.AllowPickup
}

// GetAllowPickupOk returns a tuple with the AllowPickup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingStatusDetailType) GetAllowPickupOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowPickup) {
		return nil, false
	}
	return o.AllowPickup, true
}

// HasAllowPickup returns a boolean if a field has been set.
func (o *BookingStatusDetailType) HasAllowPickup() bool {
	if o != nil && !IsNil(o.AllowPickup) {
		return true
	}

	return false
}

// SetAllowPickup gets a reference to the given bool and assigns it to the AllowPickup field.
func (o *BookingStatusDetailType) SetAllowPickup(v bool) {
	o.AllowPickup = &v
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

// GetCancellationType returns the CancellationType field value if set, zero value otherwise.
func (o *BookingStatusDetailType) GetCancellationType() BlockCancellationTypeType {
	if o == nil || IsNil(o.CancellationType) {
		var ret BlockCancellationTypeType
		return ret
	}
	return *o.CancellationType
}

// GetCancellationTypeOk returns a tuple with the CancellationType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingStatusDetailType) GetCancellationTypeOk() (*BlockCancellationTypeType, bool) {
	if o == nil || IsNil(o.CancellationType) {
		return nil, false
	}
	return o.CancellationType, true
}

// HasCancellationType returns a boolean if a field has been set.
func (o *BookingStatusDetailType) HasCancellationType() bool {
	if o != nil && !IsNil(o.CancellationType) {
		return true
	}

	return false
}

// SetCancellationType gets a reference to the given BlockCancellationTypeType and assigns it to the CancellationType field.
func (o *BookingStatusDetailType) SetCancellationType(v BlockCancellationTypeType) {
	o.CancellationType = &v
}

// GetCatDeductInventory returns the CatDeductInventory field value if set, zero value otherwise.
func (o *BookingStatusDetailType) GetCatDeductInventory() bool {
	if o == nil || IsNil(o.CatDeductInventory) {
		var ret bool
		return ret
	}
	return *o.CatDeductInventory
}

// GetCatDeductInventoryOk returns a tuple with the CatDeductInventory field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingStatusDetailType) GetCatDeductInventoryOk() (*bool, bool) {
	if o == nil || IsNil(o.CatDeductInventory) {
		return nil, false
	}
	return o.CatDeductInventory, true
}

// HasCatDeductInventory returns a boolean if a field has been set.
func (o *BookingStatusDetailType) HasCatDeductInventory() bool {
	if o != nil && !IsNil(o.CatDeductInventory) {
		return true
	}

	return false
}

// SetCatDeductInventory gets a reference to the given bool and assigns it to the CatDeductInventory field.
func (o *BookingStatusDetailType) SetCatDeductInventory(v bool) {
	o.CatDeductInventory = &v
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

// GetDefaultReservationType returns the DefaultReservationType field value if set, zero value otherwise.
func (o *BookingStatusDetailType) GetDefaultReservationType() string {
	if o == nil || IsNil(o.DefaultReservationType) {
		var ret string
		return ret
	}
	return *o.DefaultReservationType
}

// GetDefaultReservationTypeOk returns a tuple with the DefaultReservationType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingStatusDetailType) GetDefaultReservationTypeOk() (*string, bool) {
	if o == nil || IsNil(o.DefaultReservationType) {
		return nil, false
	}
	return o.DefaultReservationType, true
}

// HasDefaultReservationType returns a boolean if a field has been set.
func (o *BookingStatusDetailType) HasDefaultReservationType() bool {
	if o != nil && !IsNil(o.DefaultReservationType) {
		return true
	}

	return false
}

// SetDefaultReservationType gets a reference to the given string and assigns it to the DefaultReservationType field.
func (o *BookingStatusDetailType) SetDefaultReservationType(v string) {
	o.DefaultReservationType = &v
}

// GetParentBookingStatus returns the ParentBookingStatus field value if set, zero value otherwise.
func (o *BookingStatusDetailType) GetParentBookingStatus() string {
	if o == nil || IsNil(o.ParentBookingStatus) {
		var ret string
		return ret
	}
	return *o.ParentBookingStatus
}

// GetParentBookingStatusOk returns a tuple with the ParentBookingStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BookingStatusDetailType) GetParentBookingStatusOk() (*string, bool) {
	if o == nil || IsNil(o.ParentBookingStatus) {
		return nil, false
	}
	return o.ParentBookingStatus, true
}

// HasParentBookingStatus returns a boolean if a field has been set.
func (o *BookingStatusDetailType) HasParentBookingStatus() bool {
	if o != nil && !IsNil(o.ParentBookingStatus) {
		return true
	}

	return false
}

// SetParentBookingStatus gets a reference to the given string and assigns it to the ParentBookingStatus field.
func (o *BookingStatusDetailType) SetParentBookingStatus(v string) {
	o.ParentBookingStatus = &v
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
	if !IsNil(o.AllowPickup) {
		toSerialize["allowPickup"] = o.AllowPickup
	}
	if !IsNil(o.BookingStatus) {
		toSerialize["bookingStatus"] = o.BookingStatus
	}
	if !IsNil(o.CancellationType) {
		toSerialize["cancellationType"] = o.CancellationType
	}
	if !IsNil(o.CatDeductInventory) {
		toSerialize["catDeductInventory"] = o.CatDeductInventory
	}
	if !IsNil(o.CatStatusType) {
		toSerialize["catStatusType"] = o.CatStatusType
	}
	if !IsNil(o.DeductInventory) {
		toSerialize["deductInventory"] = o.DeductInventory
	}
	if !IsNil(o.DefaultReservationType) {
		toSerialize["defaultReservationType"] = o.DefaultReservationType
	}
	if !IsNil(o.ParentBookingStatus) {
		toSerialize["parentBookingStatus"] = o.ParentBookingStatus
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


