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

// checks if the FunctionSpaceAvailabilityType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FunctionSpaceAvailabilityType{}

// FunctionSpaceAvailabilityType The summary information for a function space.
type FunctionSpaceAvailabilityType struct {
	// Flag that indicates if the function space can be reserved or not.
	Available *bool `json:"available,omitempty"`
	// Indicate if the function space is a combination functionSpaceDetails.
	ComboSpace *bool `json:"comboSpace,omitempty"`
	// Indicate if the function space will be shown in the Function Diary by default.
	ElementSpace *bool `json:"elementSpace,omitempty"`
	// The floor on which the Function Space is located.
	Floor *string `json:"floor,omitempty"`
	// Indicate if the function space is forced to have alternate function spaces in case the function space becomes unvailable.
	ForceAlternate *bool `json:"forceAlternate,omitempty"`
	// The time in minutes that the function space would be considered at 100% utilization.
	FullUtilizationTime *float32 `json:"fullUtilizationTime,omitempty"`
	// Indicates whether the function space has handicap facilities.
	HandicapFacilities *bool `json:"handicapFacilities,omitempty"`
	// Hotel Code where function space belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// The building on which the Function Space is located.
	Location *string `json:"location,omitempty"`
	// The first custom order for sorting the function space display.
	OrderBy1 *int32 `json:"orderBy1,omitempty"`
	// The second custom order for sorting the function space display.
	OrderBy2 *int32 `json:"orderBy2,omitempty"`
	// The third custom order for sorting the function space display.
	OrderBy3 *int32 `json:"orderBy3,omitempty"`
	// Indicates whether the functionSpaceDetails type is psuedo.
	PsuedoRoomType *bool `json:"psuedoRoomType,omitempty"`
	// Room Code of the Function Space.
	RoomCode *string `json:"roomCode,omitempty"`
	// Room Type of the Function Space.
	RoomType *string `json:"roomType,omitempty"`
	// Indicate if the function space is shareable.
	Shareable *bool `json:"shareable,omitempty"`
	// The Short Name of the Function Space.
	ShortName *string `json:"shortName,omitempty"`
	SpaceName *TranslationTextType2000 `json:"spaceName,omitempty"`
	// The Type which the Function Space belongs to.
	SpaceType *string `json:"spaceType,omitempty"`
	SuggestedRateAmount *CurrencyAmountType `json:"suggestedRateAmount,omitempty"`
	// Rate Code suggested to be used by function space.
	SuggestedRateCode *string `json:"suggestedRateCode,omitempty"`
	// Setup Code suggested to be used by function space.
	SuggestedSetupCode *string `json:"suggestedSetupCode,omitempty"`
	// Indicates whether the Function Space is web bookable or not.
	WebBookable *bool `json:"webBookable,omitempty"`
	// Indicates whether the Function Space is web viewable or not.
	WebViewable *bool `json:"webViewable,omitempty"`
}

// NewFunctionSpaceAvailabilityType instantiates a new FunctionSpaceAvailabilityType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFunctionSpaceAvailabilityType() *FunctionSpaceAvailabilityType {
	this := FunctionSpaceAvailabilityType{}
	return &this
}

// NewFunctionSpaceAvailabilityTypeWithDefaults instantiates a new FunctionSpaceAvailabilityType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFunctionSpaceAvailabilityTypeWithDefaults() *FunctionSpaceAvailabilityType {
	this := FunctionSpaceAvailabilityType{}
	return &this
}

// GetAvailable returns the Available field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetAvailable() bool {
	if o == nil || IsNil(o.Available) {
		var ret bool
		return ret
	}
	return *o.Available
}

// GetAvailableOk returns a tuple with the Available field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetAvailableOk() (*bool, bool) {
	if o == nil || IsNil(o.Available) {
		return nil, false
	}
	return o.Available, true
}

// HasAvailable returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasAvailable() bool {
	if o != nil && !IsNil(o.Available) {
		return true
	}

	return false
}

// SetAvailable gets a reference to the given bool and assigns it to the Available field.
func (o *FunctionSpaceAvailabilityType) SetAvailable(v bool) {
	o.Available = &v
}

// GetComboSpace returns the ComboSpace field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetComboSpace() bool {
	if o == nil || IsNil(o.ComboSpace) {
		var ret bool
		return ret
	}
	return *o.ComboSpace
}

// GetComboSpaceOk returns a tuple with the ComboSpace field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetComboSpaceOk() (*bool, bool) {
	if o == nil || IsNil(o.ComboSpace) {
		return nil, false
	}
	return o.ComboSpace, true
}

// HasComboSpace returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasComboSpace() bool {
	if o != nil && !IsNil(o.ComboSpace) {
		return true
	}

	return false
}

// SetComboSpace gets a reference to the given bool and assigns it to the ComboSpace field.
func (o *FunctionSpaceAvailabilityType) SetComboSpace(v bool) {
	o.ComboSpace = &v
}

// GetElementSpace returns the ElementSpace field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetElementSpace() bool {
	if o == nil || IsNil(o.ElementSpace) {
		var ret bool
		return ret
	}
	return *o.ElementSpace
}

// GetElementSpaceOk returns a tuple with the ElementSpace field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetElementSpaceOk() (*bool, bool) {
	if o == nil || IsNil(o.ElementSpace) {
		return nil, false
	}
	return o.ElementSpace, true
}

// HasElementSpace returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasElementSpace() bool {
	if o != nil && !IsNil(o.ElementSpace) {
		return true
	}

	return false
}

// SetElementSpace gets a reference to the given bool and assigns it to the ElementSpace field.
func (o *FunctionSpaceAvailabilityType) SetElementSpace(v bool) {
	o.ElementSpace = &v
}

// GetFloor returns the Floor field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetFloor() string {
	if o == nil || IsNil(o.Floor) {
		var ret string
		return ret
	}
	return *o.Floor
}

// GetFloorOk returns a tuple with the Floor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetFloorOk() (*string, bool) {
	if o == nil || IsNil(o.Floor) {
		return nil, false
	}
	return o.Floor, true
}

// HasFloor returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasFloor() bool {
	if o != nil && !IsNil(o.Floor) {
		return true
	}

	return false
}

// SetFloor gets a reference to the given string and assigns it to the Floor field.
func (o *FunctionSpaceAvailabilityType) SetFloor(v string) {
	o.Floor = &v
}

// GetForceAlternate returns the ForceAlternate field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetForceAlternate() bool {
	if o == nil || IsNil(o.ForceAlternate) {
		var ret bool
		return ret
	}
	return *o.ForceAlternate
}

// GetForceAlternateOk returns a tuple with the ForceAlternate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetForceAlternateOk() (*bool, bool) {
	if o == nil || IsNil(o.ForceAlternate) {
		return nil, false
	}
	return o.ForceAlternate, true
}

// HasForceAlternate returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasForceAlternate() bool {
	if o != nil && !IsNil(o.ForceAlternate) {
		return true
	}

	return false
}

// SetForceAlternate gets a reference to the given bool and assigns it to the ForceAlternate field.
func (o *FunctionSpaceAvailabilityType) SetForceAlternate(v bool) {
	o.ForceAlternate = &v
}

// GetFullUtilizationTime returns the FullUtilizationTime field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetFullUtilizationTime() float32 {
	if o == nil || IsNil(o.FullUtilizationTime) {
		var ret float32
		return ret
	}
	return *o.FullUtilizationTime
}

// GetFullUtilizationTimeOk returns a tuple with the FullUtilizationTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetFullUtilizationTimeOk() (*float32, bool) {
	if o == nil || IsNil(o.FullUtilizationTime) {
		return nil, false
	}
	return o.FullUtilizationTime, true
}

// HasFullUtilizationTime returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasFullUtilizationTime() bool {
	if o != nil && !IsNil(o.FullUtilizationTime) {
		return true
	}

	return false
}

// SetFullUtilizationTime gets a reference to the given float32 and assigns it to the FullUtilizationTime field.
func (o *FunctionSpaceAvailabilityType) SetFullUtilizationTime(v float32) {
	o.FullUtilizationTime = &v
}

// GetHandicapFacilities returns the HandicapFacilities field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetHandicapFacilities() bool {
	if o == nil || IsNil(o.HandicapFacilities) {
		var ret bool
		return ret
	}
	return *o.HandicapFacilities
}

// GetHandicapFacilitiesOk returns a tuple with the HandicapFacilities field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetHandicapFacilitiesOk() (*bool, bool) {
	if o == nil || IsNil(o.HandicapFacilities) {
		return nil, false
	}
	return o.HandicapFacilities, true
}

// HasHandicapFacilities returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasHandicapFacilities() bool {
	if o != nil && !IsNil(o.HandicapFacilities) {
		return true
	}

	return false
}

// SetHandicapFacilities gets a reference to the given bool and assigns it to the HandicapFacilities field.
func (o *FunctionSpaceAvailabilityType) SetHandicapFacilities(v bool) {
	o.HandicapFacilities = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *FunctionSpaceAvailabilityType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLocation returns the Location field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetLocation() string {
	if o == nil || IsNil(o.Location) {
		var ret string
		return ret
	}
	return *o.Location
}

// GetLocationOk returns a tuple with the Location field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetLocationOk() (*string, bool) {
	if o == nil || IsNil(o.Location) {
		return nil, false
	}
	return o.Location, true
}

// HasLocation returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasLocation() bool {
	if o != nil && !IsNil(o.Location) {
		return true
	}

	return false
}

// SetLocation gets a reference to the given string and assigns it to the Location field.
func (o *FunctionSpaceAvailabilityType) SetLocation(v string) {
	o.Location = &v
}

// GetOrderBy1 returns the OrderBy1 field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetOrderBy1() int32 {
	if o == nil || IsNil(o.OrderBy1) {
		var ret int32
		return ret
	}
	return *o.OrderBy1
}

// GetOrderBy1Ok returns a tuple with the OrderBy1 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetOrderBy1Ok() (*int32, bool) {
	if o == nil || IsNil(o.OrderBy1) {
		return nil, false
	}
	return o.OrderBy1, true
}

// HasOrderBy1 returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasOrderBy1() bool {
	if o != nil && !IsNil(o.OrderBy1) {
		return true
	}

	return false
}

// SetOrderBy1 gets a reference to the given int32 and assigns it to the OrderBy1 field.
func (o *FunctionSpaceAvailabilityType) SetOrderBy1(v int32) {
	o.OrderBy1 = &v
}

// GetOrderBy2 returns the OrderBy2 field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetOrderBy2() int32 {
	if o == nil || IsNil(o.OrderBy2) {
		var ret int32
		return ret
	}
	return *o.OrderBy2
}

// GetOrderBy2Ok returns a tuple with the OrderBy2 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetOrderBy2Ok() (*int32, bool) {
	if o == nil || IsNil(o.OrderBy2) {
		return nil, false
	}
	return o.OrderBy2, true
}

// HasOrderBy2 returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasOrderBy2() bool {
	if o != nil && !IsNil(o.OrderBy2) {
		return true
	}

	return false
}

// SetOrderBy2 gets a reference to the given int32 and assigns it to the OrderBy2 field.
func (o *FunctionSpaceAvailabilityType) SetOrderBy2(v int32) {
	o.OrderBy2 = &v
}

// GetOrderBy3 returns the OrderBy3 field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetOrderBy3() int32 {
	if o == nil || IsNil(o.OrderBy3) {
		var ret int32
		return ret
	}
	return *o.OrderBy3
}

// GetOrderBy3Ok returns a tuple with the OrderBy3 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetOrderBy3Ok() (*int32, bool) {
	if o == nil || IsNil(o.OrderBy3) {
		return nil, false
	}
	return o.OrderBy3, true
}

// HasOrderBy3 returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasOrderBy3() bool {
	if o != nil && !IsNil(o.OrderBy3) {
		return true
	}

	return false
}

// SetOrderBy3 gets a reference to the given int32 and assigns it to the OrderBy3 field.
func (o *FunctionSpaceAvailabilityType) SetOrderBy3(v int32) {
	o.OrderBy3 = &v
}

// GetPsuedoRoomType returns the PsuedoRoomType field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetPsuedoRoomType() bool {
	if o == nil || IsNil(o.PsuedoRoomType) {
		var ret bool
		return ret
	}
	return *o.PsuedoRoomType
}

// GetPsuedoRoomTypeOk returns a tuple with the PsuedoRoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetPsuedoRoomTypeOk() (*bool, bool) {
	if o == nil || IsNil(o.PsuedoRoomType) {
		return nil, false
	}
	return o.PsuedoRoomType, true
}

// HasPsuedoRoomType returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasPsuedoRoomType() bool {
	if o != nil && !IsNil(o.PsuedoRoomType) {
		return true
	}

	return false
}

// SetPsuedoRoomType gets a reference to the given bool and assigns it to the PsuedoRoomType field.
func (o *FunctionSpaceAvailabilityType) SetPsuedoRoomType(v bool) {
	o.PsuedoRoomType = &v
}

// GetRoomCode returns the RoomCode field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetRoomCode() string {
	if o == nil || IsNil(o.RoomCode) {
		var ret string
		return ret
	}
	return *o.RoomCode
}

// GetRoomCodeOk returns a tuple with the RoomCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetRoomCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomCode) {
		return nil, false
	}
	return o.RoomCode, true
}

// HasRoomCode returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasRoomCode() bool {
	if o != nil && !IsNil(o.RoomCode) {
		return true
	}

	return false
}

// SetRoomCode gets a reference to the given string and assigns it to the RoomCode field.
func (o *FunctionSpaceAvailabilityType) SetRoomCode(v string) {
	o.RoomCode = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *FunctionSpaceAvailabilityType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetShareable returns the Shareable field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetShareable() bool {
	if o == nil || IsNil(o.Shareable) {
		var ret bool
		return ret
	}
	return *o.Shareable
}

// GetShareableOk returns a tuple with the Shareable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetShareableOk() (*bool, bool) {
	if o == nil || IsNil(o.Shareable) {
		return nil, false
	}
	return o.Shareable, true
}

// HasShareable returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasShareable() bool {
	if o != nil && !IsNil(o.Shareable) {
		return true
	}

	return false
}

// SetShareable gets a reference to the given bool and assigns it to the Shareable field.
func (o *FunctionSpaceAvailabilityType) SetShareable(v bool) {
	o.Shareable = &v
}

// GetShortName returns the ShortName field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetShortName() string {
	if o == nil || IsNil(o.ShortName) {
		var ret string
		return ret
	}
	return *o.ShortName
}

// GetShortNameOk returns a tuple with the ShortName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetShortNameOk() (*string, bool) {
	if o == nil || IsNil(o.ShortName) {
		return nil, false
	}
	return o.ShortName, true
}

// HasShortName returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasShortName() bool {
	if o != nil && !IsNil(o.ShortName) {
		return true
	}

	return false
}

// SetShortName gets a reference to the given string and assigns it to the ShortName field.
func (o *FunctionSpaceAvailabilityType) SetShortName(v string) {
	o.ShortName = &v
}

// GetSpaceName returns the SpaceName field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetSpaceName() TranslationTextType2000 {
	if o == nil || IsNil(o.SpaceName) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.SpaceName
}

// GetSpaceNameOk returns a tuple with the SpaceName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetSpaceNameOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.SpaceName) {
		return nil, false
	}
	return o.SpaceName, true
}

// HasSpaceName returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasSpaceName() bool {
	if o != nil && !IsNil(o.SpaceName) {
		return true
	}

	return false
}

// SetSpaceName gets a reference to the given TranslationTextType2000 and assigns it to the SpaceName field.
func (o *FunctionSpaceAvailabilityType) SetSpaceName(v TranslationTextType2000) {
	o.SpaceName = &v
}

// GetSpaceType returns the SpaceType field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetSpaceType() string {
	if o == nil || IsNil(o.SpaceType) {
		var ret string
		return ret
	}
	return *o.SpaceType
}

// GetSpaceTypeOk returns a tuple with the SpaceType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetSpaceTypeOk() (*string, bool) {
	if o == nil || IsNil(o.SpaceType) {
		return nil, false
	}
	return o.SpaceType, true
}

// HasSpaceType returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasSpaceType() bool {
	if o != nil && !IsNil(o.SpaceType) {
		return true
	}

	return false
}

// SetSpaceType gets a reference to the given string and assigns it to the SpaceType field.
func (o *FunctionSpaceAvailabilityType) SetSpaceType(v string) {
	o.SpaceType = &v
}

// GetSuggestedRateAmount returns the SuggestedRateAmount field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetSuggestedRateAmount() CurrencyAmountType {
	if o == nil || IsNil(o.SuggestedRateAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.SuggestedRateAmount
}

// GetSuggestedRateAmountOk returns a tuple with the SuggestedRateAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetSuggestedRateAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.SuggestedRateAmount) {
		return nil, false
	}
	return o.SuggestedRateAmount, true
}

// HasSuggestedRateAmount returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasSuggestedRateAmount() bool {
	if o != nil && !IsNil(o.SuggestedRateAmount) {
		return true
	}

	return false
}

// SetSuggestedRateAmount gets a reference to the given CurrencyAmountType and assigns it to the SuggestedRateAmount field.
func (o *FunctionSpaceAvailabilityType) SetSuggestedRateAmount(v CurrencyAmountType) {
	o.SuggestedRateAmount = &v
}

// GetSuggestedRateCode returns the SuggestedRateCode field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetSuggestedRateCode() string {
	if o == nil || IsNil(o.SuggestedRateCode) {
		var ret string
		return ret
	}
	return *o.SuggestedRateCode
}

// GetSuggestedRateCodeOk returns a tuple with the SuggestedRateCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetSuggestedRateCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SuggestedRateCode) {
		return nil, false
	}
	return o.SuggestedRateCode, true
}

// HasSuggestedRateCode returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasSuggestedRateCode() bool {
	if o != nil && !IsNil(o.SuggestedRateCode) {
		return true
	}

	return false
}

// SetSuggestedRateCode gets a reference to the given string and assigns it to the SuggestedRateCode field.
func (o *FunctionSpaceAvailabilityType) SetSuggestedRateCode(v string) {
	o.SuggestedRateCode = &v
}

// GetSuggestedSetupCode returns the SuggestedSetupCode field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetSuggestedSetupCode() string {
	if o == nil || IsNil(o.SuggestedSetupCode) {
		var ret string
		return ret
	}
	return *o.SuggestedSetupCode
}

// GetSuggestedSetupCodeOk returns a tuple with the SuggestedSetupCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetSuggestedSetupCodeOk() (*string, bool) {
	if o == nil || IsNil(o.SuggestedSetupCode) {
		return nil, false
	}
	return o.SuggestedSetupCode, true
}

// HasSuggestedSetupCode returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasSuggestedSetupCode() bool {
	if o != nil && !IsNil(o.SuggestedSetupCode) {
		return true
	}

	return false
}

// SetSuggestedSetupCode gets a reference to the given string and assigns it to the SuggestedSetupCode field.
func (o *FunctionSpaceAvailabilityType) SetSuggestedSetupCode(v string) {
	o.SuggestedSetupCode = &v
}

// GetWebBookable returns the WebBookable field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetWebBookable() bool {
	if o == nil || IsNil(o.WebBookable) {
		var ret bool
		return ret
	}
	return *o.WebBookable
}

// GetWebBookableOk returns a tuple with the WebBookable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetWebBookableOk() (*bool, bool) {
	if o == nil || IsNil(o.WebBookable) {
		return nil, false
	}
	return o.WebBookable, true
}

// HasWebBookable returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasWebBookable() bool {
	if o != nil && !IsNil(o.WebBookable) {
		return true
	}

	return false
}

// SetWebBookable gets a reference to the given bool and assigns it to the WebBookable field.
func (o *FunctionSpaceAvailabilityType) SetWebBookable(v bool) {
	o.WebBookable = &v
}

// GetWebViewable returns the WebViewable field value if set, zero value otherwise.
func (o *FunctionSpaceAvailabilityType) GetWebViewable() bool {
	if o == nil || IsNil(o.WebViewable) {
		var ret bool
		return ret
	}
	return *o.WebViewable
}

// GetWebViewableOk returns a tuple with the WebViewable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceAvailabilityType) GetWebViewableOk() (*bool, bool) {
	if o == nil || IsNil(o.WebViewable) {
		return nil, false
	}
	return o.WebViewable, true
}

// HasWebViewable returns a boolean if a field has been set.
func (o *FunctionSpaceAvailabilityType) HasWebViewable() bool {
	if o != nil && !IsNil(o.WebViewable) {
		return true
	}

	return false
}

// SetWebViewable gets a reference to the given bool and assigns it to the WebViewable field.
func (o *FunctionSpaceAvailabilityType) SetWebViewable(v bool) {
	o.WebViewable = &v
}

func (o FunctionSpaceAvailabilityType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FunctionSpaceAvailabilityType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Available) {
		toSerialize["available"] = o.Available
	}
	if !IsNil(o.ComboSpace) {
		toSerialize["comboSpace"] = o.ComboSpace
	}
	if !IsNil(o.ElementSpace) {
		toSerialize["elementSpace"] = o.ElementSpace
	}
	if !IsNil(o.Floor) {
		toSerialize["floor"] = o.Floor
	}
	if !IsNil(o.ForceAlternate) {
		toSerialize["forceAlternate"] = o.ForceAlternate
	}
	if !IsNil(o.FullUtilizationTime) {
		toSerialize["fullUtilizationTime"] = o.FullUtilizationTime
	}
	if !IsNil(o.HandicapFacilities) {
		toSerialize["handicapFacilities"] = o.HandicapFacilities
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.Location) {
		toSerialize["location"] = o.Location
	}
	if !IsNil(o.OrderBy1) {
		toSerialize["orderBy1"] = o.OrderBy1
	}
	if !IsNil(o.OrderBy2) {
		toSerialize["orderBy2"] = o.OrderBy2
	}
	if !IsNil(o.OrderBy3) {
		toSerialize["orderBy3"] = o.OrderBy3
	}
	if !IsNil(o.PsuedoRoomType) {
		toSerialize["psuedoRoomType"] = o.PsuedoRoomType
	}
	if !IsNil(o.RoomCode) {
		toSerialize["roomCode"] = o.RoomCode
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.Shareable) {
		toSerialize["shareable"] = o.Shareable
	}
	if !IsNil(o.ShortName) {
		toSerialize["shortName"] = o.ShortName
	}
	if !IsNil(o.SpaceName) {
		toSerialize["spaceName"] = o.SpaceName
	}
	if !IsNil(o.SpaceType) {
		toSerialize["spaceType"] = o.SpaceType
	}
	if !IsNil(o.SuggestedRateAmount) {
		toSerialize["suggestedRateAmount"] = o.SuggestedRateAmount
	}
	if !IsNil(o.SuggestedRateCode) {
		toSerialize["suggestedRateCode"] = o.SuggestedRateCode
	}
	if !IsNil(o.SuggestedSetupCode) {
		toSerialize["suggestedSetupCode"] = o.SuggestedSetupCode
	}
	if !IsNil(o.WebBookable) {
		toSerialize["webBookable"] = o.WebBookable
	}
	if !IsNil(o.WebViewable) {
		toSerialize["webViewable"] = o.WebViewable
	}
	return toSerialize, nil
}

type NullableFunctionSpaceAvailabilityType struct {
	value *FunctionSpaceAvailabilityType
	isSet bool
}

func (v NullableFunctionSpaceAvailabilityType) Get() *FunctionSpaceAvailabilityType {
	return v.value
}

func (v *NullableFunctionSpaceAvailabilityType) Set(val *FunctionSpaceAvailabilityType) {
	v.value = val
	v.isSet = true
}

func (v NullableFunctionSpaceAvailabilityType) IsSet() bool {
	return v.isSet
}

func (v *NullableFunctionSpaceAvailabilityType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFunctionSpaceAvailabilityType(val *FunctionSpaceAvailabilityType) *NullableFunctionSpaceAvailabilityType {
	return &NullableFunctionSpaceAvailabilityType{value: val, isSet: true}
}

func (v NullableFunctionSpaceAvailabilityType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFunctionSpaceAvailabilityType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

