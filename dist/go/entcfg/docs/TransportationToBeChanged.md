# TransportationToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TransportationList** | Pointer to [**[]TransportationType**](TransportationType.md) | Collection of hotel level transportation. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTransportationToBeChanged

`func NewTransportationToBeChanged() *TransportationToBeChanged`

NewTransportationToBeChanged instantiates a new TransportationToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransportationToBeChangedWithDefaults

`func NewTransportationToBeChangedWithDefaults() *TransportationToBeChanged`

NewTransportationToBeChangedWithDefaults instantiates a new TransportationToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TransportationToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransportationToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransportationToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransportationToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransportationList

`func (o *TransportationToBeChanged) GetTransportationList() []TransportationType`

GetTransportationList returns the TransportationList field if non-nil, zero value otherwise.

### GetTransportationListOk

`func (o *TransportationToBeChanged) GetTransportationListOk() (*[]TransportationType, bool)`

GetTransportationListOk returns a tuple with the TransportationList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransportationList

`func (o *TransportationToBeChanged) SetTransportationList(v []TransportationType)`

SetTransportationList sets TransportationList field to given value.

### HasTransportationList

`func (o *TransportationToBeChanged) HasTransportationList() bool`

HasTransportationList returns a boolean if a field has been set.

### GetWarnings

`func (o *TransportationToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransportationToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransportationToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransportationToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


