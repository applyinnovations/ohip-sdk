# FetchedPublishers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Publishers** | Pointer to [**[]ExternalSystemType**](ExternalSystemType.md) | Information of all the publishers for a given subscriber. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchedPublishers

`func NewFetchedPublishers() *FetchedPublishers`

NewFetchedPublishers instantiates a new FetchedPublishers object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchedPublishersWithDefaults

`func NewFetchedPublishersWithDefaults() *FetchedPublishers`

NewFetchedPublishersWithDefaults instantiates a new FetchedPublishers object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPublishers

`func (o *FetchedPublishers) GetPublishers() []ExternalSystemType`

GetPublishers returns the Publishers field if non-nil, zero value otherwise.

### GetPublishersOk

`func (o *FetchedPublishers) GetPublishersOk() (*[]ExternalSystemType, bool)`

GetPublishersOk returns a tuple with the Publishers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishers

`func (o *FetchedPublishers) SetPublishers(v []ExternalSystemType)`

SetPublishers sets Publishers field to given value.

### HasPublishers

`func (o *FetchedPublishers) HasPublishers() bool`

HasPublishers returns a boolean if a field has been set.

### GetLinks

`func (o *FetchedPublishers) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchedPublishers) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchedPublishers) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchedPublishers) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchedPublishers) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchedPublishers) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchedPublishers) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchedPublishers) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


