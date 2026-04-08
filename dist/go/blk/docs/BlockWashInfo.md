# BlockWashInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockWashInformation** | Pointer to [**BlockWashInfoType**](BlockWashInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockWashInfo

`func NewBlockWashInfo() *BlockWashInfo`

NewBlockWashInfo instantiates a new BlockWashInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockWashInfoWithDefaults

`func NewBlockWashInfoWithDefaults() *BlockWashInfo`

NewBlockWashInfoWithDefaults instantiates a new BlockWashInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockWashInformation

`func (o *BlockWashInfo) GetBlockWashInformation() BlockWashInfoType`

GetBlockWashInformation returns the BlockWashInformation field if non-nil, zero value otherwise.

### GetBlockWashInformationOk

`func (o *BlockWashInfo) GetBlockWashInformationOk() (*BlockWashInfoType, bool)`

GetBlockWashInformationOk returns a tuple with the BlockWashInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockWashInformation

`func (o *BlockWashInfo) SetBlockWashInformation(v BlockWashInfoType)`

SetBlockWashInformation sets BlockWashInformation field to given value.

### HasBlockWashInformation

`func (o *BlockWashInfo) HasBlockWashInformation() bool`

HasBlockWashInformation returns a boolean if a field has been set.

### GetLinks

`func (o *BlockWashInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockWashInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockWashInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockWashInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockWashInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockWashInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockWashInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockWashInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


