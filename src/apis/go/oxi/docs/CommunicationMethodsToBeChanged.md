# CommunicationMethodsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommunicationMethods** | Pointer to [**[]CommunicationMethodEditType**](CommunicationMethodEditType.md) | Contains new values along with associated old values to edit. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCommunicationMethodsToBeChanged

`func NewCommunicationMethodsToBeChanged() *CommunicationMethodsToBeChanged`

NewCommunicationMethodsToBeChanged instantiates a new CommunicationMethodsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommunicationMethodsToBeChangedWithDefaults

`func NewCommunicationMethodsToBeChangedWithDefaults() *CommunicationMethodsToBeChanged`

NewCommunicationMethodsToBeChangedWithDefaults instantiates a new CommunicationMethodsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommunicationMethods

`func (o *CommunicationMethodsToBeChanged) GetCommunicationMethods() []CommunicationMethodEditType`

GetCommunicationMethods returns the CommunicationMethods field if non-nil, zero value otherwise.

### GetCommunicationMethodsOk

`func (o *CommunicationMethodsToBeChanged) GetCommunicationMethodsOk() (*[]CommunicationMethodEditType, bool)`

GetCommunicationMethodsOk returns a tuple with the CommunicationMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunicationMethods

`func (o *CommunicationMethodsToBeChanged) SetCommunicationMethods(v []CommunicationMethodEditType)`

SetCommunicationMethods sets CommunicationMethods field to given value.

### HasCommunicationMethods

`func (o *CommunicationMethodsToBeChanged) HasCommunicationMethods() bool`

HasCommunicationMethods returns a boolean if a field has been set.

### GetLinks

`func (o *CommunicationMethodsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CommunicationMethodsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CommunicationMethodsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CommunicationMethodsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CommunicationMethodsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CommunicationMethodsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CommunicationMethodsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CommunicationMethodsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


