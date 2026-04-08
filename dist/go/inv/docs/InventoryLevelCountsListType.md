# InventoryLevelCountsListType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InventoryCounts** | Pointer to [**[]InventoryCountsType**](InventoryCountsType.md) | Collection of Inventory counts for the date ranges. | [optional] 
**Code** | Pointer to **string** | Inventory Group/Level code. | [optional] 
**Sequence** | Pointer to **int32** | Integer Group/Level order sequence number. | [optional] 

## Methods

### NewInventoryLevelCountsListType

`func NewInventoryLevelCountsListType() *InventoryLevelCountsListType`

NewInventoryLevelCountsListType instantiates a new InventoryLevelCountsListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryLevelCountsListTypeWithDefaults

`func NewInventoryLevelCountsListTypeWithDefaults() *InventoryLevelCountsListType`

NewInventoryLevelCountsListTypeWithDefaults instantiates a new InventoryLevelCountsListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInventoryCounts

`func (o *InventoryLevelCountsListType) GetInventoryCounts() []InventoryCountsType`

GetInventoryCounts returns the InventoryCounts field if non-nil, zero value otherwise.

### GetInventoryCountsOk

`func (o *InventoryLevelCountsListType) GetInventoryCountsOk() (*[]InventoryCountsType, bool)`

GetInventoryCountsOk returns a tuple with the InventoryCounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryCounts

`func (o *InventoryLevelCountsListType) SetInventoryCounts(v []InventoryCountsType)`

SetInventoryCounts sets InventoryCounts field to given value.

### HasInventoryCounts

`func (o *InventoryLevelCountsListType) HasInventoryCounts() bool`

HasInventoryCounts returns a boolean if a field has been set.

### GetCode

`func (o *InventoryLevelCountsListType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *InventoryLevelCountsListType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *InventoryLevelCountsListType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *InventoryLevelCountsListType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetSequence

`func (o *InventoryLevelCountsListType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *InventoryLevelCountsListType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *InventoryLevelCountsListType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *InventoryLevelCountsListType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


