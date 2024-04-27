# TemplateTransactionGroups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TransactionGroups** | Pointer to [**[]TransactionGroupType**](TransactionGroupType.md) | Template transaction groups. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateTransactionGroups

`func NewTemplateTransactionGroups() *TemplateTransactionGroups`

NewTemplateTransactionGroups instantiates a new TemplateTransactionGroups object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateTransactionGroupsWithDefaults

`func NewTemplateTransactionGroupsWithDefaults() *TemplateTransactionGroups`

NewTemplateTransactionGroupsWithDefaults instantiates a new TemplateTransactionGroups object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TemplateTransactionGroups) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateTransactionGroups) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateTransactionGroups) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateTransactionGroups) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactionGroups

`func (o *TemplateTransactionGroups) GetTransactionGroups() []TransactionGroupType`

GetTransactionGroups returns the TransactionGroups field if non-nil, zero value otherwise.

### GetTransactionGroupsOk

`func (o *TemplateTransactionGroups) GetTransactionGroupsOk() (*[]TransactionGroupType, bool)`

GetTransactionGroupsOk returns a tuple with the TransactionGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionGroups

`func (o *TemplateTransactionGroups) SetTransactionGroups(v []TransactionGroupType)`

SetTransactionGroups sets TransactionGroups field to given value.

### HasTransactionGroups

`func (o *TemplateTransactionGroups) HasTransactionGroups() bool`

HasTransactionGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateTransactionGroups) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateTransactionGroups) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateTransactionGroups) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateTransactionGroups) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


