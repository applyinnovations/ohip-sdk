# CommunicationMethodsEntDetailsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommunicationMethodsEntDetails** | Pointer to [**[]CommunicationMethodsEntDetailType**](CommunicationMethodsEntDetailType.md) | List of Communication Methods Ent Details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCommunicationMethodsEntDetailsCriteria

`func NewCommunicationMethodsEntDetailsCriteria() *CommunicationMethodsEntDetailsCriteria`

NewCommunicationMethodsEntDetailsCriteria instantiates a new CommunicationMethodsEntDetailsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommunicationMethodsEntDetailsCriteriaWithDefaults

`func NewCommunicationMethodsEntDetailsCriteriaWithDefaults() *CommunicationMethodsEntDetailsCriteria`

NewCommunicationMethodsEntDetailsCriteriaWithDefaults instantiates a new CommunicationMethodsEntDetailsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommunicationMethodsEntDetails

`func (o *CommunicationMethodsEntDetailsCriteria) GetCommunicationMethodsEntDetails() []CommunicationMethodsEntDetailType`

GetCommunicationMethodsEntDetails returns the CommunicationMethodsEntDetails field if non-nil, zero value otherwise.

### GetCommunicationMethodsEntDetailsOk

`func (o *CommunicationMethodsEntDetailsCriteria) GetCommunicationMethodsEntDetailsOk() (*[]CommunicationMethodsEntDetailType, bool)`

GetCommunicationMethodsEntDetailsOk returns a tuple with the CommunicationMethodsEntDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationMethodsEntDetails

`func (o *CommunicationMethodsEntDetailsCriteria) SetCommunicationMethodsEntDetails(v []CommunicationMethodsEntDetailType)`

SetCommunicationMethodsEntDetails sets CommunicationMethodsEntDetails field to given value.

### HasCommunicationMethodsEntDetails

`func (o *CommunicationMethodsEntDetailsCriteria) HasCommunicationMethodsEntDetails() bool`

HasCommunicationMethodsEntDetails returns a boolean if a field has been set.

### GetLinks

`func (o *CommunicationMethodsEntDetailsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CommunicationMethodsEntDetailsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CommunicationMethodsEntDetailsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CommunicationMethodsEntDetailsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CommunicationMethodsEntDetailsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CommunicationMethodsEntDetailsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CommunicationMethodsEntDetailsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CommunicationMethodsEntDetailsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


