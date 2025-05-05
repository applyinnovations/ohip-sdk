# CreateActivityLocations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityLocations** | Pointer to [**[]ActivityLocationType**](ActivityLocationType.md) | Collection of Activity Locations. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreateActivityLocations

`func NewCreateActivityLocations() *CreateActivityLocations`

NewCreateActivityLocations instantiates a new CreateActivityLocations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateActivityLocationsWithDefaults

`func NewCreateActivityLocationsWithDefaults() *CreateActivityLocations`

NewCreateActivityLocationsWithDefaults instantiates a new CreateActivityLocations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityLocations

`func (o *CreateActivityLocations) GetActivityLocations() []ActivityLocationType`

GetActivityLocations returns the ActivityLocations field if non-nil, zero value otherwise.

### GetActivityLocationsOk

`func (o *CreateActivityLocations) GetActivityLocationsOk() (*[]ActivityLocationType, bool)`

GetActivityLocationsOk returns a tuple with the ActivityLocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityLocations

`func (o *CreateActivityLocations) SetActivityLocations(v []ActivityLocationType)`

SetActivityLocations sets ActivityLocations field to given value.

### HasActivityLocations

`func (o *CreateActivityLocations) HasActivityLocations() bool`

HasActivityLocations returns a boolean if a field has been set.

### GetLinks

`func (o *CreateActivityLocations) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreateActivityLocations) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreateActivityLocations) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreateActivityLocations) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CreateActivityLocations) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreateActivityLocations) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreateActivityLocations) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreateActivityLocations) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


