# CopyBlockType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceBlockId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**NewBlock** | Pointer to [**NewBlockDetailsType**](NewBlockDetailsType.md) |  | [optional] 
**SubBlocks** | Pointer to [**[]CopySubBlockDetail**](CopySubBlockDetail.md) | Collection of sub block details that will be copied along with the source master block. | [optional] 
**CopyInstructions** | Pointer to [**CopyBlockTypeCopyInstructions**](CopyBlockTypeCopyInstructions.md) |  | [optional] 
**HotelId** | Pointer to **string** | The hotel code of the source block. | [optional] 

## Methods

### NewCopyBlockType

`func NewCopyBlockType() *CopyBlockType`

NewCopyBlockType instantiates a new CopyBlockType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyBlockTypeWithDefaults

`func NewCopyBlockTypeWithDefaults() *CopyBlockType`

NewCopyBlockTypeWithDefaults instantiates a new CopyBlockType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceBlockId

`func (o *CopyBlockType) GetSourceBlockId() UniqueIDType`

GetSourceBlockId returns the SourceBlockId field if non-nil, zero value otherwise.

### GetSourceBlockIdOk

`func (o *CopyBlockType) GetSourceBlockIdOk() (*UniqueIDType, bool)`

GetSourceBlockIdOk returns a tuple with the SourceBlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceBlockId

`func (o *CopyBlockType) SetSourceBlockId(v UniqueIDType)`

SetSourceBlockId sets SourceBlockId field to given value.

### HasSourceBlockId

`func (o *CopyBlockType) HasSourceBlockId() bool`

HasSourceBlockId returns a boolean if a field has been set.

### GetNewBlock

`func (o *CopyBlockType) GetNewBlock() NewBlockDetailsType`

GetNewBlock returns the NewBlock field if non-nil, zero value otherwise.

### GetNewBlockOk

`func (o *CopyBlockType) GetNewBlockOk() (*NewBlockDetailsType, bool)`

GetNewBlockOk returns a tuple with the NewBlock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewBlock

`func (o *CopyBlockType) SetNewBlock(v NewBlockDetailsType)`

SetNewBlock sets NewBlock field to given value.

### HasNewBlock

`func (o *CopyBlockType) HasNewBlock() bool`

HasNewBlock returns a boolean if a field has been set.

### GetSubBlocks

`func (o *CopyBlockType) GetSubBlocks() []CopySubBlockDetail`

GetSubBlocks returns the SubBlocks field if non-nil, zero value otherwise.

### GetSubBlocksOk

`func (o *CopyBlockType) GetSubBlocksOk() (*[]CopySubBlockDetail, bool)`

GetSubBlocksOk returns a tuple with the SubBlocks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubBlocks

`func (o *CopyBlockType) SetSubBlocks(v []CopySubBlockDetail)`

SetSubBlocks sets SubBlocks field to given value.

### HasSubBlocks

`func (o *CopyBlockType) HasSubBlocks() bool`

HasSubBlocks returns a boolean if a field has been set.

### GetCopyInstructions

`func (o *CopyBlockType) GetCopyInstructions() CopyBlockTypeCopyInstructions`

GetCopyInstructions returns the CopyInstructions field if non-nil, zero value otherwise.

### GetCopyInstructionsOk

`func (o *CopyBlockType) GetCopyInstructionsOk() (*CopyBlockTypeCopyInstructions, bool)`

GetCopyInstructionsOk returns a tuple with the CopyInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyInstructions

`func (o *CopyBlockType) SetCopyInstructions(v CopyBlockTypeCopyInstructions)`

SetCopyInstructions sets CopyInstructions field to given value.

### HasCopyInstructions

`func (o *CopyBlockType) HasCopyInstructions() bool`

HasCopyInstructions returns a boolean if a field has been set.

### GetHotelId

`func (o *CopyBlockType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyBlockType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyBlockType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyBlockType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


