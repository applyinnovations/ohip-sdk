# ReverseCertificatePostingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReverseCriteria** | Pointer to [**ReverseCertificatePostingsCriteriaType**](ReverseCertificatePostingsCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReverseCertificatePostingsRequest

`func NewReverseCertificatePostingsRequest() *ReverseCertificatePostingsRequest`

NewReverseCertificatePostingsRequest instantiates a new ReverseCertificatePostingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReverseCertificatePostingsRequestWithDefaults

`func NewReverseCertificatePostingsRequestWithDefaults() *ReverseCertificatePostingsRequest`

NewReverseCertificatePostingsRequestWithDefaults instantiates a new ReverseCertificatePostingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReverseCriteria

`func (o *ReverseCertificatePostingsRequest) GetReverseCriteria() ReverseCertificatePostingsCriteriaType`

GetReverseCriteria returns the ReverseCriteria field if non-nil, zero value otherwise.

### GetReverseCriteriaOk

`func (o *ReverseCertificatePostingsRequest) GetReverseCriteriaOk() (*ReverseCertificatePostingsCriteriaType, bool)`

GetReverseCriteriaOk returns a tuple with the ReverseCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReverseCriteria

`func (o *ReverseCertificatePostingsRequest) SetReverseCriteria(v ReverseCertificatePostingsCriteriaType)`

SetReverseCriteria sets ReverseCriteria field to given value.

### HasReverseCriteria

`func (o *ReverseCertificatePostingsRequest) HasReverseCriteria() bool`

HasReverseCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *ReverseCertificatePostingsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReverseCertificatePostingsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReverseCertificatePostingsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReverseCertificatePostingsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReverseCertificatePostingsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReverseCertificatePostingsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReverseCertificatePostingsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReverseCertificatePostingsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


