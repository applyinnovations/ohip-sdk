# CopyTransactionGroupsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TransactionGroups** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the transaction groups to be copied. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyTransactionGroupsRequest

`func NewCopyTransactionGroupsRequest() *CopyTransactionGroupsRequest`

NewCopyTransactionGroupsRequest instantiates a new CopyTransactionGroupsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyTransactionGroupsRequestWithDefaults

`func NewCopyTransactionGroupsRequestWithDefaults() *CopyTransactionGroupsRequest`

NewCopyTransactionGroupsRequestWithDefaults instantiates a new CopyTransactionGroupsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CopyTransactionGroupsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyTransactionGroupsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyTransactionGroupsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyTransactionGroupsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactionGroups

`func (o *CopyTransactionGroupsRequest) GetTransactionGroups() []CopyConfigurationCodeType`

GetTransactionGroups returns the TransactionGroups field if non-nil, zero value otherwise.

### GetTransactionGroupsOk

`func (o *CopyTransactionGroupsRequest) GetTransactionGroupsOk() (*[]CopyConfigurationCodeType, bool)`

GetTransactionGroupsOk returns a tuple with the TransactionGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionGroups

`func (o *CopyTransactionGroupsRequest) SetTransactionGroups(v []CopyConfigurationCodeType)`

SetTransactionGroups sets TransactionGroups field to given value.

### HasTransactionGroups

`func (o *CopyTransactionGroupsRequest) HasTransactionGroups() bool`

HasTransactionGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyTransactionGroupsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyTransactionGroupsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyTransactionGroupsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyTransactionGroupsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


