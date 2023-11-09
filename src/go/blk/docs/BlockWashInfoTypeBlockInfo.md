# BlockWashInfoTypeBlockInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockCode** | Pointer to **string** | Block code of the block on which wash operation is performed. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**EndDate** | Pointer to **string** | End date of the block. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code to which the block belongs to. | [optional] 
**InventoryControl** | Pointer to [**BlockInventoryControlType**](BlockInventoryControlType.md) |  | [optional] 
**ShoulderEndDate** | Pointer to **string** | Shoulder end date of the block. | [optional] 
**ShoulderStartDate** | Pointer to **string** | Shoulder start date of the block. | [optional] 
**StartDate** | Pointer to **string** | Start date of the block. | [optional] 

## Methods

### NewBlockWashInfoTypeBlockInfo

`func NewBlockWashInfoTypeBlockInfo() *BlockWashInfoTypeBlockInfo`

NewBlockWashInfoTypeBlockInfo instantiates a new BlockWashInfoTypeBlockInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockWashInfoTypeBlockInfoWithDefaults

`func NewBlockWashInfoTypeBlockInfoWithDefaults() *BlockWashInfoTypeBlockInfo`

NewBlockWashInfoTypeBlockInfoWithDefaults instantiates a new BlockWashInfoTypeBlockInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockCode

`func (o *BlockWashInfoTypeBlockInfo) GetBlockCode() string`

GetBlockCode returns the BlockCode field if non-nil, zero value otherwise.

### GetBlockCodeOk

`func (o *BlockWashInfoTypeBlockInfo) GetBlockCodeOk() (*string, bool)`

GetBlockCodeOk returns a tuple with the BlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockCode

`func (o *BlockWashInfoTypeBlockInfo) SetBlockCode(v string)`

SetBlockCode sets BlockCode field to given value.

### HasBlockCode

`func (o *BlockWashInfoTypeBlockInfo) HasBlockCode() bool`

HasBlockCode returns a boolean if a field has been set.

### GetBlockId

`func (o *BlockWashInfoTypeBlockInfo) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *BlockWashInfoTypeBlockInfo) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *BlockWashInfoTypeBlockInfo) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *BlockWashInfoTypeBlockInfo) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetEndDate

`func (o *BlockWashInfoTypeBlockInfo) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *BlockWashInfoTypeBlockInfo) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *BlockWashInfoTypeBlockInfo) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *BlockWashInfoTypeBlockInfo) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetHotelId

`func (o *BlockWashInfoTypeBlockInfo) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BlockWashInfoTypeBlockInfo) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BlockWashInfoTypeBlockInfo) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BlockWashInfoTypeBlockInfo) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInventoryControl

`func (o *BlockWashInfoTypeBlockInfo) GetInventoryControl() BlockInventoryControlType`

GetInventoryControl returns the InventoryControl field if non-nil, zero value otherwise.

### GetInventoryControlOk

`func (o *BlockWashInfoTypeBlockInfo) GetInventoryControlOk() (*BlockInventoryControlType, bool)`

GetInventoryControlOk returns a tuple with the InventoryControl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryControl

`func (o *BlockWashInfoTypeBlockInfo) SetInventoryControl(v BlockInventoryControlType)`

SetInventoryControl sets InventoryControl field to given value.

### HasInventoryControl

`func (o *BlockWashInfoTypeBlockInfo) HasInventoryControl() bool`

HasInventoryControl returns a boolean if a field has been set.

### GetShoulderEndDate

`func (o *BlockWashInfoTypeBlockInfo) GetShoulderEndDate() string`

GetShoulderEndDate returns the ShoulderEndDate field if non-nil, zero value otherwise.

### GetShoulderEndDateOk

`func (o *BlockWashInfoTypeBlockInfo) GetShoulderEndDateOk() (*string, bool)`

GetShoulderEndDateOk returns a tuple with the ShoulderEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShoulderEndDate

`func (o *BlockWashInfoTypeBlockInfo) SetShoulderEndDate(v string)`

SetShoulderEndDate sets ShoulderEndDate field to given value.

### HasShoulderEndDate

`func (o *BlockWashInfoTypeBlockInfo) HasShoulderEndDate() bool`

HasShoulderEndDate returns a boolean if a field has been set.

### GetShoulderStartDate

`func (o *BlockWashInfoTypeBlockInfo) GetShoulderStartDate() string`

GetShoulderStartDate returns the ShoulderStartDate field if non-nil, zero value otherwise.

### GetShoulderStartDateOk

`func (o *BlockWashInfoTypeBlockInfo) GetShoulderStartDateOk() (*string, bool)`

GetShoulderStartDateOk returns a tuple with the ShoulderStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShoulderStartDate

`func (o *BlockWashInfoTypeBlockInfo) SetShoulderStartDate(v string)`

SetShoulderStartDate sets ShoulderStartDate field to given value.

### HasShoulderStartDate

`func (o *BlockWashInfoTypeBlockInfo) HasShoulderStartDate() bool`

HasShoulderStartDate returns a boolean if a field has been set.

### GetStartDate

`func (o *BlockWashInfoTypeBlockInfo) GetStartDate() string`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *BlockWashInfoTypeBlockInfo) GetStartDateOk() (*string, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *BlockWashInfoTypeBlockInfo) SetStartDate(v string)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *BlockWashInfoTypeBlockInfo) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


