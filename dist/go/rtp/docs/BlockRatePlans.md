# BlockRatePlans

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockRatePlans** | Pointer to [**BlockRatePlansType**](BlockRatePlansType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockRatePlans

`func NewBlockRatePlans() *BlockRatePlans`

NewBlockRatePlans instantiates a new BlockRatePlans object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockRatePlansWithDefaults

`func NewBlockRatePlansWithDefaults() *BlockRatePlans`

NewBlockRatePlansWithDefaults instantiates a new BlockRatePlans object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockRatePlans

`func (o *BlockRatePlans) GetBlockRatePlans() BlockRatePlansType`

GetBlockRatePlans returns the BlockRatePlans field if non-nil, zero value otherwise.

### GetBlockRatePlansOk

`func (o *BlockRatePlans) GetBlockRatePlansOk() (*BlockRatePlansType, bool)`

GetBlockRatePlansOk returns a tuple with the BlockRatePlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockRatePlans

`func (o *BlockRatePlans) SetBlockRatePlans(v BlockRatePlansType)`

SetBlockRatePlans sets BlockRatePlans field to given value.

### HasBlockRatePlans

`func (o *BlockRatePlans) HasBlockRatePlans() bool`

HasBlockRatePlans returns a boolean if a field has been set.

### GetLinks

`func (o *BlockRatePlans) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockRatePlans) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockRatePlans) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockRatePlans) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockRatePlans) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockRatePlans) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockRatePlans) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockRatePlans) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


