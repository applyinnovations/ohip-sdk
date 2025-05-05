# ReverseCertificatePostingsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReverseCriteria** | Pointer to [**ReverseCertificatePostingsCriteriaType**](ReverseCertificatePostingsCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReverseCertificatePostingsCriteria

`func NewReverseCertificatePostingsCriteria() *ReverseCertificatePostingsCriteria`

NewReverseCertificatePostingsCriteria instantiates a new ReverseCertificatePostingsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReverseCertificatePostingsCriteriaWithDefaults

`func NewReverseCertificatePostingsCriteriaWithDefaults() *ReverseCertificatePostingsCriteria`

NewReverseCertificatePostingsCriteriaWithDefaults instantiates a new ReverseCertificatePostingsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReverseCriteria

`func (o *ReverseCertificatePostingsCriteria) GetReverseCriteria() ReverseCertificatePostingsCriteriaType`

GetReverseCriteria returns the ReverseCriteria field if non-nil, zero value otherwise.

### GetReverseCriteriaOk

`func (o *ReverseCertificatePostingsCriteria) GetReverseCriteriaOk() (*ReverseCertificatePostingsCriteriaType, bool)`

GetReverseCriteriaOk returns a tuple with the ReverseCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReverseCriteria

`func (o *ReverseCertificatePostingsCriteria) SetReverseCriteria(v ReverseCertificatePostingsCriteriaType)`

SetReverseCriteria sets ReverseCriteria field to given value.

### HasReverseCriteria

`func (o *ReverseCertificatePostingsCriteria) HasReverseCriteria() bool`

HasReverseCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *ReverseCertificatePostingsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReverseCertificatePostingsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReverseCertificatePostingsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReverseCertificatePostingsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReverseCertificatePostingsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReverseCertificatePostingsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReverseCertificatePostingsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReverseCertificatePostingsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


