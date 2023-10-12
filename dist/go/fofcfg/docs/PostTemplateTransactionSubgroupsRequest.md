# PostTemplateTransactionSubgroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionSubgroups** | Pointer to [**[]TransactionSubgroupType**](TransactionSubgroupType.md) | Template transaction subgroup configurations. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTemplateTransactionSubgroupsRequest

`func NewPostTemplateTransactionSubgroupsRequest() *PostTemplateTransactionSubgroupsRequest`

NewPostTemplateTransactionSubgroupsRequest instantiates a new PostTemplateTransactionSubgroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTemplateTransactionSubgroupsRequestWithDefaults

`func NewPostTemplateTransactionSubgroupsRequestWithDefaults() *PostTemplateTransactionSubgroupsRequest`

NewPostTemplateTransactionSubgroupsRequestWithDefaults instantiates a new PostTemplateTransactionSubgroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionSubgroups

`func (o *PostTemplateTransactionSubgroupsRequest) GetTransactionSubgroups() []TransactionSubgroupType`

GetTransactionSubgroups returns the TransactionSubgroups field if non-nil, zero value otherwise.

### GetTransactionSubgroupsOk

`func (o *PostTemplateTransactionSubgroupsRequest) GetTransactionSubgroupsOk() (*[]TransactionSubgroupType, bool)`

GetTransactionSubgroupsOk returns a tuple with the TransactionSubgroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionSubgroups

`func (o *PostTemplateTransactionSubgroupsRequest) SetTransactionSubgroups(v []TransactionSubgroupType)`

SetTransactionSubgroups sets TransactionSubgroups field to given value.

### HasTransactionSubgroups

`func (o *PostTemplateTransactionSubgroupsRequest) HasTransactionSubgroups() bool`

HasTransactionSubgroups returns a boolean if a field has been set.

### GetLinks

`func (o *PostTemplateTransactionSubgroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTemplateTransactionSubgroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTemplateTransactionSubgroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTemplateTransactionSubgroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTemplateTransactionSubgroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTemplateTransactionSubgroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTemplateTransactionSubgroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTemplateTransactionSubgroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


