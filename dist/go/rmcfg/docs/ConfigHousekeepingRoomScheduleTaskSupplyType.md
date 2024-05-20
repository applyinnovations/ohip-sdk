# ConfigHousekeepingRoomScheduleTaskSupplyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Facility code value. | [optional] 
**Description** | Pointer to **string** | Facility Code. | [optional] 
**HotelId** | Pointer to **string** | Specifies the hotel code that the room type belongs to. | [optional] 
**HousekeepingRoomScheduleCode** | Pointer to **string** | Specifies the housekeeping room schedule code. | [optional] 
**Quantity** | Pointer to **int32** | Signifies the quantity. | [optional] 
**RoomType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Sequence** | Pointer to **int32** | Used to store the housekeeping room schedule sequence. | [optional] 

## Methods

### NewConfigHousekeepingRoomScheduleTaskSupplyType

`func NewConfigHousekeepingRoomScheduleTaskSupplyType() *ConfigHousekeepingRoomScheduleTaskSupplyType`

NewConfigHousekeepingRoomScheduleTaskSupplyType instantiates a new ConfigHousekeepingRoomScheduleTaskSupplyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigHousekeepingRoomScheduleTaskSupplyTypeWithDefaults

`func NewConfigHousekeepingRoomScheduleTaskSupplyTypeWithDefaults() *ConfigHousekeepingRoomScheduleTaskSupplyType`

NewConfigHousekeepingRoomScheduleTaskSupplyTypeWithDefaults instantiates a new ConfigHousekeepingRoomScheduleTaskSupplyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHousekeepingRoomScheduleCode

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetHousekeepingRoomScheduleCode() string`

GetHousekeepingRoomScheduleCode returns the HousekeepingRoomScheduleCode field if non-nil, zero value otherwise.

### GetHousekeepingRoomScheduleCodeOk

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetHousekeepingRoomScheduleCodeOk() (*string, bool)`

GetHousekeepingRoomScheduleCodeOk returns a tuple with the HousekeepingRoomScheduleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingRoomScheduleCode

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) SetHousekeepingRoomScheduleCode(v string)`

SetHousekeepingRoomScheduleCode sets HousekeepingRoomScheduleCode field to given value.

### HasHousekeepingRoomScheduleCode

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) HasHousekeepingRoomScheduleCode() bool`

HasHousekeepingRoomScheduleCode returns a boolean if a field has been set.

### GetQuantity

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetRoomType

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetRoomType() CodeDescriptionType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetRoomTypeOk() (*CodeDescriptionType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) SetRoomType(v CodeDescriptionType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetSequence

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ConfigHousekeepingRoomScheduleTaskSupplyType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


