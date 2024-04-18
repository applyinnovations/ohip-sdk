/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the FunctionSpaceConfigType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FunctionSpaceConfigType{}

// FunctionSpaceConfigType The summary information for a function space.
type FunctionSpaceConfigType struct {
	Alternate *FunctionSpaceAlternateType `json:"alternate,omitempty"`
	Capacity *RoomCapacityType `json:"capacity,omitempty"`
	// Indicate if the function space is a combination room.
	Combo *bool `json:"combo,omitempty"`
	ComboElements []string `json:"comboElements,omitempty"`
	// This type holds a collection of combo elements for a function space.
	ComboRooms []ComboElementRoomType `json:"comboRooms,omitempty"`
	Description *TranslationTextType2000 `json:"description,omitempty"`
	Dimension *FunctionSpaceDimensionType `json:"dimension,omitempty"`
	// Indicate if the function space will be shown in the Function Diary by default.
	DisplayInDiary *bool `json:"displayInDiary,omitempty"`
	// Indicate if the function space will be shown in the Function Diary by default.
	Element *bool `json:"element,omitempty"`
	// The floor on which the Function Space is located.
	Floor *string `json:"floor,omitempty"`
	// Indicate if the function space is forced to have alternate function spaces in case the function space becomes unvailable.
	ForceAlternate *bool `json:"forceAlternate,omitempty"`
	// The time in minutes that the function space would be considered at 100% utilization.
	FullUtilizationTime *float32 `json:"fullUtilizationTime,omitempty"`
	// If the function space has future event, the combo elements are not editable.
	FutureEventsExist *bool `json:"futureEventsExist,omitempty"`
	// Indicates whether the function space has handicap facilities.
	HandicapFacilities *bool `json:"handicapFacilities,omitempty"`
	// Hotel Code where function space belongs to.
	HotelId *string `json:"hotelId,omitempty"`
	// The building on which the Function Space is located.
	Location *string `json:"location,omitempty"`
	// Maximum number of events for a shared function space.
	MaxEvents *int32 `json:"maxEvents,omitempty"`
	// The first custom order for sorting the function space display.
	OrderBy1 *int32 `json:"orderBy1,omitempty"`
	// The second custom order for sorting the function space display.
	OrderBy2 *int32 `json:"orderBy2,omitempty"`
	// The third custom order for sorting the function space display.
	OrderBy3 *int32 `json:"orderBy3,omitempty"`
	// Indicates whether the room type is psuedo.
	PsuedoRoomType *bool `json:"psuedoRoomType,omitempty"`
	// List of available rates for the function space.
	Rates []BaseFunctionSpaceRateType `json:"rates,omitempty"`
	// Room Code of the Function Space.
	RoomCode *string `json:"roomCode,omitempty"`
	// Room Type of the Function Space.
	RoomType *string `json:"roomType,omitempty"`
	// Setup Style Type for function space.
	SetupStyles []FunctionSpaceConfigTypeSetupStylesInner `json:"setupStyles,omitempty"`
	// Indicate if the function space is shareable.
	Shareable *bool `json:"shareable,omitempty"`
	// The Short Name of the Function Space.
	ShortName *string `json:"shortName,omitempty"`
	SpaceName *TranslationTextType2000 `json:"spaceName,omitempty"`
	// The Type which the Function Space belongs to.
	SpaceType *string `json:"spaceType,omitempty"`
	// Indicates whether the Function Space is web bookable or not.
	WebBookable *bool `json:"webBookable,omitempty"`
	// Indicates whether the Function Space is web viewable or not.
	WebViewable *bool `json:"webViewable,omitempty"`
}

// NewFunctionSpaceConfigType instantiates a new FunctionSpaceConfigType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFunctionSpaceConfigType() *FunctionSpaceConfigType {
	this := FunctionSpaceConfigType{}
	return &this
}

// NewFunctionSpaceConfigTypeWithDefaults instantiates a new FunctionSpaceConfigType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFunctionSpaceConfigTypeWithDefaults() *FunctionSpaceConfigType {
	this := FunctionSpaceConfigType{}
	return &this
}

// GetAlternate returns the Alternate field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetAlternate() FunctionSpaceAlternateType {
	if o == nil || IsNil(o.Alternate) {
		var ret FunctionSpaceAlternateType
		return ret
	}
	return *o.Alternate
}

// GetAlternateOk returns a tuple with the Alternate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetAlternateOk() (*FunctionSpaceAlternateType, bool) {
	if o == nil || IsNil(o.Alternate) {
		return nil, false
	}
	return o.Alternate, true
}

// HasAlternate returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasAlternate() bool {
	if o != nil && !IsNil(o.Alternate) {
		return true
	}

	return false
}

// SetAlternate gets a reference to the given FunctionSpaceAlternateType and assigns it to the Alternate field.
func (o *FunctionSpaceConfigType) SetAlternate(v FunctionSpaceAlternateType) {
	o.Alternate = &v
}

// GetCapacity returns the Capacity field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetCapacity() RoomCapacityType {
	if o == nil || IsNil(o.Capacity) {
		var ret RoomCapacityType
		return ret
	}
	return *o.Capacity
}

// GetCapacityOk returns a tuple with the Capacity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetCapacityOk() (*RoomCapacityType, bool) {
	if o == nil || IsNil(o.Capacity) {
		return nil, false
	}
	return o.Capacity, true
}

// HasCapacity returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasCapacity() bool {
	if o != nil && !IsNil(o.Capacity) {
		return true
	}

	return false
}

// SetCapacity gets a reference to the given RoomCapacityType and assigns it to the Capacity field.
func (o *FunctionSpaceConfigType) SetCapacity(v RoomCapacityType) {
	o.Capacity = &v
}

// GetCombo returns the Combo field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetCombo() bool {
	if o == nil || IsNil(o.Combo) {
		var ret bool
		return ret
	}
	return *o.Combo
}

// GetComboOk returns a tuple with the Combo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetComboOk() (*bool, bool) {
	if o == nil || IsNil(o.Combo) {
		return nil, false
	}
	return o.Combo, true
}

// HasCombo returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasCombo() bool {
	if o != nil && !IsNil(o.Combo) {
		return true
	}

	return false
}

// SetCombo gets a reference to the given bool and assigns it to the Combo field.
func (o *FunctionSpaceConfigType) SetCombo(v bool) {
	o.Combo = &v
}

// GetComboElements returns the ComboElements field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetComboElements() []string {
	if o == nil || IsNil(o.ComboElements) {
		var ret []string
		return ret
	}
	return o.ComboElements
}

// GetComboElementsOk returns a tuple with the ComboElements field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetComboElementsOk() ([]string, bool) {
	if o == nil || IsNil(o.ComboElements) {
		return nil, false
	}
	return o.ComboElements, true
}

// HasComboElements returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasComboElements() bool {
	if o != nil && !IsNil(o.ComboElements) {
		return true
	}

	return false
}

// SetComboElements gets a reference to the given []string and assigns it to the ComboElements field.
func (o *FunctionSpaceConfigType) SetComboElements(v []string) {
	o.ComboElements = v
}

// GetComboRooms returns the ComboRooms field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetComboRooms() []ComboElementRoomType {
	if o == nil || IsNil(o.ComboRooms) {
		var ret []ComboElementRoomType
		return ret
	}
	return o.ComboRooms
}

// GetComboRoomsOk returns a tuple with the ComboRooms field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetComboRoomsOk() ([]ComboElementRoomType, bool) {
	if o == nil || IsNil(o.ComboRooms) {
		return nil, false
	}
	return o.ComboRooms, true
}

// HasComboRooms returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasComboRooms() bool {
	if o != nil && !IsNil(o.ComboRooms) {
		return true
	}

	return false
}

// SetComboRooms gets a reference to the given []ComboElementRoomType and assigns it to the ComboRooms field.
func (o *FunctionSpaceConfigType) SetComboRooms(v []ComboElementRoomType) {
	o.ComboRooms = v
}

// GetDescription returns the Description field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetDescription() TranslationTextType2000 {
	if o == nil || IsNil(o.Description) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.Description
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetDescriptionOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.Description) {
		return nil, false
	}
	return o.Description, true
}

// HasDescription returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasDescription() bool {
	if o != nil && !IsNil(o.Description) {
		return true
	}

	return false
}

// SetDescription gets a reference to the given TranslationTextType2000 and assigns it to the Description field.
func (o *FunctionSpaceConfigType) SetDescription(v TranslationTextType2000) {
	o.Description = &v
}

// GetDimension returns the Dimension field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetDimension() FunctionSpaceDimensionType {
	if o == nil || IsNil(o.Dimension) {
		var ret FunctionSpaceDimensionType
		return ret
	}
	return *o.Dimension
}

// GetDimensionOk returns a tuple with the Dimension field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetDimensionOk() (*FunctionSpaceDimensionType, bool) {
	if o == nil || IsNil(o.Dimension) {
		return nil, false
	}
	return o.Dimension, true
}

// HasDimension returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasDimension() bool {
	if o != nil && !IsNil(o.Dimension) {
		return true
	}

	return false
}

// SetDimension gets a reference to the given FunctionSpaceDimensionType and assigns it to the Dimension field.
func (o *FunctionSpaceConfigType) SetDimension(v FunctionSpaceDimensionType) {
	o.Dimension = &v
}

// GetDisplayInDiary returns the DisplayInDiary field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetDisplayInDiary() bool {
	if o == nil || IsNil(o.DisplayInDiary) {
		var ret bool
		return ret
	}
	return *o.DisplayInDiary
}

// GetDisplayInDiaryOk returns a tuple with the DisplayInDiary field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetDisplayInDiaryOk() (*bool, bool) {
	if o == nil || IsNil(o.DisplayInDiary) {
		return nil, false
	}
	return o.DisplayInDiary, true
}

// HasDisplayInDiary returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasDisplayInDiary() bool {
	if o != nil && !IsNil(o.DisplayInDiary) {
		return true
	}

	return false
}

// SetDisplayInDiary gets a reference to the given bool and assigns it to the DisplayInDiary field.
func (o *FunctionSpaceConfigType) SetDisplayInDiary(v bool) {
	o.DisplayInDiary = &v
}

// GetElement returns the Element field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetElement() bool {
	if o == nil || IsNil(o.Element) {
		var ret bool
		return ret
	}
	return *o.Element
}

// GetElementOk returns a tuple with the Element field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetElementOk() (*bool, bool) {
	if o == nil || IsNil(o.Element) {
		return nil, false
	}
	return o.Element, true
}

// HasElement returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasElement() bool {
	if o != nil && !IsNil(o.Element) {
		return true
	}

	return false
}

// SetElement gets a reference to the given bool and assigns it to the Element field.
func (o *FunctionSpaceConfigType) SetElement(v bool) {
	o.Element = &v
}

// GetFloor returns the Floor field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetFloor() string {
	if o == nil || IsNil(o.Floor) {
		var ret string
		return ret
	}
	return *o.Floor
}

// GetFloorOk returns a tuple with the Floor field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetFloorOk() (*string, bool) {
	if o == nil || IsNil(o.Floor) {
		return nil, false
	}
	return o.Floor, true
}

// HasFloor returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasFloor() bool {
	if o != nil && !IsNil(o.Floor) {
		return true
	}

	return false
}

// SetFloor gets a reference to the given string and assigns it to the Floor field.
func (o *FunctionSpaceConfigType) SetFloor(v string) {
	o.Floor = &v
}

// GetForceAlternate returns the ForceAlternate field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetForceAlternate() bool {
	if o == nil || IsNil(o.ForceAlternate) {
		var ret bool
		return ret
	}
	return *o.ForceAlternate
}

// GetForceAlternateOk returns a tuple with the ForceAlternate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetForceAlternateOk() (*bool, bool) {
	if o == nil || IsNil(o.ForceAlternate) {
		return nil, false
	}
	return o.ForceAlternate, true
}

// HasForceAlternate returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasForceAlternate() bool {
	if o != nil && !IsNil(o.ForceAlternate) {
		return true
	}

	return false
}

// SetForceAlternate gets a reference to the given bool and assigns it to the ForceAlternate field.
func (o *FunctionSpaceConfigType) SetForceAlternate(v bool) {
	o.ForceAlternate = &v
}

// GetFullUtilizationTime returns the FullUtilizationTime field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetFullUtilizationTime() float32 {
	if o == nil || IsNil(o.FullUtilizationTime) {
		var ret float32
		return ret
	}
	return *o.FullUtilizationTime
}

// GetFullUtilizationTimeOk returns a tuple with the FullUtilizationTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetFullUtilizationTimeOk() (*float32, bool) {
	if o == nil || IsNil(o.FullUtilizationTime) {
		return nil, false
	}
	return o.FullUtilizationTime, true
}

// HasFullUtilizationTime returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasFullUtilizationTime() bool {
	if o != nil && !IsNil(o.FullUtilizationTime) {
		return true
	}

	return false
}

// SetFullUtilizationTime gets a reference to the given float32 and assigns it to the FullUtilizationTime field.
func (o *FunctionSpaceConfigType) SetFullUtilizationTime(v float32) {
	o.FullUtilizationTime = &v
}

// GetFutureEventsExist returns the FutureEventsExist field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetFutureEventsExist() bool {
	if o == nil || IsNil(o.FutureEventsExist) {
		var ret bool
		return ret
	}
	return *o.FutureEventsExist
}

// GetFutureEventsExistOk returns a tuple with the FutureEventsExist field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetFutureEventsExistOk() (*bool, bool) {
	if o == nil || IsNil(o.FutureEventsExist) {
		return nil, false
	}
	return o.FutureEventsExist, true
}

// HasFutureEventsExist returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasFutureEventsExist() bool {
	if o != nil && !IsNil(o.FutureEventsExist) {
		return true
	}

	return false
}

// SetFutureEventsExist gets a reference to the given bool and assigns it to the FutureEventsExist field.
func (o *FunctionSpaceConfigType) SetFutureEventsExist(v bool) {
	o.FutureEventsExist = &v
}

// GetHandicapFacilities returns the HandicapFacilities field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetHandicapFacilities() bool {
	if o == nil || IsNil(o.HandicapFacilities) {
		var ret bool
		return ret
	}
	return *o.HandicapFacilities
}

// GetHandicapFacilitiesOk returns a tuple with the HandicapFacilities field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetHandicapFacilitiesOk() (*bool, bool) {
	if o == nil || IsNil(o.HandicapFacilities) {
		return nil, false
	}
	return o.HandicapFacilities, true
}

// HasHandicapFacilities returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasHandicapFacilities() bool {
	if o != nil && !IsNil(o.HandicapFacilities) {
		return true
	}

	return false
}

// SetHandicapFacilities gets a reference to the given bool and assigns it to the HandicapFacilities field.
func (o *FunctionSpaceConfigType) SetHandicapFacilities(v bool) {
	o.HandicapFacilities = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *FunctionSpaceConfigType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetLocation returns the Location field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetLocation() string {
	if o == nil || IsNil(o.Location) {
		var ret string
		return ret
	}
	return *o.Location
}

// GetLocationOk returns a tuple with the Location field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetLocationOk() (*string, bool) {
	if o == nil || IsNil(o.Location) {
		return nil, false
	}
	return o.Location, true
}

// HasLocation returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasLocation() bool {
	if o != nil && !IsNil(o.Location) {
		return true
	}

	return false
}

// SetLocation gets a reference to the given string and assigns it to the Location field.
func (o *FunctionSpaceConfigType) SetLocation(v string) {
	o.Location = &v
}

// GetMaxEvents returns the MaxEvents field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetMaxEvents() int32 {
	if o == nil || IsNil(o.MaxEvents) {
		var ret int32
		return ret
	}
	return *o.MaxEvents
}

// GetMaxEventsOk returns a tuple with the MaxEvents field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetMaxEventsOk() (*int32, bool) {
	if o == nil || IsNil(o.MaxEvents) {
		return nil, false
	}
	return o.MaxEvents, true
}

// HasMaxEvents returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasMaxEvents() bool {
	if o != nil && !IsNil(o.MaxEvents) {
		return true
	}

	return false
}

// SetMaxEvents gets a reference to the given int32 and assigns it to the MaxEvents field.
func (o *FunctionSpaceConfigType) SetMaxEvents(v int32) {
	o.MaxEvents = &v
}

// GetOrderBy1 returns the OrderBy1 field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetOrderBy1() int32 {
	if o == nil || IsNil(o.OrderBy1) {
		var ret int32
		return ret
	}
	return *o.OrderBy1
}

// GetOrderBy1Ok returns a tuple with the OrderBy1 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetOrderBy1Ok() (*int32, bool) {
	if o == nil || IsNil(o.OrderBy1) {
		return nil, false
	}
	return o.OrderBy1, true
}

// HasOrderBy1 returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasOrderBy1() bool {
	if o != nil && !IsNil(o.OrderBy1) {
		return true
	}

	return false
}

// SetOrderBy1 gets a reference to the given int32 and assigns it to the OrderBy1 field.
func (o *FunctionSpaceConfigType) SetOrderBy1(v int32) {
	o.OrderBy1 = &v
}

// GetOrderBy2 returns the OrderBy2 field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetOrderBy2() int32 {
	if o == nil || IsNil(o.OrderBy2) {
		var ret int32
		return ret
	}
	return *o.OrderBy2
}

// GetOrderBy2Ok returns a tuple with the OrderBy2 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetOrderBy2Ok() (*int32, bool) {
	if o == nil || IsNil(o.OrderBy2) {
		return nil, false
	}
	return o.OrderBy2, true
}

// HasOrderBy2 returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasOrderBy2() bool {
	if o != nil && !IsNil(o.OrderBy2) {
		return true
	}

	return false
}

// SetOrderBy2 gets a reference to the given int32 and assigns it to the OrderBy2 field.
func (o *FunctionSpaceConfigType) SetOrderBy2(v int32) {
	o.OrderBy2 = &v
}

// GetOrderBy3 returns the OrderBy3 field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetOrderBy3() int32 {
	if o == nil || IsNil(o.OrderBy3) {
		var ret int32
		return ret
	}
	return *o.OrderBy3
}

// GetOrderBy3Ok returns a tuple with the OrderBy3 field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetOrderBy3Ok() (*int32, bool) {
	if o == nil || IsNil(o.OrderBy3) {
		return nil, false
	}
	return o.OrderBy3, true
}

// HasOrderBy3 returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasOrderBy3() bool {
	if o != nil && !IsNil(o.OrderBy3) {
		return true
	}

	return false
}

// SetOrderBy3 gets a reference to the given int32 and assigns it to the OrderBy3 field.
func (o *FunctionSpaceConfigType) SetOrderBy3(v int32) {
	o.OrderBy3 = &v
}

// GetPsuedoRoomType returns the PsuedoRoomType field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetPsuedoRoomType() bool {
	if o == nil || IsNil(o.PsuedoRoomType) {
		var ret bool
		return ret
	}
	return *o.PsuedoRoomType
}

// GetPsuedoRoomTypeOk returns a tuple with the PsuedoRoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetPsuedoRoomTypeOk() (*bool, bool) {
	if o == nil || IsNil(o.PsuedoRoomType) {
		return nil, false
	}
	return o.PsuedoRoomType, true
}

// HasPsuedoRoomType returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasPsuedoRoomType() bool {
	if o != nil && !IsNil(o.PsuedoRoomType) {
		return true
	}

	return false
}

// SetPsuedoRoomType gets a reference to the given bool and assigns it to the PsuedoRoomType field.
func (o *FunctionSpaceConfigType) SetPsuedoRoomType(v bool) {
	o.PsuedoRoomType = &v
}

// GetRates returns the Rates field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetRates() []BaseFunctionSpaceRateType {
	if o == nil || IsNil(o.Rates) {
		var ret []BaseFunctionSpaceRateType
		return ret
	}
	return o.Rates
}

// GetRatesOk returns a tuple with the Rates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetRatesOk() ([]BaseFunctionSpaceRateType, bool) {
	if o == nil || IsNil(o.Rates) {
		return nil, false
	}
	return o.Rates, true
}

// HasRates returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasRates() bool {
	if o != nil && !IsNil(o.Rates) {
		return true
	}

	return false
}

// SetRates gets a reference to the given []BaseFunctionSpaceRateType and assigns it to the Rates field.
func (o *FunctionSpaceConfigType) SetRates(v []BaseFunctionSpaceRateType) {
	o.Rates = v
}

// GetRoomCode returns the RoomCode field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetRoomCode() string {
	if o == nil || IsNil(o.RoomCode) {
		var ret string
		return ret
	}
	return *o.RoomCode
}

// GetRoomCodeOk returns a tuple with the RoomCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetRoomCodeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomCode) {
		return nil, false
	}
	return o.RoomCode, true
}

// HasRoomCode returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasRoomCode() bool {
	if o != nil && !IsNil(o.RoomCode) {
		return true
	}

	return false
}

// SetRoomCode gets a reference to the given string and assigns it to the RoomCode field.
func (o *FunctionSpaceConfigType) SetRoomCode(v string) {
	o.RoomCode = &v
}

// GetRoomType returns the RoomType field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetRoomType() string {
	if o == nil || IsNil(o.RoomType) {
		var ret string
		return ret
	}
	return *o.RoomType
}

// GetRoomTypeOk returns a tuple with the RoomType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetRoomTypeOk() (*string, bool) {
	if o == nil || IsNil(o.RoomType) {
		return nil, false
	}
	return o.RoomType, true
}

// HasRoomType returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasRoomType() bool {
	if o != nil && !IsNil(o.RoomType) {
		return true
	}

	return false
}

// SetRoomType gets a reference to the given string and assigns it to the RoomType field.
func (o *FunctionSpaceConfigType) SetRoomType(v string) {
	o.RoomType = &v
}

// GetSetupStyles returns the SetupStyles field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetSetupStyles() []FunctionSpaceConfigTypeSetupStylesInner {
	if o == nil || IsNil(o.SetupStyles) {
		var ret []FunctionSpaceConfigTypeSetupStylesInner
		return ret
	}
	return o.SetupStyles
}

// GetSetupStylesOk returns a tuple with the SetupStyles field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetSetupStylesOk() ([]FunctionSpaceConfigTypeSetupStylesInner, bool) {
	if o == nil || IsNil(o.SetupStyles) {
		return nil, false
	}
	return o.SetupStyles, true
}

// HasSetupStyles returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasSetupStyles() bool {
	if o != nil && !IsNil(o.SetupStyles) {
		return true
	}

	return false
}

// SetSetupStyles gets a reference to the given []FunctionSpaceConfigTypeSetupStylesInner and assigns it to the SetupStyles field.
func (o *FunctionSpaceConfigType) SetSetupStyles(v []FunctionSpaceConfigTypeSetupStylesInner) {
	o.SetupStyles = v
}

// GetShareable returns the Shareable field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetShareable() bool {
	if o == nil || IsNil(o.Shareable) {
		var ret bool
		return ret
	}
	return *o.Shareable
}

// GetShareableOk returns a tuple with the Shareable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetShareableOk() (*bool, bool) {
	if o == nil || IsNil(o.Shareable) {
		return nil, false
	}
	return o.Shareable, true
}

// HasShareable returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasShareable() bool {
	if o != nil && !IsNil(o.Shareable) {
		return true
	}

	return false
}

// SetShareable gets a reference to the given bool and assigns it to the Shareable field.
func (o *FunctionSpaceConfigType) SetShareable(v bool) {
	o.Shareable = &v
}

// GetShortName returns the ShortName field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetShortName() string {
	if o == nil || IsNil(o.ShortName) {
		var ret string
		return ret
	}
	return *o.ShortName
}

// GetShortNameOk returns a tuple with the ShortName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetShortNameOk() (*string, bool) {
	if o == nil || IsNil(o.ShortName) {
		return nil, false
	}
	return o.ShortName, true
}

// HasShortName returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasShortName() bool {
	if o != nil && !IsNil(o.ShortName) {
		return true
	}

	return false
}

// SetShortName gets a reference to the given string and assigns it to the ShortName field.
func (o *FunctionSpaceConfigType) SetShortName(v string) {
	o.ShortName = &v
}

// GetSpaceName returns the SpaceName field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetSpaceName() TranslationTextType2000 {
	if o == nil || IsNil(o.SpaceName) {
		var ret TranslationTextType2000
		return ret
	}
	return *o.SpaceName
}

// GetSpaceNameOk returns a tuple with the SpaceName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetSpaceNameOk() (*TranslationTextType2000, bool) {
	if o == nil || IsNil(o.SpaceName) {
		return nil, false
	}
	return o.SpaceName, true
}

// HasSpaceName returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasSpaceName() bool {
	if o != nil && !IsNil(o.SpaceName) {
		return true
	}

	return false
}

// SetSpaceName gets a reference to the given TranslationTextType2000 and assigns it to the SpaceName field.
func (o *FunctionSpaceConfigType) SetSpaceName(v TranslationTextType2000) {
	o.SpaceName = &v
}

// GetSpaceType returns the SpaceType field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetSpaceType() string {
	if o == nil || IsNil(o.SpaceType) {
		var ret string
		return ret
	}
	return *o.SpaceType
}

// GetSpaceTypeOk returns a tuple with the SpaceType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetSpaceTypeOk() (*string, bool) {
	if o == nil || IsNil(o.SpaceType) {
		return nil, false
	}
	return o.SpaceType, true
}

// HasSpaceType returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasSpaceType() bool {
	if o != nil && !IsNil(o.SpaceType) {
		return true
	}

	return false
}

// SetSpaceType gets a reference to the given string and assigns it to the SpaceType field.
func (o *FunctionSpaceConfigType) SetSpaceType(v string) {
	o.SpaceType = &v
}

// GetWebBookable returns the WebBookable field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetWebBookable() bool {
	if o == nil || IsNil(o.WebBookable) {
		var ret bool
		return ret
	}
	return *o.WebBookable
}

// GetWebBookableOk returns a tuple with the WebBookable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetWebBookableOk() (*bool, bool) {
	if o == nil || IsNil(o.WebBookable) {
		return nil, false
	}
	return o.WebBookable, true
}

// HasWebBookable returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasWebBookable() bool {
	if o != nil && !IsNil(o.WebBookable) {
		return true
	}

	return false
}

// SetWebBookable gets a reference to the given bool and assigns it to the WebBookable field.
func (o *FunctionSpaceConfigType) SetWebBookable(v bool) {
	o.WebBookable = &v
}

// GetWebViewable returns the WebViewable field value if set, zero value otherwise.
func (o *FunctionSpaceConfigType) GetWebViewable() bool {
	if o == nil || IsNil(o.WebViewable) {
		var ret bool
		return ret
	}
	return *o.WebViewable
}

// GetWebViewableOk returns a tuple with the WebViewable field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FunctionSpaceConfigType) GetWebViewableOk() (*bool, bool) {
	if o == nil || IsNil(o.WebViewable) {
		return nil, false
	}
	return o.WebViewable, true
}

// HasWebViewable returns a boolean if a field has been set.
func (o *FunctionSpaceConfigType) HasWebViewable() bool {
	if o != nil && !IsNil(o.WebViewable) {
		return true
	}

	return false
}

// SetWebViewable gets a reference to the given bool and assigns it to the WebViewable field.
func (o *FunctionSpaceConfigType) SetWebViewable(v bool) {
	o.WebViewable = &v
}

func (o FunctionSpaceConfigType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FunctionSpaceConfigType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Alternate) {
		toSerialize["alternate"] = o.Alternate
	}
	if !IsNil(o.Capacity) {
		toSerialize["capacity"] = o.Capacity
	}
	if !IsNil(o.Combo) {
		toSerialize["combo"] = o.Combo
	}
	if !IsNil(o.ComboElements) {
		toSerialize["comboElements"] = o.ComboElements
	}
	if !IsNil(o.ComboRooms) {
		toSerialize["comboRooms"] = o.ComboRooms
	}
	if !IsNil(o.Description) {
		toSerialize["description"] = o.Description
	}
	if !IsNil(o.Dimension) {
		toSerialize["dimension"] = o.Dimension
	}
	if !IsNil(o.DisplayInDiary) {
		toSerialize["displayInDiary"] = o.DisplayInDiary
	}
	if !IsNil(o.Element) {
		toSerialize["element"] = o.Element
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
	if !IsNil(o.FutureEventsExist) {
		toSerialize["futureEventsExist"] = o.FutureEventsExist
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
	if !IsNil(o.MaxEvents) {
		toSerialize["maxEvents"] = o.MaxEvents
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
	if !IsNil(o.Rates) {
		toSerialize["rates"] = o.Rates
	}
	if !IsNil(o.RoomCode) {
		toSerialize["roomCode"] = o.RoomCode
	}
	if !IsNil(o.RoomType) {
		toSerialize["roomType"] = o.RoomType
	}
	if !IsNil(o.SetupStyles) {
		toSerialize["setupStyles"] = o.SetupStyles
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
	if !IsNil(o.WebBookable) {
		toSerialize["webBookable"] = o.WebBookable
	}
	if !IsNil(o.WebViewable) {
		toSerialize["webViewable"] = o.WebViewable
	}
	return toSerialize, nil
}

type NullableFunctionSpaceConfigType struct {
	value *FunctionSpaceConfigType
	isSet bool
}

func (v NullableFunctionSpaceConfigType) Get() *FunctionSpaceConfigType {
	return v.value
}

func (v *NullableFunctionSpaceConfigType) Set(val *FunctionSpaceConfigType) {
	v.value = val
	v.isSet = true
}

func (v NullableFunctionSpaceConfigType) IsSet() bool {
	return v.isSet
}

func (v *NullableFunctionSpaceConfigType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFunctionSpaceConfigType(val *FunctionSpaceConfigType) *NullableFunctionSpaceConfigType {
	return &NullableFunctionSpaceConfigType{value: val, isSet: true}
}

func (v NullableFunctionSpaceConfigType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFunctionSpaceConfigType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

