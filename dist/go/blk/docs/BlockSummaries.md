# BlockSummaries

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockSummaries** | Pointer to [**BlockSummariesType**](BlockSummariesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Refer to Generic common types document. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockSummaries

`func NewBlockSummaries() *BlockSummaries`

NewBlockSummaries instantiates a new BlockSummaries object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockSummariesWithDefaults

`func NewBlockSummariesWithDefaults() *BlockSummaries`

NewBlockSummariesWithDefaults instantiates a new BlockSummaries object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockSummaries

`func (o *BlockSummaries) GetBlockSummaries() BlockSummariesType`

GetBlockSummaries returns the BlockSummaries field if non-nil, zero value otherwise.

### GetBlockSummariesOk

`func (o *BlockSummaries) GetBlockSummariesOk() (*BlockSummariesType, bool)`

GetBlockSummariesOk returns a tuple with the BlockSummaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockSummaries

`func (o *BlockSummaries) SetBlockSummaries(v BlockSummariesType)`

SetBlockSummaries sets BlockSummaries field to given value.

### HasBlockSummaries

`func (o *BlockSummaries) HasBlockSummaries() bool`

HasBlockSummaries returns a boolean if a field has been set.

### GetLinks

`func (o *BlockSummaries) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockSummaries) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockSummaries) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockSummaries) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *BlockSummaries) GetMasterInfoList() []MasterInfoType`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *BlockSummaries) GetMasterInfoListOk() (*[]MasterInfoType, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *BlockSummaries) SetMasterInfoList(v []MasterInfoType)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *BlockSummaries) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockSummaries) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockSummaries) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockSummaries) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockSummaries) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


