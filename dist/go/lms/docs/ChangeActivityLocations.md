# ChangeActivityLocations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityLocations** | Pointer to [**[]ActivityLocationType**](ActivityLocationType.md) | Collection of Activity Locations. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeActivityLocations

`func NewChangeActivityLocations() *ChangeActivityLocations`

NewChangeActivityLocations instantiates a new ChangeActivityLocations object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeActivityLocationsWithDefaults

`func NewChangeActivityLocationsWithDefaults() *ChangeActivityLocations`

NewChangeActivityLocationsWithDefaults instantiates a new ChangeActivityLocations object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityLocations

`func (o *ChangeActivityLocations) GetActivityLocations() []ActivityLocationType`

GetActivityLocations returns the ActivityLocations field if non-nil, zero value otherwise.

### GetActivityLocationsOk

`func (o *ChangeActivityLocations) GetActivityLocationsOk() (*[]ActivityLocationType, bool)`

GetActivityLocationsOk returns a tuple with the ActivityLocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityLocations

`func (o *ChangeActivityLocations) SetActivityLocations(v []ActivityLocationType)`

SetActivityLocations sets ActivityLocations field to given value.

### HasActivityLocations

`func (o *ChangeActivityLocations) HasActivityLocations() bool`

HasActivityLocations returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeActivityLocations) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeActivityLocations) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeActivityLocations) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeActivityLocations) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeActivityLocations) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeActivityLocations) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeActivityLocations) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeActivityLocations) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


