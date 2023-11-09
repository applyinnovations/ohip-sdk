# BlockAvailabilityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockAvailability** | Pointer to [**[]BlockAvailabilityInfoType**](BlockAvailabilityInfoType.md) | Provides room allocation/availability information for a stay date. | [optional] 
**BlockAvailabilityMasterInfo** | Pointer to [**BlockAvailabilityMasterInfoType**](BlockAvailabilityMasterInfoType.md) |  | [optional] 
**BlockHeaderInfo** | Pointer to [**BlockHeaderInfoType**](BlockHeaderInfoType.md) |  | [optional] 

## Methods

### NewBlockAvailabilityType

`func NewBlockAvailabilityType() *BlockAvailabilityType`

NewBlockAvailabilityType instantiates a new BlockAvailabilityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAvailabilityTypeWithDefaults

`func NewBlockAvailabilityTypeWithDefaults() *BlockAvailabilityType`

NewBlockAvailabilityTypeWithDefaults instantiates a new BlockAvailabilityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockAvailability

`func (o *BlockAvailabilityType) GetBlockAvailability() []BlockAvailabilityInfoType`

GetBlockAvailability returns the BlockAvailability field if non-nil, zero value otherwise.

### GetBlockAvailabilityOk

`func (o *BlockAvailabilityType) GetBlockAvailabilityOk() (*[]BlockAvailabilityInfoType, bool)`

GetBlockAvailabilityOk returns a tuple with the BlockAvailability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAvailability

`func (o *BlockAvailabilityType) SetBlockAvailability(v []BlockAvailabilityInfoType)`

SetBlockAvailability sets BlockAvailability field to given value.

### HasBlockAvailability

`func (o *BlockAvailabilityType) HasBlockAvailability() bool`

HasBlockAvailability returns a boolean if a field has been set.

### GetBlockAvailabilityMasterInfo

`func (o *BlockAvailabilityType) GetBlockAvailabilityMasterInfo() BlockAvailabilityMasterInfoType`

GetBlockAvailabilityMasterInfo returns the BlockAvailabilityMasterInfo field if non-nil, zero value otherwise.

### GetBlockAvailabilityMasterInfoOk

`func (o *BlockAvailabilityType) GetBlockAvailabilityMasterInfoOk() (*BlockAvailabilityMasterInfoType, bool)`

GetBlockAvailabilityMasterInfoOk returns a tuple with the BlockAvailabilityMasterInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAvailabilityMasterInfo

`func (o *BlockAvailabilityType) SetBlockAvailabilityMasterInfo(v BlockAvailabilityMasterInfoType)`

SetBlockAvailabilityMasterInfo sets BlockAvailabilityMasterInfo field to given value.

### HasBlockAvailabilityMasterInfo

`func (o *BlockAvailabilityType) HasBlockAvailabilityMasterInfo() bool`

HasBlockAvailabilityMasterInfo returns a boolean if a field has been set.

### GetBlockHeaderInfo

`func (o *BlockAvailabilityType) GetBlockHeaderInfo() BlockHeaderInfoType`

GetBlockHeaderInfo returns the BlockHeaderInfo field if non-nil, zero value otherwise.

### GetBlockHeaderInfoOk

`func (o *BlockAvailabilityType) GetBlockHeaderInfoOk() (*BlockHeaderInfoType, bool)`

GetBlockHeaderInfoOk returns a tuple with the BlockHeaderInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockHeaderInfo

`func (o *BlockAvailabilityType) SetBlockHeaderInfo(v BlockHeaderInfoType)`

SetBlockHeaderInfo sets BlockHeaderInfo field to given value.

### HasBlockHeaderInfo

`func (o *BlockAvailabilityType) HasBlockHeaderInfo() bool`

HasBlockHeaderInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


