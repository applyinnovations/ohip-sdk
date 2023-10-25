# ProfileCommissionAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**ProfileCommissionAccountCriteriaType**](ProfileCommissionAccountCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewProfileCommissionAccount

`func NewProfileCommissionAccount() *ProfileCommissionAccount`

NewProfileCommissionAccount instantiates a new ProfileCommissionAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileCommissionAccountWithDefaults

`func NewProfileCommissionAccountWithDefaults() *ProfileCommissionAccount`

NewProfileCommissionAccountWithDefaults instantiates a new ProfileCommissionAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *ProfileCommissionAccount) GetCriteria() ProfileCommissionAccountCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *ProfileCommissionAccount) GetCriteriaOk() (*ProfileCommissionAccountCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *ProfileCommissionAccount) SetCriteria(v ProfileCommissionAccountCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *ProfileCommissionAccount) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileCommissionAccount) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileCommissionAccount) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileCommissionAccount) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileCommissionAccount) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


