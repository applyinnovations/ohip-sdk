# BlockAlternateDateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AlternateBeginDate** | Pointer to **string** | Alternate Begin date. | [optional] 
**BlockRates** | Pointer to [**BlockGridRatesType**](BlockGridRatesType.md) |  | [optional] 
**RoomCategory** | Pointer to **string** | The Room Category Label | [optional] 
**Priority** | Pointer to **int32** | The Priority given to these alternate dates. | [optional] 

## Methods

### NewBlockAlternateDateType

`func NewBlockAlternateDateType() *BlockAlternateDateType`

NewBlockAlternateDateType instantiates a new BlockAlternateDateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAlternateDateTypeWithDefaults

`func NewBlockAlternateDateTypeWithDefaults() *BlockAlternateDateType`

NewBlockAlternateDateTypeWithDefaults instantiates a new BlockAlternateDateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlternateBeginDate

`func (o *BlockAlternateDateType) GetAlternateBeginDate() string`

GetAlternateBeginDate returns the AlternateBeginDate field if non-nil, zero value otherwise.

### GetAlternateBeginDateOk

`func (o *BlockAlternateDateType) GetAlternateBeginDateOk() (*string, bool)`

GetAlternateBeginDateOk returns a tuple with the AlternateBeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateBeginDate

`func (o *BlockAlternateDateType) SetAlternateBeginDate(v string)`

SetAlternateBeginDate sets AlternateBeginDate field to given value.

### HasAlternateBeginDate

`func (o *BlockAlternateDateType) HasAlternateBeginDate() bool`

HasAlternateBeginDate returns a boolean if a field has been set.

### GetBlockRates

`func (o *BlockAlternateDateType) GetBlockRates() BlockGridRatesType`

GetBlockRates returns the BlockRates field if non-nil, zero value otherwise.

### GetBlockRatesOk

`func (o *BlockAlternateDateType) GetBlockRatesOk() (*BlockGridRatesType, bool)`

GetBlockRatesOk returns a tuple with the BlockRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRates

`func (o *BlockAlternateDateType) SetBlockRates(v BlockGridRatesType)`

SetBlockRates sets BlockRates field to given value.

### HasBlockRates

`func (o *BlockAlternateDateType) HasBlockRates() bool`

HasBlockRates returns a boolean if a field has been set.

### GetRoomCategory

`func (o *BlockAlternateDateType) GetRoomCategory() string`

GetRoomCategory returns the RoomCategory field if non-nil, zero value otherwise.

### GetRoomCategoryOk

`func (o *BlockAlternateDateType) GetRoomCategoryOk() (*string, bool)`

GetRoomCategoryOk returns a tuple with the RoomCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCategory

`func (o *BlockAlternateDateType) SetRoomCategory(v string)`

SetRoomCategory sets RoomCategory field to given value.

### HasRoomCategory

`func (o *BlockAlternateDateType) HasRoomCategory() bool`

HasRoomCategory returns a boolean if a field has been set.

### GetPriority

`func (o *BlockAlternateDateType) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *BlockAlternateDateType) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *BlockAlternateDateType) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *BlockAlternateDateType) HasPriority() bool`

HasPriority returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


