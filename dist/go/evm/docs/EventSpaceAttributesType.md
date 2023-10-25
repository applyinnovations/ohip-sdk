# EventSpaceAttributesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alternate** | Pointer to **bool** | Flag that tells whether the functionSpaceDetails is an Alternate Room or not. | [optional] 
**ComboElement** | Pointer to **bool** | Flag that tells whether the functionSpaceDetails is a Combo Element or not. | [optional] 
**ComboRoom** | Pointer to **string** | Combo Room Number if the functionSpaceDetails is a Combo Element. | [optional] 
**ComboSpace** | Pointer to **bool** | Flag that tells whether the functionSpaceDetails is a Combo or not. | [optional] 
**MaximumOccupancy** | Pointer to **int32** | Specifies the maximum occupancy this functionSpaceDetails can handle. | [optional] 
**Shareable** | Pointer to **bool** | Flag that tells whether the functionSpaceDetails is Shareable or not. | [optional] 
**SpaceArea** | Pointer to [**SpaceAreaType**](SpaceAreaType.md) |  | [optional] 

## Methods

### NewEventSpaceAttributesType

`func NewEventSpaceAttributesType() *EventSpaceAttributesType`

NewEventSpaceAttributesType instantiates a new EventSpaceAttributesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventSpaceAttributesTypeWithDefaults

`func NewEventSpaceAttributesTypeWithDefaults() *EventSpaceAttributesType`

NewEventSpaceAttributesTypeWithDefaults instantiates a new EventSpaceAttributesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlternate

`func (o *EventSpaceAttributesType) GetAlternate() bool`

GetAlternate returns the Alternate field if non-nil, zero value otherwise.

### GetAlternateOk

`func (o *EventSpaceAttributesType) GetAlternateOk() (*bool, bool)`

GetAlternateOk returns a tuple with the Alternate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternate

`func (o *EventSpaceAttributesType) SetAlternate(v bool)`

SetAlternate sets Alternate field to given value.

### HasAlternate

`func (o *EventSpaceAttributesType) HasAlternate() bool`

HasAlternate returns a boolean if a field has been set.

### GetComboElement

`func (o *EventSpaceAttributesType) GetComboElement() bool`

GetComboElement returns the ComboElement field if non-nil, zero value otherwise.

### GetComboElementOk

`func (o *EventSpaceAttributesType) GetComboElementOk() (*bool, bool)`

GetComboElementOk returns a tuple with the ComboElement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComboElement

`func (o *EventSpaceAttributesType) SetComboElement(v bool)`

SetComboElement sets ComboElement field to given value.

### HasComboElement

`func (o *EventSpaceAttributesType) HasComboElement() bool`

HasComboElement returns a boolean if a field has been set.

### GetComboRoom

`func (o *EventSpaceAttributesType) GetComboRoom() string`

GetComboRoom returns the ComboRoom field if non-nil, zero value otherwise.

### GetComboRoomOk

`func (o *EventSpaceAttributesType) GetComboRoomOk() (*string, bool)`

GetComboRoomOk returns a tuple with the ComboRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComboRoom

`func (o *EventSpaceAttributesType) SetComboRoom(v string)`

SetComboRoom sets ComboRoom field to given value.

### HasComboRoom

`func (o *EventSpaceAttributesType) HasComboRoom() bool`

HasComboRoom returns a boolean if a field has been set.

### GetComboSpace

`func (o *EventSpaceAttributesType) GetComboSpace() bool`

GetComboSpace returns the ComboSpace field if non-nil, zero value otherwise.

### GetComboSpaceOk

`func (o *EventSpaceAttributesType) GetComboSpaceOk() (*bool, bool)`

GetComboSpaceOk returns a tuple with the ComboSpace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComboSpace

`func (o *EventSpaceAttributesType) SetComboSpace(v bool)`

SetComboSpace sets ComboSpace field to given value.

### HasComboSpace

`func (o *EventSpaceAttributesType) HasComboSpace() bool`

HasComboSpace returns a boolean if a field has been set.

### GetMaximumOccupancy

`func (o *EventSpaceAttributesType) GetMaximumOccupancy() int32`

GetMaximumOccupancy returns the MaximumOccupancy field if non-nil, zero value otherwise.

### GetMaximumOccupancyOk

`func (o *EventSpaceAttributesType) GetMaximumOccupancyOk() (*int32, bool)`

GetMaximumOccupancyOk returns a tuple with the MaximumOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumOccupancy

`func (o *EventSpaceAttributesType) SetMaximumOccupancy(v int32)`

SetMaximumOccupancy sets MaximumOccupancy field to given value.

### HasMaximumOccupancy

`func (o *EventSpaceAttributesType) HasMaximumOccupancy() bool`

HasMaximumOccupancy returns a boolean if a field has been set.

### GetShareable

`func (o *EventSpaceAttributesType) GetShareable() bool`

GetShareable returns the Shareable field if non-nil, zero value otherwise.

### GetShareableOk

`func (o *EventSpaceAttributesType) GetShareableOk() (*bool, bool)`

GetShareableOk returns a tuple with the Shareable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareable

`func (o *EventSpaceAttributesType) SetShareable(v bool)`

SetShareable sets Shareable field to given value.

### HasShareable

`func (o *EventSpaceAttributesType) HasShareable() bool`

HasShareable returns a boolean if a field has been set.

### GetSpaceArea

`func (o *EventSpaceAttributesType) GetSpaceArea() SpaceAreaType`

GetSpaceArea returns the SpaceArea field if non-nil, zero value otherwise.

### GetSpaceAreaOk

`func (o *EventSpaceAttributesType) GetSpaceAreaOk() (*SpaceAreaType, bool)`

GetSpaceAreaOk returns a tuple with the SpaceArea field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpaceArea

`func (o *EventSpaceAttributesType) SetSpaceArea(v SpaceAreaType)`

SetSpaceArea sets SpaceArea field to given value.

### HasSpaceArea

`func (o *EventSpaceAttributesType) HasSpaceArea() bool`

HasSpaceArea returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


