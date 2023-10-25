# PutDisplaySetsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplaySets** | Pointer to [**[]DisplaySetType**](DisplaySetType.md) | List of Display Sets. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutDisplaySetsRequest

`func NewPutDisplaySetsRequest() *PutDisplaySetsRequest`

NewPutDisplaySetsRequest instantiates a new PutDisplaySetsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutDisplaySetsRequestWithDefaults

`func NewPutDisplaySetsRequestWithDefaults() *PutDisplaySetsRequest`

NewPutDisplaySetsRequestWithDefaults instantiates a new PutDisplaySetsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDisplaySets

`func (o *PutDisplaySetsRequest) GetDisplaySets() []DisplaySetType`

GetDisplaySets returns the DisplaySets field if non-nil, zero value otherwise.

### GetDisplaySetsOk

`func (o *PutDisplaySetsRequest) GetDisplaySetsOk() (*[]DisplaySetType, bool)`

GetDisplaySetsOk returns a tuple with the DisplaySets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySets

`func (o *PutDisplaySetsRequest) SetDisplaySets(v []DisplaySetType)`

SetDisplaySets sets DisplaySets field to given value.

### HasDisplaySets

`func (o *PutDisplaySetsRequest) HasDisplaySets() bool`

HasDisplaySets returns a boolean if a field has been set.

### GetLinks

`func (o *PutDisplaySetsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutDisplaySetsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutDisplaySetsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutDisplaySetsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutDisplaySetsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutDisplaySetsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutDisplaySetsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutDisplaySetsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


