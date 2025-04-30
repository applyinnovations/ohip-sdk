# HotelFloorType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Floor** | Pointer to **string** | Specifies the floor code. | [optional] 
**Description** | Pointer to **string** | Description for the floor. | [optional] 
**Housekeeping** | Pointer to **bool** | Flag to indicate if this floor should be available on the Task Sheet Workflow configuration. | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the floor. | [optional] 
**HotelId** | Pointer to **string** | Specifies the hotel code for which the floor is specified. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewHotelFloorType

`func NewHotelFloorType() *HotelFloorType`

NewHotelFloorType instantiates a new HotelFloorType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelFloorTypeWithDefaults

`func NewHotelFloorTypeWithDefaults() *HotelFloorType`

NewHotelFloorTypeWithDefaults instantiates a new HotelFloorType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFloor

`func (o *HotelFloorType) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *HotelFloorType) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *HotelFloorType) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *HotelFloorType) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetDescription

`func (o *HotelFloorType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HotelFloorType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HotelFloorType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HotelFloorType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHousekeeping

`func (o *HotelFloorType) GetHousekeeping() bool`

GetHousekeeping returns the Housekeeping field if non-nil, zero value otherwise.

### GetHousekeepingOk

`func (o *HotelFloorType) GetHousekeepingOk() (*bool, bool)`

GetHousekeepingOk returns a tuple with the Housekeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeeping

`func (o *HotelFloorType) SetHousekeeping(v bool)`

SetHousekeeping sets Housekeeping field to given value.

### HasHousekeeping

`func (o *HotelFloorType) HasHousekeeping() bool`

HasHousekeeping returns a boolean if a field has been set.

### GetSequence

`func (o *HotelFloorType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *HotelFloorType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *HotelFloorType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *HotelFloorType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelFloorType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelFloorType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelFloorType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelFloorType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetManagedBy

`func (o *HotelFloorType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *HotelFloorType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *HotelFloorType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *HotelFloorType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


