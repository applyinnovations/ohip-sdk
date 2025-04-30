# ItemPoolsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ItemPools** | Pointer to [**[]ItemPoolType**](ItemPoolType.md) | Item Pools details for hotels. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewItemPoolsInfo

`func NewItemPoolsInfo() *ItemPoolsInfo`

NewItemPoolsInfo instantiates a new ItemPoolsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewItemPoolsInfoWithDefaults

`func NewItemPoolsInfoWithDefaults() *ItemPoolsInfo`

NewItemPoolsInfoWithDefaults instantiates a new ItemPoolsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItemPools

`func (o *ItemPoolsInfo) GetItemPools() []ItemPoolType`

GetItemPools returns the ItemPools field if non-nil, zero value otherwise.

### GetItemPoolsOk

`func (o *ItemPoolsInfo) GetItemPoolsOk() (*[]ItemPoolType, bool)`

GetItemPoolsOk returns a tuple with the ItemPools field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemPools

`func (o *ItemPoolsInfo) SetItemPools(v []ItemPoolType)`

SetItemPools sets ItemPools field to given value.

### HasItemPools

`func (o *ItemPoolsInfo) HasItemPools() bool`

HasItemPools returns a boolean if a field has been set.

### GetLinks

`func (o *ItemPoolsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ItemPoolsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ItemPoolsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ItemPoolsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ItemPoolsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ItemPoolsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ItemPoolsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ItemPoolsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


