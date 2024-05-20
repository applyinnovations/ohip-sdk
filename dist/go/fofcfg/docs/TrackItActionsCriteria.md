# TrackItActionsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TrackItActions** | Pointer to [**[]TrackItActionConfigType**](TrackItActionConfigType.md) | Track It Action Collection element. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTrackItActionsCriteria

`func NewTrackItActionsCriteria() *TrackItActionsCriteria`

NewTrackItActionsCriteria instantiates a new TrackItActionsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrackItActionsCriteriaWithDefaults

`func NewTrackItActionsCriteriaWithDefaults() *TrackItActionsCriteria`

NewTrackItActionsCriteriaWithDefaults instantiates a new TrackItActionsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TrackItActionsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TrackItActionsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TrackItActionsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TrackItActionsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTrackItActions

`func (o *TrackItActionsCriteria) GetTrackItActions() []TrackItActionConfigType`

GetTrackItActions returns the TrackItActions field if non-nil, zero value otherwise.

### GetTrackItActionsOk

`func (o *TrackItActionsCriteria) GetTrackItActionsOk() (*[]TrackItActionConfigType, bool)`

GetTrackItActionsOk returns a tuple with the TrackItActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItActions

`func (o *TrackItActionsCriteria) SetTrackItActions(v []TrackItActionConfigType)`

SetTrackItActions sets TrackItActions field to given value.

### HasTrackItActions

`func (o *TrackItActionsCriteria) HasTrackItActions() bool`

HasTrackItActions returns a boolean if a field has been set.

### GetWarnings

`func (o *TrackItActionsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TrackItActionsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TrackItActionsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TrackItActionsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


