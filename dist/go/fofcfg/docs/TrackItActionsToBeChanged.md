# TrackItActionsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TrackItActions** | Pointer to [**[]TrackItActionConfigType**](TrackItActionConfigType.md) | Track It Action Collection element. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTrackItActionsToBeChanged

`func NewTrackItActionsToBeChanged() *TrackItActionsToBeChanged`

NewTrackItActionsToBeChanged instantiates a new TrackItActionsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrackItActionsToBeChangedWithDefaults

`func NewTrackItActionsToBeChangedWithDefaults() *TrackItActionsToBeChanged`

NewTrackItActionsToBeChangedWithDefaults instantiates a new TrackItActionsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TrackItActionsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TrackItActionsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TrackItActionsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TrackItActionsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrackItActions

`func (o *TrackItActionsToBeChanged) GetTrackItActions() []TrackItActionConfigType`

GetTrackItActions returns the TrackItActions field if non-nil, zero value otherwise.

### GetTrackItActionsOk

`func (o *TrackItActionsToBeChanged) GetTrackItActionsOk() (*[]TrackItActionConfigType, bool)`

GetTrackItActionsOk returns a tuple with the TrackItActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItActions

`func (o *TrackItActionsToBeChanged) SetTrackItActions(v []TrackItActionConfigType)`

SetTrackItActions sets TrackItActions field to given value.

### HasTrackItActions

`func (o *TrackItActionsToBeChanged) HasTrackItActions() bool`

HasTrackItActions returns a boolean if a field has been set.

### GetWarnings

`func (o *TrackItActionsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TrackItActionsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TrackItActionsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TrackItActionsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


