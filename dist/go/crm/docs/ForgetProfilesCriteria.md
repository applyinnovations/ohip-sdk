# ForgetProfilesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ValidateForgetProfilesCriteria** | Pointer to [**ForgetProfilesCriteriaType**](ForgetProfilesCriteriaType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewForgetProfilesCriteria

`func NewForgetProfilesCriteria() *ForgetProfilesCriteria`

NewForgetProfilesCriteria instantiates a new ForgetProfilesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForgetProfilesCriteriaWithDefaults

`func NewForgetProfilesCriteriaWithDefaults() *ForgetProfilesCriteria`

NewForgetProfilesCriteriaWithDefaults instantiates a new ForgetProfilesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ForgetProfilesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ForgetProfilesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ForgetProfilesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ForgetProfilesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetValidateForgetProfilesCriteria

`func (o *ForgetProfilesCriteria) GetValidateForgetProfilesCriteria() ForgetProfilesCriteriaType`

GetValidateForgetProfilesCriteria returns the ValidateForgetProfilesCriteria field if non-nil, zero value otherwise.

### GetValidateForgetProfilesCriteriaOk

`func (o *ForgetProfilesCriteria) GetValidateForgetProfilesCriteriaOk() (*ForgetProfilesCriteriaType, bool)`

GetValidateForgetProfilesCriteriaOk returns a tuple with the ValidateForgetProfilesCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidateForgetProfilesCriteria

`func (o *ForgetProfilesCriteria) SetValidateForgetProfilesCriteria(v ForgetProfilesCriteriaType)`

SetValidateForgetProfilesCriteria sets ValidateForgetProfilesCriteria field to given value.

### HasValidateForgetProfilesCriteria

`func (o *ForgetProfilesCriteria) HasValidateForgetProfilesCriteria() bool`

HasValidateForgetProfilesCriteria returns a boolean if a field has been set.

### GetWarnings

`func (o *ForgetProfilesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ForgetProfilesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ForgetProfilesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ForgetProfilesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


