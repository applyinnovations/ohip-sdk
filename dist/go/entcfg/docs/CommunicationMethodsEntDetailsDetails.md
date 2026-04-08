# CommunicationMethodsEntDetailsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommunicationMethodsEntDetails** | Pointer to [**[]CommunicationMethodsEntDetailType**](CommunicationMethodsEntDetailType.md) | List of Communication Methods Ent Details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCommunicationMethodsEntDetailsDetails

`func NewCommunicationMethodsEntDetailsDetails() *CommunicationMethodsEntDetailsDetails`

NewCommunicationMethodsEntDetailsDetails instantiates a new CommunicationMethodsEntDetailsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommunicationMethodsEntDetailsDetailsWithDefaults

`func NewCommunicationMethodsEntDetailsDetailsWithDefaults() *CommunicationMethodsEntDetailsDetails`

NewCommunicationMethodsEntDetailsDetailsWithDefaults instantiates a new CommunicationMethodsEntDetailsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommunicationMethodsEntDetails

`func (o *CommunicationMethodsEntDetailsDetails) GetCommunicationMethodsEntDetails() []CommunicationMethodsEntDetailType`

GetCommunicationMethodsEntDetails returns the CommunicationMethodsEntDetails field if non-nil, zero value otherwise.

### GetCommunicationMethodsEntDetailsOk

`func (o *CommunicationMethodsEntDetailsDetails) GetCommunicationMethodsEntDetailsOk() (*[]CommunicationMethodsEntDetailType, bool)`

GetCommunicationMethodsEntDetailsOk returns a tuple with the CommunicationMethodsEntDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationMethodsEntDetails

`func (o *CommunicationMethodsEntDetailsDetails) SetCommunicationMethodsEntDetails(v []CommunicationMethodsEntDetailType)`

SetCommunicationMethodsEntDetails sets CommunicationMethodsEntDetails field to given value.

### HasCommunicationMethodsEntDetails

`func (o *CommunicationMethodsEntDetailsDetails) HasCommunicationMethodsEntDetails() bool`

HasCommunicationMethodsEntDetails returns a boolean if a field has been set.

### GetLinks

`func (o *CommunicationMethodsEntDetailsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CommunicationMethodsEntDetailsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CommunicationMethodsEntDetailsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CommunicationMethodsEntDetailsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CommunicationMethodsEntDetailsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CommunicationMethodsEntDetailsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CommunicationMethodsEntDetailsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CommunicationMethodsEntDetailsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


