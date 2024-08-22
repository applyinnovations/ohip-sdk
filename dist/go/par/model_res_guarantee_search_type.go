/*
OPERA Cloud Price Availability Rate API

APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package par

import (
	"encoding/json"
)

// checks if the ResGuaranteeSearchType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ResGuaranteeSearchType{}

// ResGuaranteeSearchType Contains Search criteria to get applicable Reservation Guarantee Codes.
type ResGuaranteeSearchType struct {
	// Arrival Date of the guest.
	ArrivalDate *string `json:"arrivalDate,omitempty"`
	BlockId *BlockId `json:"blockId,omitempty"`
	FetchInstruction *ResGuaranteeFetchInstructionsType `json:"fetchInstruction,omitempty"`
	// Guarantee Code should be supplied only for the code verification purpose, if the supplied code is valid for the rest of the criteria it will return the response with the Guarantee Code information.
	GuaranteeCode *string `json:"guaranteeCode,omitempty"`
	// Hotel Code to request Guarantee Codes.
	HotelId *string `json:"hotelId,omitempty"`
	// Rate Plan Code to find associated Guarantee Codes.
	RatePlanCode *string `json:"ratePlanCode,omitempty"`
	ResAttachedProfiles []ResAttachedProfileType `json:"resAttachedProfiles,omitempty"`
	ResGuestId *UniqueIDType `json:"resGuestId,omitempty"`
	// A Service object represents a non-room product provided to guests. Service products may have associated inventory and charges.
	ReservationPackages []ReservationPackageType `json:"reservationPackages,omitempty"`
	ResvRateAmount *CurrencyAmountType `json:"resvRateAmount,omitempty"`
	RoomStayDetails *RoomStaySearchType `json:"roomStayDetails,omitempty"`
	// Room Type for the reservation
	RoomType *string `json:"roomType,omitempty"`
}

// NewResGuaranteeSearchType instantiates a new ResGuaranteeSearchType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewResGuaranteeSearchType() *ResGuaranteeSearchType {
	this := ResGuaranteeSearchType{}
	return &this
}

// NewResGuaranteeSearchTypeWithDefaults instantiates a new ResGuaranteeSearchType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewResGuaranteeSearchTypeWithDefaults() *ResGuaranteeSearchType {
	this := ResGuaranteeSearchType{}
	return &this
}

// GetArrivalDate returns the ArrivalDate field value if set, zero value otherwise.
func (o *ResGuaranteeSearchType) GetArrivalDate() string {
	if o == nil || IsNil(o.ArrivalDate) {
		var ret string
		return ret
	}
	return *o.ArrivalDate
}

// GetArrivalDateOk returns a tuple with the ArrivalDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeSearchType) GetArrivalDateOk() (*string, bool) {
	if o == nil || IsNil(o.ArrivalDate) {
		return nil, false
	}
	return o.ArrivalDate, true
}

// HasArrivalDate returns a boolean if a field has been set.
func (o *ResGuaranteeSearchType) HasArrivalDate() bool {
	if o != nil && !IsNil(o.ArrivalDate) {
		return true
	}

	return false
}

// SetArrivalDate gets a reference to the given string and assigns it to the ArrivalDate field.
func (o *ResGuaranteeSearchType) SetArrivalDate(v string) {
	o.ArrivalDate = &v
}

// GetBlockId returns the BlockId field value if set, zero value otherwise.
func (o *ResGuaranteeSearchType) GetBlockId() BlockId {
	if o == nil || IsNil(o.BlockId) {
		var ret BlockId
		return ret
	}
	return *o.BlockId
}

// GetBlockIdOk returns a tuple with the BlockId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeSearchType) GetBlockIdOk() (*BlockId, bool) {
	if o == nil || IsNil(o.BlockId) {
		return nil, false
	}
	return o.BlockId, true
}

// HasBlockId returns a boolean if a field has been set.
func (o *ResGuaranteeSearchType) HasBlockId() bool {
	if o != nil && !IsNil(o.BlockId) {
		return true
	}

	return false
}

// SetBlockId gets a reference to the given BlockId and assigns it to the BlockId field.
func (o *ResGuaranteeSearchType) SetBlockId(v BlockId) {
	o.BlockId = &v
}

// GetFetchInstruction returns the FetchInstruction field value if set, zero value otherwise.
func (o *ResGuaranteeSearchType) GetFetchInstruction() ResGuaranteeFetchInstructionsType {
	if o == nil || IsNil(o.FetchInstruction) {
		var ret ResGuaranteeFetchInstructionsType
		return ret
	}
	return *o.FetchInstruction
}

// GetFetchInstructionOk returns a tuple with the FetchInstruction field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeSearchType) GetFetchInstructionOk() (*ResGuaranteeFetchInstructionsType, bool) {
	if o == nil || IsNil(o.FetchInstruction) {
		return nil, false
	}
	return o.FetchInstruction, true
}

// HasFetchInstruction returns a boolean if a field has been set.
func (o *ResGuaranteeSearchType) HasFetchInstruction() bool {
	if o != nil && !IsNil(o.FetchInstruction) {
		return true
	}

	return false
}

// SetFetchInstruction gets a reference to the given ResGuaranteeFetchInstructionsType and assigns it to the FetchInstruction field.
func (o *ResGuaranteeSearchType) SetFetchInstruction(v ResGuaranteeFetchInstructionsType) {
	o.FetchInstruction = &v
}

// GetGuaranteeCode returns the GuaranteeCode field value if set, zero value otherwise.
func (o *ResGuaranteeSearchType) GetGuaranteeCode() string {
	if o == nil || IsNil(o.GuaranteeCode) {
		var ret string
		return ret
	}
	return *o.GuaranteeCode
}

// GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeSearchType) GetGuaranteeCodeOk() (*string, bool) {
	if o == nil || IsNil(o.GuaranteeCode) {
		return nil, false
	}
	return o.GuaranteeCode, true
}

// HasGuaranteeCode returns a boolean if a field has been set.
func (o *ResGuaranteeSearchType) HasGuaranteeCode() bool {
	if o != nil && !IsNil(o.GuaranteeCode) {
		return true
	}

	return false
}

// SetGuaranteeCode gets a reference to the given string and assigns it to the GuaranteeCode field.
func (o *ResGuaranteeSearchType) SetGuaranteeCode(v string) {
	o.GuaranteeCode = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *ResGuaranteeSearchType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeSearchType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *ResGuaranteeSearchType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *ResGuaranteeSearchType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetRatePlanCode returns the RatePlanCode field value if set, zero value otherwise.
func (o *ResGuaranteeSearchType) GetRatePlanCode() string {
	if o == nil || IsNil(o.RatePlanCode) {
		var ret string
		return ret
	}
	return *o.RatePlanCode
}

// GetRatePlanCodeOk returns a tuple with the RatePlanCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeSearchType) GetRatePlanCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RatePlanCode) {
		return nil, false
	}
	return o.RatePlanCode, true
}

// HasRatePlanCode returns a boolean if a field has been set.
func (o *ResGuaranteeSearchType) HasRatePlanCode() bool {
	if o != nil && !IsNil(o.RatePlanCode) {
		return true
	}

	return false
}

// SetRatePlanCode gets a reference to the given string and assigns it to the RatePlanCode field.
func (o *ResGuaranteeSearchType) SetRatePlanCode(v string) {
	o.RatePlanCode = &v
}

// GetResAttachedProfiles returns the ResAttachedProfiles field value if set, zero value otherwise.
func (o *ResGuaranteeSearchType) GetResAttachedProfiles() []ResAttachedProfileType {
	if o == nil || IsNil(o.ResAttachedProfiles) {
		var ret []ResAttachedProfileType
		return ret
	}
	return o.ResAttachedProfiles
}

// GetResAttachedProfilesOk returns a tuple with the ResAttachedProfiles field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeSearchType) GetResAttachedProfilesOk() ([]ResAttachedProfileType, bool) {
	if o == nil || IsNil(o.ResAttachedProfiles) {
		return nil, false
	}
	return o.ResAttachedProfiles, true
}

// HasResAttachedProfiles returns a boolean if a field has been set.
func (o *ResGuaranteeSearchType) HasResAttachedProfiles() bool {
	if o != nil && !IsNil(o.ResAttachedProfiles) {
		return true
	}

	return false
}

// SetResAttachedProfiles gets a reference to the given []ResAttachedProfileType and assigns it to the ResAttachedProfiles field.
func (o *ResGuaranteeSearchType) SetResAttachedProfiles(v []ResAttachedProfileType) {
	o.ResAttachedProfiles = v
}

// GetResGuestId returns the ResGuestId field value if set, zero value otherwise.
func (o *ResGuaranteeSearchType) GetResGuestId() UniqueIDType {
	if o == nil || IsNil(o.ResGuestId) {
		var ret UniqueIDType
		return ret
	}
	return *o.ResGuestId
}

// GetResGuestIdOk returns a tuple with the ResGuestId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeSearchType) GetResGuestIdOk() (*UniqueIDType, bool) {
	if o == nil || IsNil(o.ResGuestId) {
		return nil, false
	}
	return o.ResGuestId, true
}

// HasResGuestId returns a boolean if a field has been set.
func (o *ResGuaranteeSearchType) HasResGuestId() bool {
	if o != nil && !IsNil(o.ResGuestId) {
		return true
	}

	return false
}

// SetResGuestId gets a reference to the given UniqueIDType and assigns it to the ResGuestId field.
func (o *ResGuaranteeSearchType) SetResGuestId(v UniqueIDType) {
	o.ResGuestId = &v
}

// GetReservationPackages returns the ReservationPackages field value if set, zero value otherwise.
func (o *ResGuaranteeSearchType) GetReservationPackages() []ReservationPackageType {
	if o == nil || IsNil(o.ReservationPackages) {
		var ret []ReservationPackageType
		return ret
	}
	return o.ReservationPackages
}

// GetReservationPackagesOk returns a tuple with the ReservationPackages field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeSearchType) GetReservationPackagesOk() ([]ReservationPackageType, bool) {
	if o == nil || IsNil(o.ReservationPackages) {
		return nil, false
	}
	return o.ReservationPackages, true
}

// HasReservationPackages returns a boolean if a field has been set.
func (o *ResGuaranteeSearchType) HasReservationPackages() bool {
	if o != nil && !IsNil(o.ReservationPackages) {
		return true
	}

	return false
}

// SetReservationPackages gets a reference to the given []ReservationPackageType and assigns it to the ReservationPackages field.
func (o *ResGuaranteeSearchType) SetReservationPackages(v []ReservationPackageType) {
	o.ReservationPackages = v
}

// GetResvRateAmount returns the ResvRateAmount field value if set, zero value otherwise.
func (o *ResGuaranteeSearchType) GetResvRateAmount() CurrencyAmountType {
	if o == nil || IsNil(o.ResvRateAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.ResvRateAmount
}

// GetResvRateAmountOk returns a tuple with the ResvRateAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeSearchType) GetResvRateAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.ResvRateAmount) {
		return nil, false
	}
	return o.ResvRateAmount, true
}

// HasResvRateAmount returns a boolean if a field has been set.
func (o *ResGuaranteeSearchType) HasResvRateAmount() bool {
	if o != nil && !IsNil(o.ResvRateAmount) {
		return true
	}

	return false
}

// SetResvRateAmount gets a reference to the given CurrencyAmountType and assigns it to the ResvRateAmount field.
func (o *ResGuaranteeSearchType) SetResvRateAmount(v CurrencyAmountType) {
	o.ResvRateAmount = &v
}

// GetRoomStayDetails returns the RoomStayDetails field value if set, zero value otherwise.
func (o *ResGuaranteeSearchType) GetRoomStayDetails() RoomStaySearchType {
	if o == nil || IsNil(o.RoomStayDetails) {
		var ret RoomStaySearchType
		return ret
	}
	return *o.RoomStayDetails
}

// GetRoomStayDetailsOk returns a tuple with the RoomStayDetails field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeSearchType) GetRoomStayDetailsOk() (*RoomStaySearchType, bool) {
	if o == nil || IsNil(o.RoomStayDetails) {
		return nil, false
	}
	return o.RoomStayDetails, true
}

// HasRoomStayDetails returns a boolean if a field has been set.
func (o *ResGuaranteeSearchType) HasRoomStayDetails() bool {
	if o != nil && !IsNil(o.RoomStayDetails) {
		return true
	}

	return false
}

// SetRoomStayDetails gets a reference to the given RoomStaySearchType and assigns it to the RoomStayDetails field.
func (o *ResGuaranteeSearchType) SetRoomStayDetails(v RoomStaySearchType) {
	o.RoomStayDetails = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *ResGuaranteeSearchType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ResGuaranteeSearchType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *ResGuaranteeSearchType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *ResGuaranteeSearchType) SetRoomType(v string) {
	o.RoomType = &v
}

func (o ResGuaranteeSearchType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ResGuaranteeSearchType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ArrivalDate) {
		toSerialize["arrivalDate"] = o.ArrivalDate
	}
	if !IsNil(o.BlockId) {
		toSerialize["blockId"] = o.BlockId
	}
	if !IsNil(o.FetchInstruction) {
		toSerialize["fetchInstruction"] = o.FetchInstruction
	}
	if !IsNil(o.GuaranteeCode) {
		toSerialize["guaranteeCode"] = o.GuaranteeCode
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.RatePlanCode) {
		toSerialize["ratePlanCode"] = o.RatePlanCode
	}
	if !IsNil(o.ResAttachedProfiles) {
		toSerialize["resAttachedProfiles"] = o.ResAttachedProfiles
	}
	if !IsNil(o.ResGuestId) {
		toSerialize["resGuestId"] = o.ResGuestId
	}
	if !IsNil(o.ReservationPackages) {
		toSerialize["reservationPackages"] = o.ReservationPackages
	}
	if !IsNil(o.ResvRateAmount) {
		toSerialize["resvRateAmount"] = o.ResvRateAmount
	}
	if !IsNil(o.RoomStayDetails) {
		toSerialize["roomStayDetails"] = o.RoomStayDetails
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	return toSerialize, nil
}

type NullableResGuaranteeSearchType struct {
	value *ResGuaranteeSearchType
	isSet bool
}

func (v NullableResGuaranteeSearchType) Get() *ResGuaranteeSearchType {
	return v.value
}

func (v *NullableResGuaranteeSearchType) Set(val *ResGuaranteeSearchType) {
	v.value = val
	v.isSet = true
}

func (v NullableResGuaranteeSearchType) IsSet() bool {
	return v.isSet
}

func (v *NullableResGuaranteeSearchType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableResGuaranteeSearchType(val *ResGuaranteeSearchType) *NullableResGuaranteeSearchType {
	return &NullableResGuaranteeSearchType{value: val, isSet: true}
}

func (v NullableResGuaranteeSearchType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableResGuaranteeSearchType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


