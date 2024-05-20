# FiscalSupportingDocumentCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**FiscalSupportingDocumentCriteriaType**](FiscalSupportingDocumentCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFiscalSupportingDocumentCriteria

`func NewFiscalSupportingDocumentCriteria() *FiscalSupportingDocumentCriteria`

NewFiscalSupportingDocumentCriteria instantiates a new FiscalSupportingDocumentCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalSupportingDocumentCriteriaWithDefaults

`func NewFiscalSupportingDocumentCriteriaWithDefaults() *FiscalSupportingDocumentCriteria`

NewFiscalSupportingDocumentCriteriaWithDefaults instantiates a new FiscalSupportingDocumentCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *FiscalSupportingDocumentCriteria) GetCriteria() FiscalSupportingDocumentCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *FiscalSupportingDocumentCriteria) GetCriteriaOk() (*FiscalSupportingDocumentCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *FiscalSupportingDocumentCriteria) SetCriteria(v FiscalSupportingDocumentCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *FiscalSupportingDocumentCriteria) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *FiscalSupportingDocumentCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FiscalSupportingDocumentCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FiscalSupportingDocumentCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FiscalSupportingDocumentCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FiscalSupportingDocumentCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FiscalSupportingDocumentCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FiscalSupportingDocumentCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FiscalSupportingDocumentCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


