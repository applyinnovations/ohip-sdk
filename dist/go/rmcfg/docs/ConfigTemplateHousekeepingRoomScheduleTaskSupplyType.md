# ConfigTemplateHousekeepingRoomScheduleTaskSupplyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Supply code value. | [optional] 
**Description** | Pointer to **string** | Description of the supply code. | [optional] 
**Quantity** | Pointer to **int32** | Number of the items to be provided for this task. | [optional] 
**Sequence** | Pointer to **int32** | Used to store the housekeeping room schedule sequence. | [optional] 
**RoomType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**HousekeepingRoomScheduleCode** | Pointer to **string** | Specifies the housekeeping room schedule code. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewConfigTemplateHousekeepingRoomScheduleTaskSupplyType

`func NewConfigTemplateHousekeepingRoomScheduleTaskSupplyType() *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType`

NewConfigTemplateHousekeepingRoomScheduleTaskSupplyType instantiates a new ConfigTemplateHousekeepingRoomScheduleTaskSupplyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigTemplateHousekeepingRoomScheduleTaskSupplyTypeWithDefaults

`func NewConfigTemplateHousekeepingRoomScheduleTaskSupplyTypeWithDefaults() *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType`

NewConfigTemplateHousekeepingRoomScheduleTaskSupplyTypeWithDefaults instantiates a new ConfigTemplateHousekeepingRoomScheduleTaskSupplyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetQuantity

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetSequence

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetRoomType

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) GetRoomType() CodeDescriptionType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) GetRoomTypeOk() (*CodeDescriptionType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) SetRoomType(v CodeDescriptionType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetHousekeepingRoomScheduleCode

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) GetHousekeepingRoomScheduleCode() string`

GetHousekeepingRoomScheduleCode returns the HousekeepingRoomScheduleCode field if non-nil, zero value otherwise.

### GetHousekeepingRoomScheduleCodeOk

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) GetHousekeepingRoomScheduleCodeOk() (*string, bool)`

GetHousekeepingRoomScheduleCodeOk returns a tuple with the HousekeepingRoomScheduleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingRoomScheduleCode

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) SetHousekeepingRoomScheduleCode(v string)`

SetHousekeepingRoomScheduleCode sets HousekeepingRoomScheduleCode field to given value.

### HasHousekeepingRoomScheduleCode

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) HasHousekeepingRoomScheduleCode() bool`

HasHousekeepingRoomScheduleCode returns a boolean if a field has been set.

### GetManagedBy

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *ConfigTemplateHousekeepingRoomScheduleTaskSupplyType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


